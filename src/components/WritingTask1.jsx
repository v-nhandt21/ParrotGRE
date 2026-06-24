import { useState } from 'react';
import writingTask1Types from '../data/writingTask1.js';
import writingTask1Band5 from '../data/writingTask1_band5.js';

export default function WritingTask1() {
  const [selectedId, setSelectedId] = useState(1);
  const [tab, setTab] = useState('phrases'); // phrases | template | sample
  const [lang, setLang] = useState('both');
  const [sampleNum, setSampleNum] = useState(1);
  const [selectedBand, setSelectedBand] = useState(7);

  const chartType = writingTask1Types.find(t => t.id === selectedId) || writingTask1Types[0];
  const band5Data = writingTask1Band5.find(b => b.id === chartType.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="section-title">📊 Writing Task 1 — IELTS</h1>
        <p className="section-subtitle">6 dạng bài • Cụm từ mẫu • Template & bài viết mẫu song ngữ</p>
      </div>

      {/* Chart type selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {writingTask1Types.map(t => (
          <button key={t.id} onClick={() => { setSelectedId(t.id); setTab('phrases'); setSampleNum(1); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedId === t.id ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)] hover:border-blue-400'}`}>
            <span>{t.icon}</span>
            <span className="hidden sm:inline">{t.type}</span>
            <span className="sm:hidden">{t.type.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main card */}
      <div className="card p-6">
        {/* Header */}
        <div className="flex flex-wrap gap-3 items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{chartType.icon}</span>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-heading)' }}>{chartType.type}</h2>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{chartType.typeVi} — {chartType.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample prompt */}
        <div className="bg-slate-700/50 rounded-xl p-4 mb-5 border-l-4 border-blue-500">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">📋 Ví dụ đề bài</p>
          <p className="text-slate-200 text-sm leading-relaxed">{chartType.samplePrompt}</p>
          <p className="text-blue-300 text-xs mt-2 italic">{chartType.samplePromptVi}</p>
        </div>

        {/* Tabs */}
        <div className="control-group flex mb-5">
          {[['phrases','💬 Cụm từ then chốt'],['template','📐 Template'],['sample','📝 Bài mẫu']].map(([v, l]) => (
            <button key={v} onClick={() => setTab(v)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${tab === v ? 'tab-active' : 'tab-inactive'}`}>{l}</button>
          ))}
        </div>

        {/* Tab: Key Phrases */}
        {tab === 'phrases' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
              {chartType.keyPhrases.map((item, i) => (
                <div key={i} className="tip-box">
                  <p className="text-blue-300 font-mono text-sm font-semibold">"{item.phrase}"</p>
                  <p className="text-slate-400 text-xs mt-1">→ {item.meaning}</p>
                </div>
              ))}
            </div>

            {chartType.timeExpressions && (
              <div className="success-box">
                <p className="text-xs font-semibold text-emerald-400 mb-2">🕐 Diễn đạt thời gian (cho biểu đồ đường)</p>
                <div className="flex flex-wrap gap-2">
                  {chartType.timeExpressions.map(e => (
                    <span key={e} className="tag bg-emerald-900/50 text-emerald-300 border border-emerald-700/40 text-xs font-mono">{e}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab: Template */}
        {tab === 'template' && (
          <div className="animate-fade-in space-y-4">
            <div className="warn-box">
              <p className="text-xs text-yellow-300 font-semibold mb-1">💡 Ghi nhớ</p>
              <p className="text-xs text-yellow-200">Task 1 cần khoảng 150 từ. KHÔNG đưa ra ý kiến cá nhân. Chỉ mô tả dữ liệu khách quan. Luôn có câu Overview (tổng quan).</p>
            </div>

            {Object.entries(chartType.template).map(([key, value]) => {
              const meta = {
                intro: { label: 'Mở bài (Introduction)', color: 'border-blue-500', badge: 'bg-blue-900/60 text-blue-300' },
                overview: { label: 'Tổng quan (Overview) ⭐', color: 'border-yellow-500', badge: 'bg-yellow-900/60 text-yellow-300' },
                body1: { label: 'Chi tiết 1 (Body 1)', color: 'border-purple-500', badge: 'bg-purple-900/60 text-purple-300' },
                body2: { label: 'Chi tiết 2 (Body 2)', color: 'border-pink-500', badge: 'bg-pink-900/60 text-pink-300' },
              }[key] || { label: key, color: 'border-slate-500', badge: 'bg-slate-700 text-slate-300' };
              return (
                <div key={key} className={`border-l-4 ${meta.color} pl-4`}>
                  <span className={`tag text-xs mb-2 inline-block ${meta.badge}`}>{meta.label}</span>
                  <p className="text-slate-200 text-sm font-mono leading-relaxed bg-slate-800/50 p-3 rounded-lg">{value}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab: Sample Answer */}
        {tab === 'sample' && (
          <div className="animate-fade-in">
            {/* Band selector + Sample 1/2 toggle row */}
            <div className="flex flex-wrap gap-2 mb-3 items-center">
              <div className="control-group flex">
                <span className="px-2 py-1.5 text-xs text-slate-400 font-semibold self-center">Band:</span>
                {[[5,'🟢 5+'],[7,'🔵 7+']].map(([b, l]) => (
                  <button key={b} onClick={() => setSelectedBand(b)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedBand === b ? (b === 5 ? 'bg-green-600 text-white' : 'bg-blue-600 text-white') : 'tab-inactive'}`}>{l}</button>
                ))}
              </div>
              {chartType.sampleAnswer2 && (
                <div className="flex gap-2">
                  {[1, 2].map(n => (
                    <button key={n} onClick={() => setSampleNum(n)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${sampleNum === n ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)]'}`}>
                      📝 Bài mẫu {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {selectedBand === 5 && (
              <div className="mb-3 px-3 py-2 rounded-lg bg-green-900/30 border border-green-700/40 text-green-300 text-xs font-medium">
                🟢 Bài mẫu <strong>Band 5+</strong> — từ vựng và câu đơn giản hơn
              </div>
            )}

            {/* Show prompt 2 when viewing sample 2 */}
            {sampleNum === 2 && chartType.samplePrompt2 && (
              <div className="bg-slate-700/50 rounded-xl p-4 mb-4 border-l-4 border-purple-500">
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">📋 Đề bài 2</p>
                <p className="text-slate-200 text-sm leading-relaxed">{chartType.samplePrompt2}</p>
                <p className="text-purple-300 text-xs mt-2 italic">{chartType.samplePromptVi2}</p>
              </div>
            )}

            <div className="flex gap-2 mb-4">
              {[['both','🔤 Song ngữ'],['en','🇬🇧 English'],['vi','🇻🇳 Tiếng Việt']].map(([v, l]) => (
                <button key={v} onClick={() => setLang(v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${lang === v ? 'tab-active border-blue-500' : 'tab-inactive border border-[var(--border-solid)]'}`}>{l}</button>
              ))}
            </div>

            {(() => {
              const band5Answer = sampleNum === 2 ? band5Data?.sampleAnswer2 : band5Data?.sampleAnswer;
              const band7Answer = sampleNum === 2 && chartType.sampleAnswer2 ? chartType.sampleAnswer2 : chartType.sampleAnswer;
              const answer = selectedBand === 5 && band5Answer ? band5Answer : band7Answer;
              return (
                <div className="card p-5 space-y-4 bg-slate-900/50">
                  {(lang === 'en' || lang === 'both') && (
                    <div>
                      {lang === 'both' && <p className="text-xs font-semibold text-blue-400 mb-2">🇬🇧 English</p>}
                      <div className="space-y-3">
                        {answer.en.split('\n\n').map((para, i) => (
                          <p key={i} className="bilingual-en text-sm leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {lang === 'both' && <hr className="border-slate-700" />}
                  {(lang === 'vi' || lang === 'both') && (
                    <div>
                      {lang === 'both' && <p className="text-xs font-semibold text-blue-400 mb-2">🇻🇳 Tiếng Việt</p>}
                      <div className="space-y-3">
                        {answer.vi.split('\n\n').map((para, i) => (
                          <p key={i} className="bilingual-vi text-sm leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
