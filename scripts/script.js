const modelosNomeSemSexo = [
    (n) => `Olá! Meu nome é ${n}`,
    (n) => `Olá! Me chamo ${n}`,
    (n) => `Meu nome é ${n}`,
    (n) => `Me chamo ${n}`,
    (n) => `Eu sou ${n}`,
    (n) => `Sou ${n}`,
    (n) => `Saudações! Me chamo ${n}`,
    (n) => `Saudações! Sou ${n}`,
    (n) => `Olá! Tudo bem? Sou ${n}`,
    (n) => `Olá! Tudo bem? Me chamo ${n}`,
    (n) => `Olá! Tudo bem? Eu sou ${n}`,
    (n) => `Olá! Tudo bem? Meu nome é ${n}`,
    (n) => `E aí! Me chamo ${n}`,
    (n) => `E aí! Eu sou ${n}`,
    (n) => `E aí! Sou ${n}`,
    (n) => `E aí! Meu nome é ${n}`,
    (n) => `Oi! Me chamo ${n}`,
    (n) => `Oi! Meu nome é ${n}`,
]

const modelosProfissao = [
    (p) => `Atuo como ${p}`,
    (p) => `Trabalho como ${p}`,
    (p) => `Tenho atuado como ${p}`,
    (p) => `Tenho trabalhado como ${p}`,
    (p) => `Tenho exercido a função de ${p}`,
    (p) => `Exerço a função de ${p}`,
    (p) => `Desempenho a função de ${p}`,
    (p) => `Atualmente sou ${p}`,
    (p) => `Atualmente trabalho como ${p}`,
    (p) => `Atualmente estou trabalhando como ${p}`,
    (p) => `Atualmente exerço a função de ${p}`,
    (p) => `Atualmente desempenho a função de ${p}`,
    (p) => `No momento, estou desempenhando a função de ${p}`,
    (p) => `No momento, estou trabalhando como ${p}`,
    (p) => `No momento, exerço a função de ${p}`,
    (p) => `No momento, trabalho como ${p}`,
]

const modelosObjetivo = [
    (o) => `Meu objetivo atual é ${o}`,
    (o) => `Meu objetivo é ${o}`,
    (o) => `Meu objetivo na atualidade é ${o}`,
    (o) => `Meu objetivo nos dias atuais é ${o}`,
    (o) => `Minha meta nos dias atuais é ${o}`,
    (o) => `Meu objetivo nos dias de hoje é ${o}`,
    (o) => `Minha meta nos dias de hoje é ${o}`,
    (o) => `Tenho como objetivo ${o}`,
    (o) => `Hoje, tenho como objetivo ${o}`,
    (o) => `Hoje, tenho como meta ${o}`,
    (o) => `Hoje, meu objetivo é ${o}`,
    (o) => `Hoje, minha meta é ${o}`,
    (o) => `Hoje, estou mirando em ${o}`,
    (o) => `Neste momento, tenho como objetivo ${o}`,
    (o) => `Neste momento, meu objetivo é ${o}`,
    (o) => `Neste momento, tenho como meta ${o}`,
    (o) => `Neste momento, estou mirando em ${o}`,
]

const meioDeFrase = [
    () => "Isto não é tudo, também",
    () => "Isto não é tudo sobre mim, também",
    () => "Isto não é tudo sobre mim, eu também",
    () => "E não acaba por aí, também",
    () => "E não acaba por aí, eu também",
    () => "Além disso,",
    () => "Além disso, eu",
]

const modelosTecnologias = [
    (t) => `domino as tecnologias de ${t}`,
    (t) => `tenho conhecimento das tecnologias de ${t}`,
    (t) => `tenho conhecimento de ${t}`,
    (t) => `tenho conhecimento das tecnologias de ${t}`,
    (t) => `tenho domínio de ${t}`,
    (t) => `tenho domínio das tecnologias de ${t}`,
]

