//クリックした後の操作
let a = document.querySelector('#kensaku');
a.addEventListener('click', hantei);

function hantei() {
    let tosi = prompt("都市の名前を入力");
    para.textContent = tosi;
}
//都市を探す
//idに当てはめる