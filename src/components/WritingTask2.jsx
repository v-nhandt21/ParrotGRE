import { useState } from 'react';
import writingTask2Topics from '../data/writingTask2.js';
import writingTask2Band5 from '../data/writingTask2_band5.js';

const TYPE_COLORS = {
  'Opinion (Agree/Disagree)':           'bg-blue-900/60 text-blue-300 border-blue-700/50',
  'Discussion (Both Views + Opinion)':  'bg-purple-900/60 text-purple-300 border-purple-700/50',
  'Problem & Solution':                 'bg-orange-900/60 text-orange-300 border-orange-700/50',
  'Advantages & Disadvantages':         'bg-pink-900/60 text-pink-300 border-pink-700/50',
};

const SECTION_META = [
  { key: 'introduction', label: 'Mở bài',    color: 'essay-intro',      icon: '🟦', labelEn: 'Introduction' },
  { key: 'body1',        label: 'Thân bài 1', color: 'essay-body1',     icon: '🟪', labelEn: 'Body Paragraph 1' },
  { key: 'body2',        label: 'Thân bài 2', color: 'essay-body2',     icon: '🟥', labelEn: 'Body Paragraph 2' },
  { key: 'conclusion',   label: 'Kết bài',    color: 'essay-conclusion', icon: '🟩', labelEn: 'Conclusion' },
];