const modelosInteresse = [
    (i) => `Tenho interesses em ${i}`,
    (i) => `Tenho como interesses ${i}`,
    (i) => `No meu tempo livre, tenho como interesses ${i}`,
    (i) => `No meu tempo livre, tenho interesse em ${i}`,
    (i) => `No tempo livre, tenho interesse em ${i}`,
    (i) => `No tempo livre, tenho como interesses ${i}`,
    (i) => `No tempo livre, me interesso em ${i}`,
    (i) => `No tempo livre, mantenho interesses por ${i}`,
    (i) => `No tempo livre, mantenho interesses em ${i}`,
    (i) => `No tempo livre, mantenho meus interesses em ${i}`,
    (i) => `No tempo livre, mantenho meus interesses por ${i}`,
    (i) => `Nas horas vagas, me interesso em ${i}`,
    (i) => `Nas horas vagas, mantenho interesses em ${i}`,
    (i) => `Nas horas vagas, mantenho interesses por ${i}`,
    (i) => `Nas horas vagas, mantenho meus interesses por ${i}`,
    (i) => `Nas horas vagas, mantenho meus interesses em ${i}`,
    (i) => `Nas horas vagas, tenho como interesses ${i}`,
]

const modelosFinalizacao = [
    () => `Agradeço por ter chegado até aqui`,
    () => `Encerro por aqui, prazer`,
    () => `Sigo em frente, aberto ao que vier`,
    () => `Agradeço pelo seu tempo e interesse`,
    () => `Agradeço por ter lido até aqui`,
    () => `Agradeço pela sua atenção, até uma próxima oportunidade`,
    () => `Conte comigo para o que precisar`,
    () => `Por enquanto, é isso`,
    () => `Desejo boas experiências futuras, para todos`,
    () => `Obrigado por acompanhar até aqui`,
    () => `Espero que tenha sido útil de alguma forma`,
]

const modelosContato = [
    (c) => `Entre em contato: ${c}`,
    (c) => `Se precisar de um profissional qualificado, entre em contato: ${c}`,
    (c) => `Se precisar de um profissional dedicado, entre em contato: ${c}`,
    (c) => `Se estiver procurando um profissional dedicado, entre em contato: ${c}`,
    (c) => `Se estiver procurando um profissional qualificado, entre em contato: ${c}`,
    (c) => `Procurando um bom profissional? Entre em contato: ${c}`,
    (c) => `Precisando de um bom profissional? Entre em contato: ${c}`,
    (c) => `Procurando um profissional qualificado? Entre em contato: ${c}`,
    (c) => `Procurando um profissional capacitado? Este é meu contato: ${c}`,
    (c) => `Procurando um profissional dedicado? Entre em contato: ${c}`,
    (c) => `Está procurando um profissional dedicado? Entre em contato: ${c}`,
    (c) => `Está procurando um profissional qualificado? Este é meu contato: ${c}`,
    (c) => `Está procurando um profissional capacitado? Entre em contato: ${c}`,
    (c) => `Está procurando um profissional que traga resultados? Este é meu contato: ${c}`,
    (c) => `Este é meu contato: ${c}`,
    (c) => `Este é meu contato, caso precise: ${c}`,
    (c) => `Este é meu contato, caso precise de um profissional qualificado: ${c}`,
    (c) => `Este é meu contato, caso precise de um profissional: ${c}`,
    (c) => `Este é meu contato, caso precise de algo: ${c}`,
    (c) => `Este é meu contato, caso precise, não hesite em chamar: ${c}`,
]


