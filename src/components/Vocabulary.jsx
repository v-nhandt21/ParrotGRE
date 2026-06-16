import { useState, useEffect, useMemo, useCallback } from 'react';
import { vocabulary as allWords } from '../data/vocabulary.js';

const STORAGE_KEY = 'parrot_gre_learned';

function loadLearned() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []); }
  catch { return new Set(); }
}
function saveLearned(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

const POS_COLORS = {
  adj: 'bg-purple-900/60 text-purple-300 border border-purple-700/50',
  v:   'bg-blue-900/60 text-blue-300 border border-blue-700/50',
  n:   'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50',
  'adj/n': 'bg-yellow-900/60 text-yellow-300 border border-yellow-700/50',
  adv: 'bg-pink-900/60 text-pink-300 border border-pink-700/50',
};

// Pick N random items from array, excluding a specific item
function pickRandom(arr, n, exclude) {
  const pool = arr.filter(x => x.id !== exclude.id);
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// Quiz sub-component
function QuizMode({ words, learned, toggleLearn }) {
  const [qIdx, setQIdx] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null); // null | word.id chosen
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [quizWords, setQuizWords] = useState([]);

  // Build a fresh quiz (20 questions) from words
  const startQuiz = useCallback(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, Math.min(20, words.length));
    setQuizWords(shuffled);
    setQIdx(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }, [words]);

  useEffect(() => { startQuiz(); }, [startQuiz]);

  // Generate options for current question
  useEffect(() => {
    if (!quizWords.length || qIdx >= quizWords.length) return;
    const correct = quizWords[qIdx];
    const wrongs = pickRandom(allWords, 3, correct);
    const all = [correct, ...wrongs].sort(() => Math.random() - 0.5);
    setOptions(all);
    setSelected(null);
  }, [qIdx, quizWords]);

  if (!quizWords.length) return null;

  const current = quizWords[qIdx];
  const isAnswered = selected !== null;

  const handleSelect = (id) => {
    if (isAnswered) return;
    setSelected(id);
    const correct = id === current.id;
    setScore(s => s + (correct ? 1 : 0));
    // Auto-mark correct answers as learned
    if (correct && !learned.has(current.id)) toggleLearn(current.id);
  };

  const handleNext = () => {
    if (qIdx + 1 >= quizWords.length) {
      setFinished(true);
    } else {
      setQIdx(i => i + 1);
    }
  };

  if (finished) {
    const pct = Math.round((score / quizWords.length) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
    return (
      <div className="max-w-lg mx-auto text-center">
        <div className="card p-8">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>Kết quả Quiz</h2>
          <div className="text-5xl font-extrabold text-emerald-400 mb-2">{score}/{quizWords.length}</div>
          <p className="text-slate-400 mb-1">{pct}% chính xác</p>
          <p className="text-slate-500 text-sm mb-6">
            {pct >= 80 ? 'Xuất sắc! Bạn đã nắm rất vững!' : pct >= 60 ? 'Tốt lắm! Tiếp tục ôn luyện nhé.' : 'Hãy ôn lại các từ chưa thuộc nhé.'}
          </p>
          <button onClick={startQuiz} className="btn-primary w-full">🔄 Quiz lại (20 câu mới)</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-3 text-sm text-slate-400">
        <span>Câu {qIdx + 1} / {quizWords.length}</span>
        <span className="text-emerald-400 font-semibold">✓ {score} đúng</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-1.5 mb-6">
        <div className="h-1.5 rounded-full bg-blue-500 transition-all" style={{ width: `${((qIdx) / quizWords.length) * 100}%` }} />
      </div>

      {/* Question card */}
      <div className="card p-6 mb-4 text-center">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">Nghĩa của từ này là gì?</p>
        <div className="flex justify-center items-center gap-3 mb-2 flex-wrap">
          <h2 className="text-4xl font-bold" style={{ color: 'var(--text-heading)' }}>{current.word}</h2>
          <span className={`tag text-xs ${POS_COLORS[current.pos] || 'bg-slate-700 text-slate-300'}`}>{current.pos}</span>
        </div>
        <p className="phonetic text-lg">{current.phonetic}</p>

        {/* Show sentence hint if answered */}
        {isAnswered && (
          <div className="mt-4 tip-box text-left animate-fade-in">
            <p className="bilingual-en text-sm italic">"{current.example}"</p>
            <p className="bilingual-vi text-xs mt-1">"{current.exampleVi}"</p>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {options.map(opt => {
          let cls = 'card p-4 text-left cursor-pointer transition-all border-2 ';
          if (!isAnswered) {
            cls += 'border-transparent hover:border-blue-500 card-hover';
          } else if (opt.id === current.id) {
            cls += 'border-emerald-500 bg-emerald-900/30';
          } else if (opt.id === selected && opt.id !== current.id) {
            cls += 'border-red-500 bg-red-900/30';
          } else {
            cls += 'border-transparent opacity-50';
          }
          return (
            <button key={opt.id} onClick={() => handleSelect(opt.id)} className={cls}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium" style={{ color: isAnswered && opt.id === current.id ? '#6ee7b7' : isAnswered && opt.id === selected ? '#fca5a5' : 'var(--text-primary)' }}>
                  {opt.meaning}
                </span>
                {isAnswered && opt.id === current.id && <span className="text-emerald-400 text-lg">✓</span>}
                {isAnswered && opt.id === selected && opt.id !== current.id && <span className="text-red-400 text-lg">✗</span>}
              </div>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">{opt.word}</p>
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-center animate-fade-in">
          <button onClick={handleNext} className="btn-primary px-8">
            {qIdx + 1 >= quizWords.length ? '🏁 Xem kết quả' : 'Câu tiếp theo →'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Vocabulary() {
  const [learned, setLearned] = useState(loadLearned);
  const [filter, setFilter] = useState('all'); // all | learned | unlearned
  const [search, setSearch] = useState('');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mode, setMode] = useState('grid'); // grid | flashcard | quiz
  const [showAnswer, setShowAnswer] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => { saveLearned(learned); }, [learned]);

  const filtered = useMemo(() => {
    let list = allWords;
    if (filter === 'learned')   list = list.filter(w => learned.has(w.id));
    if (filter === 'unlearned') list = list.filter(w => !learned.has(w.id));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(w =>
        w.word.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        w.synonyms.some(s => s.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filter, search, learned]);

  const toggleLearn = (id) => {
    setLearned(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const randomize = () => {
    const idx = Math.floor(Math.random() * filtered.length);
    setCurrentIdx(idx);
    setShowAnswer(false);
  };

  const learnedCount = allWords.filter(w => learned.has(w.id)).length;
  const progress = Math.round((learnedCount / allWords.length) * 100);

  // Flashcard current word
  const flashWord = filtered[currentIdx] || filtered[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="section-title">📚 GRE Vocabulary</h1>
        <p className="section-subtitle">500 từ vựng GRE Verbal thiết yếu • Nhấn vào thẻ để xem chi tiết</p>

        {/* Progress */}
        <div className="mt-4 card p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Tiến độ học tập</span>
            <span className="text-sm font-bold text-emerald-400">{learnedCount} / {allWords.length} từ ({progress}%)</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* Mode toggle */}
        <div className="control-group flex">
          {[['grid','📋 Danh sách'],['flashcard','🃏 Flashcard'],['quiz','🧠 Quiz']].map(([m, label]) => (
            <button key={m} onClick={() => { setMode(m); setShowAnswer(false); setCurrentIdx(0); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === m ? 'tab-active' : 'tab-inactive'}`}>
              {label}
            </button>
          ))}
        </div>

        {/* Filter (hidden in quiz mode) */}
        {mode !== 'quiz' && (
          <div className="control-group flex">
            {[['all','Tất cả'],['unlearned','Chưa thuộc'],['learned','Đã thuộc']].map(([val, label]) => (
              <button key={val} onClick={() => { setFilter(val); setCurrentIdx(0); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${filter === val ? 'tab-active' : 'tab-inactive'}`}>
                {label} {val === 'learned' ? `(${learnedCount})` : val === 'unlearned' ? `(${allWords.length - learnedCount})` : `(${allWords.length})`}
              </button>
            ))}
          </div>
        )}

        {/* Search (hidden in quiz mode) */}
        {mode !== 'quiz' && (
          <div className="flex-1 min-w-48">
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="🔍 Tìm từ, nghĩa, đồng nghĩa..."
              className="search-input" />
          </div>
        )}

        {mode === 'flashcard' && (
          <button onClick={randomize} className="btn-primary text-sm">🎲 Ngẫu nhiên</button>
        )}
      </div>

      {/* Count (hidden in quiz mode) */}
      {mode !== 'quiz' && (
        <p className="text-slate-500 text-sm mb-4">Hiển thị {filtered.length} từ</p>
      )}

      {/* ===== QUIZ MODE ===== */}
      {mode === 'quiz' && (
        <QuizMode words={filtered.length >= 4 ? filtered : allWords} learned={learned} toggleLearn={toggleLearn} />
      )}

      {/* ===== GRID MODE ===== */}
      {mode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(word => {
            const isLearned = learned.has(word.id);
            const isExpanded = expandedId === word.id;
            return (
              <div key={word.id}
                className={`card p-4 card-hover cursor-pointer transition-all ${isLearned ? 'vocab-card-learned' : ''}`}
                onClick={() => setExpandedId(isExpanded ? null : word.id)}>

                {/* Top row */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xl font-bold text-white">{word.word}</span>
                      <span className={`tag text-xs ${POS_COLORS[word.pos] || 'bg-slate-700 text-slate-300'}`}>{word.pos}</span>
                      {isLearned && <span className="tag learned-badge text-white text-xs">✓ Đã thuộc</span>}
                    </div>
                    <span className="phonetic">{word.phonetic}</span>
                  </div>
                  <button onClick={e => { e.stopPropagation(); toggleLearn(word.id); }}
                    className={`ml-2 p-2 rounded-lg transition-all text-lg ${isLearned ? 'bg-emerald-800/50 hover:bg-red-800/50 text-emerald-400 hover:text-red-400' : 'bg-slate-700 hover:bg-emerald-800/50 text-slate-400 hover:text-emerald-400'}`}
                    title={isLearned ? 'Bỏ đánh dấu' : 'Đánh dấu đã thuộc'}>
                    {isLearned ? '✓' : '○'}
                  </button>
                </div>

                {/* Meaning */}
                <p className="text-slate-200 text-sm font-medium mb-1">{word.meaning}</p>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-3 space-y-3 border-t border-slate-700 pt-3 animate-fade-in">
                    {/* Example */}
                    <div className="tip-box">
                      <p className="text-xs text-blue-400 font-semibold mb-1">💬 Ví dụ câu</p>
                      <p className="bilingual-en text-sm italic">"{word.example}"</p>
                      <p className="bilingual-vi text-xs mt-1">"{word.exampleVi}"</p>
                    </div>
                    {/* Synonyms */}
                    {word.synonyms?.length > 0 && (
                      <div>
                        <p className="text-xs text-emerald-400 font-semibold mb-1">✅ Đồng nghĩa</p>
                        <div className="flex flex-wrap gap-1">
                          {word.synonyms.map(s => (
                            <span key={s} className="tag bg-emerald-900/50 text-emerald-300 border border-emerald-700/40 text-xs">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Antonyms */}
                    {word.antonyms?.length > 0 && (
                      <div>
                        <p className="text-xs text-red-400 font-semibold mb-1">❌ Trái nghĩa</p>
                        <div className="flex flex-wrap gap-1">
                          {word.antonyms.map(a => (
                            <span key={a} className="tag bg-red-900/50 text-red-300 border border-red-700/40 text-xs">{a}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {!isExpanded && (
                  <p className="text-slate-500 text-xs mt-2">↓ Nhấn để xem ví dụ & đồng/trái nghĩa</p>
                )}
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-20 text-slate-500">
              <p className="text-4xl mb-3">🔍</p>
              <p>Không tìm thấy từ nào phù hợp</p>
            </div>
          )}
        </div>
      )}

      {/* ===== FLASHCARD MODE ===== */}
      {mode === 'flashcard' && filtered.length > 0 && (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-4 text-slate-400 text-sm">
            {currentIdx + 1} / {filtered.length}
          </div>
          {/* Card */}
          <div className={`card p-8 text-center min-h-64 flex flex-col justify-center cursor-pointer card-hover ${learned.has(flashWord.id) ? 'vocab-card-learned' : ''}`}
            onClick={() => setShowAnswer(!showAnswer)}>
            {!showAnswer ? (
              <div>
                <div className="flex justify-center items-center gap-3 mb-3 flex-wrap">
                  <h2 className="text-4xl font-bold text-white">{flashWord.word}</h2>
                  <span className={`tag ${POS_COLORS[flashWord.pos] || 'bg-slate-700 text-slate-300'}`}>{flashWord.pos}</span>
                </div>
                <p className="phonetic text-xl mb-4">{flashWord.phonetic}</p>
                <p className="text-slate-500 mt-6">👆 Nhấn để xem nghĩa</p>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">{flashWord.word}</h2>
                  <p className="phonetic text-lg">{flashWord.phonetic}</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <p className="text-white font-semibold text-lg">{flashWord.meaning}</p>
                </div>
                <div className="tip-box text-left">
                  <p className="bilingual-en text-sm italic">"{flashWord.example}"</p>
                  <p className="bilingual-vi text-xs mt-1">"{flashWord.exampleVi}"</p>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  {flashWord.synonyms.slice(0, 3).map(s => (
                    <span key={s} className="tag bg-emerald-900/50 text-emerald-300 border border-emerald-700/40 text-xs">≈ {s}</span>
                  ))}
                  {flashWord.antonyms.slice(0, 2).map(a => (
                    <span key={a} className="tag bg-red-900/50 text-red-300 border border-red-700/40 text-xs">≠ {a}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={() => { setCurrentIdx(i => Math.max(0, i-1)); setShowAnswer(false); }}
              disabled={currentIdx === 0}
              className="btn-secondary disabled:opacity-30">← Trước</button>

            <button onClick={() => toggleLearn(flashWord.id)}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${learned.has(flashWord.id) ? 'bg-emerald-700 hover:bg-red-800 text-white' : 'bg-slate-700 hover:bg-emerald-700 text-slate-200 hover:text-white'}`}>
              {learned.has(flashWord.id) ? '✓ Đã thuộc' : '○ Đánh dấu thuộc'}
            </button>

            <button onClick={() => { setCurrentIdx(i => Math.min(filtered.length-1, i+1)); setShowAnswer(false); }}
              disabled={currentIdx === filtered.length - 1}
              className="btn-secondary disabled:opacity-30">Tiếp →</button>
          </div>
          <div className="flex justify-center mt-3">
            <button onClick={randomize} className="btn-primary text-sm">🎲 Từ ngẫu nhiên</button>
          </div>
        </div>
      )}
    </div>
  );
}
