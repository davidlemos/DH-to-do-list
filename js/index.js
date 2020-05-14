let board = document.getElementById('board');
let novaTarefa = document.getElementById('novaTarefa');
let btnAdd = document.getElementById('add');

function adicionarTarefa() {  
  tarefa = novaTarefa.value;
  if(tarefa != ''){
    board.innerHTML += `
    <div class="tarefa">
      <div class="col-md-8">${tarefa}</div>
      <div class="col-md-2"><img class="icon" src="img/check.png"></div>
    </div>`;
    novaTarefa.value = '';
  }
  else
    alert("É preciso digitar uma tarefa primeiro.");
}
btnAdd.addEventListener('click', adicionarTarefa);

