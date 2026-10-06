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

const matchingQuestions = {
  37: {
    targets: [
      "A company has a headquarters and four remote locations. The headquarters site will require more bandwidth than the four remote sites.",
      "A company requires higher download speeds than upload speeds and wants to use existing phone lines.",
      "A company would like guaranteed bandwidth using a point-to-point link that requires minimal expertise to install and maintain.",
      "A teleworker would like to bundle the Internet connection with other phone and TV services.",
      "A multisite college wants to connect using Ethernet technology between the sites."
    ],
    options: ["cable", "DSL", "Frame Relay", "MetroE", "T1", "VSAT"],
    answers: {
      "A company has a headquarters and four remote locations. The headquarters site will require more bandwidth than the four remote sites.": "Frame Relay",
      "A company requires higher download speeds than upload speeds and wants to use existing phone lines.": "DSL",
      "A company would like guaranteed bandwidth using a point-to-point link that requires minimal expertise to install and maintain.": "T1",
      "A teleworker would like to bundle the Internet connection with other phone and TV services.": "cable",
      "A multisite college wants to connect using Ethernet technology between the sites.": "MetroE"
    }
  },
  38: {
    targets: ["Inside global", "Inside local", "Outside global"],
    options: ["10.130.5.76", "203.0.113.5", "192.0.2.1"],
    answers: {
      "Inside global": "192.0.2.1",
      "Inside local": "10.130.5.76",
      "Outside global": "203.0.113.5"
    }
  },
  58: {
    targets: [
      "devices that put data on the local loop",
      "customer devices that pass the data from a customer network or host computer for transmission over the WAN",
      "point that is established in a building or complex to separate customer equipment from service provider equipment",
      "devices and inside wiring located on the enterprise edge and which connect to a carrier link"
    ],
    options: ["data terminal equipment", "demarcation point", "customer premises equipment", "data communications equipment"],
    answers: {
      "devices that put data on the local loop": "data communications equipment",
      "customer devices that pass the data from a customer network or host computer for transmission over the WAN": "data terminal equipment",
      "point that is established in a building or complex to separate customer equipment from service provider equipment": "demarcation point",
      "devices and inside wiring located on the enterprise edge and which connect to a carrier link": "customer premises equipment"
    }
  },
  60: {
    targets: ["step 1", "step 2", "step 3", "step 4", "step 5"],
    options: [
      "R1 replaces the address 192.168.10.10 with a translated inside global address.",
      "R1 checks the NAT configuration to determine if this packet should be translated.",
      "R1 selects an available global address from the dynamic address pool.",
      "The host sends packets that request a connection to the server at the address 209.165.200.254",
      "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated"
    ],
    answers: {
      "step 1": "The host sends packets that request a connection to the server at the address 209.165.200.254",
      "step 2": "R1 checks the NAT configuration to determine if this packet should be translated.",
      "step 3": "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated",
      "step 4": "R1 selects an available global address from the dynamic address pool.",
      "step 5": "R1 replaces the address 192.168.10.10 with a translated inside global address."
    }
  },
  62: {
    targets: ["step 3", "step 2", "step 4", "step 1", "step 5"],
    options: [
      "R1 checks the NAT configuration to determine if this packet should be translated.",
      "R1 selects an available global address from the dynamic address pool.",
      "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.",
      "The host sends packets that request a connection to the server at the address 209.165.200.254.",
      "R1 replaces the address 192.168.10.10 with a translated inside global address."
    ],
    answers: {
      "step 3": "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.",
      "step 2": "R1 checks the NAT configuration to determine if this packet should be translated.",
      "step 4": "R1 selects an available global address from the dynamic address pool.",
      "step 1": "The host sends packets that request a connection to the server at the address 209.165.200.254.",
      "step 5": "R1 replaces the address 192.168.10.10 with a translated inside global address."
    }
  }
};

const els = {
  startScreen: document.querySelector("#startScreen"),
  quizScreen: document.querySelector("#quizScreen"),
  resultsScreen: document.querySelector("#resultsScreen"),
  questionCount: document.querySelector("#questionCount"),
  timerMode: document.querySelector("#timerMode"),
  startBtn: document.querySelector("#startBtn"),
  soundToggle: document.querySelector("#soundToggle"),
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
  timeLeft: 30,
  soundOn: true
};

const normalize = (value) => value.replace(/\s+/g, " ").trim().toLowerCase();

