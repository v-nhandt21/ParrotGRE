import { useState, useRef, useEffect } from 'react';
import { writingTask1Types } from '../data/writingTask1_band7';
import { writingTask2Topics } from '../data/writingTask2_band7';
import { speakingPart1, speakingPart2, speakingPart3 } from '../data/speakingData_band7';
import writingTask1Band5 from '../data/writingTask1_band5';
import writingTask2Band5 from '../data/writingTask2_band5';
import { speakingPart1Band5, speakingPart2Band5, speakingPart3Band5 } from '../data/speakingData_band5';
import writingTask1Band6 from '../data/writingTask1_band6';
import writingTask2Band6 from '../data/writingTask2_band6';
import { speakingPart1Band6, speakingPart2Band6, speakingPart3Band6 } from '../data/speakingData_band6';

// ─── Badge config ─────────────────────────────────────────────
const BADGE = {
  writing1: { label: 'Writing T1', cls: 'bg-pink-900/50 text-pink-300 border border-pink-700/40' },
  writing2: { label: 'Writing T2', cls: 'bg-purple-900/50 text-purple-300 border border-purple-700/40' },
  speak1:   { label: 'Speaking P1', cls: 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/40' },
  speak2:   { label: 'Speaking P2', cls: 'bg-orange-900/60 text-orange-300 border border-orange-700/40' },
  speak3:   { label: 'Speaking P3', cls: 'bg-red-900/50 text-red-300 border border-red-700/40' },
};

const SECTION_BORDER = [
  'border-blue-500', 'border-purple-500', 'border-pink-500',
  'border-emerald-500', 'border-orange-500', 'border-teal-500',
];

// ─── Master lists (Band 7 = original, Band 5 = simplified) ───
const DICTATION_ITEMS_B7 = [
  ...writingTask1Types.map(t => ({
    id: `w1_${t.id}`, type: 'writing1', title: `${t.icon} ${t.type}`, titleVi: t.typeVi,
    sections: [{ title: 'Sample Answer', en: t.sampleAnswer.en, vi: t.sampleAnswer.vi }],
  })),
  ...writingTask2Topics.map(t => ({
    id: `w2_${t.id}`, type: 'writing2', title: t.title, titleVi: t.titleVi,
    sections: [
      { title: 'Introduction', en: t.essay.introduction.en, vi: t.essay.introduction.vi },
      { title: 'Body 1',       en: t.essay.body1.en,       vi: t.essay.body1.vi },
      { title: 'Body 2',       en: t.essay.body2.en,       vi: t.essay.body2.vi },
      { title: 'Conclusion',   en: t.essay.conclusion.en,  vi: t.essay.conclusion.vi },
    ],
  })),
  ...speakingPart1.map(t => ({
    id: `sp1_${t.id}`, type: 'speak1', title: t.topic, titleVi: t.topicVi,
    sections: t.questions.map((q, i) => ({ title: `Q${i + 1}: ${q.q}`, en: q.answer, vi: q.answerVi })),
  })),
  ...speakingPart2.map(t => ({
    id: `sp2_${t.id}`, type: 'speak2', title: t.cueCard, titleVi: t.cueCardVi,
    sections: [{ title: 'Model Answer', en: t.sampleAnswer.en, vi: t.sampleAnswer.vi }],
  })),
  ...speakingPart3.map(t => ({
    id: `sp3_${t.id}`, type: 'speak3', title: t.topic, titleVi: t.topicVi,
    sections: t.questions.map((q, i) => ({ title: `Q${i + 1}: ${q.q}`, en: q.answer, vi: q.answerVi })),
  })),
];

const DICTATION_ITEMS_B5 = [
  ...writingTask1Types.map(t => {
    const b5 = writingTask1Band5.find(b => b.id === t.id);
    const ans = b5?.sampleAnswer || t.sampleAnswer;
    return {
      id: `w1_${t.id}`, type: 'writing1', title: `${t.icon} ${t.type}`, titleVi: t.typeVi,
      sections: [{ title: 'Sample Answer', en: ans.en, vi: ans.vi }],
    };
  }),
  ...writingTask2Topics.map(t => {
    const b5 = writingTask2Band5.find(b => b.id === t.id);
    const essay = b5?.essay || t.essay;
    return {
      id: `w2_${t.id}`, type: 'writing2', title: t.title, titleVi: t.titleVi,
      sections: [
        { title: 'Introduction', en: essay.introduction.en, vi: essay.introduction.vi },
        { title: 'Body 1',       en: essay.body1.en,        vi: essay.body1.vi },
        { title: 'Body 2',       en: essay.body2.en,        vi: essay.body2.vi },
        { title: 'Conclusion',   en: essay.conclusion.en,   vi: essay.conclusion.vi },
      ],
    };
  }),
  ...speakingPart1.map(t => {
    const b5 = speakingPart1Band5.find(b => b.id === t.id);
    return {
      id: `sp1_${t.id}`, type: 'speak1', title: t.topic, titleVi: t.topicVi,
      sections: t.questions.map((q, i) => {
        const b5q = b5?.questions[i];
        return { title: `Q${i + 1}: ${q.q}`, en: b5q?.answer || q.answer, vi: b5q?.answerVi || q.answerVi };
      }),
    };
  }),
  ...speakingPart2.map(t => {
    const b5 = speakingPart2Band5.find(b => b.id === t.id);
    const ans = b5?.sampleAnswer || t.sampleAnswer;
    return {
      id: `sp2_${t.id}`, type: 'speak2', title: t.cueCard, titleVi: t.cueCardVi,
      sections: [{ title: 'Model Answer', en: ans.en, vi: ans.vi }],
    };
  }),
  ...speakingPart3.map(t => {
    const b5 = speakingPart3Band5.find(b => b.id === t.id);
    return {
      id: `sp3_${t.id}`, type: 'speak3', title: t.topic, titleVi: t.topicVi,
      sections: t.questions.map((q, i) => {
        const b5q = b5?.questions[i];
        return { title: `Q${i + 1}: ${q.q}`, en: b5q?.answer || q.answer, vi: b5q?.answerVi || q.answerVi };
      }),
    };
  }),
];

const DICTATION_ITEMS_B6 = [
  ...writingTask1Types.map(t => {
    const b6 = writingTask1Band6.find(b => b.id === t.id);
    const ans = b6?.sampleAnswer || t.sampleAnswer;
    return {
      id: `w1_${t.id}`, type: 'writing1', title: `${t.icon} ${t.type}`, titleVi: t.typeVi,
      sections: [{ title: 'Sample Answer', en: ans.en, vi: ans.vi }],
    };
  }),
  ...writingTask2Topics.map(t => {
    const b6 = writingTask2Band6.find(b => b.id === t.id);
    const essay = b6?.essay || t.essay;
    return {
      id: `w2_${t.id}`, type: 'writing2', title: t.title, titleVi: t.titleVi,
      sections: [
        { title: 'Introduction', en: essay.introduction.en, vi: essay.introduction.vi },
        { title: 'Body 1',       en: essay.body1.en,        vi: essay.body1.vi },
        { title: 'Body 2',       en: essay.body2.en,        vi: essay.body2.vi },
        { title: 'Conclusion',   en: essay.conclusion.en,   vi: essay.conclusion.vi },
      ],
    };
  }),
  ...speakingPart1.map(t => {
    const b6 = speakingPart1Band6.find(b => b.id === t.id);
    return {
      id: `sp1_${t.id}`, type: 'speak1', title: t.topic, titleVi: t.topicVi,
      sections: t.questions.map((q, i) => {
        const b6q = b6?.questions[i];
        return { title: `Q${i + 1}: ${q.q}`, en: b6q?.answer || q.answer, vi: b6q?.answerVi || q.answerVi };
      }),
    };
  }),
  ...speakingPart2.map(t => {
    const b6 = speakingPart2Band6.find(b => b.id === t.id);
    const ans = b6?.sampleAnswer || t.sampleAnswer;
    return {
      id: `sp2_${t.id}`, type: 'speak2', title: t.cueCard, titleVi: t.cueCardVi,
      sections: [{ title: 'Model Answer', en: ans.en, vi: ans.vi }],
    };
  }),
  ...speakingPart3.map(t => {
    const b6 = speakingPart3Band6.find(b => b.id === t.id);
    return {
      id: `sp3_${t.id}`, type: 'speak3', title: t.topic, titleVi: t.topicVi,
      sections: t.questions.map((q, i) => {
        const b6q = b6?.questions[i];
        return { title: `Q${i + 1}: ${q.q}`, en: b6q?.answer || q.answer, vi: b6q?.answerVi || q.answerVi };
      }),
    };
  }),
];

const FILTERS = [
  { id: 'all',      label: 'Tất cả' },
  { id: 'writing1', label: 'Writing T1' },
  { id: 'writing2', label: 'Writing T2' },
  { id: 'speak1',   label: 'Speaking P1' },
  { id: 'speak2',   label: 'Speaking P2' },
  { id: 'speak3',   label: 'Speaking P3' },
];

// ─── Helpers ─────────────────────────────────────────────────
function getStatus(count) {
  if (!count) return { label: 'Chưa chép', cls: 'bg-slate-700/50 text-slate-400' };
  if (count < 3) return { label: 'Đang học',   cls: 'bg-yellow-900/50 text-yellow-300' };
  return             { label: 'Hoàn thành', cls: 'bg-green-900/50 text-green-300' };
}

function accuracyColor(pct) {
  if (pct >= 80) return '#10b981';
  if (pct >= 50) return '#f59e0b';
  return '#ef4444';
}

function accuracyLabel(pct) {
  if (pct >= 95) return 'Xuất sắc! 🏆';
  if (pct >= 80) return 'Rất tốt! 👍';
  if (pct >= 50) return 'Tiếp tục cố! 💪';
  return 'Cần luyện thêm 📚';
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem('parrot_dictation') || '{}'); }
  catch { return {}; }
}

