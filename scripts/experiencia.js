document.addEventListener("DOMContentLoaded", () => {
    const btnAdicionar = document.getElementById("adicionar-experiencia");
    const container = document.getElementById("experiencias-container");

    function atualizarNumeracao() {
        const experiencias = container.querySelectorAll(".experiencia-item");
        experiencias.forEach((div, index) => {
            const titulo = div.querySelector("h6");
            titulo.textContent = `Experiência ${index + 1}`;
        });
    }

    btnAdicionar.addEventListener("click", () => {
        const index = container.querySelectorAll(".experiencia-item").length + 1;

        const div = document.createElement("div");
        div.classList.add("experiencia-item", "p-3", "mb-3", "rounded", "border-top", "border-bottom", "bg-dark", "text-white", "position-relative");

        div.innerHTML = `
            <h6 class="mb-2">Experiência</h6>

            <div class="mb-2">
                <label class="form-label">Cargo:</label>
                <input type="text" class="form-control" placeholder="Ex: Desenvolvedor Backend">
            </div>

            <div class="mb-2">
                <label class="form-label">Empresa:</label>
                <input type="text" class="form-control" placeholder="Ex: Tech Solutions LTDA">
            </div>

            <h5>Emprego atual?</h5>
            <div>
                <input type="radio" id="emprego-atual-true-${index}" name="emprego-atual-${index}" value="true" class="form-check-input" checked>
                <label for="emprego-atual-true-${index}" class="form-check-label ms-2">Sim</label>
                <input type="radio" id="emprego-atual-false-${index}" name="emprego-atual-${index}" value="false" class="form-check-input ms-3">
                <label for="emprego-atual-false-${index}" class="form-check-label ms-2">Não</label>
            </div>

            <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 remover-experiencia">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        // evento para os rádios dessa experiência
        div.querySelectorAll(`input[name="emprego-atual-${index}"]`).forEach(radio => {
            radio.addEventListener("click", () => {
                // Verifica se já existe a div de datas dentro da experiência
                let divDatas = div.querySelector(".datas-emprego");

                // Se não existir, cria uma e adiciona
                if (!divDatas) {
                    divDatas = document.createElement("div");
                    divDatas.classList.add("datas-emprego", "mt-3");
                    divDatas.innerHTML = `
                        <div class="d-flex gap-3 ps-0 pe-3">
                            <div class="col-6">
                                <label class="form-label">Data de início:</label>
                                <input type="date" class="form-control data-inicio">
                            </div>

                            <div class="col-6 data-saida-container">
                                <label class="form-label">Data de saída:</label>
                                <input type="date" class="form-control data-saida">
                            </div>
                        </div>
                    `;
                    div.appendChild(divDatas);
                }

                // Se o usuário marcou "Sim" (emprego atual), esconde a data de saída
                if (radio.value === "true") {
                    divDatas.querySelector(".data-saida-container").style.display = "none";
                } else {
                    divDatas.querySelector(".data-saida-container").style.display = "block";
                }
            });
        });


        // botão de remover
        div.querySelector(".remover-experiencia").addEventListener("click", () => {
            div.remove();
            atualizarNumeracao();
        });

        container.appendChild(div);
        atualizarNumeracao();
    });
});
