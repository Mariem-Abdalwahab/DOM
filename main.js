var form= document.getElementById('addForm');
var itemlist= document.getElementById('items');
var filter= document.getElementById('filter');

form.addEventListener("submit", additem);
itemlist.addEventListener("click", remove);
filter.addEventListener("keyup", filteri);

function additem(e){
 e.preventDefault();

var item= document.getElementById('item').value;
//create li

var li= document.createElement('li');

//creat class to li

li.className= 'list-group-items';
li.appendChild(document.createTextNode(item));
var btn=document.createElement('button');
btn.className='btn';
btn.appendChild(document.createTextNode('x'));
li.appendChild(btn);
itemlist.appendChild(li);

//create button


//console.log(li);
}

function remove(e){
if(e.target.classList.contains('btn')){
if(confirm('Are You Sure!')){
var li =e.target.parentElement;
itemlist.removeChild(li);
}
}
 //e.preventDefault();

}

function filteri(e){
var text=e.target.value.toLowerCase();
var items = itemlist.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}