// ─── CharDisplay — the overlay typing canvas ──────────────────
function CharDisplay({ text, typed, focused, cursorRef, onContainerClick }) {
  const chars = Array.from(text);

  return (
    <div
      className="font-sans text-sm leading-8 whitespace-pre-wrap break-words select-none cursor-text p-4 w-full"
      onClick={onContainerClick}
    >
      {chars.map((char, i) => {
        const isTyped  = i < typed.length;
        const isCursor = i === typed.length;
        const correct  = isTyped && typed[i] === char;

        // ── Cursor position ──
        if (isCursor) {
          return (
            <span key={i} ref={cursorRef} className="relative inline">
              <span
                className={`absolute -left-px top-1 w-0.5 h-6 bg-teal-400 ${focused ? 'cursor-blink' : 'opacity-0'}`}
              />
              <span style={{ color: 'var(--text-primary)', background: 'rgba(20,184,166,0.12)', borderRadius: '2px' }}>
                {char}
              </span>
            </span>
          );
        }

        // ── Not yet typed ──
        if (!isTyped) {
          return (
            <span key={i} style={{ color: 'var(--text-muted)' }}>
              {char}
            </span>
          );
        }

        // ── Already typed ──
        if (char === ' ') {
          return (
            <span key={i} className={correct ? '' : 'bg-red-500/30 rounded-sm'}>
              {'\u00A0' /* nbsp to preserve width */}
            </span>
          );
        }
        if (char === '\n') {
          return (
            <span key={i} className={correct ? 'text-green-600' : 'text-red-500'}>
              ↵{'\n'}
            </span>
          );
        }
        return (
          <span key={i} className={correct ? 'text-green-400' : 'text-red-400'}>
            {char}
          </span>
        );
      })}

      {/* After all chars typed — show a final cursor */}
      {typed.length === chars.length && chars.length > 0 && (
        <span className="relative inline-block w-1">
          <span className={`absolute -left-px top-1 w-0.5 h-6 bg-teal-400 ${focused ? 'cursor-blink' : 'opacity-0'}`} />
        </span>
      )}
    </div>
  );
}

