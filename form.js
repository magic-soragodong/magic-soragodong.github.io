const answer = document.querySelector(".answer");
const answerTime = document.querySelector(".answerTime");

function showResult(){
    const date = new Date();
    const _date = date.getDate();
    const _hour = date.getHours();
    const _sec = date.getSeconds();
    const _min = date.getMinutes();
    if (_date%2 == 0){
        answer.innerHTML = '가능해';
    } else {
        answer.innerHTML = '안-돼! '
        answerTime.innerHTML = `${23-_hour}시간 ${59-_min}분 ${60-_sec}초 기다려.`;
    }
};

function init(){
    showResult();
};

init();