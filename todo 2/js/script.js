var add = document.getElementById('add')
var removeAll = document.getElementById('removeall')
var list = document.getElementById('list')


//remove all


removeAll.onclick = function(){
    list.innerHTML = "";
}

add.onclick = function(){
    addlis(list);
    document.getElementById('userinput').Value = '';
    document.getElementById('userinput').focus();
}
function addlis(targetUL){
    var inputText = document.getElementById('userinput').value;
    var li = document.getElementById('li');
    var textnode =document.createTextNode(inputText + '');
    var removeButton =document.createElement('button');
   
       if(inputText !== ''){
           removeButton.className = 'btn btn-xs btn-danger';
           removeButton.innerHTML = ' &times';
           removeButton.setAttribute('onclick',removeMe(this));
           li.appendChild(textnode);
           li.appendChild(removeButton);
           targetUL.appendChild(li);
      
        }else{("please enter a todo");
  
    }

}


function removeMe(item){
    var p = item.parentElements;
    p.parentElements.removechild(p);
}


