/* =========================================================
   Клетка под микроскопом — викторина §3–5
   ========================================================= */

const QUESTIONS = [
  /* ---------------- §3 · Строение клетки ---------------- */
  {
    topic: 3,
    image: "assets/hooke-cork.jpg",
    stamp: "1665",
    caption: "Срез пробки из «Микрографии» Роберта Гука",
    question: "Кто первым рассмотрел тонкий срез пробки под микроскопом и назвал увиденные камеры клетками?",
    options: ["Роберт Гук", "Антони ван Левенгук", "Теодор Шванн", "Карл Линней"],
    correct: 0,
    explain: "Около 350 лет назад английский физик Роберт Гук рассмотрел срез пробки из коры пробкового дуба. Камеры, похожие на пчелиные соты, он назвал клетками."
  },
  {
    topic: 3,
    image: "assets/cheek-cells.jpg",
    stamp: "микроскоп",
    caption: "Клетки эпителия человека",
    question: "Какие три части обязательно есть в каждой клетке — и растения, и животного?",
    options: [
      "Цитоплазматическая мембрана, цитоплазма и ядро",
      "Клеточная стенка, пластиды и вакуоли",
      "Мембрана, хлоропласты и ядро",
      "Цитоплазма, вакуоли и хромосомы"
    ],
    correct: 0,
    explain: "Мембрана ограничивает содержимое клетки, цитоплазма заполняет её внутри, а ядро хранит наследственную информацию. Оболочка, пластиды и вакуоли есть только у растений."
  },
  {
    topic: 3,
    image: "assets/onion-epidermis.jpg",
    stamp: "×40",
    caption: "Клетки кожицы лука под световым микроскопом",
    question: "Чем растительная клетка отличается от животной?",
    options: [
      "У неё есть клеточная стенка из целлюлозы",
      "У неё есть цитоплазматическая мембрана",
      "У неё есть цитоплазма",
      "У неё есть ядро"
    ],
    correct: 0,
    explain: "Животные клетки отграничены от среды только мембраной. Растительные дополнительно имеют прочную оболочку — клеточную стенку, основу которой составляет целлюлоза."
  },
  {
    topic: 3,
    image: "assets/elodea.jpg",
    stamp: "×400",
    caption: "Хлоропласты в клетках элодеи",
    question: "Как называются зелёные пластиды, в которых находится хлорофилл?",
    options: ["Хлоропласты", "Лейкопласты", "Хромопласты", "Вакуоли"],
    correct: 0,
    explain: "Хлоропласты содержат зелёный пигмент хлорофилл. Именно в них образуются органические вещества, поэтому листья и молодые стебли зелёные."
  },
  {
    topic: 3,
    image: "assets/chromoplast.jpg",
    stamp: "микроскоп",
    caption: "Клетки кожуры плодов: видны окрашенные пластиды",
    question: "Какие пластиды придают жёлтую, оранжевую и красную окраску плодам, лепесткам и осенним листьям?",
    options: ["Хромопласты", "Хлоропласты", "Лейкопласты", "Вакуоли"],
    correct: 0,
    explain: "Хромопласты окрашены в жёлтый, оранжевый или красный цвет. Они определяют окраску зрелых плодов, лепестков и осенних листьев."
  },
  {
    topic: 3,
    image: "assets/starch.jpg",
    stamp: "микроскоп",
    caption: "Зёрна крахмала в клетках клубня картофеля",
    question: "В каких пластидах накапливаются запасные питательные вещества — крахмал, белки и жиры?",
    options: ["В лейкопластах", "В хлоропластах", "В хромопластах", "В вакуолях"],
    correct: 0,
    explain: "Лейкопласты — бесцветные пластиды. Они есть, например, в клубнях картофеля и клетках кожицы лука и служат хранилищем запасных веществ."
  },
  {
    topic: 3,
    image: "assets/red-onion.jpg",
    stamp: "×400",
    caption: "Клетки красного лука: крупные вакуоли с клеточным соком",
    question: "Что находится внутри вакуолей растительной клетки?",
    options: [
      "Клеточный сок — раствор органических и неорганических веществ",
      "Хлорофилл",
      "Хромосомы",
      "Второе ядро"
    ],
    correct: 0,
    explain: "Вакуоли заполнены клеточным соком. В нём могут быть запасные вещества и пигменты, которые придают цветкам и плодам синюю, фиолетовую или малиновую окраску."
  },

  /* ---------------- §4 · Жизнедеятельность клетки ---------------- */
  {
    topic: 4,
    image: "assets/ink.jpg",
    stamp: "опыт",
    caption: "Чернила постепенно распространяются в воде",
    question: "Как называется движение молекул из области, где их больше, в область, где их меньше?",
    options: ["Диффузия", "Выделение", "Дыхание", "Раздражимость"],
    correct: 0,
    explain: "Именно так вещества проходят через цитоплазматическую мембрану в клетку: из окружающей среды, где молекул больше, внутрь, где их меньше."
  },
  {
    topic: 4,
    image: "assets/root-hairs.jpg",
    stamp: "микроскоп",
    caption: "Корневые волоски: через них в растение поступают вода и минеральные соли",
    question: "Что называют питанием клетки?",
    options: [
      "Поступление веществ в клетку и их переработку",
      "Удаление вредных продуктов обмена",
      "Деление клетки на две дочерние",
      "Ответ клетки на воздействие среды"
    ],
    correct: 0,
    explain: "В клетку поступают вода, кислород, минеральные соли и органические вещества. После переработки они усваиваются, а неусвоенные удаляются."
  },
  {
    topic: 4,
    image: "assets/mitochondria.jpg",
    stamp: "ЭМ",
    caption: "Митохондрии под электронным микроскопом",
    question: "Что образуется при клеточном дыхании?",
    options: [
      "Углекислый газ, вода и энергия",
      "Только кислород",
      "Органические вещества из неорганических",
      "Хромосомы и ядерная оболочка"
    ],
    correct: 0,
    explain: "При клеточном дыхании органические вещества с участием кислорода перерабатываются в углекислый газ и воду. Выделенная энергия запасается в специальных молекулах."
  },
  {
    topic: 4,
    image: "assets/paramecium.jpg",
    stamp: "микроскоп",
    caption: "Сократительные вакуоли инфузории-туфельки",
    question: "Как называется процесс удаления из клетки неусвоенных и вредных веществ?",
    options: ["Выделение", "Питание", "Диффузия", "Размножение"],
    correct: 0,
    explain: "Выделение контролируется цитоплазматической мембраной. У инфузории лишнюю воду выводят сократительные вакуоли."
  },
  {
    topic: 4,
    image: "assets/hela.jpg",
    stamp: "флуоресценция",
    caption: "Живая клетка HeLa под флуоресцентным микроскопом",
    question: "Каким одним понятием объединяют питание, дыхание и выделение клетки?",
    options: ["Обмен веществ", "Фотосинтез", "Деление клетки", "Рост клетки"],
    correct: 0,
    explain: "Переработка поступивших веществ, дыхание и удаление вредных продуктов — это обмен веществ. Так клетка работает как маленькая фабрика."
  },
  {
    topic: 4,
    image: "assets/mimosa.jpg",
    stamp: "реакция",
    caption: "Листья мимозы складываются от прикосновения",
    question: "Как называется способность клеток отвечать на воздействия окружающей среды?",
    options: ["Раздражимость", "Диффузия", "Выделение", "Наследственность"],
    correct: 0,
    explain: "Раздражимость — ответ клетки на внешнее воздействие. Примеры: движение цитоплазмы, выделение слюны слюнными железами при виде пищи."
  },

  /* ---------------- §5 · Размножение и рост клеток ---------------- */
  {
    topic: 5,
    image: "assets/mitosis1.jpg",
    stamp: "×400",
    caption: "Клетки кончика корня лука: многие из них делятся",
    question: "Как размножаются клетки?",
    options: ["Делением", "Почкованием", "Спорами", "Семенами"],
    correct: 0,
    explain: "Размножение клеток — это увеличение их количества делением. Делиться клетка начинает после того, как достигнет определённых размеров."
  },
  {
    topic: 5,
    image: "assets/mitosis2.jpg",
    stamp: "микроскоп",
    caption: "Деление клеток в кончике корня лука",
    question: "Что происходит в ядре ещё до начала деления клетки?",
    options: [
      "Каждая хромосома копирует себя — образуются две одинаковые дочерние хромосомы",
      "Ядро полностью исчезает",
      "Хромосомы растворяются в цитоплазме",
      "В ядре образуется крупная вакуоль"
    ],
    correct: 0,
    explain: "Ядро увеличивается, хромосомы становятся хорошо заметны. Каждая хромосома копирует себя, чтобы передать наследственную информацию обеим дочерним клеткам."
  },
  {
    topic: 5,
    image: "assets/mitosis3.jpg",
    stamp: "×1000",
    caption: "Делящаяся клетка под микроскопом",
    question: "Что происходит с ядерной оболочкой в ходе деления?",
    options: [
      "Она растворяется, а затем вокруг хромосом у полюсов формируется заново",
      "Она становится толще и прочнее",
      "Она делится на две части без растворения",
      "Она превращается в цитоплазматическую мембрану"
    ],
    correct: 0,
    explain: "Ядерная оболочка растворяется, дочерние хромосомы выстраиваются в центре клетки и расходятся к полюсам. Затем вокруг них снова образуется ядерная оболочка."
  },
  {
    topic: 5,
    image: "assets/daughter.jpg",
    stamp: "микроскоп",
    caption: "Клетки кончика корня лука после деления",
    question: "Сколько дочерних клеток образуется из одной материнской?",
    options: ["Две", "Одна", "Три", "Четыре"],
    correct: 0,
    explain: "На экваторе клетки появляется кольцевая перетяжка. Она разделяет материнскую клетку на две дочерние, и всё содержимое распределяется между ними."
  },
  {
    topic: 5,
    image: "assets/karyotype.jpg",
    stamp: "набор",
    caption: "Набор хромосом человека",
    question: "Почему дочерние клетки являются точными копиями материнской?",
    options: [
      "В ядре каждой из них столько же хромосом, сколько было в материнской клетке",
      "Они получают половину хромосом материнской клетки",
      "У них вообще нет ядра",
      "Они сливаются с соседними клетками"
    ],
    correct: 0,
    explain: "Хромосомы перед делением копируются и равномерно распределяются. Поэтому в каждой дочерней клетке оказывается такой же набор хромосом, как в материнской."
  },
  {
    topic: 5,
    image: "assets/seedling.jpg",
    stamp: "рост",
    caption: "Проростки: организм растёт благодаря делению и росту клеток",
    question: "За счёт чего происходит рост клетки?",
    options: [
      "За счёт питательных веществ, которые поступают из среды или образуются в клетке",
      "Только за счёт поглощения воды",
      "За счёт постоянного деления без увеличения размеров",
      "За счёт хромосом, которые выходят из ядра"
    ],
    correct: 0,
    explain: "После деления дочерние клетки растут: увеличиваются масса и объём цитоплазмы. Когда они достигают размеров материнской, то снова делятся — так растёт весь организм."
  }
];

