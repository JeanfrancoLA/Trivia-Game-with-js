const quizData = [
    {
        linkImage: "https://images.assetsdelivery.com/compings_v2/studiostoks/studiostoks1801/studiostoks180100133.jpg",
        question: "¿Cuál es la serie peruana más reconocida?",
        a: "Maricucha",
        b: "Al Fondo Hay Sitio",
        c: "Luz de Luna",
        d: "Princesas",
        correct: "b",
    },
    {
        linkImage: "https://e.rpp-noticias.io/normal/2021/01/25/593259_1050428.jpg",
        question: "¿Qué actriz representa a 'Malena' de De Vuelta Al Barrio?",
        a: "Monica Sanchez",
        b: "Gianella Neyro",
        c: "Mayra Couto",
        d: "Nataniel Sanchez",
        correct: "a",
    },
    {
        linkImage: "https://pics.filmaffinity.com/La_Gran_Sangre_Serie_de_TV-351670562-large.jpg",
        question: "¿En qué año se estrenó 'La Gran Sangre'?",
        a: "2015",
        b: "2004",
        c: "2009",
        d: "2006",
        correct: "d",
    },
    {
        linkImage: "https://i.pinimg.com/originals/df/37/f5/df37f5ef57491f55dbe8f981b930296b.jpg",
        question: "¿En que caso se basó 'En la piel de Alicia'?",
        a: "Nancy Videla",
        b: "Eyvi Ágreda",
        c: "Mara Victoria",
        d: "Susan Rala",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const imgEl = document.getElementById("img-question");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    imgEl.src = currentQuizData.linkImage;
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Respuesta correcta',
                showConfirmButton: false,
                timer: 1500
              })
            score++;
        }else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Respuesta incorrecta',
                showConfirmButton: false,
                timer: 1500
              })
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Gracias por jugar, tu puntaje final es: ${score}</h2>
                
                <a href="../../categoria.html" alt="" class="boton">Jugar de nuevo</button>
            `;
        }
    }
});