// ─── DictSession — one item, section by section ───────────────
function DictSession({ item, onBack, onComplete }) {
  const [lang,          setLang]          = useState('both');
  const [sectionIdx,    setSectionIdx]    = useState(0);
  const [typed,         setTyped]         = useState('');
  const [focused,       setFocused]       = useState(false);
  const [sectionScores, setSectionScores] = useState([]); // { accuracy, correct, total }[]
  const [showSummary,   setShowSummary]   = useState(false);

  const textareaRef = useRef(null);
  const cursorRef   = useRef(null);
  const badge       = BADGE[item.type];

  const currentSection = item.sections[sectionIdx];
  // 'both' mode types English (VI is reference only)
  const typingLang  = lang === 'vi' ? 'vi' : 'en';
  const sectionText = typingLang === 'vi' ? (currentSection.vi || currentSection.en) : currentSection.en;
  const totalChars  = sectionText.length;

  // Char-level stats for current section
  const correctChars = Array.from(sectionText).filter((c, i) => i < typed.length && typed[i] === c).length;
  const typedLen     = typed.length;
  const liveAccuracy = typedLen > 0 ? Math.round((correctChars / typedLen) * 100) : 100;
  const sectionDone  = typedLen >= totalChars;
  const finalAcc     = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

  // Auto-scroll cursor into view as user types
  useEffect(() => {
    cursorRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [typedLen]);

  // Focus textarea when section changes
  useEffect(() => {
    setTimeout(() => textareaRef.current?.focus(), 80);
  }, [sectionIdx]);

  function handleLangChange(newLang) {
    const newTypingLang = newLang === 'vi' ? 'vi' : 'en';
    if (newTypingLang !== typingLang && typed) setTyped(''); // reset if target language changes
    setLang(newLang);
    setTimeout(() => textareaRef.current?.focus(), 80);
  }

  function handleInput(e) {
    const val = e.target.value;
    // Don't allow typing beyond text length
    if (val.length <= totalChars) setTyped(val);
  }

  function handleNextSection() {
    const score = { accuracy: finalAcc, correct: correctChars, total: totalChars };
    const newScores = [...sectionScores, score];
    setSectionScores(newScores);

    if (sectionIdx < item.sections.length - 1) {
      setSectionIdx(idx => idx + 1);
      setTyped('');
    } else {
      setShowSummary(true);
    }
  }

  function handleRetry() {
    setTyped('');
    setTimeout(() => textareaRef.current?.focus(), 80);
  }

  function handleSave() {
    const all         = [...sectionScores]; // already pushed before summary
    const totalC      = all.reduce((s, r) => s + r.correct, 0);
    const totalT      = all.reduce((s, r) => s + r.total, 0);
    const totalAcc    = totalT > 0 ? Math.round((totalC / totalT) * 100) : 0;
    onComplete(item.id, totalAcc);
  }

  // ── Summary screen ──────────────────────────────────────────
  if (showSummary) {
    const totalC   = sectionScores.reduce((s, r) => s + r.correct, 0);
    const totalT   = sectionScores.reduce((s, r) => s + r.total, 0);
    const totalAcc = totalT > 0 ? Math.round((totalC / totalT) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="btn-secondary text-sm">← Quay lại</button>
          <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${badge.cls}`}>{badge.label}</span>
          <span className="font-semibold text-sm" style={{ color: 'var(--text-heading)' }}>{item.title}</span>
        </div>

        {/* Overall accuracy */}
        <div className="card p-5 space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-bold text-lg" style={{ color: 'var(--text-heading)' }}>Kết quả</p>
              <p className="text-sm font-medium" style={{ color: accuracyColor(totalAcc) }}>
                {accuracyLabel(totalAcc)}
              </p>
            </div>
            <span className="text-5xl font-extrabold" style={{ color: accuracyColor(totalAcc) }}>
              {totalAcc}%
            </span>
          </div>
          <div className="rounded-full h-3 overflow-hidden" style={{ background: 'var(--bg-control)' }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${totalAcc}%`, background: accuracyColor(totalAcc) }}
            />
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {totalC} / {totalT} ký tự đúng
          </p>
        </div>

        {/* Per-section breakdown */}
        <div className="space-y-2">
          {item.sections.map((s, i) => {
            const sc = sectionScores[i];
            return (
              <div key={i} className={`card px-4 py-3 essay-section ${SECTION_BORDER[i % SECTION_BORDER.length]}`}>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-teal-400">{s.title}</p>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-20 h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'var(--bg-control)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${sc.accuracy}%`, background: accuracyColor(sc.accuracy) }}
                      />
                    </div>
                    <span className="text-xs font-bold w-10 text-right" style={{ color: accuracyColor(sc.accuracy) }}>
                      {sc.accuracy}%
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {sc.correct}/{sc.total} ký tự đúng
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setSectionIdx(0); setTyped(''); setSectionScores([]); setShowSummary(false);
            }}
            className="btn-secondary flex-1 text-sm"
          >
            🔄 Làm lại từ đầu
          </button>
          <button onClick={handleSave} className="btn-success flex-1 text-sm font-semibold">
            ✓ Lưu kết quả
          </button>
        </div>
      </div>
    );
  }

  // ── Main typing screen ──────────────────────────────────────
  return (
    <div className={`${lang === 'both' ? 'max-w-6xl' : 'max-w-3xl'} mx-auto px-4 py-4 space-y-3 animate-fade-in`}>

      {/* Header */}
      <div className="flex items-center gap-3 flex-wrap">
        <button onClick={onBack} className="btn-secondary text-sm">← Quay lại</button>
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-base leading-tight truncate" style={{ color: 'var(--text-heading)' }}>
            {item.title}
          </h2>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-md font-medium flex-shrink-0 ${badge.cls}`}>
          {badge.label}
        </span>
      </div>

      {/* Section progress + language picker */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        {/* Section counter */}
        <div className="flex items-center gap-2">
          {item.sections.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < sectionIdx  ? 'w-6 bg-teal-500' :
                i === sectionIdx ? 'w-10 bg-teal-400' :
                'w-6 bg-slate-600'
              }`}
            />
          ))}
          <span className="text-xs ml-1" style={{ color: 'var(--text-secondary)' }}>
            {sectionIdx + 1} / {item.sections.length}: <strong>{currentSection.title}</strong>
          </span>
        </div>

        {/* Language picker */}
        <div className="control-group flex">
          {[['en', 'EN'], ['vi', 'VI'], ['both', '🔤 Song ngữ']].map(([v, l]) => (
            <button
              key={v}
              onClick={() => handleLangChange(v)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                lang === v ? 'bg-teal-600 text-white' : 'tab-inactive'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* ── Typing area (split or single) ── */}
      <div className={lang === 'both' ? 'grid grid-cols-1 md:grid-cols-2 gap-3' : ''}>

        {/* EN typing panel — left in split mode */}
        <div className="card relative overflow-x-hidden overflow-y-auto" style={{ maxHeight: '55vh' }}>
          {lang === 'both' && (
            <div className="px-4 pt-3 pb-0">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                🇬🇧 Gõ tiếng Anh tại đây
              </p>
            </div>
          )}

          {/* Hint when not focused */}
          {!focused && typedLen === 0 && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              style={{ background: 'rgba(0,0,0,0.45)' }}
            >
              <p className="text-sm font-semibold text-teal-300">Bấm vào đây để bắt đầu gõ ▶</p>
            </div>
          )}

          {/* Character display */}
          <CharDisplay
            text={sectionText}
            typed={typed}
            focused={focused}
            cursorRef={cursorRef}
            onContainerClick={() => textareaRef.current?.focus()}
          />

          {/* Hidden textarea — captures all keyboard input */}
          <textarea
            ref={textareaRef}
            value={typed}
            onChange={handleInput}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="absolute inset-0 opacity-0 resize-none cursor-text overflow-hidden"
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            tabIndex={0}
            aria-label="Typing area"
          />
        </div>

        {/* VI reference panel — right in split mode */}
        {lang === 'both' && (
          <div className="card p-4 overflow-y-auto" style={{ maxHeight: '55vh' }}>
            <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
              🇻🇳 Tham khảo · Tiếng Việt
            </p>
            <p className="bilingual-vi text-sm leading-8 whitespace-pre-wrap">
              {currentSection.vi || '(Chưa có bản dịch)'}
            </p>
          </div>
        )}
      </div>

      {/* ── Stats bar ── */}
      <div className="flex items-center gap-3">
        {/* Progress through section */}
        <div className="flex-1 rounded-full h-2 overflow-hidden" style={{ background: 'var(--bg-control)' }}>
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width:      `${totalChars ? Math.round((typedLen / totalChars) * 100) : 0}%`,
              background: accuracyColor(liveAccuracy),
            }}
          />
        </div>
        <span className="text-xs w-20 text-right" style={{ color: 'var(--text-secondary)' }}>
          {typedLen} / {totalChars}
        </span>
        {typedLen > 0 && (
          <span className="text-xs font-bold w-12 text-right" style={{ color: accuracyColor(liveAccuracy) }}>
            {liveAccuracy}%
          </span>
        )}
      </div>

      {/* ── Live legend ── */}
      {typedLen > 0 && (
        <div className="flex gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span><span className="text-green-400 font-bold">■</span> Đúng: {correctChars}</span>
          <span><span className="text-red-400 font-bold">■</span> Sai: {typedLen - correctChars}</span>
          <span>Còn lại: {Math.max(0, totalChars - typedLen)}</span>
        </div>
      )}

      {/* ── Action buttons ── */}
      <div className="flex gap-2 flex-wrap">
        <button onClick={handleRetry} className="btn-secondary text-sm">
          ↺ Làm lại section này
        </button>
        {sectionDone ? (
          <button onClick={handleNextSection} className="btn-success flex-1 text-sm font-semibold">
            {sectionIdx < item.sections.length - 1 ? 'Tiếp theo →' : '✓ Xem kết quả'}
          </button>
        ) : (
          <button
            onClick={handleNextSection}
            className="btn-secondary flex-1 text-sm"
          >
            Bỏ qua section này →
          </button>
        )}
      </div>
    </div>
  );
}

