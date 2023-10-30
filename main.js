let input = document.querySelector('.input');
let input1 = document.querySelector('.input1');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let list = document.querySelector('.list');

let values = [];

function show(){
    list.textContent = '';
    for(i = 0; i < values.length; i++){
        let li = document.createElement('li');
        li.classList.add('team');
        li.textContent = values[i];

        list.appendChild(li);
    }
}

function check(evt){
    let x = input.value;
    input.value = '';

    if(x.trim() === ''){
        alert("Maxsulot kiriting");
    } else if(values.indexOf(x) !== -1){
        alert("Maxsulot oldin qo'shilgan");
    } else {
        if(evt.target.matches('.btn1')){
            values.unshift(x);
        } else {
            values.push(x);
        }
        
        show();
    } 
}

btn1.addEventListener('click', check);
btn2.addEventListener('click', check);

btn.addEventListener('click', function(){
    let son = Number(input1.value);
    
    values.splice(son-1, 1);
    show();
});