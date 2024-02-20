// Variáveis para armazenar informações
let areaSelecionada = "";
let experienciaSelecionada = "";
let preferenciaImpressora = "";

// Função para atualizar as opções com base nas escolhas do usuário
function updateMachines() {
    // Obter valores selecionados
    areaSelecionada = document.getElementById('area').value;
    experienciaSelecionada = document.getElementById('experience').value;
    preferenciaImpressora = document.getElementById('printer').value;

    // Atualizar as informações exibidas
    updateInfo();
}

// Função para atualizar as informações exibidas com base nas escolhas do usuário
function updateInfo() {
    const machinesList = document.getElementById('machines');
    machinesList.innerHTML = ''; // Limpar a lista de máquinas

    // Verificar a área de aplicação selecionada
    if (areaSelecionada === 'odontologia') {
        // Lógica para odontologia
        if (experienciaSelecionada === 'iniciante') {
            addMachine('Máquina Odontológica Iniciante 1', 'R$ 1000.00', 'https://example.com/machine1');
            addMachine('Máquina Odontológica Iniciante 2', 'R$ 1200.00', 'https://example.com/machine2');
        } else if (experienciaSelecionada === 'experiente') {
            addMachine('Máquina Odontológica Avançada 1', 'R$ 2000.00', 'https://example.com/machine3');
            addMachine('Máquina Odontológica Avançada 2', 'R$ 2500.00', 'https://example.com/machine4');
        }
    } else if (areaSelecionada === 'industria') {
        // Lógica para indústria
        if (experienciaSelecionada === 'iniciante') {
            addMachine('Máquina Industrial Iniciante 1', 'R$ 5000.00', 'https://example.com/machine5');
            addMachine('Máquina Industrial Iniciante 2', 'R$ 6000.00', 'https://example.com/machine6');
        } else if (experienciaSelecionada === 'experiente') {
            addMachine('Máquina Industrial Avançada 1', 'R$ 10000.00', 'https://example.com/machine7');
            addMachine('Máquina Industrial Avançada 2', 'R$ 12000.00', 'https://example.com/machine8');
        }
    } else if (areaSelecionada === 'hobbysta') {
        // Lógica para hobbysta
        if (preferenciaImpressora === 'resina') {
            addMachine('Máquina Hobbysta Resina 1', 'R$ 1500.00', 'https://example.com/machine9');
            addMachine('Máquina Hobbysta Resina 2', 'R$ 1800.00', 'https://example.com/machine10');
        } else if (preferenciaImpressora === 'filamento') {
            addMachine('Máquina Hobbysta Filamento 1', 'R$ 800.00', 'https://example.com/machine11');
            addMachine('Máquina Hobbysta Filamento 2', 'R$ 1000.00', 'https://example.com/machine12');
        }
    }
}

// Função para adicionar máquina à lista
function addMachine(name, price, link) {
    const machinesList = document.getElementById('machines');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${name}</strong><br>Preço: ${price}<br><a href="${link}" target="_blank">Comprar agora</a>`;
    machinesList.appendChild(listItem);
}

// Adicionar evento de clique ao botão Enviar
document.getElementById('submitButton').addEventListener('click', updateMachines);

// Adicionar evento de clique ao botão Resetar
document.getElementById('resetButton').addEventListener('click', resetMachines);

// Função para resetar as máquinas recomendadas
function resetMachines() {
    const machinesList = document.getElementById('machines');
    machinesList.innerHTML = '';
}
// ... (código anterior)

// Função para ocultar/exibir a seleção de experiência com base na área escolhida
function toggleExperienceSelection() {
    const experienceSelection = document.getElementById('experienceSelection');
    const printerPreference = document.getElementById('printerPreference');

    if (areaSelecionada === 'hobbysta') {
        experienceSelection.style.display = 'none';
        printerPreference.style.display = 'block';
    } else {
        experienceSelection.style.display = 'block';
        printerPreference.style.display = 'none';
    }
}

// Adicionar evento de mudança à seleção de área
document.getElementById('area').addEventListener('change', toggleExperienceSelection);

// Adicionar evento de clique ao botão Enviar
document.getElementById('submitButton').addEventListener('click', function() {
    updateMachines();
    toggleExperienceSelection(); // Para garantir que a experiência ou preferência de impressora seja atualizada
});

// ... (código anterior)
// Adicionar evento de clique ao botão Enviar
document.getElementById('submitButton').addEventListener('click', function() {
    updateMachines();
    toggleExperienceSelection(); // Para garantir que a experiência ou preferência de impressora seja atualizada
    showMachines(); // Exibir máquinas recomendadas após clicar em "Enviar"
});

// Função para exibir as máquinas recomendadas
function showMachines() {
    const machinesSection = document.getElementById('machinesList');
    machinesSection.style.display = 'block';
}