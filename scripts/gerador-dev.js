const modelosNome = [
    (nome) => `E aí! Me chamo ${nome}`,
    (nome) => `E aí! Eu sou ${nome}`,
    (nome) => `E aí! Sou ${nome}`,
    (nome) => `E aí! Meu nome é ${nome}`,
    (nome) => `Olá! Meu nome é ${nome}`,
    (nome) => `Olá! Me chamo ${nome}`,
    (nome) => `Olá! Eu sou ${nome}`,
    (nome) => `Oi! Eu sou ${nome}`,
    (nome) => `Oi! Tudo bem? Sou ${nome}`,
    (nome) => `Prazer! Me chamo ${nome}`,
    (nome) => `Como vai? Eu sou ${nome}`,
    (nome) => `Olá, tudo certo? Me chamo ${nome}`,
    (nome) => `Saudações! Eu sou ${nome}`,
    (nome) => `Fala aí! Eu sou ${nome}`,
    (nome) => `Fala, tudo bem? Me chamo ${nome}`,,
    (nome) => `Beleza? Sou ${nome}`,
    (nome) => `Como vai? Meu nome é ${nome}`,
    (nome) => `E aí! Beleza? Sou ${nome}`,
    (nome) => `Oi! Eu me chamo ${nome}`,
    (nome) => `Opa! Tudo bom? Eu sou ${nome}`,
    (nome) => `Opa! Me chamo ${nome}`,
]

const modelosArea = [
    (area) => `Sou um ${area}`,
    (area) => `Sou ${area}`,
    (area) => `Sou um profissional ${area}`,
    (area) => `Na área sou ${area}`,
    (area) => `Na área de tecnolgia sou ${area}`,
    (area) => `Me dedico como ${area}`,
]

const modelosTecnologiasDev = [
    (tecnologias) => `Domino as tecnologias de ${tecnologias}`,
    (tecnologias) => `Tenho conhecimento das tecnologias de ${tecnologias}`,
    (tecnologias) => `Tenho conhecimento de ${tecnologias}`,
    (tecnologias) => `Tenho conhecimento das tecnologias de ${tecnologias}`,
    (tecnologias) => `Tenho domínio de ${tecnologias}`,
    (tecnologias) => `Tenho domínio das tecnologias de ${tecnologias}`,
    (tecnologias) => `Sou familiarizado com ${tecnologias}`,
    (tecnologias) => `Tenho habilidades em ${tecnologias}`,
    (tecnologias) => `Tenho habilidades com tecnologias ${tecnologias}`,
    (tecnologias) => `Tenho habilidades com tecnologias de ${tecnologias}`,
    (tecnologias) => `Tenho prática com ${tecnologias}`,
    (tecnologias) => `Tenho prática com as tecnologias ${tecnologias}`,
    (tecnologias) => `Domínio avançado em ${tecnologias}`,
    (tecnologias) => `Domínio avançado com ${tecnologias}`,
    (tecnologias) => `Domínio avançado com tecnologias ${tecnologias}`,
    (tecnologias) => `Domínio avançado em tecnologias ${tecnologias}`,
    (tecnologias) => `Conhecimento sólido em tecnologias ${tecnologias}`,
    (tecnologias) => `Conhecimento sólido em ${tecnologias}`,
    (tecnologias) => `Utilizo ${tecnologias}`,
    (tecnologias) => `Utilizo as tecnologias ${tecnologias}`,
]

