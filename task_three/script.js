const btnSend = document.querySelector(".btn_send");
const btnLoc = document.querySelector(".btn_loc");
const mess = document.querySelector(".input");
const chat = document.querySelector(".chat_body");


let web;

btnSend.addEventListener("click", () => {

    if (mess.value){
        chat.insertAdjacentHTML(`beforeend`, `<div class="mail_user">${mess.value}</div>`);

        web = new WebSocket('wss://echo-ws-service.herokuapp.com');
    
        web.onopen = function (event) {
            web.send(mess.value);
        }
    
        web.onmessage = (event) => {
            chat.insertAdjacentHTML(`beforeend`, `<div class="mail_server">${event.data}</div>`);
        }
    } else {
        alert("Строка не должна быть пустой!")
    }
})


const error = () => {
    chat.insertAdjacentHTML(`beforeend`, `<div class="mail_user">Невозможно получить ваше местоположение</div>`);
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    chat.insertAdjacentHTML(`beforeend`, `<div class="mail_user">
    <a target="_blank" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Ваша геолокация</a></div>`);
}

btnLoc.addEventListener("click", () => {
    if (!navigator.geolocation){
        chat.insertAdjacentHTML(`beforeend`, `<div class="mail_user">Геолокация не поддерживается вашим браузером</div>`);
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
})
