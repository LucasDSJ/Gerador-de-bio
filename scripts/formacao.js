document.addEventListener("DOMContentLoaded", () => {    
    document.getElementById("checkbox-tecnico").style.display = "none";
    document.getElementById("checkbox-graduacao").style.display = "none";
    document.getElementById("checkbox-mestrado").style.display = "none";
    document.getElementById("checkbox-doutorado").style.display = "none";
    document.getElementById("label-tecnico").style.display = "none";
    document.getElementById("label-graduacao").style.display = "none";
    document.getElementById("label-mestrado").style.display = "none";
    document.getElementById("label-doutorado").style.display = "none";
    
    //document.getElementById("input-sem-formacao").style.display = "none";
    document.getElementById("input-tecnico").style.display = "none";
    document.getElementById("input-graduacao").style.display = "none";
    document.getElementById("input-mestrado").style.display = "none";
    document.getElementById("input-doutorado").style.display = "none";

    const radioFormacao = document.getElementById("com-formacao");

    //const checkboxSemFormacao = document.getElementById("sem-formacao");
    const checkboxTecnico = document.getElementById("checkbox-tecnico");
    const checkboxGraduacao = document.getElementById("checkbox-graduacao");
    const checkboxMestrado = document.getElementById("checkbox-mestrado");
    const checkboxDoutorado = document.getElementById("checkbox-doutorado");

    // Mudança principal: usar "click" em vez de "change" — funciona mesmo se for um único radio
    radioFormacao.addEventListener("click", () => {
        if (radioFormacao.checked) {
            document.getElementById("label-tecnico").style.display = "block";
            document.getElementById("checkbox-tecnico").style.display = "block";
            document.getElementById("label-graduacao").style.display = "block";
            document.getElementById("checkbox-graduacao").style.display = "block";
            document.getElementById("label-mestrado").style.display = "block";
            document.getElementById("checkbox-mestrado").style.display = "block";
            document.getElementById("label-doutorado").style.display = "block";
            document.getElementById("checkbox-doutorado").style.display = "block";
        } 
    });

    // Mudança: eventos dos checkboxes foram movidos para fora do listener do radio
    checkboxTecnico.addEventListener("change", () => {
        if (checkboxTecnico.checked) {
            document.getElementById("input-tecnico").style.display = "block";
        } else {
            document.getElementById("input-tecnico").style.display = "none";
        }
    });

    checkboxGraduacao.addEventListener("change", () => {
        if (checkboxGraduacao.checked) {
            document.getElementById("input-graduacao").style.display = "block";
        } else {
            document.getElementById("input-graduacao").style.display = "none";
        }
    });

    checkboxMestrado.addEventListener("change", () => {
        if (checkboxMestrado.checked) {
            document.getElementById("input-mestrado").style.display = "block";
        } else {
            document.getElementById("input-mestrado").style.display = "none";
        }
    });

    checkboxDoutorado.addEventListener("change", () => {
        if (checkboxDoutorado.checked) {
            document.getElementById("input-doutorado").style.display = "block";
        } else {
            document.getElementById("input-doutorado").style.display = "none";
        }
    });

    const radioSemFormacao = document.getElementById("sem-formacao");

    radioSemFormacao.addEventListener("click", () => {
        if (radioSemFormacao.checked) {
            // Esconde todos os checkboxes e inputs
            document.getElementById("label-tecnico").style.display = "none";
            document.getElementById("checkbox-tecnico").style.display = "none";
            document.getElementById("label-graduacao").style.display = "none";
            document.getElementById("checkbox-graduacao").style.display = "none";
            document.getElementById("label-mestrado").style.display = "none";
            document.getElementById("checkbox-mestrado").style.display = "none";
            document.getElementById("label-doutorado").style.display = "none";
            document.getElementById("checkbox-doutorado").style.display = "none";
            document.getElementById("input-tecnico").style.display = "none";
            document.getElementById("input-graduacao").style.display = "none";
            document.getElementById("input-mestrado").style.display = "none";
            document.getElementById("input-doutorado").style.display = "none";
        }
    });
});