const modelosFormacaoTecnico = [
    { id: 1, modelo: (cursoTecnico) => `Tenho formação técnica em ${cursoTecnico}` },
    { id: 2, modelo: (cursoTecnico) => `Sou técnico em ${cursoTecnico}` },
    { id: 3, modelo: (cursoTecnico) => `Possuo formação técnica em ${cursoTecnico}` },
    { id: 4, modelo: (cursoTecnico) => `Formado como técnico em ${cursoTecnico}` },
    { id: 5, modelo: (cursoTecnico) => `Concluí o curso técnico em ${cursoTecnico}` },
    { id: 6, modelo: (cursoTecnico) => `Tenho curso técnico em ${cursoTecnico}` },
    { id: 7, modelo: (cursoTecnico) => `Sou formado em curso técnico de ${cursoTecnico}` },
    { id: 8, modelo: (cursoTecnico) => `Sou formado como técnico em ${cursoTecnico}` },
    { id: 9, modelo: (cursoTecnico) => `Tenho qualificação técnica em ${cursoTecnico}` },
    { id: 10, modelo: (cursoTecnico) => `Formação técnica concluída em ${cursoTecnico}` },
    { id: 11, modelo: (cursoTecnico) => `Formação concluída como técnico em ${cursoTecnico}` },
    { id: 12, modelo: (cursoTecnico) => `Sou certificado como técnico em ${cursoTecnico}` },
    { id: 13, modelo: (cursoTecnico) => `Tenho certificação técnica em ${cursoTecnico}` },
    { id: 14, modelo: (cursoTecnico) => `Tenho diploma técnico em ${cursoTecnico}` },
    { id: 15, modelo: (cursoTecnico) => `Tenho especialização técnica em ${cursoTecnico}` },
    { id: 16, modelo: (cursoTecnico) => `Minha formação técnica é em ${cursoTecnico}` },
    { id: 17, modelo: (cursoTecnico) => `Fiz curso técnico na área de ${cursoTecnico}` },
    { id: 18, modelo: (cursoTecnico) => `Possuo diploma técnico de ${cursoTecnico}` },
    { id: 19, modelo: (cursoTecnico) => `Tenho nível técnico em ${cursoTecnico}` },
    { id: 20, modelo: (cursoTecnico) => `Concluí formação técnica na área de ${cursoTecnico}` },
    { id: 21, modelo: (cursoTecnico) => `Sou formado no curso técnico de ${cursoTecnico}` },
    { id: 22, modelo: (cursoTecnico) => `Sou técnico formado em ${cursoTecnico}` },
    { id: 23, modelo: (cursoTecnico) => `Com formação técnica em ${cursoTecnico}` },
]

const modelosFormacaoGraduacao = [
    { id: 1, modelo: (cursoGraduacao) => `Tenho formação em ${cursoGraduacao}` },
    { id: 2, modelo: (cursoGraduacao) => `Sou graduado em ${cursoGraduacao}` },
    { id: 3, modelo: (cursoGraduacao) => `Possuo graduação em ${cursoGraduacao}` },
    { id: 4, modelo: (cursoGraduacao) => `Formado em ${cursoGraduacao}` },
    { id: 5, modelo: (cursoGraduacao) => `Concluí a graduação em ${cursoGraduacao}` },
    { id: 6, modelo: (cursoGraduacao) => `Tenho graduação em ${cursoGraduacao}` },
    { id: 7, modelo: (cursoGraduacao) => `Sou formado na graduação de ${cursoGraduacao}` },
    //{ id: 8, modelo: (cursoGraduacao) => `Sou formado como técnico em ${cursoGraduacao}` },
    //{ id: 9, modelo: (cursoGraduacao) => `Tenho qualificação técnica em ${cursoGraduacao}` },
    { id: 10, modelo: (cursoGraduacao) => `Formação concluída em ${cursoGraduacao}` },
    //{ id: 11, modelo: (cursoGraduacao) => `Formação concluída como técnico em ${cursoGraduacao}` },
    //{ id: 12, modelo: (cursoGraduacao) => `Sou certificado como técnico em ${cursoGraduacao}` },
    //{ id: 13, modelo: (cursoGraduacao) => `Tenho certificação técnica em ${cursoGraduacao}` },
    { id: 14, modelo: (cursoGraduacao) => `Tenho diploma em ${cursoGraduacao}` },
    { id: 15, modelo: (cursoGraduacao) => `Tenho especialização em ${cursoGraduacao}` },
    { id: 16, modelo: (cursoGraduacao) => `Minha formação é em ${cursoGraduacao}` },
    { id: 17, modelo: (cursoGraduacao) => `Fiz graduação no curso de ${cursoGraduacao}` },
    { id: 18, modelo: (cursoGraduacao) => `Possuo diploma em ${cursoGraduacao}` },
    //{ id: 19, modelo: (cursoGraduacao) => `Tenho nível técnico em ${cursoGraduacao}` },
    { id: 20, modelo: (cursoGraduacao) => `Concluí a formação no curso de ${cursoGraduacao}` },
    { id: 21, modelo: (cursoGraduacao) => `Sou formado no curso de ${cursoGraduacao}` },
    { id: 22, modelo: (cursoGraduacao) => `Sou formado em ${cursoGraduacao}` },
    { id: 23, modelo: (cursoGraduacao) => `Com formação em ${cursoGraduacao}` },
]

