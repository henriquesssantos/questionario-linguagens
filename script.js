// Base de perguntas para Maridos
const questionsMaridos = [
    { id: 1, options: [{ text: 'Gostaria que minha esposa me enviasse mensagens apaixonados.', value: 'A' }, { text: 'Gostaria de receber mais abraços de minha esposa.', value: 'E' }] },
    { id: 2, options: [{ text: 'Gostaria de passar mais tempo sozinho com minha esposa.', value: 'B' }, { text: 'Gosto de fazer serviços de casa com minha esposa.', value: 'D' }] },
    { id: 3, options: [{ text: 'Receber presentes especiais de minha esposa é algo que me deixa feliz.', value: 'C' }, { text: 'Uma das coisas de que mais gosto é viajar com minha esposa.', value: 'B' }] },
    { id: 4, options: [{ text: 'Gostaria que minha esposa fizesse as compras ou abastecesse meu carro.', value: 'D' }, { text: 'Gostaria que minha esposa me tocasse mais.', value: 'E' }] },
    { id: 5, options: [{ text: 'Gostaria que minha esposa me abraçasse em público.', value: 'E' }, { text: 'De vez em quando gostaria de receber um presente surpresa da minha esposa.', value: 'C' }] },
    { id: 6, options: [{ text: 'Gostaria de sair com minha esposa - mesmo que seja apenas uma ida ao supermercado!', value: 'B' }, { text: 'Gosto de andar de mãos dadas com minha esposa.', value: 'E' }] },
    { id: 7, options: [{ text: 'Valorizo os presentes da minha esposa.', value: 'C' }, { text: 'Adoraria ouvir minha esposa dizer "Amo você" com mais frequência.', value: 'A' }] },
    { id: 8, options: [{ text: 'Gostaria que minha esposa se sentasse perto de mim com mais frequência.', value: 'E' }, { text: 'Sinto-me amado quando minha esposa me diz: "Você está bonito".', value: 'A' }] },
    { id: 9, options: [{ text: 'Gostaria de passar mais tempo junto da minha esposa.', value: 'B' }, { text: 'Até mesmo o menor presente da minha esposa é importante para mim.', value: 'C' }] },
    { id: 10, options: [{ text: 'Adoraria ouvir minha esposa dizer "Tenho orgulho de você".', value: 'A' }, { text: 'Quando minha esposa me prepara uma bela refeição, sinto-me amado.', value: 'D' }] },
    { id: 11, options: [{ text: 'Gosto muito de fazer coisas com minha esposa, não importa o que seja.', value: 'B' }, { text: 'Gostaria que minha esposa me dissesse mais palavras de apoio.', value: 'A' }] },
    { id: 12, options: [{ text: 'Coisas pequenas que minha esposa faz significam muito para mim.', value: 'D' }, { text: 'Minha esposa e eu precisamos nos abraçar mais.', value: 'E' }] },
    { id: 13, options: [{ text: 'Gostaria de ouvir mais elogios de minha esposa.', value: 'A' }, { text: 'Para mim, é bastante significativo receber da minha esposa presentes de que gosto muito.', value: 'C' }] },
    { id: 14, options: [{ text: 'Gostaria que minha esposa e eu passássemos mais tempo juntos.', value: 'B' }, { text: 'Gostaria que minha esposa me fizesse afagos nas costas com mais frequência.', value: 'E' }] },
    { id: 15, options: [{ text: 'Gostaria que minha esposa ficasse mais feliz quando eu realizo alguma coisa.', value: 'A' }, { text: 'Gostaria que minha esposa me ajudasse mais com tarefas de casa.', value: 'D' }] },
    { id: 16, options: [{ text: 'Nunca me canso dos beijos de minha esposa.', value: 'E' }, { text: 'Gostaria que minha esposa mostrasse mais interesse pelas coisas que gosto de fazer.', value: 'B' }] },
    { id: 17, options: [{ text: 'Gostaria que minha esposa trabalhasse comigo em algum projeto.', value: 'D' }, { text: 'Gostaria que minha esposa se animasse mais com meus presentes.', value: 'C' }] },
    { id: 18, options: [{ text: 'Adoro quando minha esposa elogia a minha aparência.', value: 'A' }, { text: 'Gostaria que minha esposa não criticasse tanto minhas ideias.', value: 'B' }] },
    { id: 19, options: [{ text: 'Não consigo deixar de tocar minha esposa quando ela está por perto.', value: 'E' }, { text: 'Gostaria que de vez em quando minha esposa me ajudasse com algumas tarefas.', value: 'D' }] },
    { id: 20, options: [{ text: 'Gostaria que minha esposa percebesse quando eu estivesse sobrecarregado e me ajudasse.', value: 'D' }, { text: 'Gostaria que minha esposa pensasse mais em presentes para me dar.', value: 'C' }] },
    { id: 21, options: [{ text: 'Gostaria que minha esposa me desse total atenção enquanto conversamos.', value: 'B' }, { text: 'Manter a casa limpa é um importante ato de serviço.', value: 'D' }] },
    { id: 22, options: [{ text: 'Estou ansioso para saber o que minha esposa vai me dar de aniversário.', value: 'C' }, { text: 'Sei que minha esposa me ama, mas gostaria que ela dissesse isso com mais frequência.', value: 'A' }] },
    { id: 23, options: [{ text: 'Eu ficaria bem feliz se minha esposa me trouxesse um presente na volta de uma viagem.', value: 'C' }, { text: 'Gostaria que minha esposa me ajudasse com alguma tarefa de casa que não aprecio.', value: 'D' }] },
    { id: 24, options: [{ text: 'Fico chateado quando minha esposa me interrompe.', value: 'B' }, { text: 'Jamais me canso de receber presentes de minha esposa.', value: 'C' }] },
    { id: 25, options: [{ text: 'Gostaria que minha esposa me ajudasse quando eu estiver cansado.', value: 'D' }, { text: 'Gostaria que minha esposa fosse tão animada para sair quanto eu.', value: 'B' }] },
    { id: 26, options: [{ text: 'Adoro fazer sexo com minha esposa.', value: 'E' }, { text: 'Gosto quando minha esposa traz pequenas coisas de que ela sabe que vou gostar.', value: 'C' }] },
    { id: 27, options: [{ text: 'Gostaria que minha esposa fosse mais incentivadora.', value: 'A' }, { text: 'Gosto de ver filmes com minha esposa.', value: 'B' }] },
    { id: 28, options: [{ text: 'Se eu recebesse um presente de minha esposa eu me sentiria querido.', value: 'C' }, { text: 'Não consigo desgrudar da minha esposa.', value: 'E' }] },
    { id: 29, options: [{ text: 'Adoraria que minha esposa me ajudasse com as coisas que tenho para fazer.', value: 'D' }, { text: 'Ficaria muito feliz se de vez em quando, minha esposa dissesse coisas como: "Gosto de você".', value: 'A' }] },
    { id: 30, options: [{ text: 'Adoro abraçar minha esposa e depois de termos ficado longe por um tempo.', value: 'E' }, { text: 'Quero ouvir minha esposa dizer que acredita em mim.', value: 'A' }] }
];