const TOPIC_NAMES = { 3: "§3 · Строение", 4: "§4 · Жизнь клетки", 5: "§5 · Деление и рост" };
const STORAGE_KEY = "bio35-quiz-v1";

const state = {
  topic: "all",
  deck: [],
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answers: [],
  locked: false,
  finished: false,
  sound: true,
  best: 0
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- localStorage ---------- */
function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (typeof data.sound === "boolean") state.sound = data.sound;
    if (typeof data.best === "number") state.best = data.best;
  } catch (e) { /* ignore */ }
}
function savePrefs() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ sound: state.sound, best: state.best }));
  } catch (e) { /* ignore */ }
}

/* ---------- звук ---------- */
let audioCtx = null;
function tone(freq, start, dur, type = "sine", gain = 0.05) {
  if (!state.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const t0 = audioCtx.currentTime + start;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  } catch (e) { /* ignore */ }
}
const sfx = {
  correct() { tone(660, 0, 0.14, "sine", 0.05); tone(990, 0.09, 0.18, "sine", 0.04); },
  wrong() { tone(190, 0, 0.2, "triangle", 0.05); tone(140, 0.11, 0.24, "triangle", 0.04); },
  click() { tone(420, 0, 0.06, "sine", 0.025); },
  finish() { [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.11, 0.26, "sine", 0.045)); }
};