const modelosFormacaoMestrado = [
    { id: 1, modelo: (cursoMestrado) => `Tenho mestrado em ${cursoMestrado}` },
    { id: 2, modelo: (cursoMestrado) => `Sou mestre em ${cursoMestrado}` },
    { id: 3, modelo: (cursoMestrado) => `Possuo mestrado em ${cursoMestrado}` },
    { id: 4, modelo: (cursoMestrado) => `Mestre em ${cursoMestrado}` },
    { id: 5, modelo: (cursoMestrado) => `Concluí o mestrado em ${cursoMestrado}` },
    { id: 6, modelo: (cursoMestrado) => `Tenho mestrado em ${cursoMestrado}` },
    //{ id: 7, modelo: (cursoMestrado) => `Sou formado na graduação de ${cursoMestrado}` },
    //{ id: 8, modelo: (cursoMestrado) => `Sou formado como técnico em ${cursoMestrado}` },
    //{ id: 9, modelo: (cursoMestrado) => `Tenho qualificação técnica em ${cursoMestrado}` },
    { id: 10, modelo: (cursoMestrado) => `Mestrado concluído em ${cursoMestrado}` },
    //{ id: 11, modelo: (cursoMestrado) => `Formação concluída como técnico em ${cursoMestrado}` },
    //{ id: 12, modelo: (cursoMestrado) => `Sou certificado como técnico em ${cursoMestrado}` },
    //{ id: 13, modelo: (cursoMestrado) => `Tenho certificação técnica em ${cursoMestrado}` },
    { id: 14, modelo: (cursoMestrado) => `Tenho diploma de mestrado em ${cursoMestrado}` },
    //{ id: 15, modelo: (cursoMestrado) => `Tenho especialização em ${cursoMestrado}` },
    { id: 16, modelo: (cursoMestrado) => `Meu mestrado é em ${cursoMestrado}` },
    { id: 17, modelo: (cursoMestrado) => `Fiz mestrado no curso de ${cursoMestrado}` },
    { id: 18, modelo: (cursoMestrado) => `Possuo diploma de mestrado em ${cursoMestrado}` },
    //{ id: 19, modelo: (cursoMestrado) => `Tenho nível técnico em ${cursoMestrado}` },
    { id: 20, modelo: (cursoMestrado) => `Concluí a formação de mestrado no curso de ${cursoMestrado}` },
    { id: 21, modelo: (cursoMestrado) => `Sou formado como mestre no curso de ${cursoMestrado}` },
    { id: 22, modelo: (cursoMestrado) => `Me formei como mestre em ${cursoMestrado}` },
    { id: 23, modelo: (cursoMestrado) => `Com mestrado em ${cursoMestrado}` },
]

