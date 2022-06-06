//クリックした後の操作
let a = document.querySelector('#kensaku');
a.addEventListener('click', hantei);

function hantei() {
    let name = prompt();
    let p = document.querySelector('p#test');
    p.textContent = name;
}
//都市を探す
//idに当てはめる