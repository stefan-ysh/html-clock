setInterval(setTime, 0);
let timer = null;
timer = setInterval(setTime, 1000); //開始运行
function setTime() {
    clearTimeout(timer); //清除定时器
    const weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
    ];
    // const weeks = [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    // ];
    //取当前日期
    today = new Date();
    // 年份
    let year = today.getFullYear();
    // 月份
    let month = today.getMonth() + 1;
    // 日期
    let date = today.getDate();
    // 星期
    let day = weeks[today.getDay()];
    // document.getElementById("week").innerText = day;

    // 小时
    let h =
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    // 分钟
    let m =
        today.getMinutes() < 10 ?
        `0${today.getMinutes()}` :
        today.getMinutes();
    // 秒
    let s =
        today.getSeconds() < 10 ?
        `0${today.getSeconds()}` :
        today.getSeconds();
    let currentTime = `${year}年${month}月${date}日 ${day} ${h}:${m}:${s}`;
    document.getElementById("showTime").innerText = currentTime;
    let rotate_h = h * 30 + 180;
    let rotate_m = m * 6 + 180;
    let rotate_s = s * 6 + 180;
    let rotate_p = s % 2 === 0 ? 20 : -20;
    document.getElementsByClassName("h")[0].style.transform =
        "rotate(" + rotate_h + "deg)";
    document.getElementsByClassName("m")[0].style.transform =
        "rotate(" + rotate_m + "deg)";
    document.getElementsByClassName("s")[0].style.transform =
        "rotate(" + rotate_s + "deg)";
    document.getElementsByClassName("pendulum")[0].style.transform =
        "rotate(" + rotate_p + "deg)";
    // console.log(rotate_h, rotate_m, rotate_s);
    timer = setInterval(setTime, 1000); //设定定时器，循环运行
}