const modelosFormacaoDoutorado = [
    { id: 1, modelo: (cursoDoutorado) => `Tenho doutorado em ${cursoDoutorado}` },
    { id: 2, modelo: (cursoDoutorado) => `Sou doutor em ${cursoDoutorado}` },
    { id: 3, modelo: (cursoDoutorado) => `Possuo doutorado em ${cursoDoutorado}` },
    { id: 4, modelo: (cursoDoutorado) => `Doutor em ${cursoDoutorado}` },
    { id: 5, modelo: (cursoDoutorado) => `Concluí o doutorado em ${cursoDoutorado}` },
    { id: 6, modelo: (cursoDoutorado) => `Tenho doutorado em ${cursoDoutorado}` },
    //{ id: 7, modelo: (cursoDoutorado) => `Sou formado na graduação de ${cursoDoutorado}` },
    //{ id: 8, modelo: (cursoDoutorado) => `Sou formado como técnico em ${cursoDoutorado}` },
    //{ id: 9, modelo: (cursoDoutorado) => `Tenho qualificação técnica em ${cursoDoutorado}` },
    { id: 10, modelo: (cursoDoutorado) => `Doutorado concluído em ${cursoDoutorado}` },
    //{ id: 11, modelo: (cursoDoutorado) => `Formação concluída como técnico em ${cursoDoutorado}` },
    //{ id: 12, modelo: (cursoDoutorado) => `Sou certificado como técnico em ${cursoDoutorado}` },
    //{ id: 13, modelo: (cursoDoutorado) => `Tenho certificação técnica em ${cursoDoutorado}` },
    { id: 14, modelo: (cursoDoutorado) => `Tenho diploma de doutorado em ${cursoDoutorado}` },
    //{ id: 15, modelo: (cursoDoutorado) => `Tenho especialização em ${cursoDoutorado}` },
    { id: 16, modelo: (cursoDoutorado) => `Meu doutorado é em ${cursoDoutorado}` },
    { id: 17, modelo: (cursoDoutorado) => `Fiz doutorado no curso de ${cursoDoutorado}` },
    { id: 18, modelo: (cursoDoutorado) => `Possuo diploma de doutorado em ${cursoDoutorado}` },
    //{ id: 19, modelo: (cursoDoutorado) => `Tenho nível técnico em ${cursoDoutorado}` },
    { id: 20, modelo: (cursoDoutorado) => `Concluí a formação de doutorado no curso de ${cursoDoutorado}` },
    { id: 21, modelo: (cursoDoutorado) => `Sou formado como doutor no curso de ${cursoDoutorado}` },
    { id: 22, modelo: (cursoDoutorado) => `Me formei como doutor em ${cursoDoutorado}` },
    { id: 23, modelo: (cursoDoutorado) => `Com doutorado em ${cursoDoutorado}` },
]

const modelosExperiencias = [
    (cargo, empresa, inicio, saida) => `Trabalhei como ${cargo} na empresa ${empresa} de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Atuei como ${cargo} na ${empresa} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Fui ${cargo} na empresa ${empresa} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Desempenhei o cargo de ${cargo} na ${empresa} de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Tive experiência como ${cargo} na empresa ${empresa} de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Atuei profissionalmente como ${cargo} na ${empresa} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Trabalhei na empresa ${empresa} exercendo o cargo de ${cargo} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Atuei na empresa ${empresa} como ${cargo} de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Fui responsável pela função de ${cargo} na ${empresa} de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Passei pela empresa ${empresa} atuando como ${cargo} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Desenvolvi atividades como ${cargo} na ${empresa} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Tive oportunidade de trabalhar como ${cargo} na ${empresa} entre ${inicio} e ${saida}`,
    (cargo, empresa, inicio, saida) => `Conquistei experiência como ${cargo} na empresa ${empresa} de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Atuei como ${cargo} na ${empresa} durante o período de ${inicio} até ${saida}`,
    (cargo, empresa, inicio, saida) => `Experiência como ${cargo} na empresa ${empresa} entre ${inicio} e ${saida}`,
];