//=====================================================================================================================================================//
const modelos = [
    (n, a, t, o, i) => `${n} atua em ${a}, com amplo domínio em ${t}. Seu foco está em ${o} e mantém interesses em ${i}.`,
    (n, a, t, o, i) => `${n}, com formação em ${a}, tem paixão por ${t}. Busca constantemente ${o} e se envolve com ${i}.`,
    (n, a, t, o, i) => `Especialista em ${a}, ${n} utiliza ${t} para alcançar ${o}. Em seu tempo livre, dedica-se a ${i}.`,
    (n, a, t, o, i) => `${n} desenvolve projetos em ${a}, utilizando ${t} como principais ferramentas. Seu objetivo é ${o} e tem interesse por ${i}.`,
    (n, a, t, o, i) => `${n} é envolvido com ${a} e explora tecnologias como ${t}. Busca ${o} e tem como hobbies ${i}.`,
    (n, a, t, o, i) => `Atuando em ${a}, ${n} tem como destaque o uso de ${t}. Pretende ${o} e se interessa por ${i}.`,
    (n, a, t, o, i) => `${n} constrói sua trajetória em ${a}, com forte afinidade por ${t}. Seu objetivo profissional é ${o} e valoriza ${i}.`,
    (n, a, t, o, i) => `${n} trabalha com ${a}, domina ferramentas como ${t} e almeja ${o}. Nas horas vagas, curte ${i}.`,
    (n, a, t, o, i) => `${n} trilha seu caminho na área de ${a}, apaixonado por ${t}. Busca ${o} e mantém o interesse por ${i}.`,
    (n, a, t, o, i) => `${n} atua com dedicação na área de ${a}, utilizando ${t} no dia a dia. Tem como meta ${o} e gosta de explorar ${i}.`,
];


        // Captura elementos
const form = document.getElementById("formulario-padrao");
const bioDiv = document.getElementById("bioGerada");
const novaVersaoBtn = document.getElementById("novaVersaoBtn");
const copiarBtn = document.getElementById("copiarBtn");
const copiadoMsg = document.getElementById("copiadoMsg");

// Função para gerar bio
function gerarBio() {
    const nome = document.getElementById("nome").value.trim();
    const profissao = document.getElementById("area_de_atuacao").value.trim().toLowerCase();
    const tecnologias = document.getElementById("tecnologias_favoritas").value.trim();
    const objetivo = document.getElementById("objetivo_profissional").value.trim().toLowerCase();
    const interesses = document.getElementById("interesses").value.trim().toLowerCase();
    const contato = document.getElementById("contato").value.trim().toLowerCase();

    if (!nome || !profissao || !tecnologias || !objetivo || !interesses) return;

    // const index = Math.floor(Math.random() * modelos.length);
    // const frase = modelos[index](nome, profissao, tecnologias, objetivo, interesses);
    let index = Math.floor(Math.random() * modelosNomeSemSexo.length);
    let frase = modelosNomeSemSexo[index](nome) + ".";
    index = Math.floor(Math.random() * modelosProfissao.length);
    frase += " " + modelosProfissao[index](profissao) + ".";
    index = Math.floor(Math.random() * modelosObjetivo.length);
    frase += " " + modelosObjetivo[index](objetivo) + ".";
    index = Math.floor(Math.random() * meioDeFrase.length);
    frase += " " + meioDeFrase[index]();
    index = Math.floor(Math.random() * modelosTecnologias.length);
    frase += " " + modelosTecnologias[index](tecnologias) + ".";
    index = Math.floor(Math.random() * modelosInteresse.length);
    frase += " " + modelosInteresse[index](interesses) + ".";
    index = Math.floor(Math.random() * modelosFinalizacao.length);
    frase += " " + modelosFinalizacao[index]() + ".";
    index = Math.floor(Math.random() * modelosContato.length);
    frase += " " + modelosContato[index](contato) + ".";
    bioDiv.textContent = frase;
    bioDiv.classList.remove("opacity-0");
    copiadoMsg.style.display = "none";
}

// Botão principal: gerar ao enviar
form.addEventListener("submit", function(event) {
    event.preventDefault();
    gerarBio();
});

// Botão: gerar nova versão com os mesmos dados
novaVersaoBtn.addEventListener("click", function() {
    gerarBio();
});

// Botão: copiar bio para área de transferência
copiarBtn.addEventListener("click", function() {
    const text = bioDiv.textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        mostrarNotificacao("Bio copiada para a área de transferência!", "#2bd653");
    });
});

form.addEventListener("reset", () => {
    if(bioDiv.textContent != ""){
        mostrarNotificacao("Campos limpos com sucesso!", "#d62b47")
    }
    bioDiv.textContent = "";
    copiadoMsg.style.display = "none";
})