// ─── DictCard ─────────────────────────────────────────────────
function DictCard({ item, prog, onStart }) {
  const count        = prog?.count || 0;
  const status       = getStatus(count);
  const badge        = BADGE[item.type];
  const bestAccuracy = prog?.bestAccuracy;

  return (
    <div className="card card-hover border-slate-600/60 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${badge.cls}`}>{badge.label}</span>
        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${status.cls}`}>{status.label}</span>
      </div>

      <div className="flex-1">
        <p className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-heading)' }}>
          {item.title}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.titleVi}</p>
      </div>

      <div className="space-y-1">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {count === 0
            ? 'Chưa chép lần nào'
            : `Đã chép: ${count} lần${prog?.lastDate ? ' · ' + prog.lastDate : ''}`}
        </p>
        {bestAccuracy !== undefined && (
          <div>
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Best</span>
              <span className="text-xs font-bold" style={{ color: accuracyColor(bestAccuracy) }}>
                {bestAccuracy}%
              </span>
            </div>
            <div className="rounded-full h-1.5" style={{ background: 'var(--bg-control)' }}>
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${bestAccuracy}%`, background: accuracyColor(bestAccuracy) }}
              />
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => onStart(item)}
        className={`w-full text-xs py-1 rounded-lg font-medium transition-all duration-200 active:scale-95 border ${
          count >= 3
            ? 'border-emerald-500/50 text-emerald-400 hover:bg-emerald-600/20'
            : 'border-blue-500/50 text-blue-400 hover:bg-blue-600/20'
        }`}
      >
        {count === 0 ? 'Bắt đầu ▶' : count >= 3 ? 'Ôn lại ▶' : 'Tiếp tục ▶'}
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────
export default function Dictation() {
  const [progress,      setProgress]      = useState(loadProgress);
  const [filter,        setFilter]        = useState('all');
  const [activeItem,    setActiveItem]    = useState(null);
  const [selectedBand,  setSelectedBand]  = useState(7);

  const ITEMS = selectedBand === 5 ? DICTATION_ITEMS_B5 : selectedBand === 6 ? DICTATION_ITEMS_B6 : DICTATION_ITEMS_B7;

  const filtered = filter === 'all'
    ? ITEMS
    : ITEMS.filter(it => it.type === filter);

  const total    = DICTATION_ITEMS_B7.length;
  const learning = DICTATION_ITEMS_B7.filter(it => { const c = progress[it.id]?.count || 0; return c >= 1 && c < 3; }).length;
  const done     = DICTATION_ITEMS_B7.filter(it => (progress[it.id]?.count || 0) >= 3).length;

  function handleComplete(id, accuracy) {
    const prev    = progress[id] || {};
    const newProg = {
      ...progress,
      [id]: {
        count:        (prev.count || 0) + 1,
        lastDate:     new Date().toISOString().slice(0, 10),
        lastAccuracy: accuracy,
        bestAccuracy: Math.max(prev.bestAccuracy ?? 0, accuracy),
      },
    };
    setProgress(newProg);
    localStorage.setItem('parrot_dictation', JSON.stringify(newProg));
    setActiveItem(null);
  }

  if (activeItem) {
    return (
      <DictSession
        item={activeItem}
        onBack={() => setActiveItem(null)}
        onComplete={handleComplete}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="mb-4">
        <h1 className="text-xl font-extrabold" style={{ color: 'var(--text-heading)' }}>📝 Luyện chép</h1>
        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Gõ thẳng lên văn bản — xanh đúng, đỏ sai, theo dõi tiến độ từng section
        </p>
      </div>

      {/* Stats */}
      <div className="card px-4 py-3 flex items-center gap-4 text-xs mb-4 flex-wrap">
        <span style={{ color: 'var(--text-secondary)' }}>
          Tổng: <strong style={{ color: 'var(--text-heading)' }}>{total}</strong> bài
        </span>
        <span className="text-slate-400">Chưa chép: <strong>{total - learning - done}</strong></span>
        <span className="text-yellow-400">Đang học: <strong>{learning}</strong></span>
        <span className="text-green-400">Hoàn thành: <strong>{done}</strong></span>
        <div className="flex-1 min-w-24">
          <div className="rounded-full overflow-hidden h-1.5" style={{ background: 'var(--bg-control)' }}>
            <div className="progress-bar h-full" style={{ width: total ? `${Math.round((done / total) * 100)}%` : '0%' }} />
          </div>
        </div>
      </div>

      {/* Filters + Band selector row */}
      <div className="flex gap-1 flex-wrap mb-4 items-center">
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === f.id ? 'bg-teal-600 text-white shadow-md' : 'tab-inactive'
            }`}
          >
            {f.label}
            {f.id !== 'all' && (
              <span className="ml-1 opacity-60">({DICTATION_ITEMS_B7.filter(it => it.type === f.id).length})</span>
            )}
          </button>
        ))}
        <div className="control-group flex ml-auto">
          <span className="px-2 py-1 text-xs text-slate-400 font-semibold self-center">Band:</span>
          {[[5,'🟢 5+'],[6,'🟡 6+'],[7,'🔵 7+']].map(([b, l]) => (
            <button key={b} onClick={() => setSelectedBand(b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedBand === b ? (b === 5 ? 'bg-green-600 text-white' : b === 6 ? 'bg-amber-600 text-white' : 'bg-blue-600 text-white') : 'tab-inactive'}`}>{l}</button>
          ))}
        </div>
      </div>

      {selectedBand === 5 && (
        <div className="mb-4 px-3 py-2 rounded-lg bg-green-900/30 border border-green-700/40 text-green-300 text-xs font-medium">
          🟢 Đang luyện nội dung <strong>Band 5+</strong> — từ vựng và cấu trúc đơn giản hơn
        </div>
      )}
      {selectedBand === 6 && (
        <div className="mb-4 px-3 py-2 rounded-lg bg-amber-900/30 border border-amber-700/40 text-amber-300 text-xs font-medium">
          🟡 Đang luyện nội dung <strong>Band 6+</strong> — từ vựng trung cấp, cấu trúc rõ ràng
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filtered.map(item => (
          <DictCard key={item.id} item={item} prog={progress[item.id]} onStart={setActiveItem} />
        ))}
      </div>
    </div>
  );
}
