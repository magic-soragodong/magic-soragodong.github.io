const answer = document.querySelector(".answer");
const answerTime = document.querySelector(".answerTime");

function dti(year, month, date){
    const prime = 2531011;
    return (date*prime*prime + month*prime + year)%4294967296;
}

function hash(input){
    hash_val = input;
    hash_val = ((hash_val * 214013 + 2531011)) & 0xffff ;
    return hash_val;
}

function decision(prob, hash_val){
    return ((hash_val/100)%10 <= 10*prob);
}

function showResult(){
    const date = new Date();
    const _year = date.getFullYear();
    const _month = date.getMonth();
    const _date = date.getDate();
    const _hour = date.getHours();
    const _sec = date.getSeconds();
    const _min = date.getMinutes();

    const prob = 0.4;

    if (decision(prob, hash(dti(_year, _month, _date)))){
        answer.innerHTML = '가능해.';
        answerTime.innerHTML = "";
    } else {
        answer.innerHTML = '안-돼. '
        answerTime.innerHTML = `${23-_hour}시간 ${59-_min}분 ${60-_sec}초 뒤에 다시 물어봐.`;
    }
};

function init(){
    showResult();
    setInterval(showResult,1000);
};

init();
