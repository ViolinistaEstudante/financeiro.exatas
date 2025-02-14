const questions = [
    {
        question: "Você tem R$ 1.000,00. Qual caminho você escolhe?",
        choices: ["Caminho A: Poupança (0,5% ao mês)", "Caminho B: Renda Fixa (1% ao mês)"],
        answer: "Caminho A: Poupança (0,5% ao mês)"
    },
    {
        question: "Uma tempestade financeira está chegando! Escolha uma estratégia.",
        choices: ["Estratégia Conservadora: Menos risco, mais proteção", "Estratégia Arrojada: Mais risco, mais rentabilidade"],
        answer: "Estratégia Conservadora: Menos risco, mais proteção"
    },
    {
        question: "Você encontrou duas portas. Qual você escolhe?",
        choices: ["Porta do Investidor Paciente", "Porta do Investidor Impulsivo"],
        answer: "Porta do Investidor Paciente"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    question.choices.forEach(choice => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.onclick = () => handleChoice(choice);
        choicesDiv.appendChild(choiceButton);
    });
}

function handleChoice(choice) {
    userAnswers.push(choice);
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        document.getElementById("next-btn").disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    const lastAnswer = userAnswers[userAnswers.length - 1];
    let resultText = "Você foi escolhido para ser o Padrinho Financeiro do Terceirão 25!";
    if (lastAnswer === "Porta do Investidor Paciente") {
        resultText += " Parabéns pela paciência, você é um verdadeiro mentor!";
    } else {
        resultText += " A aventura continua! Que tal pensar mais sobre seus próximos passos?";
    }
    document.getElementById("result").textContent = resultText;
}

window.onload = () => {
    showQuestion();
    document.getElementById("next-btn").disabled = true;
};
