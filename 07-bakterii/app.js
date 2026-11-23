/* =========================================================
   БАКТЕРИИ · логика мини-игры по § 7
   Порядок вопросов и вариантов ответов фиксирован.
   ========================================================= */
(() => {
  "use strict";

  const BUILD_PARTS = [
    { id: "capsule",    label: "Капсула",     x: 12.2, y: 15.2, info: "Слизистая капсула защищает клетку от высыхания и помогает ей прилипать к поверхностям." },
    { id: "wall",       label: "Оболочка",    x: 12.2, y: 39.1, info: "Плотная оболочка придаёт бактерии форму и защищает её." },
    { id: "membrane",   label: "Мембрана",    x: 12.2, y: 63.0, info: "Мембрана отделяет содержимое клетки от внешней среды и регулирует обмен веществ." },
    { id: "cytoplasm",  label: "Цитоплазма",  x: 87.8, y: 19.6, info: "Внутреннее содержимое клетки. Здесь проходят все процессы жизнедеятельности." },
    { id: "chromosome", label: "Хромосома",   x: 87.8, y: 45.7, info: "Одна хромосома — единственная наследственная структура. Оформленного ядра у бактерии нет." },
    { id: "flagellum",  label: "Жгутик",      x: 87.8, y: 74.0, info: "Жгутик помогает многим бактериям передвигаться." }
  ];

  const FORMS = [
    { img: "cocci.jpg",    answer: "Кокки",    note: "Шаровидные клетки, часто собраны в гроздья или цепочки." },
    { img: "bacilli.jpg",  answer: "Бациллы",  note: "Палочковидные бактерии — отсюда и само название «бактерия»." },
    { img: "spirilla.jpg", answer: "Спириллы", note: "Извитые клетки в форме спирали." },
    { img: "vibrio.jpg",   answer: "Вибрионы", note: "Изогнутые палочки, напоминающие запятую." }
  ];
  const FORM_OPTIONS = ["Кокки", "Бациллы", "Спириллы", "Вибрионы"];

  const BUCKETS = [
    { id: "nature", icon: "🍃", title: "Санитары природы", sub: "разлагают остатки" },
    { id: "useful", icon: "🥛", title: "Помощники человека", sub: "еда и здоровье" },
    { id: "harm",   icon: "⚠️", title: "Вредные бактерии", sub: "болезни и порча" }
  ];
  const ROLE_ITEMS = [
    { id: "r1", bucket: "nature", text: "Разлагают остатки",       img: "compost.jpg" },
    { id: "r2", bucket: "nature", text: "Возвращают соли в почву", img: "silage.jpg" },
    { id: "r3", bucket: "useful", text: "Кефир и простокваша",     img: "kefir.jpg" },
    { id: "r4", bucket: "useful", text: "Сыр, сметана, йогурт",    img: "cheese.jpg" },
    { id: "r5", bucket: "harm",   text: "Туберкулёз, холера",      img: "tb.jpg" },
    { id: "r6", bucket: "harm",   text: "Порча продуктов",         img: "dirtywater.jpg" }
  ];

  const QUESTIONS = [
    {
      q: "Кто и в каком году открыл бактерии?",
      options: ["Антони ван Левенгук в 1683 г.", "Роберт Гук в 1665 г.", "Луи Пастер в 1861 г.", "Илья Мечников в 1882 г."],
      correct: "Антони ван Левенгук в 1683 г.",
      explain: "Голландский естествоиспытатель Антони ван Левенгук увидел бактерии в капле воды под сделанным им микроскопом в 1683 году.",
      photo: "leeuwenhoek.jpg"
    },
    {
      q: "Как называются шаровидные бактерии?",
      options: ["Кокки", "Бациллы", "Спириллы", "Вибрионы"],
      correct: "Кокки",
      explain: "Кокки имеют форму шариков. Они могут жить поодиночке, цепочками или гроздьями.",
      photo: "cocci.jpg"
    },
    {
      q: "Палочковидные бактерии называют…",
      options: ["Бациллы", "Кокки", "Спириллы", "Вибрионы"],
      correct: "Бациллы",
      explain: "Бациллы — бактерии в форме палочек. Слово «бактерия» в переводе с греческого и означает «палочка».",
      photo: "bacilli.jpg"
    },
    {
      q: "Чего нет в клетке бактерии?",
      options: ["Оформленного ядра", "Оболочки", "Мембраны", "Цитоплазмы"],
      correct: "Оформленного ядра",
      explain: "У бактерии нет оформленного ядра. Одна хромосома расположена прямо в цитоплазме. По этому признаку бактерии отличают от других организмов.",
      photo: "ecoli.jpg"
    },
    {
      q: "Как питаются бактерии?",
      options: ["Готовыми органическими веществами, всасывая всей поверхностью", "Как растения — из углекислого газа", "Заглатывают пищу через глотку", "Ловят пищу ложноножками"],
      correct: "Готовыми органическими веществами, всасывая всей поверхностью",
      explain: "Бактерии — гетеротрофы: они используют готовые органические вещества и всасывают их всей поверхностью клетки.",
      photo: ""
    },
    {
      q: "Почему бактерий называют «санитарами планеты»?",
      options: ["Разлагают остатки и возвращают вещества в почву", "Очищают воздух от пыли", "Уничтожают все микробы", "Строят почву из камней"],
      correct: "Разлагают остатки и возвращают вещества в почву",
      explain: "Бактерии разлагают остатки растений и животных до перегноя, а затем до минеральных солей, которые снова усваивают растения.",
      photo: "compost.jpg"
    },
    {
      q: "Какие бактерии используют для приготовления кефира, сыра и сметаны?",
      options: ["Молочнокислые", "Уксуснокислые", "Болезнетворные", "Кишечные"],
      correct: "Молочнокислые",
      explain: "Молочнокислые бактерии превращают молоко в простоквашу, кефир, йогурт, сметану и сыр. Они также помогают квасить капусту.",
      photo: "yogurt.jpg"
    },
    {
      q: "Почему нельзя пить воду из луж, озёр и рек?",
      options: ["В ней могут быть болезнетворные бактерии", "В ней слишком много соли", "Она слишком холодная", "В ней совсем нет воздуха"],
      correct: "В ней могут быть болезнетворные бактерии",
      explain: "В стоячей и открытой воде живут возбудители холеры, дизентерии и других болезней. Воду нужно кипятить или фильтровать.",
      photo: "dirtywater.jpg"
    },
    {
      q: "Что помогает защититься от болезнетворных бактерий?",
      options: ["Мыть руки с мылом, чистить зубы, кипятить воду и стерилизовать банки", "Полоскать рот йодом каждый день", "Не мыть овощи и фрукты", "Пить воду из реки"],
      correct: "Мыть руки с мылом, чистить зубы, кипятить воду и стерилизовать банки",
      explain: "Мыло удаляет бактерии с рук, щётка — остатки пищи между зубами, кипячение и стерилизация убивают микробов в воде и банках. Йод можно использовать только для обработки ран.",
      photo: "handwash.jpg"
    }
  ];

  const TOTAL = QUESTIONS.length;
  const RING_C = 2 * Math.PI * 96;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const state = {
    view: "home",
    build: { placed: {}, selected: null, checked: false },
    form:  { index: 0, answered: false, score: 0, done: false },
    role:  { placed: {}, selected: null, checked: false },
    quiz:  { index: 0, score: 0, answered: false },
    best: 0
  };

  try { state.best = Math.max(0, Math.min(TOTAL, parseInt(localStorage.getItem("bacteria7.best") || "0", 10) || 0)); } catch { /* ignore */ }

  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function setView(view) {
    state.view = view;
    $$(".view").forEach((el) => el.classList.toggle("active", el.dataset.view === view));
    $$(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.nav === (view === "result" ? "quiz" : view)));
    const active = $(`.view[data-view="${view}"]`);
    if (active) active.scrollTop = 0;
  }

  function feedback(el, text, isError) {
    if (!el) return;
    el.hidden = false;
    el.classList.toggle("error", !!isError);
    el.innerHTML = `<span>${esc(text)}</span>`;
  }

  /* ---------- фон ---------- */
  function initBackground() {
    const cv = $("#bg"), ctx = cv.getContext("2d");
    let dots = [], w = 0, h = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.width = Math.floor(innerWidth * dpr);
      h = cv.height = Math.floor(innerHeight * dpr);
      dots = Array.from({ length: 34 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 2 + .8) * dpr,
        v: (Math.random() * .14 + .04) * dpr,
        a: Math.random() * .28 + .06
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.y -= d.v;
        if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(47,107,255,${d.a})`;
        ctx.fill();
      });
      requestAnimationFrame(frame);
    }
    resize();
    addEventListener("resize", resize);
    if (!reduce) frame();
  }

  /* ---------- конфетти ---------- */
  function confetti() {
    const cv = $("#confetti"), ctx = cv.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    const colors = ["#2f6bff", "#00a5a5", "#f5a524", "#ffffff"];
    const bits = Array.from({ length: 90 }, () => ({
      x: Math.random() * cv.width,
      y: -Math.random() * cv.height * .6,
      w: (5 + Math.random() * 7) * dpr,
      h: (3 + Math.random() * 5) * dpr,
      vy: (1.6 + Math.random() * 2.2) * dpr,
      vx: (Math.random() - .5) * 1.4 * dpr,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - .5) * .14,
      c: colors[Math.floor(Math.random() * colors.length)]
    }));
    let ticks = 0;
    (function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      bits.forEach((b) => {
        b.x += b.vx; b.y += b.vy; b.rot += b.vr;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.rot);
        ctx.fillStyle = b.c; ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); ctx.restore();
      });
      if (++ticks < 170) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, cv.width, cv.height);
    })();
  }

  /* ---------- источники фотографий ---------- */
  function renderCredits() {
    const box = $("#creditsList");
    const data = window.BACTERIA_CREDITS || {};
    box.innerHTML = Object.keys(data).sort().map((file) => {
      const c = data[file];
      const lic = c.licenseUrl
        ? `<a href="${esc(c.licenseUrl)}" target="_blank" rel="noopener">${esc(c.license)}</a>`
        : esc(c.license || "—");
      const page = c.page ? ` · <a href="${esc(c.page)}" target="_blank" rel="noopener">Wikimedia Commons</a>` : "";
      return `<div class="credit-row">
        <img src="assets/${esc(file)}" alt="">
        <div><b>${esc(c.title || file)}</b>
        <span>${c.author ? esc(c.author) + " · " : ""}${lic}${page}</span></div>
      </div>`;
    }).join("");
  }

  /* ---------- станция 1: строение ---------- */
  function renderBuild() {
    $("#zones").innerHTML = BUILD_PARTS.map((p) =>
      `<button class="zone" type="button" data-zone="${p.id}" style="left:${p.x}%;top:${p.y}%">+</button>`
    ).join("");
    $("#buildTray").innerHTML = BUILD_PARTS.map((p) =>
      `<button class="chip" type="button" draggable="true" data-part="${p.id}">${esc(p.label)}</button>`
    ).join("");
    $$("#buildTray .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        if (state.build.checked || chip.classList.contains("used")) return;
        state.build.selected = chip.dataset.part;
        $$("#buildTray .chip").forEach((c) => c.classList.toggle("selected", c === chip));
        $$("#zones .zone").forEach((z) => z.classList.remove("selected"));
        $("#buildCaption").innerHTML = `<b>${esc(BUILD_PARTS.find(p => p.id === chip.dataset.part).label)}.</b> ${esc(BUILD_PARTS.find(p => p.id === chip.dataset.part).info)}`;
      });
      chip.addEventListener("dragstart", (e) => {
        if (state.build.checked || chip.classList.contains("used")) { e.preventDefault(); return; }
        e.dataTransfer.setData("text/plain", chip.dataset.part);
        e.dataTransfer.effectAllowed = "move";
      });
    });
    $$("#zones .zone").forEach((zone) => {
      zone.addEventListener("click", () => {
        if (state.build.checked) return;
        const id = zone.dataset.zone;
        if (state.build.placed[id]) {
          delete state.build.placed[id];
          zone.classList.remove("filled", "correct", "wrong");
          zone.textContent = "+";
          const chip = $(`#buildTray .chip[data-part="${id}"]`);
          if (chip) chip.classList.remove("used", "correct", "wrong");
          updateBuildCount();
          return;
        }
        if (state.build.selected) placePart(id, state.build.selected);
      });
      zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add("drag-over"); });
      zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
      zone.addEventListener("drop", (e) => {
        e.preventDefault(); zone.classList.remove("drag-over");
        const part = e.dataTransfer.getData("text/plain");
        if (part && !state.build.checked) placePart(zone.dataset.zone, part);
      });
    });
  }

  function placePart(zoneId, partId) {
    if (state.build.placed[zoneId] || state.build.checked) return;
    const used = Object.values(state.build.placed);
    if (used.includes(partId)) return;
    state.build.placed[zoneId] = partId;
    state.build.selected = null;
    const part = BUILD_PARTS.find((p) => p.id === partId);
    const zone = $(`#zones .zone[data-zone="${zoneId}"]`);
    const chip = $(`#buildTray .chip[data-part="${partId}"]`);
    zone.textContent = part.label;
    zone.classList.add("filled");
    zone.classList.remove("selected");
    chip.classList.add("used");
    chip.classList.remove("selected");
    $$("#buildTray .chip").forEach((c) => c.classList.remove("selected"));
    $("#buildCaption").innerHTML = `<b>Готово.</b> ${esc(part.info)}`;
    $("#buildFeedback").hidden = true;
    updateBuildCount();
  }

  function updateBuildCount() {
    $("#buildCount").textContent = `${Object.keys(state.build.placed).length} / ${BUILD_PARTS.length}`;
  }

  function checkBuild() {
    const placed = state.build.placed;
    let right = 0;
    BUILD_PARTS.forEach((p) => {
      const zone = $(`#zones .zone[data-zone="${p.id}"]`);
      const chip = $(`#buildTray .chip[data-part="${placed[p.id]}"]`);
      const ok = placed[p.id] === p.id;
      if (ok) right++;
      zone.classList.toggle("correct", ok);
      zone.classList.toggle("wrong", !ok);
      if (chip) chip.classList.toggle("correct", ok), chip.classList.toggle("wrong", !ok);
    });
    state.build.checked = true;
    feedback($("#buildFeedback"), right === BUILD_PARTS.length
      ? "Верно! Все шесть частей на месте: у бактерии есть капсула, оболочка, мембрана, цитоплазма, хромосома и жгутик — но нет оформленного ядра."
      : `Правильно ${right} из 6. Нажми на неверную метку, чтобы убрать подпись, и попробуй снова.`, right !== BUILD_PARTS.length);
    if (right === BUILD_PARTS.length) confetti();
  }

  function resetBuild() {
    state.build = { placed: {}, selected: null, checked: false };
    renderBuild();
    updateBuildCount();
    $("#buildFeedback").hidden = true;
    $("#buildCaption").textContent = "Выбери подпись справа и нажми на нужную метку.";
  }

  /* ---------- станция 2: формы ---------- */
  function renderGallery() {
    $("#formGallery").innerHTML = FORMS.map((f, i) => {
      const shown = i < state.form.index || state.form.done;
      return `<div class="gallery-card${i === state.form.index && !state.form.done ? " active" : ""}">
        <img src="assets/${f.img}" alt="">
        <b>${shown ? esc(f.answer) : "Микрофотография " + (i + 1)}</b>
        <small>${shown ? esc(f.note) : "Определи форму"}</small>
      </div>`;
    }).join("");
  }

  function renderForm() {
    renderGallery();
    if (state.form.done) {
      $("#formImg").src = "assets/agar.jpg";
      $("#formBadge").textContent = "✓";
      $("#formQuestion").textContent = "Все формы определены";
      $("#formOptions").innerHTML = "";
      const ex = $("#formExplain");
      ex.hidden = false;
      ex.innerHTML = `<b>Результат: ${state.form.score} из 4.</b> Кокки — шарики, бациллы — палочки, спириллы — спирали, вибрионы — изогнутые палочки.`;
      $("#formRound").textContent = "4 / 4";
      $("#formNext").disabled = false;
      $("#formNext").textContent = "К роли";
      return;
    }
    const i = state.form.index;
    const f = FORMS[i];
    $("#formImg").src = "assets/" + f.img;
    $("#formImg").alt = "Микрофотография бактерии: " + f.answer;
    $("#formBadge").textContent = "?";
    $("#formQuestion").textContent = `Какая форма у бактерии № ${i + 1}?`;
    $("#formRound").textContent = `${i + 1} / ${FORMS.length}`;
    $("#formExplain").hidden = true;
    $("#formNext").disabled = true;
    $("#formNext").textContent = "Дальше";
    $("#formOptions").innerHTML = FORM_OPTIONS.map((opt, n) =>
      `<button class="option" type="button" data-option="${esc(opt)}"><span class="option-letter">${n + 1}</span><span>${esc(opt)}</span></button>`
    ).join("");
    $$("#formOptions .option").forEach((btn) => btn.addEventListener("click", () => answerForm(btn.dataset.option)));
  }

  function answerForm(value) {
    if (state.form.answered || state.form.done) return;
    state.form.answered = true;
    const f = FORMS[state.form.index];
    const ok = value === f.answer;
    if (ok) state.form.score++;
    $$("#formOptions .option").forEach((btn) => {
      const v = btn.dataset.option;
      btn.disabled = true;
      btn.classList.toggle("correct", v === f.answer);
      btn.classList.toggle("wrong", v !== f.answer && v === value);
      btn.classList.toggle("dim", v !== f.answer && v !== value);
    });
    $("#formBadge").textContent = ok ? "✓" : "✕";
    const ex = $("#formExplain");
    ex.hidden = false;
    ex.innerHTML = `<b>${ok ? "Верно." : "Правильный ответ: " + esc(f.answer) + "."}</b> ${esc(f.note)}`;
    $("#formScore").textContent = `${state.form.score} / ${FORMS.length}`;
    $("#formNext").disabled = false;
  }

  function nextForm() {
    if (state.form.done) { setView("role"); return; }
    if (!state.form.answered) return;
    if (state.form.index < FORMS.length - 1) {
      state.form.index++;
      state.form.answered = false;
      renderForm();
    } else {
      state.form.done = true;
      renderForm();
    }
  }

  /* ---------- станция 3: роль ---------- */
  function renderRole() {
    $("#buckets").innerHTML = BUCKETS.map((b) =>
      `<div class="bucket">
        <div class="bucket-head"><span class="bucket-icon">${b.icon}</span><span><b>${esc(b.title)}</b><small>${esc(b.sub)}</small></span></div>
        <div class="bucket-drop" data-bucket="${b.id}"></div>
      </div>`
    ).join("");
    $("#roleTray").innerHTML = ROLE_ITEMS.map((it) =>
      `<button class="chip" type="button" draggable="true" data-item="${it.id}">
        <img src="assets/${it.img}" alt="" style="width:22px;height:20px;object-fit:cover;border-radius:5px;flex:0 0 auto">
        ${esc(it.text)}
      </button>`
    ).join("");

    $$("#roleTray .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        if (state.role.checked || chip.classList.contains("placed-hide")) return;
        state.role.selected = chip.dataset.item;
        $$("#roleTray .chip").forEach((c) => c.classList.toggle("selected", c === chip));
        $$(".bucket-drop").forEach((d) => d.classList.remove("drag-over"));
      });
      chip.addEventListener("dragstart", (e) => {
        if (state.role.checked || chip.classList.contains("placed-hide")) { e.preventDefault(); return; }
        e.dataTransfer.setData("text/plain", chip.dataset.item);
      });
    });
    $$(".bucket-drop").forEach((drop) => {
      drop.addEventListener("click", () => {
        if (state.role.selected && !state.role.checked) placeRole(drop.dataset.bucket, state.role.selected);
      });
      drop.addEventListener("dragover", (e) => { e.preventDefault(); drop.classList.add("drag-over"); });
      drop.addEventListener("dragleave", () => drop.classList.remove("drag-over"));
      drop.addEventListener("drop", (e) => {
        e.preventDefault(); drop.classList.remove("drag-over");
        const id = e.dataTransfer.getData("text/plain");
        if (id && !state.role.checked) placeRole(drop.dataset.bucket, id);
      });
    });
  }

  function placeRole(bucket, id) {
    if (state.role.placed[id] || state.role.checked) return;
    state.role.placed[id] = bucket;
    state.role.selected = null;
    const chip = $(`#roleTray .chip[data-item="${id}"]`);
    chip.classList.add("placed-hide");
    chip.classList.remove("selected");
    const copy = chip.cloneNode(true);
    copy.classList.remove("placed-hide");
    copy.classList.add("placed");
    copy.removeAttribute("draggable");
    copy.addEventListener("click", () => {
      if (state.role.checked) return;
      copy.remove();
      chip.classList.remove("placed-hide", "correct", "wrong");
      delete state.role.placed[id];
      updateRoleCount();
    });
    $(`.bucket-drop[data-bucket="${bucket}"]`).appendChild(copy);
    updateRoleCount();
    $("#roleFeedback").hidden = true;
  }

  function updateRoleCount() {
    $("#roleCount").textContent = `${Object.keys(state.role.placed).length} / ${ROLE_ITEMS.length}`;
  }

  function checkRole() {
    let right = 0;
    ROLE_ITEMS.forEach((it) => {
      const ok = state.role.placed[it.id] === it.bucket;
      if (ok) right++;
      const original = $(`#roleTray .chip[data-item="${it.id}"]`);
      if (original) original.classList.toggle("correct", ok), original.classList.toggle("wrong", !ok);
      const placedChip = $(`.bucket-drop .chip[data-item="${it.id}"]`);
      if (placedChip) placedChip.classList.toggle("correct", ok), placedChip.classList.toggle("wrong", !ok);
    });
    state.role.checked = true;
    feedback($("#roleFeedback"), right === ROLE_ITEMS.length
      ? "Всё верно! Бактерии-санитары перерабатывают остатки, молочнокислые помогают готовить еду, а болезнетворные вызывают инфекции."
      : `Правильно ${right} из 6. Нажми на карточку в группе, чтобы вернуть её и исправить ошибку.`, right !== ROLE_ITEMS.length);
    if (right === ROLE_ITEMS.length) confetti();
  }

  function resetRole() {
    state.role = { placed: {}, selected: null, checked: false };
    renderRole();
    updateRoleCount();
    $("#roleFeedback").hidden = true;
  }

  /* ---------- викторина ---------- */
  function startQuiz() {
    state.quiz = { index: 0, score: 0, answered: false };
    renderQuestion();
    setView("quiz");
  }

  function renderQuestion() {
    const q = QUESTIONS[state.quiz.index];
    if (!q) return;
    $("#qNum").textContent = state.quiz.index + 1;
    $("#qScore").textContent = state.quiz.score;
    $("#qText").textContent = q.q;
    const ph = $("#qPhoto");
    if (q.photo) {
      ph.hidden = false;
      $("#qPhotoImg").src = "assets/" + q.photo;
      $("#qPhotoImg").alt = q.q;
    } else ph.hidden = true;
    $("#qOptions").innerHTML = q.options.map((opt, i) =>
      `<button class="option" type="button" data-option="${i}"><span class="option-letter">${i + 1}</span><span>${esc(opt)}</span></button>`
    ).join("");
    $$("#qOptions .option").forEach((btn) => btn.addEventListener("click", () => answerQuiz(Number(btn.dataset.option))));
    $("#qExplain").hidden = true;
    $("#qNext").disabled = true;
    $("#qProgress").style.width = `${(state.quiz.index / TOTAL) * 100}%`;
    state.quiz.answered = false;
  }

  function answerQuiz(index) {
    if (state.quiz.answered) return;
    const q = QUESTIONS[state.quiz.index];
    const chosen = q.options[index];
    if (chosen == null) return;
    state.quiz.answered = true;
    const ok = chosen === q.correct;
    if (ok) state.quiz.score++;
    $$("#qOptions .option").forEach((btn, i) => {
      const v = q.options[i];
      btn.disabled = true;
      btn.classList.toggle("correct", v === q.correct);
      btn.classList.toggle("wrong", v !== q.correct && v === chosen);
      btn.classList.toggle("dim", v !== q.correct && v !== chosen);
    });
    const ex = $("#qExplain");
    ex.hidden = false;
    ex.innerHTML = `<b>${ok ? "Верно." : "Правильный ответ: " + esc(q.correct) + "."}</b> ${esc(q.explain)}`;
    $("#qScore").textContent = state.quiz.score;
    $("#qProgress").style.width = `${((state.quiz.index + 1) / TOTAL) * 100}%`;
    $("#qNext").disabled = false;
  }

  function nextQuestion() {
    if (!state.quiz.answered) return;
    if (state.quiz.index < TOTAL - 1) {
      state.quiz.index++;
      renderQuestion();
    } else finishQuiz();
  }

  function finishQuiz() {
    const score = state.quiz.score;
    const pct = Math.round((score / TOTAL) * 100);
    if (score > state.best) {
      state.best = score;
      try { localStorage.setItem("bacteria7.best", String(score)); } catch { /* ignore */ }
    }
    $("#resultPct").textContent = pct + "%";
    $("#resultCorrect").textContent = score;
    $("#resultRight").textContent = score;
    $("#resultWrong").textContent = TOTAL - score;
    $("#resultBest").textContent = state.best;
    const rank = pct >= 90 ? "Микробиолог!" : pct >= 70 ? "Исследователь" : pct >= 50 ? "Лаборант" : "Начинающий";
    const desc = pct >= 90
      ? "Блестяще! Ты разбираешься в строении, жизни и роли бактерий лучше многих взрослых."
      : pct >= 70
        ? "Хороший результат! Основы параграфа ты знаешь уверенно — осталось подтянуть детали."
        : pct >= 50
          ? "Неплохо. Перечитай § 7 и пройди викторину ещё раз — станции помогут запомнить материал."
          : "Начни со станций: там есть все подсказки. После них викторина покажется легче.";
    $("#resultTitle").textContent = rank;
    $("#resultDesc").textContent = desc;
    $("#resultPct").nextElementSibling && ($("#resultPct").nextElementSibling.hidden = false);
    setView("result");
    requestAnimationFrame(() => { $("#ringFill").style.strokeDashoffset = String(RING_C * (1 - pct / 100)); });
    if (pct >= 70) confetti();
    updateBest();
  }

  function updateBest() {
    $("#bestWrap").hidden = state.best <= 0;
    $("#bestVal").textContent = state.best;
  }

  /* ---------- управление ---------- */
  function resetAll() {
    state.view = "home";
    resetBuild();
    state.form = { index: 0, answered: false, score: 0, done: false };
    $("#formScore").textContent = "0 / 4";
    renderForm();
    resetRole();
    state.quiz = { index: 0, score: 0, answered: false };
    renderQuestion();
    $("#ringFill").style.strokeDashoffset = String(RING_C);
    updateBest();
    setView("home");
    toast("Прогресс сброшен. Начнём сначала!");
  }

  function initEvents() {
    $$("[data-nav]").forEach((b) => b.addEventListener("click", () => setView(b.dataset.nav)));
    $$("[data-start]").forEach((b) => b.addEventListener("click", () => {
      const target = b.dataset.start;
      if (target === "quiz") startQuiz();
      else setView(target);
    }));

    let clicks = [];
    $("#brand").addEventListener("click", () => {
      const now = Date.now();
      clicks = clicks.filter((t) => now - t < 1200);
      clicks.push(now);
      if (clicks.length >= 5) { clicks = []; resetAll(); }
    });

    $("#fullBtn").addEventListener("click", toggleFullscreen);
    $("#creditsBtn").addEventListener("click", () => { $("#creditsModal").hidden = false; });
    $$("#creditsModal [data-close]").forEach((el) => el.addEventListener("click", () => { $("#creditsModal").hidden = true; }));

    $("#buildReset").addEventListener("click", resetBuild);
    $("#buildCheck").addEventListener("click", checkBuild);
    $("#formNext").addEventListener("click", nextForm);
    $("#roleReset").addEventListener("click", resetRole);
    $("#roleCheck").addEventListener("click", checkRole);
    $("#qNext").addEventListener("click", nextQuestion);
    $("#retryBtn").addEventListener("click", startQuiz);

    addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "f" && !/input|textarea/i.test(document.activeElement.tagName)) { toggleFullscreen(); return; }
      if (e.key === "Escape" && !$("#creditsModal").hidden) { $("#creditsModal").hidden = true; return; }
      if (state.view !== "quiz") return;
      if (/^[1-4]$/.test(e.key)) answerQuiz(Number(e.key) - 1);
      if (e.key === "Enter") nextQuestion();
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  }

  document.addEventListener("fullscreenchange", () => $("#fullBtn").classList.toggle("full", !!document.fullscreenElement));

  /* ---------- запуск ---------- */
  initBackground();
  renderCredits();
  renderBuild();
  renderForm();
  renderRole();
  renderQuestion();
  updateBest();
  initEvents();
})();
