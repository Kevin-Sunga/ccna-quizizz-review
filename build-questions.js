const fs = require("fs");

const sources = [
  { module: "Modules 1-2", file: "source-modules-1-2.html" },
  { module: "Modules 3-5", file: "source-modules-3-5.html" },
  { module: "Modules 6-8", file: "source-questions.txt" }
];

const manualMatching = {
  "Modules 6-8": {
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
  }
};

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8203;|\u200b/g, "");
}

function stripTags(value) {
  return decodeHtml(value.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")).replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function parseHtmlQuestions(html, moduleName) {
  const start = html.search(/<p><(?:strong|b)>\s*1\./i);
  const end = html.search(/<h[1-6][^>]*>About The Author/i);
  const body = html.slice(start, end > start ? end : undefined);
  const blocks = body.split(/(?=<p><(?:strong|b)>\s*\d+\.)/i).filter((block) => /^\s*<p><(?:strong|b)>\s*\d+\./i.test(block));

  return blocks.map((block) => {
    const questionMatch = block.match(/<p><(?:strong|b)>\s*(\d+)\.\s*([\s\S]*?)<\/(?:strong|b)>[\s\S]*?<\/p>/i);
    if (!questionMatch) return null;
    const number = Number(questionMatch[1]);
    const question = stripTags(`${number}. ${questionMatch[2]}`);
    const listMatch = block.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
    const tableMatch = block.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
    const choices = [];
    const answers = [];
    let matching = null;

    if (listMatch) {
      for (const li of listMatch[1].matchAll(/<li([^>]*)>([\s\S]*?)<\/li>/gi)) {
        const choice = stripTags(li[2]);
        if (!choice) continue;
        choices.push(choice);
        if (/correct_answer/.test(li[1])) answers.push(choice);
      }
    }

    if (!choices.length && tableMatch) {
      const pairs = [];
      for (const row of tableMatch[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
        const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => stripTags(cell[1]));
        if (cells.length >= 2 && cells[0] && cells[1]) pairs.push([cells[0], cells[1]]);
      }

      if (pairs.length) {
        const targets = pairs.map(([target]) => target);
        const options = [...new Set(pairs.map(([, answer]) => answer))];
        matching = {
          targets,
          options,
          answers: Object.fromEntries(pairs)
        };
      }
    }

    const explanationMatch = block.match(/<div class="message_box success">([\s\S]*?)(?=<p><strong>\s*\d+\.|$)/i);
    const explanation = explanationMatch ? stripTags(explanationMatch[1]).replace(/^Explanation:\s*/i, "Explanation: ") : "";

    return {
      id: `${moduleName}-${number}`,
      module: moduleName,
      number,
      topic: topicFor(moduleName, `${question}\n${choices.join("\n")}`),
      question,
      choices,
      answers,
      matching,
      explanation,
      gradable: Boolean(matching) || (choices.length > 0 && answers.length > 0),
      raw: `${question}\n\n${choices.join("\n")}\n${explanation}`.trim()
    };
  }).filter(Boolean);
}

function parsePlainQuestions(source, moduleName) {
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

      const choices = choiceLines.filter((choice) => {
        const low = choice.toLowerCase();
        return choice && low !== "freestar" && low !== "copy" && low !== "icon" && !/file\(s\)/i.test(choice);
      });

      const question = cleanLines.join("\n").trim() || beforeExplanation.trim();
      const matching = manualMatching[moduleName]?.[number] || null;
      const answers = findAnswersFromExplanation(number, choices, explanation, matching);

      return {
        id: `${moduleName}-${number}`,
        module: moduleName,
        number,
        topic: topicFor(moduleName, block),
        question,
        choices,
        answers,
        matching,
        explanation,
        gradable: Boolean(matching) || (choices.length > 0 && answers.length > 0),
        raw: block
      };
    });
}

function findAnswersFromExplanation(number, choices, explanation, matching) {
  if (matching) return [];
  const key = {
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
  return key[number] || choices.filter((choice) => explanation.toLowerCase().includes(choice.toLowerCase()));
}

function topicFor(moduleName, block) {
  if (moduleName === "Modules 1-2") return "OSPF";
  if (moduleName === "Modules 3-5") return "Security";
  if (/\bVPN|IPsec|GRE|SSL|TLS|ASA|HMAC|Diffie-Hellman|IKE|MPLS VPN\b/i.test(block)) return "VPN";
  if (/\bWAN|Frame Relay|MetroE|leased line|T1\/E1|DSL|cable|branch office\b/i.test(block)) return "WAN";
  return "NAT";
}

const questions = sources.flatMap((source) => {
  const contents = fs.readFileSync(source.file, "utf8");
  return source.file.endsWith(".html") ? parseHtmlQuestions(contents, source.module) : parsePlainQuestions(contents, source.module);
});

fs.writeFileSync("questions.js", `window.QUESTION_BANK = ${JSON.stringify(questions, null, 2)};\n`, "utf8");
console.log(`Wrote ${questions.length} questions`);
console.log(sources.map((source) => `${source.module}: ${questions.filter((q) => q.module === source.module).length}`).join("\n"));