// Base de perguntas para Esposas
const questionsEsposas = [
    { id: 1, options: [{ text: 'Eu adoraria receber uma mensagem romântica do meu marido.', value: 'A' }, { text: 'Gostaria que meu marido me abraçasse mais.', value: 'E' }] },
    { id: 2, options: [{ text: 'Gosto de ficar mais sozinha com meu marido.', value: 'B' }, { text: 'Gostaria que meu marido fizesse alguma tarefa doméstica sem que eu precisasse pedir.', value: 'D' }] },
    { id: 3, options: [{ text: 'Adoraria que meu marido me trouxesse um presente do tipo "comprei porque tive vontade".', value: 'C' }, { text: 'Gosto de fazer longas viagens com meu marido.', value: 'B' }] },
    { id: 4, options: [{ text: 'Eu me sentiria muito amada se meu marido lavasse as roupas.', value: 'D' }, { text: 'Gosto quando meu marido me toca.', value: 'E' }] },
    { id: 5, options: [{ text: 'Gostaria que meu marido me abraçasse de vez em quando.', value: 'E' }, { text: 'Gostaria que meu marido me trouxesse presente quando viajasse.', value: 'C' }] },
    { id: 6, options: [{ text: 'Ficaria feliz se eu e meu marido fôssemos a lugares juntos.', value: 'B' }, { text: 'Gosto de segurar a mão de meu marido.', value: 'E' }] },
    { id: 7, options: [{ text: 'Sinto-me amada quando meu marido me dá presentes.', value: 'C' }, { text: 'Sei que meu marido me ama, mas gosto de ouvir ele dizer isso.', value: 'A' }] },
    { id: 8, options: [{ text: 'Gosto que meu marido se sente perto de mim.', value: 'E' }, { text: 'Gostaria que meu marido sempre me dissesse que sou bonita.', value: 'A' }] },
    { id: 9, options: [{ text: 'Passar tempo com meu marido me deixa feliz.', value: 'B' }, { text: 'Gostaria que meu marido me desse presentes pequenos, mas significativos.', value: 'C' }] },
    { id: 10, options: [{ text: 'Gostaria de ouvir meu marido dizer que se orgulha de mim.', value: 'A' }, { text: 'Gostaria que meu marido me ajudasse na limpeza sem que eu precisasse pedir.', value: 'D' }] },
    { id: 11, options: [{ text: 'Gosto muito de fazer as coisas com meu marido não importa o que seja.', value: 'B' }, { text: 'Gostaria de ouvir mais palavras de apoio de meu marido.', value: 'A' }] },
    { id: 12, options: [{ text: 'Gostaria que meu marido fizesse coisas amáveis para mim.', value: 'D' }, { text: 'Adoro abraçar meu marido.', value: 'E' }] },
    { id: 13, options: [{ text: 'Gostaria que meu marido me fizesse elogios com mais frequência.', value: 'A' }, { text: 'Gostaria que meu marido me desse presentes bem escolhidos.', value: 'C' }] },
    { id: 14, options: [{ text: 'O simples fato de estar perto do meu marido faz com que eu me sinta bem.', value: 'B' }, { text: 'Gostaria que meu marido me fizesse uma massagem.', value: 'E' }] },
    { id: 15, options: [{ text: 'Gostaria que meu marido elogiasse mais as minhas realizações.', value: 'A' }, { text: 'Gostaria que meu marido me ajudasse mais com as tarefas que não aprecio.', value: 'D' }] },
    { id: 16, options: [{ text: 'Nunca me canso dos beijos do meu marido.', value: 'E' }, { text: 'Gostaria que meu marido demonstrasse mais interesse por coisas que são importantes para mim.', value: 'B' }] },
    { id: 17, options: [{ text: 'Sinto-me amada quando meu marido me ajuda com meus projetos.', value: 'D' }, { text: 'Ainda fico entusiasmada quando abro um presente do meu marido.', value: 'C' }] },
    { id: 18, options: [{ text: 'Gostaria que meu marido me elogiasse quando eu realizo meus objetivos.', value: 'A' }, { text: 'Gostaria que meu marido me escutasse mais e respeitasse minhas ideias.', value: 'B' }] },
    { id: 19, options: [{ text: 'Não consigo deixar de tocar meu marido quando ele está perto de mim.', value: 'E' }, { text: 'Gostaria que meu marido se oferecesse para ajudar nas tarefas.', value: 'D' }] },
    { id: 20, options: [{ text: 'Eu ficaria muito feliz se meu marido me ajudasse com as coisas da casa.', value: 'D' }, { text: 'Eu me sentirei amada se os presentes de meu marido demonstrarem atenção para comigo.', value: 'C' }] },
    { id: 21, options: [{ text: 'Gostaria que meu marido me desse atenção total quando conversamos.', value: 'B' }, { text: 'Gostaria muito que meu marido me ajudasse a limpar a casa.', value: 'D' }] },
    { id: 22, options: [{ text: 'Estou ansiosa para saber o que meu marido vai me dar de presente no meu aniversário.', value: 'C' }, { text: 'Quero ouvir meu marido dizer como sou importante para ele.', value: 'A' }] },
    { id: 23, options: [{ text: 'Gostaria que meu marido me desse presentes com mais frequência.', value: 'C' }, { text: 'Gostaria que meu marido me ajudasse sem que eu precisasse pedir.', value: 'D' }] },
    { id: 24, options: [{ text: 'Fico chateada quando meu marido me interrompe.', value: 'B' }, { text: 'Nunca me canso de receber presentes de meu marido.', value: 'C' }] },
    { id: 25, options: [{ text: 'Gostaria que meu marido se oferecesse para me ajudar quando eu estiver cansada.', value: 'D' }, { text: 'Gosto de ir a qualquer lugar com meu marido.', value: 'B' }] },
    { id: 26, options: [{ text: 'Gostaria que meu marido e eu nos afagássemos com mais frequência.', value: 'E' }, { text: 'Gostaria que meu marido me surpreendesse mais frequentemente com presentes.', value: 'C' }] },
    { id: 27, options: [{ text: 'Os incentivos de meu marido me dão confiança.', value: 'A' }, { text: 'Adoro assistir a filmes com meu marido.', value: 'B' }] },
    { id: 28, options: [{ text: 'Gostaria que o meu marido me desse um presente fora de alguma ocasião especial.', value: 'C' }, { text: 'Gostaria muito que meu marido me tocasse mais.', value: 'E' }] },
    { id: 29, options: [{ text: 'O fato de meu marido me ajudar é muito significativo para mim.', value: 'D' }, { text: 'Gostaria que meu marido dissesse: "gosto de você".', value: 'A' }] },
    { id: 30, options: [{ text: 'Adoro abraçar meu marido quando ele chega em casa.', value: 'E' }, { text: 'Quero ouvir meu marido dizer que sente minha falta quando saio.', value: 'A' }] }
];

