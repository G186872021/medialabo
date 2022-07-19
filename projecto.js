//クリックした後の操作
let a = document.querySelector('#kensaku');
a.addEventListener('click', kensaku);

function kensaku() {
    //URlを設定
    let b = document.querySelector('input[name="tosi"]');
    let c = b.value;
    let tosi;
    if(c==='Cairo' || c==='カイロ' || c==='cairo' || c==='かいろ'){
        tosi = 360630;
    } else if(c==='Moscow' || c==='モスクワ' || c==='moscow' || c==='もすくわ'){
        tosi = 524901;
    } else if(c==='Johannesburg' || c==='ヨハネスブルク' || c==='johannesburg' || c==='よはねすぶるく'){
        tosi = 993800;
    } else if(c==='Beijing' || c==='北京' || c==='beijing' || c==='ぺきん' || c==='ペキン'){
        tosi = 1816670;
    } else if(c==='Tokyo' || c==='東京' || c==='tokyo' || c==='とうきょう' || c==='トウキョウ'){
        tosi = 1850147;
    } else if(c==='Singapore' || c==='シンガポール' || c==='singapore' || c==='しんがぽーる'){
        tosi = 1880252;
    } else if(c==='Sydney' || c==='シドニー' || c==='sydney' || c==='しどにー'){
        tosi = 2147714;
    } else if(c==='London' || c==='ロンドン' || c==='london' || c==='ろんどん'){
        tosi = 2643743;
    } else if(c==='Paris' || c==='パリ' || c==='paris' || c==='ぱり'){
        tosi = 2968815;
    } else if(c==='Rio de Janeiro' || c==='リオデジャネイロ' || c==='rio de janeiro' || c==='りおでじゃねいろ'){
        tosi = 3451189;
    } else if(c==='New York' || c==='ニューヨーク' || c==='new york' || c==='にゅーよーく'){
        tosi = 5128581;
    } else if(c==='Los Angeles' || c==='ロサンゼルス' || c==='los angeles' || c==='ろさんぜるす'){
        tosi = 5368361;
    } else {
        let p = document.querySelector('p#ans');
        p.textContent = 'この都市の情報はありません。';
    }
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+tosi+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    } else if(typeof data === 'Number'){
        data = JSON.parse(data);
    }

    //
    console.log(data.name);
    
    console.log(data.weather);

    for (let a of data.weather) {
        console.log(a.description);
    }
    console.log(data.main.temp_max);
    
    console.log(data.main.temp_min);
    
    console.log(data.main.humidity);
    
    console.log(data.wind.speed);
    
    console.log(data.wind.deg);
        
    console.log(data.coord.lon);
    
    console.log(data.coord.lat);


    
    let box_1 = document.querySelector('div#name');
    box_1.textContent = data.name;

    let box_2 = document.querySelector('div#weather');
    for (let a of data.weather) {
        box_2.textContent = a.description;
    }

    let box_3 = document.querySelector('div#main.temp_max');
    box_3.textContent = data.main.temp_max;

    let box_4 = document.querySelector('div#main.temp_min');
    box_4.textContent = data.main.temp_min;

    let box_6 = document.querySelector('div#main.humidity');
    box_6.textContent = data.main.humidity;

    let box_7 = document.querySelector('div#wind.speed');
    box_7.textContent = data.wind.speed;

    let box_8 = document.querySelector('div#wind.deg');
    box_8.textContent = data.wind.deg;
    
    let box_9 = document.querySelector('div#coord.lon');
    box_9.textContent = data.coord.lon;

    let box_5 = document.querySelector('div#coord.lat');
    box_5.textContent = data.coord.lat;

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理///////////////////////////////////
function finish() {
    console.log('Ajax 通信が終わりました');

    ////////boxの処理/////////
}