/* ---------- навигация ---------- */
const views = $$(".view");
function showView(name) {
  views.forEach(v => v.classList.toggle("active", v.dataset.view === name));
  $$(".main-nav button").forEach(b => b.classList.toggle("active", b.dataset.nav === name));
  const target = $(`#view-${name}`);
  if (target) target.scrollTop = 0;
}
function goHome() { showView("home"); }

/* ---------- утилиты ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function letters(i) { return ["А", "Б", "В", "Г"][i] || String(i + 1); }

/* ---------- запуск викторины ---------- */
function startQuiz(topic = state.topic) {
  state.topic = topic;
  const pool = topic === "all" ? QUESTIONS : QUESTIONS.filter(q => q.topic === Number(topic));
  state.deck = shuffle(pool).map(q => {
    const order = shuffle(q.options.map((_, i) => i));
    return {
      ...q,
      order,
      correctPos: order.indexOf(q.correct)
    };
  });
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  state.locked = false;
  state.finished = false;
  showView("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = state.deck[state.index];
  if (!q) return finishQuiz();
  state.locked = false;

  $("#qIndex").textContent = state.index + 1;
  $("#qTotal").textContent = state.deck.length;
  $("#quizTopic").textContent = TOPIC_NAMES[q.topic] || "Викторина";
  $("#scoreNow").textContent = state.score;
  $("#streakNow").textContent = state.streak;
  $("#streakPill").hidden = state.streak < 2;
  $("#progressFill").style.width = `${(state.index / state.deck.length) * 100}%`;

  $("#qKicker").textContent = `Вопрос ${state.index + 1} из ${state.deck.length}`;
  $("#qText").textContent = q.question;
  $("#qImg").src = q.image;
  $("#qImg").alt = q.caption;
  $("#qStamp").textContent = q.stamp;
  $("#qCaption").textContent = q.caption;

  const box = $("#options");
  box.innerHTML = "";
  q.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.dataset.pos = String(i);
    btn.innerHTML = `<span class="key">${letters(i)}</span><span class="txt"></span>`;
    $(".txt", btn).textContent = text;
    btn.addEventListener("click", () => answer(i));
    box.appendChild(btn);
  });

  const ex = $("#explain");
  ex.hidden = true;
  ex.classList.remove("bad");
  $("#explainText").textContent = "";
  const next = $("#nextBtn");
  next.disabled = true;
  next.innerHTML = state.index === state.deck.length - 1
    ? `Показать результат <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
    : `Следующий вопрос <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

  const card = $("#quizCard");
  card.classList.remove("swap");
  void card.offsetWidth;
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";
}

