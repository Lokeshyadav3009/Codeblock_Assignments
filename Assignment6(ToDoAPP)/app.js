let T1 = document.getElementById('textbox1');
let B1 = document.getElementById('addList');
let list = document.getElementById('list');

B1.onclick = ()=>{
    let li = document.createElement('li');
    let DelB = document.createElement('button');
    DelB.innerText= "Delete";
    let EditB = document.createElement('button');
    EditB.innerText= "Edit";
    li.innerText = T1.value;
    list.append(li, DelB, EditB);
    DelB.onclick = (e)=>{
        li.remove();
        DelB.remove();
        EditB.remove();
        console.log(e.target);
    }
    EditB.onclick = (e)=>{
        li.contentEditable = true;
    }
    T1.value = "";
}




