const answerKey = {
  1: ["NAT provides a solution to slow down the IPv4 address depletion.", "NAT introduces problems for some applications that require end-to-end connectivity."],
  2: ["Router# show ip nat translations"],
  3: ["Create a mapping between the inside local and outside local addresses.", "Identify the participating interfaces as inside or outside interfaces."],
  4: ["There is no end-to-end addressing."],
  5: ["209.165.200.225"],
  6: ["1"],
  7: ["A standard access list numbered 1 was used as part of the configuration process.", "Address translation is working.", "Two types of NAT are enabled."],
  8: ["209.165.200.245"],
  9: ["PAT using an external interface"],
  10: ["outside global"],
  11: ["A = 10.1.0.13", "B = 209.165.201.7"],
  12: ["It allows many inside hosts to share one or a few inside global addresses."],
  13: ["209.165.200.225"],
  14: ["Not enough information is given to determine if both static and dynamic NAT are working."],
  15: ["An employee shares a database file with a co-worker who is located in a branch office on the other side of the city."],
  16: ["Frame Relay", "MetroE"],
  17: ["Employees need to connect to the corporate email server through a VPN while traveling."],
  18: ["SHA", "MD5"],
  19: ["SHA", "AES"],
  20: ["clientless SSL"],
  21: ["integrity"],
  22: ["clientless SSL VPN", "client-based IPsec VPN"],
  23: ["It requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic."],
  24: ["allows peers to exchange shared keys"],
  25: ["port numbers"],
  26: ["private"],
  27: ["209.165.200.225"],
  28: ["SSL VPN"],
  29: ["Frame Relay", "T1/E1"],
  30: ["Both LANs and WANs connect end devices.", "WANs connect LANs at slower speed bandwidth than LANs connect their internal end devices.​"],
  31: ["It must be statically set up."],
  32: ["New headers from one or more VPN protocols encapsulate the original packets."],
  33: ["VPNs use virtual connections to create a private network through a public network."],
  34: ["The NAT interfaces are not correctly assigned."],
  35: ["public"],
  36: ["IPsec virtual tunnel interface"],
  39: ["Interface S0/0/0 should be configured with the command ip nat outside."],
  40: ["outside global"],
  41: ["The output is the result of the show ip nat translations command.", "The host with the address 209.165.200.235 will respond to requests by using a source address of 209.165.200.235."],
  42: ["when its employees become distributed across many branch locations"],
  43: ["guarantees message integrity"],
  44: ["AES"],
  45: ["remote access VPN", "site-to-site VPN"],
  46: ["router", "another ASA"],
  47: ["The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT."],
  48: ["private"],
  49: ["SSL VPN"],
  50: ["ISR router", "another ASA"],
  51: ["GRE"],
  52: ["End-to-end IPv4 traceability is lost."],
  53: ["the inside local and the inside global"],
  54: ["leased line", "Ethernet WAN"],
  55: ["Public"],
  56: ["MPLS VPN"],
  57: ["NAT-POOL2 is bound to the wrong ACL"],
  59: ["GRE over IPsec"],
  61: ["GRE over IPsec"],
  63: ["The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT."],
  64: ["Private"],
  65: ["IPsec virtual tunnel interface"],
  66: ["GRE over IPsec"],
  67: ["private"],
  68: ["public"],
  69: ["public"],
  70: ["private"],
  71: ["Private."],
  72: ["Public"]
};

