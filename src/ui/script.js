const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const nextBtnMain = document.querySelectorAll(".btn-nextMain");
const prevBtnMain = document.querySelectorAll(".btn-prevMain");
const numIntegrantes = document.getElementById('numInt');
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const formInt1 = document.getElementById("integrante1");
const formInt2 = document.getElementById("integrante2");
const formInt3 = document.getElementById("integrante3");
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

/* Script boton de numero de empelados */
(function() {
  'use strict';
  function ctrls() {
    var _this = this;
    this.counter = 1;
    formInt2.style.display = 'none';
    formInt3.style.display = 'none';
    this.els = {
      decrement: document.querySelector('.ctrl__button--decrement'),
      counter: {
        container: document.querySelector('.ctrl__counter'),
        num: document.querySelector('.ctrl__counter-num'),
        input: document.querySelector('.ctrl__counter-input')
      },
      increment: document.querySelector('.ctrl__button--increment')
    };
    this.decrement = function() {
      var counter = _this.getCounter();
      var nextCounter = (_this.counter > 1) ? --counter : counter;
      _this.setCounter(nextCounter);
      if (counter === 2) {
        formInt2.style.display = 'block';
        formInt3.style.display = 'none';
      } else {
        formInt2.style.display = 'none';
        formInt3.style.display = 'none';
      };
    };
    this.increment = function() {
      var counter = _this.getCounter();
      var nextCounter = (counter < 3) ? ++counter : counter;
      _this.setCounter(nextCounter);
      if (counter === 2) {
        formInt2.style.display = 'block';
      } else {
        formInt2.style.display = 'block';
        formInt3.style.display = 'block';
      };
    };
    this.getCounter = function() {
      return _this.counter;
    };
    this.setCounter = function(nextCounter) {
      _this.counter = nextCounter;
    };
    this.debounce = function(callback) {
      setTimeout(callback, 100);
    };
    this.render = function(hideClassName, visibleClassName) {
      _this.els.counter.num.classList.add(hideClassName);
      setTimeout(function() {
        _this.els.counter.num.innerText = _this.getCounter();
        _this.els.counter.input.value = _this.getCounter();
        _this.els.counter.num.classList.add(visibleClassName);
      }, 100);
      setTimeout(function() {
        _this.els.counter.num.classList.remove(hideClassName);
        _this.els.counter.num.classList.remove(visibleClassName);
      }, 200);
    };
    this.ready = function() {
      _this.els.decrement.addEventListener('click', function() {
        _this.debounce(function() {
          _this.decrement();
          _this.render('is-decrement-hide', 'is-decrement-visible');
        });
      });
      _this.els.increment.addEventListener('click', function() {
        _this.debounce(function() {
          _this.increment();
          _this.render('is-increment-hide', 'is-increment-visible');
        });
      });
      _this.els.counter.input.addEventListener('input', function(e) {
        var parseValue = parseInt(e.target.value);
        if (!isNaN(parseValue) && parseValue >= 1) {
          _this.setCounter(parseValue);
          _this.render();
        }
      });
      _this.els.counter.input.addEventListener('focus', function(e) {
        _this.els.counter.container.classList.add('is-input');
      });
      _this.els.counter.input.addEventListener('blur', function(e) {
        _this.els.counter.container.classList.remove('is-input');
        _this.render();
      });
    };
  };
  // init
  var controls = new ctrls();
  document.addEventListener('DOMContentLoaded', controls.ready);
})();