function answer(pos) {
  if (state.locked) return;
  state.locked = true;
  const q = state.deck[state.index];
  const correct = pos === q.correctPos;
  const opts = $$(".option", $("#options"));

  opts.forEach((btn, i) => {
    btn.classList.add("locked");
    btn.disabled = true;
    if (i === q.correctPos) btn.classList.add("correct");
    else if (i === pos) btn.classList.add("wrong");
    else btn.classList.add("dim");
  });

  state.answers.push({
    q,
    picked: pos,
    correct,
    pickedText: q.options[q.order[pos]],
    correctText: q.options[q.correct]
  });

  if (correct) {
    state.score++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    sfx.correct();
  } else {
    state.streak = 0;
    sfx.wrong();
  }

  $("#scoreNow").textContent = state.score;
  $("#streakNow").textContent = state.streak;
  $("#streakPill").hidden = state.streak < 2;

  const ex = $("#explain");
  ex.hidden = false;
  ex.classList.toggle("bad", !correct);
  $("#explainHead").textContent = correct ? "Верно!" : "Не совсем";
  $("#explainText").textContent = q.explain;

  $("#nextBtn").disabled = false;
  $("#progressFill").style.width = `${((state.index + 1) / state.deck.length) * 100}%`;
}

function nextQuestion() {
  if (!state.locked) return;
  if (state.index >= state.deck.length - 1) {
    finishQuiz();
    return;
  }
  state.index++;
  sfx.click();
  renderQuestion();
}

