const form = document.getElementById("form");
const numInt = document.getElementById("numInt").textContent;
const integrante1 = [document.getElementById("nombreEmp1"), document.getElementById("area.empleado1"), document.getElementById("n.empleado1")];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submiting');
    console.log('Numero de integrantes: ', numInt);
    console.log('Integrante 1', integrante1.values);
})