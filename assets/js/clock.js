const clockContainer = document.querySelector(".js-clock");
const colckDate = clockContainer.querySelector(".js-date");   
const colckTime = clockContainer.querySelector(".js-time");   

function getTime(){
    const date = new Date();
    let days = ['일', '월', '화', '수', '목','금','토'];

    const _year = date.getFullYear();
    const _month = date.getMonth();
    const _date = date.getDate();
    const _day = date.getDay();

    colckDate.innerHTML = `${(_year)}년 ${_month+1}월 ${_date}일 (${days[_day]})`;

    const hour = date.getHours();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    colckTime.innerHTML = `현재 시각은?  ${(hour>9 ? hour : "0"+hour)}시 ${min>9 ? min : "0"+min}분 ${sec>9 ? sec : "0"+sec}초!`;
};

function init(){
    getTime();
    setInterval(getTime,1000);
};

init();