const quiz = [{
    question:"ひげをそる、女子高生を拾うといえば？" ,
    answers:["小説","アニメ","プラモデル","演劇"],
    correct:"アニメ"
    },{
    question:"おまえは誰だ？といえば？" ,
    answers:["天気の子","言の葉の庭","君の名は","秒速センチメートル"],
    correct:"君の名は"
    },{
    question:"ヒロインが立たないアニメといえば？" ,
    answers:["俺ガイル","冴えカノ","プラメモ","トニカクカワイイ"],
    correct:"冴えカノ"
    },{
    question:"マッ缶発祥の地といえば？" ,
    answers:["千葉","東京","栃木","埼玉"],
    correct:"千葉"
    },{
    question:"カンナちゃんが可愛いアニメといえば？" ,
    answers:["小林さんちのメイドラゴン","グランブル","とらドラ","ドラえもん"],
    correct:"小林さんちのメイドラゴン"
    }];


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
//質問、回答の表示・切替
const setupQuiz = ()=>{
    let buttonIndex = 0;
    //buttonIndexは内側に入れないと発動しない
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

//質問の正誤判定
const judgeAnswer = (e)=>{
    if(e.target.textContent === quiz[quizIndex].correct){
        window.alert("正解！")
        ++score;
    }else{
        window.alert("不正解！")
    }
    quizIndex++;
    if(quizIndex < quizLength){
    setupQuiz();
    }else{
    window.alert("終了！あなたの正解数は"+score+"/"+quizLength+"です")
    }
}; 

//質問回答までの流れ
const clickJudge = ()=>{
    let clicIndex = 0;
    while(clicIndex < buttonLength){
    $button[clicIndex].addEventListener("click",(e)=>{
    judgeAnswer(e);
    })
    clicIndex++;
  }
};
clickJudge();