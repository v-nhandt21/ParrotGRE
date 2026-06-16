import { useState, useEffect } from 'react';
import Vocabulary from './components/Vocabulary.jsx';
import WritingTask2 from './components/WritingTask2.jsx';
import WritingTask1 from './components/WritingTask1.jsx';
import { SpeakingPart1, SpeakingPart2, SpeakingPart3 } from './components/Speaking.jsx';

const TABS = [
  { id: 'vocab',    label: '📚 Vocabulary',     labelShort: 'Vocab',  subtitle: 'GRE 100 Words',  color: 'from-blue-600 to-blue-700',    component: Vocabulary    },
  { id: 'writing2', label: '✍️ Writing Task 2',  labelShort: 'Task 2', subtitle: 'GRE + IELTS',   color: 'from-purple-600 to-purple-700', component: WritingTask2  },
  { id: 'writing1', label: '📊 Writing Task 1',  labelShort: 'Task 1', subtitle: 'IELTS Only',    color: 'from-pink-600 to-pink-700',    component: WritingTask1  },
  { id: 'speak1',   label: '🗣️ Speaking Part 1', labelShort: 'Part 1', subtitle: 'Q&A Practice',  color: 'from-emerald-600 to-emerald-700', component: SpeakingPart1 },
  { id: 'speak2',   label: '🎤 Speaking Part 2', labelShort: 'Part 2', subtitle: 'Cue Card',      color: 'from-orange-600 to-orange-700', component: SpeakingPart2 },
  { id: 'speak3',   label: '💬 Speaking Part 3', labelShort: 'Part 3', subtitle: 'Discussion',    color: 'from-red-600 to-red-700',       component: SpeakingPart3 },
];

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle"
      title={theme === 'dark' ? 'Chuyển sang Light mode' : 'Chuyển sang Dark mode'}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <span style={{ fontSize: '0.95rem' }}>☀️</span>
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <span style={{ fontSize: '0.95rem' }}>🌙</span>
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('vocab');
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('parrot_theme') || 'dark'; }
    catch { return 'dark'; }
  });

  // Sync theme to localStorage + html attribute for CSS vars
  useEffect(() => {
    localStorage.setItem('parrot_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component || Vocabulary;

  return (
    <div className="hero-gradient" data-theme={theme}>
      {/* ── Header ── */}
      <header className="app-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Brand row */}
          <div className="app-header-inner-border flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl select-none">🦜</span>
              <div>
                <h1 className="text-lg font-extrabold leading-none" style={{ color: 'var(--text-heading)' }}>
                  ParrotGRE
                </h1>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Luyện GRE Verbal + IELTS toàn diện
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Badges */}
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-lg border border-blue-700/40">
                  GRE Verbal
                </span>
                <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded-lg border border-purple-700/40">
                  IELTS 7+
                </span>
              </div>
              {/* Theme toggle */}
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>

          {/* Tab nav */}
          <nav
            className="flex gap-1 py-2 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {TABS.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-200 min-w-fit ${
                    isActive
                      ? `bg-gradient-to-br ${tab.color} text-white shadow-lg`
                      : 'tab-inactive'
                  }`}
                >
                  <span className="text-xs font-semibold whitespace-nowrap">
                    <span className="hidden md:inline">{tab.label}</span>
                    <span className="md:hidden">{tab.labelShort}</span>
                  </span>
                  <span className="text-xs opacity-70 hidden md:block">{tab.subtitle}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="pb-16">
        <ActiveComponent />
      </main>

      {/* ── Footer nav ── */}
      <footer className="app-footer fixed bottom-0 left-0 right-0 py-2">
        <div
          className="flex justify-center gap-1 overflow-x-auto px-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? `bg-gradient-to-br ${tab.color} text-white`
                    : 'tab-inactive'
                }`}
              >
                {tab.labelShort}
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
