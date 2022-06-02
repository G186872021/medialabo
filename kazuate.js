
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso =      // 第5回課題:テキストボックスの数値をここに代入

    let p;
    let p2;
    let pp = document.querySelector('p#result');
    let pp2 = document.querySelector('p#answer');
    p = document.createElement('p');
    p2 = document.createElement('p2');
    pp.insertAdjacentElement('afterend',p);
    pp2.insertAdjacentElement('afterend',p2);

    p2.textContent = (kaisu+1) + '回目の予想' + yoso;


    if (yoso===kotae) {
        console.log('正解です。おめでとう!');
    } else {
        if (kaisu<2) {
            if (kotae>yoso) {
                console.log('まちがい。答えはもっと大きいですよ。');
            } else if (kotae<yoso) {
                console.log('まちがい。答えはもっと小さいですよ。');
            }
        } else if (kaisu===2) {
            console.log('まちがい。残念でした答えは '+kotae+' です。');
        } else {
            console.log('答えは '+kotae+' でした。すでにゲームは終わっています。');
        }
    }
    kaisu = kaisu + 1;


    
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

}