document.addEventListener("DOMContentLoaded", () => {
    const btnAdicionar = document.getElementById("adicionar-experiencia");
    const container = document.getElementById("experiencias-container");

    // Função para atualizar os títulos "Experiência X"
    function atualizarNumeracao() {
        const experiencias = container.querySelectorAll(".experiencia-item");
        experiencias.forEach((div, index) => {
            const titulo = div.querySelector("h6");
            titulo.textContent = `Experiência ${index + 1}`;
        });
    }

    btnAdicionar.addEventListener("click", () => {
        const div = document.createElement("div");
        div.classList.add("experiencia-item", "p-3", "mb-3", "rounded", "bg-secondary", "text-white", "position-relative");

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

            <div class="d-flex gap-3">
                <div class="w-50">
                    <label class="form-label">Data de início:</label>
                    <input type="date" class="form-control">
                </div>

                <div class="w-50">
                    <label class="form-label">Data de saída:</label>
                    <input type="date" class="form-control">
                </div>
            </div>

            <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 remover-experiencia">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        // botão de remover
        div.querySelector(".remover-experiencia").addEventListener("click", () => {
            div.remove();
            atualizarNumeracao(); // Atualiza numeração ao remover
        });

        container.appendChild(div);
        atualizarNumeracao(); // Atualiza numeração ao adicionar
    });
});