/* ---------- результат ---------- */
const RANKS = [
  { min: 95, title: "Клеточный биолог", sub: "Блестяще! Ты видишь клетку так, будто сам смотришь в микроскоп." },
  { min: 80, title: "Юный цитолог", sub: "Очень сильный результат. Осталось отшлифовать пару деталей." },
  { min: 65, title: "Внимательный исследователь", sub: "Хорошая работа. Загляни в разбор ошибок — и станет ещё лучше." },
  { min: 45, title: "Начинающий микроскопист", sub: "Начало положено. Шпаргалка и повторный проход помогут закрепить материал." },
  { min: 0, title: "Стоит повторить §3–5", sub: "Не расстраивайся: открой шпаргалку, а потом пройди викторину снова." }
];

function finishQuiz() {
  const total = state.answers.length;
  if (!total) { goHome(); return; }
  state.finished = true;
  const percent = Math.round((state.score / total) * 100);
  if (percent > state.best) { state.best = percent; savePrefs(); }

  const rank = RANKS.find(r => percent >= r.min);
  $("#resultBadge").textContent = `Лучшая серия: ${state.bestStreak}`;
  $("#resultPercent").textContent = `${percent}%`;
  $("#resultScore").textContent = `${state.score} из ${total}`;
  $("#resultTitle").textContent = rank.title;
  $("#resultSub").textContent = rank.sub;

  const ring = $("#ringFill");
  const circumference = 2 * Math.PI * 86;
  ring.style.strokeDasharray = String(circumference);
  ring.style.strokeDashoffset = String(circumference);
  ring.style.stroke = percent >= 80 ? "var(--green)" : percent >= 50 ? "var(--gold)" : "var(--coral)";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ring.style.strokeDashoffset = String(circumference * (1 - percent / 100));
    });
  });

  renderBars();
  renderReview();

  if (percent >= 80) sfx.finish();
  showView("result");
  updateBestUI();
}

function renderBars() {
  const box = $("#resultBars");
  box.innerHTML = "";
  [3, 4, 5].forEach(topic => {
    const items = state.answers.filter(a => a.q.topic === topic);
    if (!items.length) return;
    const good = items.filter(a => a.correct).length;
    const pct = Math.round((good / items.length) * 100);
    const cls = pct >= 75 ? "" : pct >= 45 ? "mid" : "low";
    const row = document.createElement("div");
    row.className = "result-bar";
    row.innerHTML = `
      <div class="rb-top"><span>${TOPIC_NAMES[topic]}</span><b>${good} / ${items.length}</b></div>
      <div class="rb-track"><div class="rb-fill ${cls}"></div></div>`;
    box.appendChild(row);
    const fill = $(".rb-fill", row);
    requestAnimationFrame(() => { fill.style.width = `${pct}%`; });
  });
}

