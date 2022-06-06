//クリックした後の操作
let a = document.querySelector('#kensaku');
a.addEventListener('click', hantei);

function hantei() {
    let p = document.querySelector('p#test');
    p.textContent = kensaku;
}
//都市を探す
//idに当てはめる