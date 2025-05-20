
   

  let currentLanguage = 'sk';

  const content = {
    sk: {
      title: "Konfigurácia IPv4 v Cisco Packet Tracer",
      pcTitle: "1. Konfigurácia PC",
      pcText: "Vyber PC v Packet Traceri, choď na kartu Desktop a otvor IP Configuration. Zadaj IP adresu, masku podsiete a bránu.",
      routerTitle: "2. Konfigurácia Routera",
      routerText: "Klikni na router, choď do CLI módu a nakonfiguruj IP adresy pomocou príkazov ako interface, ip address a no shutdown.",
      routerText2:"interface",
      switchTitle: "3. Konfigurácia Switcha",
      switchText: "Na základný switch netreba IP adresu, ale pre správu môžeš nastaviť IP na VLAN1 a priradiť port do VLAN.",
      quizTitle: "Cvičenie 1: Vyber správny príkaz",
      quizQuestion: "Ktorý príkaz nastaví IP adresu na routeri?",
      quiz2Title: "Cvičenie 2: Príkaz na aktiváciu rozhrania",
      quiz2Question: "Ktorý príkaz aktivuje rozhranie na routeri?",
      quiz3Title: "Cvičenie 3: VLAN konfigurácia",
      quiz3Question: "Aký príkaz nastaví IP adresu pre VLAN1 na switchi?",
      quiz4Title: "Cvičenie 4: Príkaz na priradenie portu do VLAN",
      quiz4Question: "Aký príkaz priradí port do VLAN10?",
      quiz5Title: "Cvičenie 5: Príkaz na uloženie konfigurácie",
      quiz5Question: "Ktorý príkaz uloží konfiguráciu do pamäte?",
      toggle: "EN",
      correct: "Správne!",
      incorrect: "Nesprávna odpoveď. Skús znova."
    },
    en: {
      title: "IPv4 Configuration in Cisco Packet Tracer",
      pcTitle: "1. PC Configuration",
      pcText: "Select a PC in Packet Tracer, go to the Desktop tab and open IP Configuration. Enter the IP address, subnet mask, and gateway.",
      routerTitle: "2. Router Configuration",
      routerText: "Click on the router, enter CLI mode and configure IP addresses using commands like interface, ip address and no shutdown.",
      routerText2:"interface",
      switchTitle: "3. Switch Configuration",
      switchText: "Basic switches don't need an IP address, but you can assign one to VLAN1 for management and assign a port to the VLAN.",
      quizTitle: "Exercise 1: Choose the correct command",
      quizQuestion: "Which command sets an IP address on a router?",
      quiz2Title: "Exercise 2: Command to activate an interface",
      quiz2Question: "Which command activates an interface on the router?",
      quiz3Title: "Exercise 3: VLAN Configuration",
      quiz3Question: "Which command sets the IP address for VLAN1 on a switch?",
      quiz4Title: "Exercise 4: Assign a port to a VLAN",
      quiz4Question: "Which command assigns a port to VLAN10?",
      quiz5Title: "Exercise 5: Save configuration",
      quiz5Question: "Which command saves the configuration to memory?",
      toggle: "SK",
      correct: "Correct!",
      incorrect: "Incorrect. Try again."
    }
  };

  function toggleLanguage() {
    currentLanguage = currentLanguage === 'sk' ? 'en' : 'sk';
    const lang = content[currentLanguage];
    document.getElementById('title').innerText = lang.title;
    document.getElementById('pc-title').innerText = lang.pcTitle;
    document.getElementById('pc-text').innerText = lang.pcText;
    document.getElementById('router-title').innerText = lang.routerTitle;
    document.getElementById('router-text').innerText = lang.routerText;
    document.getElementById('switch-title').innerText = lang.switchTitle;
    document.getElementById('switch-text').innerText = lang.switchText;
    document.getElementById('quiz-title').innerText = lang.quizTitle;
    document.getElementById('quiz-question').innerText = lang.quizQuestion;
    document.getElementById('quiz2-title').innerText = lang.quiz2Title;
    document.getElementById('quiz2-question').innerText = lang.quiz2Question;
    document.getElementById('quiz3-title').innerText = lang.quiz3Title;
    document.getElementById('quiz3-question').innerText = lang.quiz3Question;
    document.getElementById('quiz4-title').innerText = lang.quiz4Title;
    document.getElementById('quiz4-question').innerText = lang.quiz4Question;
    document.getElementById('quiz5-title').innerText = lang.quiz5Title;
    document.getElementById('quiz5-question').innerText = lang.quiz5Question;
    document.querySelector('.language-toggle').innerText = lang.toggle;

    // Vymazať staré výsledky po prepnutí jazyka
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`quiz${i}-result`).innerText = '';
    }
  }

  function checkAnswer(selectId, resultId) {
    const selected = document.getElementById(selectId).value;
    const result = document.getElementById(resultId);
    const lang = content[currentLanguage];
    if (selected === 'correct') {
      result.innerText = lang.correct;
      result.style.color = 'green';
    } else {
      result.innerText = lang.incorrect;
      result.style.color = 'red';
    }
  }


  function generateQuestion(title, question, answers, correctI) {
let section = document.createElement("section")
section.className = "exercise"
let h2 = document.createElement("h2")
h2.id = "quiz-title"
h2.innerText = title
section.appendChild(h2)
let p = document.createElement("p")
p.id = "quiz-question"
p.innerText = question
section.appendChild(p)
let select = document.createElement("select")
select.id = "quiz-select"
let temp001 = document.createElement("option")
temp001.value = ""
temp001.innerText = "-- vyber možnosť --"
select.appendChild(temp001)
answers.forEach((q, i) => {
  let temp002 = document.createElement("option")
  temp002.value = i === correctI ? "correct" : `wrong${i}`
  temp002.innerText = q
  select.appendChild(temp002)
})
return section
}

questions.forEach((q) => {
document.querySelector("main").appendChild(generateQuestion(q.title, q.questions, q.answers, q.correctI))
})

/*[
    {
        title: Cvičenie 1: Vyber správny príkaz,
        question: 
        answers
        correctI
    },
]*/