const audio = {
  clips: null,
  unlocked: false,
  notice: null,
  prepare() {
    if (this.clips) return;
    const definitions = {
      click: [[520, 0.05, "square", 0.24]],
      start: [[392, 0.08, "triangle", 0.34], [523.25, 0.08, "triangle", 0.34], [659.25, 0.08, "triangle", 0.34], [783.99, 0.12, "triangle", 0.34]],
      correct: [[523.25, 0.09, "triangle", 0.36], [659.25, 0.09, "triangle", 0.36], [783.99, 0.1, "triangle", 0.36], [1046.5, 0.16, "triangle", 0.34]],
      wrong: [[220, 0.14, "saw", 0.38], [164.81, 0.22, "saw", 0.34]],
      tick: [[880, 0.055, "square", 0.22]],
      finishGood: [[392, 0.1, "triangle", 0.34], [493.88, 0.1, "triangle", 0.34], [587.33, 0.12, "triangle", 0.34], [783.99, 0.18, "triangle", 0.34]],
      finishLow: [[349.23, 0.13, "triangle", 0.3], [293.66, 0.13, "triangle", 0.3], [261.63, 0.2, "triangle", 0.28]]
    };
    this.clips = Object.fromEntries(
      Object.entries(definitions).map(([name, notes]) => {
        const clip = new Audio(makeWavUrl(notes));
        clip.preload = "auto";
        clip.volume = 1;
        return [name, clip];
      })
    );
  },
  unlock() {
    if (!state.soundOn || this.unlocked) return;
    this.prepare();
    const clip = this.clips.click;
    clip.muted = true;
    clip.currentTime = 0;
    const playAttempt = clip.play();
    if (!playAttempt) {
      clip.pause();
      clip.muted = false;
      this.unlocked = true;
      return;
    }
    playAttempt
      .then(() => {
        clip.pause();
        clip.currentTime = 0;
        clip.muted = false;
        this.unlocked = true;
        this.hideNotice();
      })
      .catch(() => this.showNotice());
  },
  play(name) {
    if (!state.soundOn) return;
    this.prepare();
    const source = this.clips[name];
    if (!source) return;
    const clip = source.cloneNode();
    clip.volume = 1;
    const playAttempt = clip.play();
    if (playAttempt) playAttempt.catch(() => this.showNotice());
  },
  vibrate(pattern) {
    if (state.soundOn && navigator.vibrate) navigator.vibrate(pattern);
  },
  showNotice() {
    if (!this.notice) {
      this.notice = document.createElement("button");
      this.notice.className = "sound-notice";
      this.notice.type = "button";
      this.notice.textContent = "Tap to enable sound";
      this.notice.addEventListener("click", () => {
        this.unlocked = false;
        this.unlock();
        this.play("click");
      });
      document.body.append(this.notice);
    }
    this.notice.classList.add("visible");
  },
  hideNotice() {
    if (this.notice) this.notice.classList.remove("visible");
  },
  click() {
    this.play("click");
  },
  start() {
    this.unlock();
    this.play("start");
    this.vibrate(18);
  },
  correct() {
    this.play("correct");
    this.vibrate([20, 35, 20]);
  },
  wrong() {
    this.play("wrong");
    this.vibrate(90);
  },
  tick() {
    this.play("tick");
    this.vibrate(10);
  },
  finish(percent) {
    this.play(percent >= 70 ? "finishGood" : "finishLow");
  }
};

function makeWavUrl(notes) {
  const sampleRate = 44100;
  const gapSamples = Math.floor(sampleRate * 0.025);
  const samples = [];

  notes.forEach(([frequency, duration, type, volume]) => {
    const sampleCount = Math.floor(sampleRate * duration);
    for (let i = 0; i < sampleCount; i += 1) {
      const t = i / sampleRate;
      const phase = (t * frequency) % 1;
      let wave = Math.sin(2 * Math.PI * frequency * t);
      if (type === "square") wave = phase < 0.5 ? 1 : -1;
      if (type === "saw") wave = 2 * phase - 1;
      if (type === "triangle") wave = 1 - 4 * Math.abs(Math.round(phase - 0.25) - (phase - 0.25));
      const attack = Math.min(1, i / Math.max(1, sampleRate * 0.01));
      const release = Math.min(1, (sampleCount - i) / Math.max(1, sampleRate * 0.04));
      samples.push(wave * volume * Math.min(attack, release));
    }
    for (let i = 0; i < gapSamples; i += 1) samples.push(0);
  });

  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * 2, true);

  samples.forEach((sample, index) => {
    const value = Math.max(-1, Math.min(1, sample));
    view.setInt16(44 + index * 2, value < 0 ? value * 0x8000 : value * 0x7fff, true);
  });

  return URL.createObjectURL(new Blob([view], { type: "audio/wav" }));
}

function writeString(view, offset, value) {
  for (let i = 0; i < value.length; i += 1) view.setUint8(offset + i, value.charCodeAt(i));
}

