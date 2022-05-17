const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const nextBtnMain = document.querySelectorAll(".btn-nextMain");
const prevBtnMain = document.querySelectorAll(".btn-prevMain");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const formIdea = document.getElementById("form");
const formMain = document.getElementById("main");

let formStepsNum = 0;
hiddenForm(); /*<----Iniciar con el formulario de idea escondido */

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

nextBtnMain.forEach((btn) => {
  btn.addEventListener("click", () => {
    formIdea.style.display = 'block';
    formMain.style.display = 'none';
  });
});

prevBtnMain.forEach((btn) => {
  btn.addEventListener("click", () => {
    formIdea.reset();
    formIdea.style.display = 'none';
    formMain.style.display = 'block';
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

/* funcion para que la forma de idea de mejora inicie escondida */
function hiddenForm(){
  formIdea.style.display = 'none';
}

/* Auto altura para el input de idea de mejora */
function auto_height(elem) { 
    elem.style.height = "1px";
    elem.style.height = (15+elem.scrollHeight)+"px";
}