export default function WritingTask2() {
  const [selectedId, setSelectedId] = useState(1);
  const [lang, setLang] = useState('both'); // en | vi | both
  const [showVocab, setShowVocab] = useState(true);
  const [showStructures, setShowStructures] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedBand, setSelectedBand] = useState(7);

  const topic = writingTask2Topics.find(t => t.id === selectedId) || writingTask2Topics[0];
  const essay = selectedBand === 5
    ? (writingTask2Band5.find(b => b.id === topic.id)?.essay || topic.essay)
    : topic.essay;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="section-title">✍️ Writing Task 2 — GRE & IELTS</h1>
        <p className="section-subtitle">10 chủ đề mẫu • Song ngữ Anh-Việt • Theo template chuẩn</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className={`transition-all duration-300 ${sidebarOpen ? 'w-72 min-w-72' : 'w-0 min-w-0 overflow-hidden'}`}>
          <div className="card p-3 sticky top-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Danh sách chủ đề</p>
            <div className="space-y-1 max-h-[75vh] overflow-y-auto pr-1">
              {writingTask2Topics.map(t => (
                <button key={t.id} onClick={() => setSelectedId(t.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all text-sm ${selectedId === t.id ? 'tab-active' : 'tab-inactive'}`}>
                  <div className="font-medium">{t.id}. {t.title}</div>
                  <div className="text-xs opacity-70 mt-0.5">{t.titleVi}</div>
                  <div className={`tag text-xs mt-1 border ${TYPE_COLORS[t.type] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>{t.type}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-wrap gap-2 mb-5 items-center">
            <button onClick={() => setSidebarOpen(o => !o)} className="btn-secondary text-sm">
              {sidebarOpen ? '◀ Ẩn' : '▶ Chủ đề'}
            </button>
            <div className="control-group flex">
              {[['both','🔤 Song ngữ'],['en','🇬🇧 English'],['vi','🇻🇳 Tiếng Việt']].map(([v, l]) => (
                <button key={v} onClick={() => setLang(v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${lang === v ? 'tab-active' : 'tab-inactive'}`}>{l}</button>
              ))}
            </div>
            <button onClick={() => setShowVocab(v => !v)} className={`btn-secondary text-sm ${showVocab ? 'border-yellow-600 text-yellow-400' : ''}`}>
              📖 Từ vựng
            </button>
            <button onClick={() => setShowStructures(v => !v)} className={`btn-secondary text-sm ${showStructures ? 'border-blue-600 text-blue-400' : ''}`}>
              🔧 Cấu trúc
            </button>
            <div className="control-group flex ml-auto">
              <span className="px-2 py-1.5 text-xs text-slate-400 font-semibold self-center">Band:</span>
              {[[5,'🟢 Band 5+'],[7,'🔵 Band 7+']].map(([b, l]) => (
                <button key={b} onClick={() => setSelectedBand(b)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedBand === b ? (b === 5 ? 'bg-green-600 text-white' : 'bg-blue-600 text-white') : 'tab-inactive'}`}>{l}</button>
              ))}
            </div>
          </div>

          {/* Topic Header */}
          <div className="card p-6 mb-5">
            <div className="flex flex-wrap items-start gap-3 mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-heading)' }}>{topic.title}</h2>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{topic.titleVi}</p>
              </div>
              <div className={`tag border text-sm ${TYPE_COLORS[topic.type] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                {topic.type}
              </div>
            </div>

            {/* Prompt */}
            <div className="bg-slate-700/50 rounded-xl p-4 border-l-4 border-blue-500">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">📋 Đề bài</p>
              {(lang === 'en' || lang === 'both') && (
                <p className="bilingual-en text-sm leading-relaxed">{topic.prompt}</p>
              )}
              {(lang === 'vi' || lang === 'both') && (
                <p className="bilingual-vi text-xs mt-2">{topic.promptVi}</p>
              )}
            </div>
          </div>

          {/* Band indicator */}
          {selectedBand === 5 && (
            <div className="mb-4 px-4 py-2 rounded-xl bg-green-900/30 border border-green-700/40 text-green-300 text-xs font-medium flex items-center gap-2">
              <span>🟢</span> Đang xem bài mẫu <strong>Band 5+</strong> — từ vựng và cấu trúc đơn giản hơn
            </div>
          )}

          {/* Essay Body */}
          <div className="space-y-4 mb-5">
            {SECTION_META.map(({ key, label, color, icon, labelEn }) => {
              const section = essay[key];
              if (!section) return null;
              return (
                <div key={key} className="card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{icon}</span>
                    <span className="font-bold text-white">{labelEn}</span>
                    <span className="text-slate-400 text-sm">— {label}</span>
                  </div>
                  <div className={`essay-section ${color} space-y-2`}>
                    {(lang === 'en' || lang === 'both') && (
                      <p className="bilingual-en text-sm">{section.en}</p>
                    )}
                    {(lang === 'vi' || lang === 'both') && (
                      <p className="bilingual-vi text-xs">{section.vi}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vocabulary + Structures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {showVocab && topic.vocabulary && (
              <div className="card p-5">
                <h3 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>📖</span> Từ vựng trọng tâm
                </h3>
                <div className="space-y-2">
                  {topic.vocabulary.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-slate-700/50 last:border-0">
                      <span className="text-yellow-400 font-mono text-sm font-semibold min-w-fit">{item.word}</span>
                      <span className="text-slate-300 text-sm">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showStructures && topic.structures && (
              <div className="card p-5">
                <h3 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <span>🔧</span> Cấu trúc câu mẫu
                </h3>
                <div className="space-y-2">
                  {topic.structures.map((s, i) => (
                    <div key={i} className="tip-box text-xs font-mono text-blue-200 leading-relaxed">
                      {i + 1}. {s}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Template reminder */}
          <div className="mt-5 warn-box">
            <p className="text-xs font-semibold text-yellow-400 mb-2">📌 Template chung cho {topic.type}</p>
            <p className="text-xs text-yellow-200 leading-relaxed">
              <strong>Mở bài:</strong> Paraphrase đề + Thesis (quan điểm rõ ràng) →
              <strong> Thân 1:</strong> Lập luận/quan điểm 1 + ví dụ cụ thể →
              <strong> Thân 2:</strong> Lập luận/quan điểm 2 + ví dụ cụ thể →
              <strong> Kết bài:</strong> Tóm tắt + nhấn mạnh quan điểm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