function renderReview() {
  const wrong = state.answers.filter(a => !a.correct);
  const card = $("#reviewCard");
  const list = $("#reviewList");
  list.innerHTML = "";
  if (!wrong.length) {
    card.hidden = true;
    return;
  }
  card.hidden = false;
  wrong.forEach(a => {
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <img src="${a.q.image}" alt="">
      <div>
        <div class="ri-q"></div>
        <div class="ri-a">Правильно: <span></span></div>
      </div>`;
    $(".ri-q", item).textContent = a.q.question;
    $(".ri-a span", item).textContent = a.correctText;
    list.appendChild(item);
  });
}

function updateBestUI() {
  const wrap = $("#bestStat");
  if (state.best > 0) {
    wrap.hidden = false;
    $("#bestScore").textContent = `${state.best}%`;
  } else {
    wrap.hidden = true;
  }
}

/* ---------- источники ---------- */
function renderCredits() {
  const list = $("#creditsList");
  list.innerHTML = "";
  const credits = window.PHOTO_CREDITS || {};
  Object.keys(credits).forEach(file => {
    const c = credits[file];
    const item = document.createElement("div");
    item.className = "credit-item";
    item.innerHTML = `
      <img src="assets/${file}" alt="" loading="lazy">
      <div class="ci-body">
        <div class="ci-t"></div>
        <div class="ci-a"></div>
      </div>
      <a target="_blank" rel="noopener noreferrer">Wikimedia ↗</a>`;
    $(".ci-t", item).textContent = c.title;
    $(".ci-a", item).textContent = `${c.author || "Автор не указан"} · ${c.license || "лицензия"}`;
    $("a", item).href = c.page;
    list.appendChild(item);
  });
}

/* ---------- полный сброс (5 кликов по бренду) ---------- */
let brandClicks = [];
function handleBrandClick() {
  const now = Date.now();
  brandClicks.push(now);
  brandClicks = brandClicks.filter(t => now - t < 1600);

  if (brandClicks.length >= 5) {
    brandClicks = [];
    fullReset();
    return;
  }
  goHome();
}

function fullReset() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  state.topic = "all";
  state.deck = [];
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  state.locked = false;
  state.finished = false;
  state.best = 0;
  state.sound = true;
  updateBestUI();
  updateSoundUI();
  $$(".topic-chip").forEach(c => c.classList.toggle("active", c.dataset.topic === "all"));
  showView("home");
  toast("Полный сброс: результаты и настройки очищены");
}

/* ---------- тост ---------- */
let toastTimer = null;
function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => { el.hidden = true; }, 300);
  }, 2600);
}

/* ---------- звук UI ---------- */
function updateSoundUI() {
  const btn = $("#soundBtn");
  btn.classList.toggle("muted", !state.sound);
  btn.setAttribute("aria-pressed", String(state.sound));
  btn.setAttribute("aria-label", state.sound ? "Звук включён" : "Звук выключен");
}

/* ---------- fullscreen ---------- */
function toggleFullscreen() {
  const btn = $("#fullscreenBtn");
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
  setTimeout(() => btn.classList.toggle("is-full", !!document.fullscreenElement), 120);
}

/* ---------- события ---------- */
function bind() {
  $("#brand").addEventListener("click", handleBrandClick);
  $$(".main-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const nav = btn.dataset.nav;
      if (nav === "quiz") {
        if (!state.deck.length || state.finished) startQuiz(state.topic);
        else showView("quiz");
      } else {
        showView(nav);
      }
      sfx.click();
    });
  });

  $$("[data-nav]").forEach(el => {
    if (el.closest(".main-nav")) return;
    el.addEventListener("click", () => showView(el.dataset.nav));
  });

  $$(".topic-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      state.topic = chip.dataset.topic;
      $$(".topic-chip").forEach(c => c.classList.toggle("active", c === chip));
      sfx.click();
    });
  });

  $("#startBtn").addEventListener("click", () => startQuiz(state.topic));
  $("#studyStartBtn").addEventListener("click", () => startQuiz(state.topic));

  $$(".strip-card").forEach(card => {
    card.addEventListener("click", () => {
      const t = card.dataset.openTopic;
      state.topic = t;
      $$(".topic-chip").forEach(c => c.classList.toggle("active", c.dataset.topic === t));
      startQuiz(t);
    });
  });

  $("#nextBtn").addEventListener("click", nextQuestion);
  $("#quitBtn").addEventListener("click", finishQuiz);
  $("#retryBtn").addEventListener("click", () => startQuiz(state.topic));
  $("#homeBtn").addEventListener("click", goHome);

  $("#soundBtn").addEventListener("click", () => {
    state.sound = !state.sound;
    savePrefs();
    updateSoundUI();
    if (state.sound) sfx.click();
  });

  $("#fullscreenBtn").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    $("#fullscreenBtn").classList.toggle("is-full", !!document.fullscreenElement);
  });

  $("#journalBtn").addEventListener("click", () => {
    $("#journalModal").hidden = false;
    sfx.click();
  });
  $$("[data-close-modal]").forEach(el => {
    el.addEventListener("click", () => { $("#journalModal").hidden = true; });
  });

  document.addEventListener("keydown", (e) => {
    if (!$("#journalModal").hidden && e.key === "Escape") {
      $("#journalModal").hidden = true;
      return;
    }
    if (!$("#view-quiz").classList.contains("active")) return;
    if (e.key >= "1" && e.key <= "4" && !state.locked) {
      answer(Number(e.key) - 1);
    } else if ((e.key === "Enter" || e.key === " ") && state.locked) {
      e.preventDefault();
      nextQuestion();
    }
  });
}

/* ---------- старт ---------- */
loadPrefs();
updateSoundUI();
updateBestUI();
bind();
renderCredits();
