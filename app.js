/* =========================================================
   НЕЙРО — логика викторины и нейрокарты
   ========================================================= */

(() => {
  "use strict";

  /* ---------- Данные викторины ---------- */
  const QUESTIONS = [
    {
      q: "Основная структурная и функциональная единица нервной системы — это…",
      options: ["Нейрон", "Нефрон", "Аксон", "Синапс"],
      correct: "Нейрон",
      explain: "Нейрон — клетка нервной ткани. Он состоит из тела, дендритов и аксона и способен принимать, проводить и передавать нервный импульс."
    },
    {
      q: "Что входит в центральную нервную систему?",
      options: ["Головной и спинной мозг", "Нервы и нервные узлы", "Только головной мозг", "Рецепторы и мышцы"],
      correct: "Головной и спинной мозг",
      explain: "ЦНС образована головным и спинным мозгом. Нервы, нервные узлы и окончания относят к периферической нервной системе."
    },
    {
      q: "Короткие ветвящиеся отростки нейрона, которые принимают сигналы, называются…",
      options: ["Дендриты", "Аксоны", "Синапсы", "Миелиновые оболочки"],
      correct: "Дендриты",
      explain: "Дендриты принимают сигналы от других клеток и проводят возбуждение к телу нейрона. Чем больше ветвлений, тем больше связей."
    },
    {
      q: "Длинный отросток, по которому импульс идёт от тела нейрона, — это…",
      options: ["Аксон", "Дендрит", "Синапс", "Нейроглия"],
      correct: "Аксон",
      explain: "Аксон проводит нервный импульс от тела клетки к другим нейронам или рабочим органам. У крупных нейронов он может достигать метра в длину."
    },
    {
      q: "Место передачи сигнала от одного нейрона к другому называется…",
      options: ["Синапс", "Рефлекс", "Аксон", "Ганглий"],
      correct: "Синапс",
      explain: "В синапсе сигнал передаётся с помощью химических веществ — нейромедиаторов. Это ключевое звено связи между нейронами."
    },
    {
      q: "Какой отдел мозга отвечает за координацию движений и равновесие?",
      options: ["Мозжечок", "Продолговатый мозг", "Гипоталамус", "Кора больших полушарий"],
      correct: "Мозжечок",
      explain: "Мозжечок согласует движения, поддерживает равновесие и мышечный тонус. При его повреждении движения становятся неточными."
    },
    {
      q: "Центры дыхания и сердечной деятельности расположены в…",
      options: ["Продолговатом мозге", "Мозжечке", "Среднем мозге", "Мозолистом теле"],
      correct: "Продолговатом мозге",
      explain: "В продолговатом мозге находятся жизненно важные центры: дыхания, сердечной деятельности и сосудистого тонуса."
    },
    {
      q: "Ответная реакция организма на раздражение при участии нервной системы — это…",
      options: ["Рефлекс", "Синапс", "Импульс", "Анализатор"],
      correct: "Рефлекс",
      explain: "Рефлекс — ответная реакция организма на раздражение, которая осуществляется при участии нервной системы. Пример — отдёргивание руки от горячего."
    },
    {
      q: "Путь, по которому нервный импульс проходит от рецептора до рабочего органа, называют…",
      options: ["Рефлекторной дугой", "Нервным узлом", "Синапсом", "Нервным волокном"],
      correct: "Рефлекторной дугой",
      explain: "Рефлекторная дуга включает рецептор, чувствительный нейрон, ЦНС, двигательный нейрон и рабочий орган."
    },
    {
      q: "Какая часть нервной системы регулирует работу внутренних органов?",
      options: ["Вегетативная (автономная)", "Соматическая", "Центральная", "Периферическая"],
      correct: "Вегетативная (автономная)",
      explain: "Вегетативная нервная система управляет внутренними органами, сосудами и железами — часто без нашего сознательного участия."
    },
    {
      q: "Серое вещество головного и спинного мозга образовано…",
      options: ["Телами нейронов", "Аксонами с миелиновой оболочкой", "Клетками нейроглии", "Кровеносными сосудами"],
      correct: "Телами нейронов",
      explain: "Серое вещество — это тела нейронов и их короткие отростки. Белое вещество образовано аксонами, покрытыми миелином."
    },
    {
      q: "Высшая нервная деятельность, мышление и память связаны с…",
      options: ["Корой больших полушарий", "Мозжечком", "Продолговатым мозгом", "Спинным мозгом"],
      correct: "Корой больших полушарий",
      explain: "Кора больших полушарий — центр высшей нервной деятельности: мышления, памяти, речи, сознания и произвольного поведения."
    }
  ];

  /* ---------- Данные нейрокарты ---------- */
  const MAPS = {
    neuron: {
      title: "Строение нейрона",
      sub: "Перетащите подписи к нужным частям. На сенсорном экране можно нажать на подпись, а затем на зону.",
      type: "neuron",
      zones: [
        { id: "dendrites", label: "Дендриты", num: 1, x: 13.33, y: 17.86 },
        { id: "axon", label: "Аксон", num: 2, x: 41.11, y: 17.86 },
        { id: "synapse", label: "Синапс", num: 3, x: 88.89, y: 17.86 },
        { id: "soma", label: "Тело нейрона", num: 4, x: 33.33, y: 83.93 },
        { id: "myelin", label: "Миелиновая оболочка", num: 5, x: 72.22, y: 83.93 }
      ]
    },
    reflex: {
      title: "Рефлекторная дуга",
      sub: "Расставьте этапы в правильном порядке: от раздражения до ответной реакции организма.",
      type: "reflex",
      zones: [
        { id: "stimulus", label: "Раздражитель", num: 1 },
        { id: "receptor", label: "Рецептор", num: 2 },
        { id: "sensory", label: "Чувствительный нейрон", num: 3 },
        { id: "cns", label: "ЦНС · вставочный нейрон", num: 4 },
        { id: "motor", label: "Двигательный нейрон", num: 5 },
        { id: "effector", label: "Рабочий орган", num: 6 }
      ]
    }
  };

  const TOTAL = QUESTIONS.length;
  const RING_C = 2 * Math.PI * 96;

  /* ---------- Состояние ---------- */
  const state = {
    view: "home",
    quiz: {
      started: false,
      finished: false,
      deck: [],
      index: 0,
      score: 0,
      answered: false
    },
    map: {
      mode: "neuron",
      initialized: false,
      placed: {},
      chipOrder: [],
      selected: null,
      checked: false,
      results: null
    }
  };

  /* ---------- Утилиты ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function getBest() {
    try {
      return Math.max(0, Math.min(TOTAL, parseInt(localStorage.getItem("neuro.best") || "0", 10) || 0));
    } catch {
      return 0;
    }
  }

  function setBest(value) {
    try { localStorage.setItem("neuro.best", String(value)); } catch { /* ignore */ }
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  /* ---------- Навигация ---------- */
  function setView(view) {
    state.view = view;
    $$(".view").forEach((el) => {
      const active = el.dataset.view === view;
      el.classList.toggle("active", active);
      if (active) el.scrollTop = 0;
    });
    const navKey = view === "result" ? "quiz" : view;
    $$("[data-nav]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.nav === navKey);
    });
  }

  function startQuiz() {
    state.quiz = {
      started: true,
      finished: false,
      deck: shuffle(QUESTIONS).map((q) => ({ ...q, options: shuffle(q.options) })),
      index: 0,
      score: 0,
      answered: false
    };
    renderQuestion();
    setView("quiz");
  }

  function renderQuestion() {
    const q = state.quiz.deck[state.quiz.index];
    if (!q) return;

    $("#qNum").textContent = state.quiz.index + 1;
    $("#score").textContent = state.quiz.score;
    $("#progressFill").style.width = `${((state.quiz.index + (state.quiz.answered ? 1 : 0)) / TOTAL) * 100}%`;
    $("#qText").textContent = q.q;

    const options = $("#qOptions");
    options.innerHTML = q.options.map((text, i) => `
      <button class="option" type="button" data-option="${i}">
        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
        <span>${escapeHTML(text)}</span>
      </button>
    `).join("");

    const explain = $("#qExplain");
    explain.hidden = true;
    explain.innerHTML = "";

    const next = $("#nextBtn");
    next.disabled = true;
    next.innerHTML = `Дальше <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

    state.quiz.answered = false;
  }

  function answerQuestion(index) {
    if (state.quiz.answered) return;
    const q = state.quiz.deck[state.quiz.index];
    const chosen = q.options[index];
    if (chosen == null) return;

    state.quiz.answered = true;
    const isRight = chosen === q.correct;
    if (isRight) state.quiz.score += 1;

    $$("#qOptions .option").forEach((btn, i) => {
      const text = q.options[i];
      btn.disabled = true;
      if (text === q.correct) btn.classList.add("correct");
      else if (i === index) btn.classList.add("wrong");
      else btn.classList.add("dim");
    });

    const explain = $("#qExplain");
    explain.hidden = false;
    explain.innerHTML = isRight
      ? `<b>Верно.</b> ${escapeHTML(q.explain)}`
      : `<b>Правильный ответ: ${escapeHTML(q.correct)}.</b> ${escapeHTML(q.explain)}`;

    $("#score").textContent = state.quiz.score;
    $("#progressFill").style.width = `${((state.quiz.index + 1) / TOTAL) * 100}%`;

    const next = $("#nextBtn");
    next.disabled = false;
    if (state.quiz.index === TOTAL - 1) {
      next.innerHTML = `Результат <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
    }
  }

  function nextQuestion() {
    if (!state.quiz.answered) return;
    if (state.quiz.index >= TOTAL - 1) {
      showResult();
      return;
    }
    state.quiz.index += 1;
    renderQuestion();
  }

  function showResult() {
    state.quiz.finished = true;
    const correct = state.quiz.score;
    const percent = Math.round((correct / TOTAL) * 100);
    const best = Math.max(getBest(), correct);
    setBest(best);

    $("#resultPercent").textContent = `${percent}%`;
    $("#resultCorrect").textContent = String(correct);
    $("#resultRight").textContent = String(correct);
    $("#resultWrong").textContent = String(TOTAL - correct);
    $("#resultBest").textContent = `${best}/${TOTAL}`;

    const title = $("#resultTitle");
    const desc = $("#resultDesc");
    if (correct === TOTAL) {
      title.textContent = "Идеальный импульс!";
      desc.textContent = "Все 12 связей сработали без ошибок. Нервная система в полном порядке — можно вести урок дальше.";
    } else if (correct >= 10) {
      title.textContent = "Мозг в тонусе";
      desc.textContent = "Отличный результат: вы уверенно ориентируетесь в строении и работе нервной системы.";
    } else if (correct >= 7) {
      title.textContent = "Хороший старт";
      desc.textContent = "База есть. Повторите рефлекторную дугу и отделы мозга — и результат обязательно вырастет.";
    } else if (correct >= 4) {
      title.textContent = "Импульс разгоняется";
      desc.textContent = "Часть связей пока теряется. Соберите нейрокарту, чтобы разложить тему по полочкам.";
    } else {
      title.textContent = "Нужен новый импульс";
      desc.textContent = "Начните с нейрокарты: она поможет собрать схему по частям и запомнить главное.";
    }

    updateBestStat();
    setView("result");

    const ring = $("#ringFill");
    ring.style.strokeDasharray = String(RING_C);
    ring.style.strokeDashoffset = String(RING_C);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ring.style.strokeDashoffset = String(RING_C * (1 - percent / 100));
      });
    });

    if (percent >= 60) fireConfetti(percent === 100 ? 170 : 110);
  }

  function updateBestStat() {
    const best = getBest();
    const stat = $("#bestStat");
    if (!stat) return;
    if (best > 0) {
      $("#bestScore").textContent = `${best}/${TOTAL}`;
      stat.hidden = false;
    } else {
      stat.hidden = true;
    }
  }

  /* ---------- Нейрокарта ---------- */
  function initMap(mode) {
    state.map = {
      mode,
      initialized: true,
      placed: {},
      chipOrder: shuffle(MAPS[mode].zones.map((z) => z.id)),
      selected: null,
      checked: false,
      results: null
    };
    const data = MAPS[mode];
    $("#mapTitle").textContent = data.title;
    $("#mapSub").textContent = data.sub;
    $$("[data-map]").forEach((btn) => {
      const active = btn.dataset.map === mode;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    $("#mapFeedback").hidden = true;
    renderMap();
  }

  function resetMap() {
    initMap(state.map.mode);
    showToast("Схема сброшена");
  }

  function neuronSVG() {
    return `
      <svg class="diagram" viewBox="0 0 900 560" aria-hidden="true">
        <defs>
          <linearGradient id="diagramFiber" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#b9ffd6"/>
            <stop offset=".55" stop-color="#7cf5b0"/>
            <stop offset="1" stop-color="#63d7e8"/>
          </linearGradient>
          <radialGradient id="diagramSoma" cx="35%" cy="30%" r="80%">
            <stop offset="0" stop-color="#1d6a4f"/>
            <stop offset=".65" stop-color="#0c3a2b"/>
            <stop offset="1" stop-color="#072219"/>
          </radialGradient>
          <radialGradient id="diagramNucleus" cx="35%" cy="30%" r="80%">
            <stop offset="0" stop-color="#e6fff1"/>
            <stop offset=".45" stop-color="#7cf5b0"/>
            <stop offset="1" stop-color="#1e8f62"/>
          </radialGradient>
          <filter id="diagramGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <g filter="url(#diagramGlow)">
          <g fill="none" stroke="url(#diagramFiber)" stroke-width="3" stroke-linecap="round">
            <path d="M252 272C220 246 198 216 178 190C162 170 140 160 116 154"/>
            <path d="M178 190C174 166 176 146 186 124"/>
            <path d="M178 190C156 188 138 180 122 168"/>
            <path d="M246 336C218 360 192 374 164 384C142 392 126 406 114 422"/>
            <path d="M164 384C170 404 166 420 156 436"/>
            <path d="M266 258C262 228 272 204 288 182C298 168 302 150 302 132"/>
            <path d="M288 182C306 174 320 162 330 146"/>
            <path d="M336 340C346 366 364 388 386 406C400 418 410 434 414 450"/>
            <path d="M386 406C406 406 422 398 434 386"/>
            <path d="M356 302C430 302 500 296 570 296C610 296 650 296 690 296"/>
            <path d="M690 296C714 270 734 250 756 234"/>
            <path d="M690 296C718 296 742 296 768 296"/>
            <path d="M690 296C714 322 734 344 756 360"/>
          </g>

          <g fill="#b9ffd6">
            <circle cx="116" cy="154" r="4"/><circle cx="186" cy="124" r="3.6"/><circle cx="122" cy="168" r="3"/>
            <circle cx="114" cy="422" r="4"/><circle cx="156" cy="436" r="3.6"/><circle cx="302" cy="132" r="4"/>
            <circle cx="330" cy="146" r="3"/><circle cx="414" cy="450" r="4"/><circle cx="434" cy="386" r="3"/>
            <circle cx="756" cy="234" r="4.4"/><circle cx="768" cy="296" r="4.4"/><circle cx="756" cy="360" r="4.4"/>
          </g>

          <g fill="rgba(9,45,33,.88)" stroke="rgba(124,245,176,.55)" stroke-width="1.5">
            <rect x="386" y="279" width="62" height="34" rx="17" transform="rotate(-2 417 296)"/>
            <rect x="458" y="279" width="62" height="34" rx="17" transform="rotate(-2 489 296)"/>
            <rect x="530" y="279" width="62" height="34" rx="17" transform="rotate(-2 561 296)"/>
          </g>

          <path class="part-fill" d="M300 242C342 240 368 266 366 302C364 340 336 362 298 360C260 358 236 330 238 296C240 264 264 244 300 242Z" fill="url(#diagramSoma)"/>
          <circle class="nucleus" cx="298" cy="300" r="26" fill="url(#diagramNucleus)" opacity=".92"/>
          <circle cx="290" cy="292" r="7" fill="#fff" opacity=".32"/>
          <circle cx="330" cy="330" r="3.4" fill="#7cf5b0" opacity=".8"/>
          <circle cx="264" cy="322" r="2.6" fill="#63d7e8" opacity=".8"/>
        </g>

        <g class="leaders">
          <path class="leader" d="M120 148 L138 180"/>
          <circle class="leader-dot" cx="138" cy="180" r="3"/>
          <path class="leader" d="M370 146 L370 288"/>
          <circle class="leader-dot" cx="370" cy="288" r="3"/>
          <path class="leader" d="M800 146 L770 244"/>
          <circle class="leader-dot" cx="770" cy="244" r="3"/>
          <path class="leader" d="M300 424 L292 364"/>
          <circle class="leader-dot" cx="292" cy="364" r="3"/>
          <path class="leader" d="M650 424 L568 314"/>
          <circle class="leader-dot" cx="568" cy="314" r="3"/>
        </g>
      </svg>
    `;
  }

  function zoneHTML(zone, type) {
    const placed = state.map.placed[zone.id];
    const chip = placed ? MAPS[state.map.mode].zones.find((z) => z.id === placed) : null;
    const filled = Boolean(chip);
    const result = state.map.results ? state.map.results[zone.id] : null;
    const cls = [
      type === "reflex" ? "reflex-slot" : "drop-zone",
      filled ? "filled" : "",
      result === true ? "correct" : "",
      result === false ? "wrong" : "",
      state.map.selected && !filled ? "selected" : ""
    ].filter(Boolean).join(" ");
    const style = type === "neuron" ? ` style="left:${zone.x}%;top:${zone.y}%"` : "";
    const aria = filled
      ? `Зона ${zone.num}: ${chip.label}. Нажмите, чтобы убрать подпись.`
      : `Зона ${zone.num}. Пусто.`;
    const caption = type === "reflex" ? `<span class="slot-caption">шаг ${zone.num}</span>` : "";
    return `
      <button class="${cls}" type="button" data-zone="${zone.id}" aria-label="${escapeHTML(aria)}"${style}>
        <span class="zone-num">${zone.num}</span>
        <span class="zone-text">${filled ? escapeHTML(chip.label) : ""}</span>
        ${caption}
      </button>
    `;
  }

  function renderMap() {
    const data = MAPS[state.map.mode];
    const body = $("#mapBody");
    if (state.map.mode === "neuron") {
      body.innerHTML = `<div class="neuron-board">${neuronSVG()}${data.zones.map((z) => zoneHTML(z, "neuron")).join("")}</div>`;
    } else {
      body.innerHTML = `<div class="reflex-board">${data.zones.map((z) => zoneHTML(z, "reflex")).join("")}</div>`;
    }

    const used = new Set(Object.values(state.map.placed));
    const chips = state.map.chipOrder
      .filter((id) => !used.has(id))
      .map((id) => {
        const z = data.zones.find((x) => x.id === id);
        return `<button class="chip${state.map.selected === id ? " selected" : ""}" type="button" data-chip="${id}">${escapeHTML(z.label)}</button>`;
      });

    $("#chipsTray").innerHTML = chips.length
      ? chips.join("")
      : `<span class="tray-empty">Все подписи размещены — проверьте схему.</span>`;

    if (state.map.checked && state.map.results) {
      const right = Object.values(state.map.results).filter(Boolean).length;
      showMapFeedback(right === data.zones.length, right, data.zones.length);
    }
  }

  function clearMapCheck() {
    state.map.checked = false;
    state.map.results = null;
    const fb = $("#mapFeedback");
    if (fb) fb.hidden = true;
  }

  function placeChip(chipId, zoneId) {
    if (!chipId || !zoneId) return;
    clearMapCheck();

    // если подпись уже стояла в другой зоне — убираем оттуда
    for (const [zid, cid] of Object.entries(state.map.placed)) {
      if (cid === chipId) delete state.map.placed[zid];
    }
    // если зона была занята — старая подпись вернётся в лоток
    state.map.placed[zoneId] = chipId;
    state.map.selected = null;
    renderMap();
  }

  function removeFromZone(zoneId) {
    const chipId = state.map.placed[zoneId];
    if (!chipId) return;
    delete state.map.placed[zoneId];
    state.map.selected = chipId;
    clearMapCheck();
    renderMap();
  }

  function checkMap() {
    const data = MAPS[state.map.mode];
    const filledCount = Object.keys(state.map.placed).length;
    if (filledCount < data.zones.length) {
      showToast(`Заполните все зоны: ${filledCount} из ${data.zones.length}`);
      return;
    }

    const results = {};
    let right = 0;
    data.zones.forEach((z) => {
      const ok = state.map.placed[z.id] === z.id;
      results[z.id] = ok;
      if (ok) right += 1;
    });
    state.map.checked = true;
    state.map.results = results;
    state.map.selected = null;
    renderMap();

    if (right === data.zones.length) {
      fireConfetti(90);
    } else {
      showToast(`Верно ${right} из ${data.zones.length} — проверьте красные зоны`);
    }
  }

  function showMapFeedback(success, right, total) {
    const fb = $("#mapFeedback");
    if (!fb) return;
    fb.hidden = false;
    fb.classList.toggle("error", !success);
    if (success) {
      fb.innerHTML = `
        <div class="fb-title"><span class="fb-icon">✓</span><span>Схема собрана верно! Все ${total} элементов на своих местах.</span></div>
        <div class="fb-actions">
          <button class="btn btn-ghost btn-sm" type="button" data-fb="again">Ещё раз</button>
          <button class="btn btn-primary btn-sm" type="button" data-fb="quiz">К викторине</button>
        </div>
      `;
    } else {
      fb.innerHTML = `
        <div class="fb-title"><span class="fb-icon">!</span><span>Верно ${right} из ${total}. Красные зоны стоит перепроверить.</span></div>
        <div class="fb-actions">
          <button class="btn btn-ghost btn-sm" type="button" data-fb="clear-wrong">Убрать ошибки</button>
          <button class="btn btn-ghost btn-sm" type="button" data-fb="again">Сбросить</button>
        </div>
      `;
    }
  }

  function clearWrong() {
    if (!state.map.results) return;
    for (const [zid, ok] of Object.entries(state.map.results)) {
      if (!ok) delete state.map.placed[zid];
    }
    state.map.selected = null;
    clearMapCheck();
    renderMap();
    showToast("Ошибки убраны — попробуйте снова");
  }

  /* ---------- Перетаскивание подписей ---------- */
  let drag = null;
  let suppressChipClick = false;
  let suppressZoneClick = false;

  function chipPointerDown(e) {
    const chip = e.target.closest(".chip");
    if (!chip || e.button > 0) return;
    drag = {
      id: chip.dataset.chip,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
      ghost: null,
      pointerId: e.pointerId
    };
    chip.classList.add("dragging");
    window.addEventListener("pointermove", chipPointerMove, { passive: false });
    window.addEventListener("pointerup", chipPointerUp);
    window.addEventListener("pointercancel", chipPointerCancel);
  }

  function chipPointerMove(e) {
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 7) return;
    drag.moved = true;
    e.preventDefault();

    if (!drag.ghost) {
      const source = $(`.chip[data-chip="${drag.id}"]`);
      if (!source) return;
      drag.ghost = source.cloneNode(true);
      drag.ghost.classList.remove("selected");
      drag.ghost.classList.add("drag-ghost");
      document.body.appendChild(drag.ghost);
    }
    drag.ghost.style.left = `${e.clientX}px`;
    drag.ghost.style.top = `${e.clientY}px`;

    $$(".drop-zone, .reflex-slot").forEach((z) => z.classList.remove("drag-over"));
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const zone = el && el.closest(".drop-zone, .reflex-slot");
    if (zone) zone.classList.add("drag-over");
  }

  function chipPointerUp(e) {
    if (!drag) return;
    const { id, moved } = drag;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const zone = el && el.closest(".drop-zone, .reflex-slot");
    cleanupDrag();

    if (moved) {
      suppressChipClick = true;
      suppressZoneClick = true;
      setTimeout(() => {
        suppressChipClick = false;
        suppressZoneClick = false;
      }, 0);
      if (zone) placeChip(id, zone.dataset.zone);
    }
  }

  function chipPointerCancel() {
    cleanupDrag();
  }

  function cleanupDrag() {
    if (!drag) return;
    const chip = $(`.chip[data-chip="${drag.id}"]`);
    if (chip) chip.classList.remove("dragging");
    if (drag.ghost) drag.ghost.remove();
    $$(".drop-zone, .reflex-slot").forEach((z) => z.classList.remove("drag-over"));
    window.removeEventListener("pointermove", chipPointerMove);
    window.removeEventListener("pointerup", chipPointerUp);
    window.removeEventListener("pointercancel", chipPointerCancel);
    drag = null;
  }

  /* ---------- Фон: нейросеть ---------- */
  const bgCanvas = $("#bgCanvas");
  const bgCtx = bgCanvas ? bgCanvas.getContext("2d") : null;
  let bgNodes = [];
  let bgW = 0;
  let bgH = 0;
  let bgDPR = 1;
  let bgRaf = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initBackground() {
    if (!bgCanvas || !bgCtx) return;
    bgW = window.innerWidth;
    bgH = window.innerHeight;
    bgDPR = Math.min(window.devicePixelRatio || 1, 2);
    bgCanvas.width = Math.floor(bgW * bgDPR);
    bgCanvas.height = Math.floor(bgH * bgDPR);
    bgCtx.setTransform(bgDPR, 0, 0, bgDPR, 0, 0);

    const count = Math.max(28, Math.min(78, Math.floor((bgW * bgH) / 26000)));
    bgNodes = Array.from({ length: count }, () => ({
      x: Math.random() * bgW,
      y: Math.random() * bgH,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.5 + 0.7,
      hue: Math.random() > 0.72 ? "cyan" : "green",
      phase: Math.random() * Math.PI * 2
    }));
  }

  function drawBackground(time = 0) {
    if (!bgCtx) return;
    bgCtx.clearRect(0, 0, bgW, bgH);
    const maxDist = Math.min(170, Math.max(110, bgW * 0.09));
    const t = time * 0.00016;

    for (let i = 0; i < bgNodes.length; i++) {
      const a = bgNodes[i];
      if (!reduceMotion) {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = bgW + 20;
        if (a.x > bgW + 20) a.x = -20;
        if (a.y < -20) a.y = bgH + 20;
        if (a.y > bgH + 20) a.y = -20;
      }
      for (let j = i + 1; j < bgNodes.length; j++) {
        const b = bgNodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.11;
          bgCtx.strokeStyle = `rgba(124,245,176,${alpha})`;
          bgCtx.lineWidth = 0.7;
          bgCtx.beginPath();
          bgCtx.moveTo(a.x, a.y);
          bgCtx.lineTo(b.x, b.y);
          bgCtx.stroke();
        }
      }
    }

    for (const n of bgNodes) {
      const pulse = 0.55 + Math.sin(t + n.phase) * 0.25;
      const color = n.hue === "cyan" ? "99,215,232" : "124,245,176";
      bgCtx.beginPath();
      bgCtx.arc(n.x, n.y, n.r + 4.5, 0, Math.PI * 2);
      bgCtx.fillStyle = `rgba(${color},${0.035 * pulse})`;
      bgCtx.fill();
      bgCtx.beginPath();
      bgCtx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      bgCtx.fillStyle = `rgba(${color},${0.42 + pulse * 0.25})`;
      bgCtx.fill();
    }
  }

  function loopBackground(time) {
    drawBackground(time);
    if (!reduceMotion) bgRaf = requestAnimationFrame(loopBackground);
  }

  /* ---------- Конфетти ---------- */
  const confettiCanvas = $("#confettiCanvas");
  const confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;
  let confetti = [];
  let confettiRaf = 0;
  let confettiW = 0;
  let confettiH = 0;
  const confettiColors = ["#7cf5b0", "#63d7e8", "#ffd37a", "#b9ffd6", "#4ee6a0"];

  function resizeConfetti() {
    if (!confettiCanvas || !confettiCtx) return;
    confettiW = window.innerWidth;
    confettiH = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    confettiCanvas.width = Math.floor(confettiW * dpr);
    confettiCanvas.height = Math.floor(confettiH * dpr);
    confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function fireConfetti(count = 120) {
    if (!confettiCtx || reduceMotion) return;
    resizeConfetti();
    for (let i = 0; i < count; i++) {
      confetti.push({
        x: confettiW * (0.2 + Math.random() * 0.6),
        y: confettiH * (0.16 + Math.random() * 0.1),
        vx: (Math.random() - 0.5) * 7,
        vy: Math.random() * -5 - 2,
        g: 0.14 + Math.random() * 0.08,
        w: 4 + Math.random() * 6,
        h: 3 + Math.random() * 5,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.22,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        life: 1
      });
    }
    if (!confettiRaf) confettiRaf = requestAnimationFrame(tickConfetti);
  }

  function tickConfetti() {
    if (!confettiCtx) { confettiRaf = 0; return; }
    confettiCtx.clearRect(0, 0, confettiW, confettiH);
    confetti = confetti.filter((p) => p.life > 0 && p.y < confettiH + 40);
    for (const p of confetti) {
      p.vy += p.g;
      p.vx *= 0.995;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life -= 0.0035;
      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate(p.rot);
      confettiCtx.globalAlpha = Math.max(0, p.life);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confettiCtx.restore();
    }
    if (confetti.length) {
      confettiRaf = requestAnimationFrame(tickConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiW, confettiH);
      confettiRaf = 0;
    }
  }

  /* ---------- Полноэкранный режим ---------- */
  function updateFullscreenBtn() {
    const btn = $("#fullscreenBtn");
    if (!btn) return;
    const isFull = Boolean(document.fullscreenElement);
    btn.classList.toggle("is-full", isFull);
    btn.setAttribute("aria-label", isFull ? "Выйти из полноэкранного режима" : "На весь экран");
    btn.title = isFull ? "Выйти из полноэкранного режима (F)" : "На весь экран (F)";
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch {
      showToast("Полноэкранный режим недоступен в этом браузере");
    }
  }

  /* ---------- Полный сброс: 5 нажатий по логотипу ---------- */
  let brandClicks = 0;
  let brandTimer = null;

  function fullReset() {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch { /* ignore */ }
    showToast("Полный сброс…");
    setTimeout(() => {
      const url = `${location.pathname}?reset=${Date.now()}`;
      location.replace(url);
    }, 420);
  }

  /* ---------- События ---------- */
  function bindEvents() {
    $("#brand")?.addEventListener("click", () => {
      brandClicks += 1;
      clearTimeout(brandTimer);
      brandTimer = setTimeout(() => { brandClicks = 0; }, 2600);
      if (brandClicks >= 5) {
        fullReset();
        return;
      }
      setView("home");
    });

    $$("[data-nav]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.nav;
        if (target === "home") setView("home");
        else if (target === "quiz") {
          if (!state.quiz.started || state.quiz.finished) startQuiz();
          else setView("quiz");
        } else if (target === "map") {
          if (!state.map.initialized) initMap("neuron");
          setView("map");
        }
      });
    });

    $$("[data-start]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.start === "quiz") startQuiz();
        else {
          initMap("neuron");
          setView("map");
        }
      });
    });

    $("#qOptions")?.addEventListener("click", (e) => {
      const option = e.target.closest(".option");
      if (!option || option.disabled) return;
      answerQuestion(Number(option.dataset.option));
    });

    $("#nextBtn")?.addEventListener("click", nextQuestion);
    $("#retryBtn")?.addEventListener("click", startQuiz);

    $("#mapReset")?.addEventListener("click", resetMap);
    $("#mapCheck")?.addEventListener("click", checkMap);

    $$("[data-map]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.map !== state.map.mode) initMap(btn.dataset.map);
      });
    });

    $("#chipsTray")?.addEventListener("pointerdown", chipPointerDown);

    $("#chipsTray")?.addEventListener("click", (e) => {
      if (suppressChipClick) {
        suppressChipClick = false;
        return;
      }
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const id = chip.dataset.chip;
      state.map.selected = state.map.selected === id ? null : id;
      renderMap();
    });

    $("#chipsTray")?.addEventListener("keydown", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = chip.dataset.chip;
        state.map.selected = state.map.selected === id ? null : id;
        renderMap();
      }
    });

    $("#mapBody")?.addEventListener("click", (e) => {
      if (suppressZoneClick) {
        suppressZoneClick = false;
        return;
      }
      const zone = e.target.closest("[data-zone]");
      if (!zone) return;
      const zoneId = zone.dataset.zone;
      if (state.map.selected) placeChip(state.map.selected, zoneId);
      else if (state.map.placed[zoneId]) removeFromZone(zoneId);
      else showToast("Сначала выберите подпись из лотка");
    });

    $("#mapFeedback")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-fb]");
      if (!btn) return;
      if (btn.dataset.fb === "again") resetMap();
      else if (btn.dataset.fb === "clear-wrong") clearWrong();
      else if (btn.dataset.fb === "quiz") startQuiz();
    });

    $("#fullscreenBtn")?.addEventListener("click", toggleFullscreen);
    document.addEventListener("fullscreenchange", updateFullscreenBtn);

    document.addEventListener("keydown", (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "f" || e.key === "F" || e.key === "а" || e.key === "А") {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          toggleFullscreen();
          return;
        }
      }

      if (state.view !== "quiz") return;

      if (e.key >= "1" && e.key <= "4") {
        if (!state.quiz.answered) {
          e.preventDefault();
          answerQuestion(Number(e.key) - 1);
        }
        return;
      }

      if (e.key === "Enter") {
        const targetIsButton = e.target && e.target.closest && e.target.closest("button");
        if (!targetIsButton) {
          e.preventDefault();
          nextQuestion();
        }
      }
    });

    window.addEventListener("resize", () => {
      initBackground();
      resizeConfetti();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (bgRaf) cancelAnimationFrame(bgRaf);
        bgRaf = 0;
      } else if (!reduceMotion && !bgRaf) {
        bgRaf = requestAnimationFrame(loopBackground);
      }
    });
  }

  /* ---------- Старт ---------- */
  function boot() {
    initBackground();
    resizeConfetti();
    bindEvents();
    updateBestStat();
    updateFullscreenBtn();
    drawBackground(0);
    if (!reduceMotion) bgRaf = requestAnimationFrame(loopBackground);

    // сброс по ?reset= — просто гарантируем чистое стартовое состояние
    setView("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
