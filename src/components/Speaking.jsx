import { useState } from 'react';
import { speakingPart1, speakingPart2, speakingPart3 } from '../data/speakingData.js';

// ===== PART 1 =====
function Part1() {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [openQ, setOpenQ] = useState(null);
  const [lang, setLang] = useState('both');
  const topic = speakingPart1[selectedTopic];

  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">🗣️ Speaking Part 1</h2>
        <p className="text-slate-400 text-sm">Câu hỏi về bản thân, gia đình, sở thích — Trả lời 2-3 câu, tự nhiên, có ví dụ</p>
      </div>

      {/* Topic tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {speakingPart1.map((t, i) => (
          <button key={t.id} onClick={() => { setSelectedTopic(i); setOpenQ(null); }}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all border ${i === selectedTopic ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)] hover:border-blue-400'}`}>
            {t.topic}
          </button>
        ))}
      </div>

      {/* Lang toggle */}
      <div className="flex gap-2 mb-4">
        {[['both','🔤 Song ngữ'],['en','🇬🇧 English'],['vi','🇻🇳 Tiếng Việt']].map(([v, l]) => (
          <button key={v} onClick={() => setLang(v)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${lang === v ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)]'}`}>{l}</button>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {topic.questions.map((q, i) => (
          <div key={i} className="card card-hover">
            <button className="w-full text-left p-4" onClick={() => setOpenQ(openQ === i ? null : i)}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {(lang === 'en' || lang === 'both') && (
                    <p className="text-white font-semibold text-sm">Q{i+1}: {q.q}</p>
                  )}
                  {(lang === 'vi' || lang === 'both') && (
                    <p className="text-blue-300 text-xs mt-1 italic">{q.qVi}</p>
                  )}
                </div>
                <span className="text-slate-400 text-lg mt-0.5">{openQ === i ? '▲' : '▼'}</span>
              </div>
            </button>

            {openQ === i && (
              <div className="px-4 pb-4 border-t border-slate-700 pt-3 animate-fade-in">
                <p className="text-xs font-semibold text-emerald-400 mb-2">💡 Gợi ý trả lời</p>
                <div className="success-box space-y-2">
                  {(lang === 'en' || lang === 'both') && (
                    <p className="bilingual-en text-sm">{q.answer}</p>
                  )}
                  {(lang === 'vi' || lang === 'both') && lang !== 'en' && (
                    <p className="bilingual-vi text-xs">{q.answerVi}</p>
                  )}
                </div>
                <div className="mt-3 warn-box">
                  <p className="text-xs text-yellow-300">
                    💡 <strong>Tip:</strong> Không cần học thuộc — hãy dùng câu trả lời này như ý tưởng, sau đó nói theo cách tự nhiên của bạn.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== PART 2 =====
function Part2() {
  const [selectedId, setSelectedId] = useState(1);
  const [lang, setLang] = useState('both');
  const [showAnswer, setShowAnswer] = useState(false);
  const card = speakingPart2.find(c => c.id === selectedId) || speakingPart2[0];

  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">🗣️ Speaking Part 2 — Cue Card</h2>
        <p className="text-slate-400 text-sm">Nói 1-2 phút về một chủ đề • Bài mẫu song ngữ đầy đủ</p>
      </div>

      {/* Card selector */}
      <div className="flex flex-wrap gap-2 mb-5">
        {speakingPart2.map(c => (
          <button key={c.id} onClick={() => { setSelectedId(c.id); setShowAnswer(false); }}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all border ${selectedId === c.id ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)] hover:border-blue-400'}`}>
            Cue {c.id}
          </button>
        ))}
      </div>

      {/* Cue card */}
      <div className="speaking-cue-card rounded-2xl p-6 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📋</span>
          <span className="text-purple-300 font-semibold text-sm uppercase tracking-wide">Cue Card #{card.id}</span>
        </div>
        <h3 className="text-white text-xl font-bold mb-4">{card.cueCard}</h3>
        <p className="text-purple-300 text-sm italic mb-4">{card.cueCardVi}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {card.prompts.map((p, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-purple-400 text-sm">▸</span>
              <div>
                <span className="text-slate-200 text-sm">{p}</span>
                <span className="text-slate-500 text-xs block">{card.promptsVi[i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer toggle */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setShowAnswer(s => !s)}
          className="btn-primary text-sm">
          {showAnswer ? '🙈 Ẩn bài mẫu' : '👁️ Xem bài mẫu'}
        </button>
        {showAnswer && (
          <div className="flex gap-2">
            {[['both','🔤 Song ngữ'],['en','🇬🇧 English'],['vi','🇻🇳 Tiếng Việt']].map(([v, l]) => (
              <button key={v} onClick={() => setLang(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${lang === v ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)]'}`}>{l}</button>
            ))}
          </div>
        )}
      </div>

      {showAnswer && (
        <div className="card p-5 animate-fade-in">
          <p className="text-xs font-semibold text-emerald-400 mb-3">🎤 Bài nói mẫu</p>
          <div className="space-y-4">
            {(lang === 'en' || lang === 'both') && (
              <div>
                {lang === 'both' && <p className="text-xs text-blue-400 font-semibold mb-2">🇬🇧 English</p>}
                <div className="space-y-3">
                  {card.sampleAnswer.en.split('\n\n').map((para, i) => (
                    <p key={i} className="bilingual-en text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )}
            {lang === 'both' && <hr className="border-slate-700" />}
            {(lang === 'vi' || lang === 'both') && (
              <div>
                {lang === 'both' && <p className="text-xs text-blue-400 font-semibold mb-2">🇻🇳 Tiếng Việt</p>}
                <div className="space-y-3">
                  {card.sampleAnswer.vi.split('\n\n').map((para, i) => (
                    <p key={i} className="bilingual-vi text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 tip-box">
            <p className="text-xs text-blue-300">
              💡 <strong>Ghi nhớ:</strong> Không học thuộc lòng. Nắm ý chính → kể theo cách tự nhiên của bạn → dùng các cụm từ liên kết (firstly, moreover, what impressed me most was...).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== PART 3 =====
function Part3() {
  const [selectedId, setSelectedId] = useState(1);
  const [openQ, setOpenQ] = useState(null);
  const [lang, setLang] = useState('both');
  const topic = speakingPart3.find(t => t.id === selectedId) || speakingPart3[0];

  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">🗣️ Speaking Part 3 — Discussion</h2>
        <p className="text-slate-400 text-sm">Câu hỏi thảo luận chuyên sâu — Trả lời 3-5 câu, đưa ra quan điểm, ví dụ, so sánh</p>
      </div>

      {/* Topic selector */}
      <div className="flex flex-wrap gap-2 mb-5">
        {speakingPart3.map(t => (
          <button key={t.id} onClick={() => { setSelectedId(t.id); setOpenQ(null); }}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all border ${selectedId === t.id ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)] hover:border-blue-400'}`}>
            {t.topic}
          </button>
        ))}
      </div>

      <div className="tip-box mb-4">
        <p className="text-xs text-blue-300">
          🔗 <strong>Liên hệ Part 2:</strong> "{topic.relatedPart2}" | Part 3 mở rộng từ chủ đề Part 2 lên tầm xã hội, toàn cầu.
        </p>
      </div>

      {/* Lang toggle */}
      <div className="flex gap-2 mb-4">
        {[['both','🔤 Song ngữ'],['en','🇬🇧 English'],['vi','🇻🇳 Tiếng Việt']].map(([v, l]) => (
          <button key={v} onClick={() => setLang(v)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${lang === v ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)]'}`}>{l}</button>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {topic.questions.map((q, i) => (
          <div key={i} className="card card-hover">
            <button className="w-full text-left p-4" onClick={() => setOpenQ(openQ === i ? null : i)}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {(lang === 'en' || lang === 'both') && (
                    <p className="text-white font-semibold text-sm">Q{i+1}: {q.q}</p>
                  )}
                  {(lang === 'vi' || lang === 'both') && (
                    <p className="text-blue-300 text-xs mt-1 italic">{q.qVi}</p>
                  )}
                </div>
                <span className="text-slate-400 text-lg mt-0.5">{openQ === i ? '▲' : '▼'}</span>
              </div>
            </button>
            {openQ === i && (
              <div className="px-4 pb-4 border-t border-slate-700 pt-3 animate-fade-in">
                <p className="text-xs font-semibold text-emerald-400 mb-2">🎤 Câu trả lời mẫu (Band 7+)</p>
                <div className="success-box space-y-2">
                  {(lang === 'en' || lang === 'both') && (
                    <p className="bilingual-en text-sm leading-relaxed">{q.answer}</p>
                  )}
                  {(lang === 'vi' || lang === 'both') && lang !== 'en' && (
                    <p className="bilingual-vi text-xs leading-relaxed">{q.answerVi}</p>
                  )}
                </div>
                <div className="mt-3 warn-box">
                  <p className="text-xs text-yellow-300">
                    💡 <strong>Part 3 Tips:</strong> Đưa ra ý kiến rõ ràng → lý do → ví dụ/evidence → nhượng bộ (admittedly...) → kết luận lại quan điểm.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== MAIN EXPORT =====
export function SpeakingPart1() { return <Part1 />; }
export function SpeakingPart2() { return <Part2 />; }
export function SpeakingPart3() { return <Part3 />; }
