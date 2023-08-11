function adicionarTarefa(){
    var tarefaNome = document.getElementById('novaTarefa').value;
    if(tarefaNome == ''){
        alert('Não é possível criar uma tarefa sem nome');
    }else{
        let tarefas = document.querySelector('.lista');
        let tarefaDiv = document.createElement('div');
        tarefaDiv.classList = 'elementoTarefa';
        let novaTarefa = document.createElement('p');
        novaTarefa.textContent = tarefaNome;

        let divSeparada = document.createElement('div');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let apagarTarefa = document.createElement('button');
        apagarTarefa.title = 'Remover tarefa';
        apagarTarefa.innerHTML = "<i class='bx bxs-trash'></i>";
        
        divSeparada.append(checkbox);
        divSeparada.append(apagarTarefa);
        divSeparada.classList = 'divSeparada';
        tarefaDiv.append(novaTarefa);
        tarefaDiv.append(divSeparada);
        
        checkbox.addEventListener('change', function() {
            if(checkbox.checked) {
                novaTarefa.classList.add('riscado');
                tarefaDiv.classList.add('concluida');
            }else{
                novaTarefa.classList.remove('riscado');
                tarefaDiv.classList.remove('concluida');
            }
        });
        apagarTarefa.onclick = function removerTarefa(){
            tarefas.removeChild(tarefaDiv);
        }
        tarefas.appendChild(tarefaDiv);
        limparinput();
    }
}

document.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        adicionarTarefa();
    }
})
function limparinput(){
    document.querySelector('#novaTarefa').value = ''
}

