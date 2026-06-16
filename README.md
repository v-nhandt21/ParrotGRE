# 🦜 ParrotGRE — Luyện GRE Verbal + IELTS

Ứng dụng web học cá nhân, tất cả dữ liệu lưu trực tiếp trong source code (không cần backend/database).

---

## Mục lục

- [Yêu cầu](#yêu-cầu)
- [Cài đặt & chạy](#cài-đặt--chạy)
- [Cấu trúc project](#cấu-trúc-project)
- [Các tab chức năng](#các-tab-chức-năng)
- [Hướng dẫn thêm nội dung](#hướng-dẫn-thêm-nội-dung)
- [Backlog & TODO](#backlog--todo)

---

## Yêu cầu

- Node.js >= 16 (đã test với v18.6.0)
- npm >= 7

---

## Cài đặt & chạy

```bash
# Cài dependencies
npm install

# Chạy dev server (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview bản build
npm run preview
```

Hoặc dùng `make` (xem [Makefile](./Makefile)):

```bash
make install   # npm install
make dev       # chạy dev server
make build     # build production
make preview   # preview build
make open      # mở trình duyệt (Linux)
make clean     # xóa node_modules + dist
```

---

## Cấu trúc project

```
ParrotGRE/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── Makefile
├── README.md
│
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Navigation + layout chính + theme toggle
    ├── index.css             # Tailwind + CSS variables (dark/light)
    │
    ├── data/                 # ← Toàn bộ nội dung học ở đây
    │   ├── vocabulary.js     # 500 từ GRE ✅
    │   ├── writingTask2.js   # 20 bài Task 2 ✅
    │   ├── writingTask1.js   # 6 dạng Task 1, mỗi dạng 2 bài mẫu ✅
    │   └── speakingData.js   # Part 1 (10) + Part 2 (10) + Part 3 (10) ✅
    │
    └── components/
        ├── Vocabulary.jsx    # Tab từ vựng (Grid / Flashcard / Quiz)
        ├── WritingTask2.jsx  # Tab Writing Task 2
        ├── WritingTask1.jsx  # Tab Writing Task 1
        └── Speaking.jsx      # Tab Speaking Part 1/2/3
```

---

## Các tab chức năng

### 📚 Vocabulary — GRE Verbal
- **500 từ GRE** đầy đủ (id 1–500)
- Phiên âm IPA, nghĩa tiếng Việt, câu ví dụ song ngữ, đồng nghĩa, trái nghĩa
- Chế độ **Danh sách**: click thẻ để mở chi tiết
- Chế độ **Flashcard**: lật thẻ, điều hướng prev/next, random
- Chế độ **Quiz** (multiple choice): 20 câu ngẫu nhiên, 4 lựa chọn, hiện feedback ngay, tự đánh dấu đúng, màn hình kết quả
- Bộ lọc: Tất cả / Chưa thuộc / Đã thuộc
- Tìm kiếm theo từ, nghĩa, đồng nghĩa
- Progress bar + **localStorage** lưu từ đã thuộc (persistent qua sessions)

### ✍️ Writing Task 2 — GRE & IELTS
- **20 bài mẫu** đầy đủ
- 4 dạng đề: Opinion · Discussion · Problem-Solution · Advantages-Disadvantages
- Cấu trúc chuẩn 4 đoạn: Intro → Body 1 → Body 2 → Conclusion
- Song ngữ Anh-Việt, toggle từng ngôn ngữ
- Panel từ vựng trọng tâm + cấu trúc câu mẫu cho mỗi bài

### 📊 Writing Task 1 — IELTS
- **6 dạng đầy đủ**, mỗi dạng **2 bài mẫu** khác nhau
  - 📈 Line Graph · 📊 Bar Chart · 🥧 Pie Chart · 📋 Table · ⚙️ Process · 🗺️ Map
- Cụm từ then chốt (key phrases) cho từng dạng
- Template chuẩn theo dạng bài
- Toggle Bài mẫu 1 / Bài mẫu 2 với đề bài song ngữ riêng cho từng bài

### 🗣️ Speaking Part 1
- **10 chủ đề** (Hometown, Work, Hobbies, Food, Technology, Health, Music & Art, Travel, Nature & Environment, Language & Reading)
- Câu hỏi thường gặp + gợi ý trả lời song ngữ
- Click để mở/đóng từng câu

### 🎤 Speaking Part 2 — Cue Card
- **10 cue cards** đầy đủ
- Bài nói mẫu song ngữ đầy đủ (khoảng 1–2 phút)
- Toggle ẩn/hiện bài mẫu để tự luyện trước

### 💬 Speaking Part 3 — Discussion
- **10 chủ đề** đầy đủ
- Câu trả lời mẫu Band 7+ song ngữ
- Liên kết với chủ đề Part 2 tương ứng

### 🌙 Dark / Light Mode
- Toggle ngay trên header (góc phải)
- Lưu preference vào localStorage

---

## Hướng dẫn thêm nội dung

### Thêm từ vựng (`src/data/vocabulary.js`)

Thêm entry mới vào cuối mảng `vocabulary`, tăng `id` lên 1:

```js
{
  id: 501,
  word: "sagacity",
  phonetic: "/səˈɡæs.ɪ.ti/",
  pos: "n",                          // n | v | adj | adv | adj/n
  meaning: "Sự khôn ngoan, sáng suốt",
  example: "The sagacity of her advice saved the company from bankruptcy.",
  exampleVi: "Sự khôn ngoan trong lời khuyên của cô đã cứu công ty khỏi phá sản.",
  synonyms: ["wisdom", "shrewdness", "acumen", "judiciousness"],
  antonyms: ["foolishness", "stupidity", "obtuseness"],
},
```

### Thêm bài Writing Task 2 (`src/data/writingTask2.js`)

Thêm object mới vào mảng `writingTask2Topics`:

```js
{
  id: 21,
  title: "Animal Testing",
  titleVi: "Thử nghiệm trên động vật",
  type: "Opinion (Agree/Disagree)",  // xem các type có sẵn bên dưới
  typeVi: "Quan điểm",
  prompt: "...",
  promptVi: "...",
  template: "Strong disagreement",
  essay: {
    introduction: { en: "...", vi: "..." },
    body1:        { en: "...", vi: "..." },
    body2:        { en: "...", vi: "..." },
    conclusion:   { en: "...", vi: "..." },
  },
  vocabulary: [
    { word: "vivisection", meaning: "mổ xẻ động vật sống để thí nghiệm" },
  ],
  structures: [
    "The ethical case against X rests on ...",
  ]
},
```

**Các `type` hợp lệ** (để giữ màu sắc đúng):
- `"Opinion (Agree/Disagree)"`
- `"Discussion (Both Views + Opinion)"`
- `"Problem & Solution"`
- `"Advantages & Disadvantages"`

### Thêm bài mẫu 2 cho Writing Task 1 (`src/data/writingTask1.js`)

Thêm 3 field vào entry muốn cập nhật:

```js
samplePrompt2: "The graph below shows ...",
samplePromptVi2: "Biểu đồ dưới đây cho thấy ...",
sampleAnswer2: { en: "...", vi: "..." },
```

### Thêm Speaking data (`src/data/speakingData.js`)

**Part 1** — thêm vào mảng `speakingPart1`:
```js
{
  id: 11, topic: "Music & Art", topicVi: "Âm nhạc & Nghệ thuật",
  questions: [
    {
      q: "Do you enjoy listening to music?",
      qVi: "Bạn có thích nghe nhạc không?",
      answer: "...",
      answerVi: "...",
    },
  ]
},
```

**Part 2** — thêm vào mảng `speakingPart2` (tăng `id`):
```js
{
  id: 11,
  cueCard: "Describe a festival or celebration in your country.",
  cueCardVi: "Mô tả một lễ hội hoặc sự kiện kỷ niệm ở đất nước bạn.",
  prompts: ["What it is", "When it happens", "What people do", "Why it is important"],
  promptsVi: [...],
  sampleAnswer: { en: "...", vi: "..." },
},
```

**Part 3** — thêm vào mảng `speakingPart3`:
```js
{
  id: 11, topic: "Arts & Culture", topicVi: "Nghệ thuật & Văn hóa",
  relatedPart2: "Describe a festival",
  questions: [
    { q: "...", qVi: "...", answer: "...", answerVi: "..." },
  ]
},
```

---

## Backlog & TODO

### 🟢 Nice to Have

- [ ] **Export từ đã học** ra file CSV/JSON
- [ ] **Spaced repetition** — tự động ưu tiên ôn từ sắp quên (thuật toán SM-2)
- [ ] **Timer** cho Writing — đặt 40 phút và bấm giờ viết thật
- [ ] **Highlight cấu trúc câu** trong bài mẫu — click vào cấu trúc, highlight chỗ dùng trong essay
- [ ] **Audio pronunciation** — Web Speech API đọc to từ vựng
- [ ] **Note cá nhân** — thêm ghi chú riêng vào mỗi từ / bài
- [ ] **Fullscreen flashcard** mode
- [ ] **PWA** — cài về máy, dùng offline
- [ ] **Search toàn cục** — tìm kiếm xuyên suốt tất cả tab
- [ ] **Quiz: Fill in the blank** — chế độ điền từ thay vì chọn đáp án

### 🔵 Technical Debt

- [ ] Tách `speakingData.js` thành 3 file riêng: `speakingPart1.js`, `speakingPart2.js`, `speakingPart3.js`
- [ ] Thêm PropTypes hoặc chuyển sang TypeScript
- [ ] Lazy load từng tab component (code splitting) để giảm bundle size khi data lớn
- [ ] Tách data lớn (vocabulary 500 từ) ra thành chunks hoặc dùng IndexedDB

---

## Tech Stack

| Thứ | Phiên bản |
|-----|-----------|
| React | 18.2 |
| Vite | 4.4 |
| Tailwind CSS | 3.3 |
| Node.js (required) | ≥ 16 |
| Storage | localStorage (browser) |

Không có backend. Không có database. Toàn bộ nội dung học là plain JS objects trong thư mục `src/data/`.
