document.addEventListener("DOMContentLoaded", () => {
    const contadorVisitas = document.getElementById("contadorVisitas");
    const btnReestablecer = document.getElementById("btnReestablecer");

    let visitas = localStorage.getItem("visitas");
    if (!visitas) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    contadorVisitas.textContent = visitas;

    localStorage.setItem("visitas", visitas);
    btnReestablecer.addEventListener("click", () => {
        localStorage.setItem("visitas", 0);
        contadorVisitas.textContent = 0;
    });
});