const els = {
  startScreen: document.querySelector("#startScreen"),
  quizScreen: document.querySelector("#quizScreen"),
  resultsScreen: document.querySelector("#resultsScreen"),
  questionCount: document.querySelector("#questionCount"),
  timerMode: document.querySelector("#timerMode"),
  startBtn: document.querySelector("#startBtn"),
  quitBtn: document.querySelector("#quitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  retryMissedBtn: document.querySelector("#retryMissedBtn"),
  bankSize: document.querySelector("#bankSize"),
  topicLabel: document.querySelector("#topicLabel"),
  questionProgress: document.querySelector("#questionProgress"),
  score: document.querySelector("#score"),
  streak: document.querySelector("#streak"),
  timer: document.querySelector("#timer"),
  progressBar: document.querySelector("#progressBar"),
  topicBadge: document.querySelector("#topicBadge"),
  multiBadge: document.querySelector("#multiBadge"),
  questionText: document.querySelector("#questionText"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  finalTitle: document.querySelector("#finalTitle"),
  finalScore: document.querySelector("#finalScore"),
  finalDetails: document.querySelector("#finalDetails"),
  reviewList: document.querySelector("#reviewList")
};

const state = {
  allQuestions: [],
  session: [],
  missed: [],
  index: 0,
  score: 0,
  streak: 0,
  selected: new Set(),
  answered: false,
  topic: "all",
  timerSeconds: 30,
  tick: null,
  timeLeft: 30
};

const normalize = (value) => value.replace(/\s+/g, " ").trim().toLowerCase();

function topicFor(block) {
  if (/\bVPN|IPsec|IPsec|GRE|SSL|TLS|ASA|HMAC|Diffie-Hellman|IKE|MPLS VPN\b/i.test(block)) return "VPN";
  if (/\bWAN|Frame Relay|MetroE|leased line|T1\/E1|DSL|cable|branch office\b/i.test(block)) return "WAN";
  return "NAT";
}

function parseQuestions(source) {
  return source
    .split(/\r?\n(?=\d+\.\s)/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const number = Number(block.match(/^(\d+)\./)?.[1]);
      const explanationIndex = block.indexOf("\nExplanation:");
      const beforeExplanation = explanationIndex >= 0 ? block.slice(0, explanationIndex) : block;
      const explanation = explanationIndex >= 0 ? block.slice(explanationIndex + 1).trim() : "";
      const lines = beforeExplanation.split(/\r?\n/);
      const cleanLines = lines.map((line) => line.trimEnd());
      const choiceLines = [];

      while (cleanLines.length && cleanLines[cleanLines.length - 1].trim() === "") cleanLines.pop();
      while (cleanLines.length) {
        const line = cleanLines.pop();
        if (line.trim() === "") break;
        choiceLines.unshift(line.trim());
      }

      const filteredChoices = choiceLines.filter((choice) => {
        const low = choice.toLowerCase();
        return choice && low !== "freestar" && low !== "copy" && low !== "icon" && !/file\(s\)/i.test(choice);
      });

      const question = cleanLines.join("\n").trim() || beforeExplanation.trim();
      const answers = answerKey[number] || [];
      const gradable = answers.length > 0 && filteredChoices.length > 0;

      return {
        number,
        topic: topicFor(block),
        question,
        choices: filteredChoices,
        answers,
        explanation,
        gradable,
        raw: block
      };
    });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function showOnly(screen) {
  [els.startScreen, els.quizScreen, els.resultsScreen].forEach((section) => section.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function buildSession(source = null) {
  let bank = source || state.allQuestions;
  if (state.topic !== "all") bank = bank.filter((q) => q.topic === state.topic);

  const requested = els.questionCount.value;
  const count = requested === "all" ? bank.length : Number(requested);
  state.session = shuffle(bank).slice(0, count);
  state.index = 0;
  state.missed = [];
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  state.timerSeconds = Number(els.timerMode.value);
}

function startQuiz(source = null) {
  buildSession(source);
  showOnly(els.quizScreen);
  renderQuestion();
}

function stopTimer() {
  if (state.tick) clearInterval(state.tick);
  state.tick = null;
}

function startTimer() {
  stopTimer();
  state.timeLeft = state.timerSeconds;
  els.timer.textContent = state.timerSeconds === 0 ? "∞" : state.timeLeft;
  if (state.timerSeconds === 0) return;

  state.tick = setInterval(() => {
    state.timeLeft -= 1;
    els.timer.textContent = state.timeLeft;
    if (state.timeLeft <= 0) answerQuestion(null, true);
  }, 1000);
}

function renderQuestion() {
  stopTimer();
  const q = state.session[state.index];
  state.selected.clear();
  state.answered = false;

  els.feedback.classList.add("hidden");
  els.feedback.innerHTML = "";
  els.nextBtn.disabled = true;
  els.nextBtn.textContent = state.index === state.session.length - 1 ? "Finish" : "Next";
  els.topicLabel.textContent = `${q.topic} Review`;
  els.questionProgress.textContent = `Question ${state.index + 1} of ${state.session.length}`;
  els.score.textContent = state.score;
  els.streak.textContent = state.streak;
  els.progressBar.style.width = `${(state.index / state.session.length) * 100}%`;
  els.topicBadge.textContent = q.topic;
  els.multiBadge.textContent = q.answers.length > 1 ? `Choose ${q.answers.length}` : q.gradable ? "Choose 1" : "Review";
  els.questionText.textContent = q.question;
  els.answers.innerHTML = "";

  if (!q.gradable) {
    const raw = document.createElement("pre");
    raw.className = "raw-card";
    raw.textContent = q.raw;
    els.answers.append(raw);
    els.feedback.classList.remove("hidden");
    els.feedback.innerHTML = `<strong>Review item</strong><p>This item is shown with the exact pasted text. It was not turned into a scored question because the exhibit/matching choices were not fully available in the paste.</p>`;
    els.nextBtn.disabled = false;
    els.timer.textContent = "—";
    return;
  }

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong></strong>`;
    button.querySelector("strong").textContent = choice;
    button.addEventListener("click", () => selectAnswer(choice, button));
    els.answers.append(button);
  });

  startTimer();
}

function selectAnswer(choice, button) {
  const q = state.session[state.index];
  if (state.answered) return;

  if (q.answers.length > 1) {
    if (state.selected.has(choice)) {
      state.selected.delete(choice);
      button.classList.remove("selected");
    } else {
      state.selected.add(choice);
      button.classList.add("selected");
    }

    if (state.selected.size === q.answers.length) {
      answerQuestion([...state.selected], false);
    }
    return;
  }

  answerQuestion([choice], false);
}

function sameAnswers(selected, correct) {
  if (!selected || selected.length !== correct.length) return false;
  const picked = selected.map(normalize).sort();
  const expected = correct.map(normalize).sort();
  return picked.every((answer, index) => answer === expected[index]);
}

function answerQuestion(selected, timedOut) {
  if (state.answered) return;
  stopTimer();
  state.answered = true;

  const q = state.session[state.index];
  const correct = sameAnswers(selected, q.answers);
  const buttons = [...els.answers.querySelectorAll(".answer-btn")];

  buttons.forEach((button) => {
    const text = button.querySelector("strong").textContent;
    const isCorrect = q.answers.some((answer) => normalize(answer) === normalize(text));
    const wasPicked = selected?.some((answer) => normalize(answer) === normalize(text));
    if (isCorrect) button.classList.add("correct");
    if (wasPicked && !isCorrect) button.classList.add("wrong");
    button.disabled = true;
  });

  if (correct) {
    const bonus = state.streak * 50;
    const speed = state.timerSeconds ? Math.max(0, state.timeLeft * 5) : 0;
    state.score += 500 + bonus + speed;
    state.streak += 1;
  } else {
    state.missed.push({ ...q, picked: selected || [] });
    state.streak = 0;
  }

  els.score.textContent = state.score;
  els.streak.textContent = state.streak;
  els.feedback.classList.remove("hidden");
  els.feedback.innerHTML = `
    <strong>${correct ? "Correct" : timedOut ? "Time's up" : "Not quite"}</strong>
    <p><b>Answer:</b> ${q.answers.join(" | ")}</p>
    <p>${q.explanation}</p>
  `;
  els.nextBtn.disabled = false;
}

function nextQuestion() {
  if (!state.session.length) return;
  if (state.index < state.session.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  stopTimer();
  const gradable = state.session.filter((q) => q.gradable).length;
  const correct = gradable - state.missed.length;
  const percent = gradable ? Math.round((correct / gradable) * 100) : 0;

  showOnly(els.resultsScreen);
  els.finalScore.textContent = `${percent}%`;
  els.finalTitle.textContent = percent >= 85 ? "Clean run." : percent >= 70 ? "Almost there." : "Good review set.";
  els.finalDetails.textContent = `${correct}/${gradable} scored questions correct • ${state.score} points`;
  els.retryMissedBtn.disabled = state.missed.length === 0;
  els.reviewList.innerHTML = "";

  const reviewItems = state.missed.length ? state.missed : state.session.slice(0, 8);
  reviewItems.forEach((q) => {
    const item = document.createElement("article");
    item.className = "review-card";
    item.innerHTML = `
      <span>${q.topic} • Question ${q.number}</span>
      <h3></h3>
      <p><b>Answer:</b> ${q.answers.join(" | ") || "Review item"}</p>
      <p></p>
    `;
    item.querySelector("h3").textContent = q.question;
    item.querySelector("p:last-child").textContent = q.explanation || q.raw;
    els.reviewList.append(item);
  });
}

document.querySelectorAll(".topic-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".topic-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    state.topic = button.dataset.topic;
  });
});

els.startBtn.addEventListener("click", () => startQuiz());
els.quitBtn.addEventListener("click", () => {
  stopTimer();
  showOnly(els.startScreen);
});
els.nextBtn.addEventListener("click", nextQuestion);
els.restartBtn.addEventListener("click", () => showOnly(els.startScreen));
els.retryMissedBtn.addEventListener("click", () => startQuiz(state.missed));

state.allQuestions = parseQuestions(window.QUESTIONS_SOURCE || "");
els.bankSize.textContent = state.allQuestions.length;
