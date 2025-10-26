document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionar = document.getElementById("adicionar-experiencia");
  const container = document.getElementById("experiencias-container");

  function atualizarNumeracao() {
    const experiencias = container.querySelectorAll(".experiencia-item");

    experiencias.forEach((div, index) => {
      const num = index + 1;

      // Atualiza título
      const titulo = div.querySelector("h6");
      if (titulo) titulo.textContent = `Experiência ${num}`;

      // --- Cargo e Empresa ---
      const cargo = div.querySelector(".cargo-input");
      const empresa = div.querySelector(".empresa-input");
      const lblCargo = div.querySelector(".label-cargo");
      const lblEmpresa = div.querySelector(".label-empresa");

      if (cargo && lblCargo) {
        cargo.id = `cargo-${num}`;
        lblCargo.setAttribute("for", `cargo-${num}`);
      }

      if (empresa && lblEmpresa) {
        empresa.id = `empresa-${num}`;
        lblEmpresa.setAttribute("for", `empresa-${num}`);
      }

      // --- Rádios: emprego atual ---
      const radioSim = div.querySelector(".emprego-sim");
      const radioNao = div.querySelector(".emprego-nao");
      const lblSim = div.querySelector(".label-emprego-sim");
      const lblNao = div.querySelector(".label-emprego-nao");

      if (radioSim) {
        radioSim.id = `emprego-atual-true-${num}`;
        radioSim.name = `emprego-atual-${num}`;
      }

      if (radioNao) {
        radioNao.id = `emprego-atual-false-${num}`;
        radioNao.name = `emprego-atual-${num}`;
      }

      if (lblSim) lblSim.setAttribute("for", `emprego-atual-true-${num}`);
      if (lblNao) lblNao.setAttribute("for", `emprego-atual-false-${num}`);

      // --- Datas (início e saída) ---
      const dataInicio = div.querySelector(".data-inicio");
      const dataSaida = div.querySelector(".data-saida");
      const lblInicio = div.querySelector(".label-data-inicio");
      const lblSaida = div.querySelector(".label-data-saida");

      if (dataInicio && lblInicio) {
        dataInicio.id = `data-inicio-${num}`;
        lblInicio.setAttribute("for", `data-inicio-${num}`);
      }

      if (dataSaida && lblSaida) {
        dataSaida.id = `data-saida-${num}`;
        lblSaida.setAttribute("for", `data-saida-${num}`);
      }
    });
  }

  // Contador global (usado só para criar novos elementos)
  let contador = 0;

  btnAdicionar.addEventListener("click", () => {
    contador++;
    const index = contador;

    const div = document.createElement("div");
    div.classList.add(
      "experiencia-item",
      "p-3",
      "mb-3",
      "rounded",
      "border-top",
      "border-bottom",
      "bg-dark",
      "text-white",
      "position-relative"
    );

    div.innerHTML = `
      <h6 class="mb-2">Experiência</h6>

      <div class="mb-2">
        <label class="form-label label-cargo" for="cargo-${index}">Cargo:</label>
        <input type="text" class="form-control cargo-input" id="cargo-${index}" placeholder="Ex: Desenvolvedor Backend">
      </div>

      <div class="mb-2">
        <label class="form-label label-empresa" for="empresa-${index}">Empresa:</label>
        <input type="text" class="form-control empresa-input" id="empresa-${index}" placeholder="Ex: Tech Solutions LTDA">
      </div>

      <h5>Emprego atual?</h5>
      <div>
        <input type="radio" id="emprego-atual-true-${index}" name="emprego-atual-${index}" value="true" class="form-check-input emprego-sim">
        <label for="emprego-atual-true-${index}" class="form-check-label ms-2 label-emprego-sim">Sim</label>

        <input type="radio" id="emprego-atual-false-${index}" name="emprego-atual-${index}" value="false" class="form-check-input ms-3 emprego-nao">
        <label for="emprego-atual-false-${index}" class="form-check-label ms-2 label-emprego-nao">Não</label>
      </div>

      <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 remover-experiencia">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    // Evento para mostrar datas quando marca emprego atual
    div.querySelectorAll(`input[name="emprego-atual-${index}"]`).forEach(radio => {
      radio.addEventListener("click", () => {
        let divDatas = div.querySelector(".datas-emprego");

        // Cria a div de datas se ainda não existir
        if (!divDatas) {
          divDatas = document.createElement("div");
          divDatas.classList.add("datas-emprego", "mt-3");
          divDatas.innerHTML = `
            <div class="d-flex gap-3 ps-0 pe-3">
              <div class="col-6">
                <label class="form-label label-data-inicio" for="data-inicio-${index}">Data de início:</label>
                <input type="date" class="form-control data-inicio" id="data-inicio-${index}">
              </div>

              <div class="col-6 data-saida-container">
                <label class="form-label label-data-saida" for="data-saida-${index}">Data de saída:</label>
                <input type="date" class="form-control data-saida" id="data-saida-${index}">
              </div>
            </div>
          `;
          div.appendChild(divDatas);
        }

        // Exibir ou ocultar "Data de saída"
        const saidaContainer = div.querySelector(".data-saida-container");
        if (radio.value === "true") {
          saidaContainer.style.display = "none";
        } else {
          saidaContainer.style.display = "block";
        }

        // Atualiza IDs depois de criar as datas
        atualizarNumeracao();
      });
    });

    // Botão de remover experiência
    div.querySelector(".remover-experiencia").addEventListener("click", () => {
      div.remove();
      atualizarNumeracao();
    });

    container.appendChild(div);
    atualizarNumeracao();
  });
});
