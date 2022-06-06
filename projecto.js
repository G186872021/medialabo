//クリックした後の操作
let a = document.querySelector('#kensaku');
a.addEventListener('click', hantei);


let name = prompt();
let p = document.querySelector('p#test');

function hantei() {
    p.textContent = name;
}
//都市を探す
//idに当てはめる