// VERIFICAR QUANTAS EXPERIÊNCIAS HÁ
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-dev")

    function gerarBioDev() {
        
        const nome = document.getElementById("nome").value.trim();
        const area = document.getElementById("area").value.trim();
        const tecnologias = document.getElementById("tecnologias").value.trim();

        const radioFormacao = document.getElementById("com-formacao");
        const checkboxTecnico = document.getElementById("checkbox-tecnico");
        const checkboxGraduacao = document.getElementById("checkbox-graduacao");
        const checkboxMestrado = document.getElementById("checkbox-mestrado");
        const checkboxDoutorado = document.getElementById("checkbox-doutorado");

        const cargos = document.querySelectorAll("[id^='cargo-']");
        const empresas = document.querySelectorAll("[id^='empresa-']");
        const datasInicio = document.querySelectorAll("[id^='data-inicio-']");
        const datasSaida = document.querySelectorAll("[id^='data-saida-']");

        let valueInputTecnico = null;
        let valueInputGraduacao = null;
        let valueInputMestrado = null;
        let valueInputDoutorado = null;

        // console.log("nome:" + nome)
        // console.log("area:" + area)
        // console.log("tecnologias:" + tecnologias)

        if(radioFormacao.checked) {
            if(checkboxTecnico.checked){
                valueInputTecnico = document.getElementById("curso").value.trim();
                // console.log("Formação técnico detectado")
                // console.log("Técnico: " + valueInputTecnico)
            }
            if(checkboxGraduacao.checked){
                valueInputGraduacao = document.getElementById("graduacao").value.trim();
                // console.log("Formação graduação detectado")
                // console.log("Graduacao: " + valueInputGraduacao)
            }
            if(checkboxMestrado.checked){
                valueInputMestrado = document.getElementById("mestrado").value.trim();
                // console.log("Formação mestrado detectado")
                // console.log("Mestrado: " + valueInputMestrado)
            }
            if(checkboxDoutorado.checked){
                valueInputDoutorado = document.getElementById("doutorado").value.trim();
                // console.log("Formação doutorado detectado")
                // console.log("Doutorado: " + valueInputDoutorado)
            }
        }

        let valueInputCargos = [];
        let valueInputEmpresas = [];
        let valueDatasInicio = [];
        let valueDatasSaida = [];

        cargos.forEach(input => {
            valueInputCargos.push(input.value.trim());
        });
        empresas.forEach(input => {
            valueInputEmpresas.push(input.value.trim());
        });
        datasInicio.forEach(input => {
            valueDatasInicio.push(input.value.trim());
        });
        datasSaida.forEach(input => {
            valueDatasSaida.push(input.value.trim());
        });

        // console.log("Cargos:", valueInputCargos);
        // console.log("Empresas:", valueInputEmpresas);
        // console.log("Ínicio: ", valueDatasInicio);
        // console.log("Saída: ", valueDatasSaida);

        let aleatorio = Math.floor(Math.random() * modelosNome.length)
        let frase = modelosNome[aleatorio](nome) + ".";

        aleatorio = Math.floor(Math.random() * modelosArea.length)
        frase += " " + modelosArea[aleatorio](area) + ".";
        aleatorio = Math.floor(Math.random() * modelosTecnologiasDev.length)
        frase += " " + modelosTecnologiasDev[aleatorio](tecnologias) + ".";

        let quantidadeDeCursos = 0;
        if (valueInputTecnico && valueInputTecnico.trim() !== "") {
            quantidadeDeCursos++
        }
        if (valueInputGraduacao && valueInputGraduacao.trim() !== "") {
            quantidadeDeCursos++
        }
        if (valueInputMestrado && valueInputMestrado.trim() !== "") {
            quantidadeDeCursos++
        }
        if (valueInputDoutorado && valueInputDoutorado.trim() !== "") {
            quantidadeDeCursos++
        }

        if(quantidadeDeCursos > 1){
            let quant = "Um"
            switch(quantidadeDeCursos){
                case 2: 
                    quant = "duas"
                    break;

                case 3:
                    quant = "três"
                    break;

                case 4: 
                    quant = "quatro"
                    break;
            }
            frase += ` Tenho ${quant} formações, dentre elas`
        }

        // Cria uma lista com as formações que realmente têm valor preenchido
        const formacoes = [];

        if (valueInputTecnico && valueInputTecnico.trim() !== "") {
            formacoes.push({ tipo: "tecnico", valor: valueInputTecnico, modelos: modelosFormacaoTecnico });
        }
        if (valueInputGraduacao && valueInputGraduacao.trim() !== "") {
            formacoes.push({ tipo: "graduacao", valor: valueInputGraduacao, modelos: modelosFormacaoGraduacao });
        }
        if (valueInputMestrado && valueInputMestrado.trim() !== "") {
            formacoes.push({ tipo: "mestrado", valor: valueInputMestrado, modelos: modelosFormacaoMestrado });
        }
        if (valueInputDoutorado && valueInputDoutorado.trim() !== "") {
            formacoes.push({ tipo: "doutorado", valor: valueInputDoutorado, modelos: modelosFormacaoDoutorado });
        }

        let usados = [] // PARA ARMAZENAR IDs DE FORMAÇÃO JÁ USADOS.
        const total = formacoes.length;

        formacoes.forEach((formacao, index) => {
            const modelosDisponiveis = formacao.modelos.filter(m => !usados.includes(m.id));
            if (modelosDisponiveis.length > 0) {
                const aleatorio = Math.floor(Math.random() * modelosDisponiveis.length);
                const modeloEscolhido = modelosDisponiveis[aleatorio];
                usados.push(modeloEscolhido.id);

                // Determina o separador correto
                let separador = ",";
                if (index === total - 2) separador = " e"; // penúltimo item
                else if (index === total - 1) separador = "."; // último item

                frase += " " + modeloEscolhido.modelo(formacao.valor) + separador;
            }
        });

       // === EXPERIÊNCIAS PROFISSIONAIS ===
        
        let experiencias = [];

        for (let i = 0; i < valueInputCargos.length; i++) {
            const cargo = valueInputCargos[i];
            const empresa = valueInputEmpresas[i];
            const inicio = valueDatasInicio[i];
            const saida = valueDatasSaida[i];

            // Ignora experiências incompletas
            if (
                cargo && cargo.trim() !== "" &&
                empresa && empresa.trim() !== "" &&
                inicio && inicio.trim() !== ""
            ) {
                experiencias.push({ cargo, empresa, inicio, saida });
            }
        }

        if (experiencias.length > 0) {
            if (experiencias.length > 1) {
                frase += " Tenho experiências profissionais, entre elas";
            }

            experiencias.forEach((exp, index) => {
                let inicio = exp.inicio;
                let saida = exp.saida;

                // Corrigir ordem se necessário
                if (saida && new Date(saida) < new Date(inicio)) {
                    [inicio, saida] = [saida, inicio];
                }

                // Função para formatar datas
                function formatarData(dataStr) {
                    if (!dataStr || dataStr.trim() === "") return "";
                    const partes = dataStr.split("-");
                    if (partes.length !== 3) return dataStr;
                    const [ano, mes, dia] = partes;
                    return `${dia}/${mes}/${ano}`;
                }

                const inicioFormatado = formatarData(inicio);
                const saidaFormatada = saida && saida.trim() !== "" ? formatarData(saida) : "o atual momento";

                // Modelo aleatório
                const aleatorio = Math.floor(Math.random() * modelosExperiencias.length);
                const modelo = modelosExperiencias[aleatorio];

                // Frase da experiência
                let experienciaFrase = modelo(exp.cargo, exp.empresa, inicioFormatado, saidaFormatada);

                // Adicionar conectivos
                if (index < experiencias.length - 2) experienciaFrase += ",";
                else if (index === experiencias.length - 2) experienciaFrase += " e";
                else experienciaFrase += ".";

                frase += " " + experienciaFrase;
            });
        }

        const bioDiv = document.getElementById("bioGerada");
        bioDiv.textContent = frase;
        bioDiv.classList.remove("opacity-0")

        console.log(frase)
        console.log("VALUE INPUT: " + valueInputTecnico)
        //console.log("IDS USADOS: " + usados)
        console.log("QUANTIDADE: " + quantidadeDeCursos)
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        gerarBioDev();
    })
});