const form = document.getElementById("form");

const main = require('./main')

main.hello()

const numInt = document.getElementById("numInt").textContent;
const nombreEmp1 = document.getElementById("nombreEmp1");
const areaempleado1 = document.getElementById("area.empleado1");
const nempleado1 = document.getElementById("n.empleado1");
const nombreEmp2 = document.getElementById("nombreEmp2");
const areaempleado2 = document.getElementById("area.empleado2");
const nempleado2 = document.getElementById("n.empleado2");
const nombreEmp3 = document.getElementById("nombreEmp3");
const areaempleado3 = document.getElementById("area.empleado3");
const nempleado3 = document.getElementById("n.empleado3");
const negocio = document.getElementById("negocio").textContent;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newIdea = {
        name: nombreEmp1.value,
        area: areaempleado1.value,
        numero: nempleado1.value
    }

    console.log('Submiting');
    console.log('Numero de integrantes: ', numInt);
    console.log('Nombre emp 1', nombreEmp1.value);
    console.log('Area emp 1', areaempleado1.value);
    console.log('Num emp 1', nempleado1.value);
    main.hello()
  
})