const languageMap = { 'A': 'Palavras de Afirmação', 'B': 'Tempo de Qualidade', 'C': 'Presentes', 'D': 'Atos de Serviço', 'E': 'Toque Físico' };

let globalResults = [];
let quizType = ""; // Salvará "maridos" ou "esposas"

// Função chamada ao clicar nos botões da tela de seleção
function startQuiz(type) {
    quizType = type;
    const questions = type === 'maridos' ? questionsMaridos : questionsEsposas;
    const container = document.getElementById('questionsContainer');
    container.innerHTML = ''; // Limpa o container

    // Gera as perguntas
    questions.forEach((q) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="question-title">Pergunta ${q.id}</div>` +
            q.options.map(opt => `
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="${opt.value}" required>
                    ${opt.text}
                </label>
            `).join('');
        container.appendChild(card);
    });

    // Oculta a seleção e mostra o formulário
    document.getElementById('selectionScreen').classList.add('hidden');
    document.getElementById('quizForm').classList.remove('hidden');
}

const form = document.getElementById('quizForm');
const resultContainer = document.getElementById('resultContainer');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    for (let i = 1; i <= 30; i++) {
        const answer = formData.get(`q${i}`);
        if (answer) scores[answer]++;
    }

    globalResults = Object.keys(scores).map(key => ({
        language: languageMap[key],
        score: scores[key]
    })).sort((a, b) => b.score - a.score);

    document.getElementById('resNome').textContent = formData.get('nome');
    const rankingDiv = document.getElementById('rankingList');
    rankingDiv.innerHTML = globalResults.map((item, idx) => `
        <div class="result-item">
            <span class="lang-name">${idx + 1}º ${item.language}</span>
            <span class="lang-score">${item.score} pts</span>
        </div>
    `).join('');

    form.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    window.scrollTo(0, 0);
});

// Envio para WhatsApp com identificação do questionário
document.getElementById('whatsappBtn').addEventListener('click', function() {
    const nome = document.getElementById('resNome').textContent;
    const phone = "5553984322626";

    const tipoFormatado = quizType === 'maridos' ? 'Maridos' : 'Esposas';

    let mensagem = `*Resultado: As 5 Linguagens do Amor*\n`;
    mensagem += `_Questionário para ${tipoFormatado}_\n\n`;
    mensagem += `*Paciente:* ${nome}\n\n`;
    mensagem += `*Ranking:*\n`;

    globalResults.forEach((item, idx) => {
        mensagem += `${idx + 1}º ${item.language}: ${item.score} pontos\n`;
    });

    mensagem += `\n_Enviado via Avaliação Online_`;

    const encodedMsg = encodeURIComponent(mensagem);
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`, '_blank');
});