["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, () => audio.unlock(), { once: true });
});

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
      const matching = matchingQuestions[number] || null;
      const gradable = Boolean(matching) || (answers.length > 0 && filteredChoices.length > 0);

      return {
        number,
        topic: topicFor(block),
        question,
        choices: filteredChoices,
        answers,
        matching,
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
  audio.start();
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
    if (state.timeLeft <= 5 && state.timeLeft > 0) audio.tick();
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
  els.multiBadge.textContent = q.matching ? "Match" : q.answers.length > 1 ? `Choose ${q.answers.length}` : q.gradable ? "Choose 1" : "Review";
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

  if (q.matching) {
    renderMatchingQuestion(q);
    startTimer();
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

function renderMatchingQuestion(q) {
  const wrapper = document.createElement("div");
  wrapper.className = "match-grid";
  const shuffledOptions = shuffle(q.matching.options);

  q.matching.targets.forEach((target) => {
    const row = document.createElement("label");
    row.className = "match-row";
    const text = document.createElement("span");
    text.textContent = target;
    const select = document.createElement("select");
    select.dataset.target = target;
    select.innerHTML = `<option value="">Choose match</option>${shuffledOptions.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}`;
    select.addEventListener("change", () => {
      audio.click();
      const allSelected = [...wrapper.querySelectorAll("select")].every((item) => item.value);
      if (allSelected) answerQuestion(readMatchingSelection(wrapper), false);
    });
    row.append(text, select);
    wrapper.append(row);
  });

  els.answers.append(wrapper);
}

function readMatchingSelection(wrapper) {
  return [...wrapper.querySelectorAll("select")].map((select) => ({
    target: select.dataset.target,
    answer: select.value
  }));
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function selectAnswer(choice, button) {
  const q = state.session[state.index];
  if (state.answered) return;
  audio.click();

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

function sameMatching(selected, matching) {
  if (!selected || selected.length !== matching.targets.length) return false;
  return selected.every((item) => normalize(item.answer) === normalize(matching.answers[item.target]));
}

function answerQuestion(selected, timedOut) {
  if (state.answered) return;
  stopTimer();
  state.answered = true;

  const q = state.session[state.index];
  const correct = q.matching ? sameMatching(selected, q.matching) : sameAnswers(selected, q.answers);
  const buttons = [...els.answers.querySelectorAll(".answer-btn")];

  if (q.matching) {
    markMatchingQuestion(q, selected || []);
  } else {
    buttons.forEach((button) => {
      const text = button.querySelector("strong").textContent;
      const isCorrect = q.answers.some((answer) => normalize(answer) === normalize(text));
      const wasPicked = selected?.some((answer) => normalize(answer) === normalize(text));
      if (isCorrect) button.classList.add("correct");
      if (wasPicked && !isCorrect) button.classList.add("wrong");
      button.disabled = true;
    });
  }

  if (correct) {
    audio.correct();
    const bonus = state.streak * 50;
    const speed = state.timerSeconds ? Math.max(0, state.timeLeft * 5) : 0;
    state.score += 500 + bonus + speed;
    state.streak += 1;
  } else {
    audio.wrong();
    state.missed.push({ ...q, picked: selected || [] });
    state.streak = 0;
  }

  els.score.textContent = state.score;
  els.streak.textContent = state.streak;
  els.feedback.classList.remove("hidden");
  els.feedback.innerHTML = `
    <strong>${correct ? "Correct" : timedOut ? "Time's up" : "Not quite"}</strong>
    <p><b>Answer:</b> ${formatCorrectAnswer(q)}</p>
    <p>${q.explanation}</p>
  `;
  els.nextBtn.disabled = false;
}

function markMatchingQuestion(q, selected) {
  els.answers.querySelectorAll(".match-row").forEach((row) => {
    const select = row.querySelector("select");
    const target = select.dataset.target;
    const picked = selected.find((item) => item.target === target)?.answer || "";
    const right = q.matching.answers[target];
    row.classList.toggle("correct", normalize(picked) === normalize(right));
    row.classList.toggle("wrong", normalize(picked) !== normalize(right));
    select.disabled = true;
  });
}

function formatCorrectAnswer(q) {
  if (!q.matching) return q.answers.join(" | ");
  return q.matching.targets.map((target) => `${target} => ${q.matching.answers[target]}`).join(" | ");
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
  audio.finish(percent);
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
      <p><b>Answer:</b> ${formatCorrectAnswer(q) || "Review item"}</p>
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
els.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  els.soundToggle.querySelector("strong").textContent = state.soundOn ? "Sound on" : "Sound off";
  if (state.soundOn) audio.click();
});
els.quitBtn.addEventListener("click", () => {
  audio.click();
  stopTimer();
  showOnly(els.startScreen);
});
els.nextBtn.addEventListener("click", () => {
  audio.click();
  nextQuestion();
});
els.restartBtn.addEventListener("click", () => {
  audio.click();
  showOnly(els.startScreen);
});
els.retryMissedBtn.addEventListener("click", () => startQuiz(state.missed));

state.allQuestions = parseQuestions(window.QUESTIONS_SOURCE || "");
els.bankSize.textContent = state.allQuestions.length;
