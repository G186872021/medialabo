//クリックした後の操作
let a = document.querySelector('#kensaku');
a.addEventListener('click', kensaku);

function kensaku() {
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/{id}.json';
}
function kensaku(resp) {
    let data = resp.deta;
    
}

//都市を探す

//idに当てはめる
