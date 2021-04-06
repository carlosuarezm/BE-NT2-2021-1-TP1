const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  var count = 0;

  function addTodo() {
    //alert('Boton Add TODO clickeado!')
    var tituloTarea = pedirInfo("Ingrese el nombre de la tarea");

    if(tituloTarea != undefined && tituloTarea.trim() != ''){
      var item = document.createElement("input");
      item.type = "checkbox"
      item.name = "checkbox";
      item.addEventListener('change',tareasUncount);

      var label = document.createElement("label");
      label.innerText = tituloTarea;
      label.prepend(item);

      list.append(label);
      list.append(document.createElement("br"));

      itemCountSpan.innerText = ++count;
      tareasUncount()
    }else{
      alert("Intente de nuevo");
    }


  }

  function pedirInfo(info){
    return prompt(info);
  }

  function tareasUncount(){
    let checks = document.getElementsByName("checkbox");
    let uncheck = 0;
    
    for (let index = 0; index < checks.length; index++) {
      if(!checks[index].checked){
        uncheck++;
      }
      
    }
    uncheckedCountSpan.innerText = uncheck;
  }