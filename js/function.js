// const facebook = document.querySelector("#facebook")
const clock = document.querySelector("#clock")

let time = 0

clock.innerHTML = time

facebook.classList.add("btn")

// หยุด ตามเวลา แล้วทำใน block
setTimeout(() => {
    facebook.classList.remove("btn")
}, 5000);

// ทำใน block ตามเวลาที่กำหนด
setInterval(() => {
    time = time + 1
    clock.innerHTML = time
}, 1000);