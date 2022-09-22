let semanticCore = {
    logo:{
        "ua":"Лого",
        "en":"Logo",
        "pu":"logo"
    }
    ,
    home:{
        "ua":"Домашня",
        "en":"Home",
        "pu":"Domowej roboty"
    }
    ,
    about:{
        "ua":"Про нас",
        "en":"About",
        "pu":"O nas"
    }
    ,
    service:{
        "ua":"Сервіс",
        "en":"Service",
        "pu":"Usługa"
    }
    ,
    contact:{
        "ua":"Контакти",
        "en":"Contact",
        "pu":"Łączność"
    }
    ,
    text:{
        "ua":"Обери свій ідеальний смартфон",
        "en":"Chouse your ideal phone",
        "pu":"Wybierz swój idealny smartfon"
    }
    ,
    iphone11:{
        "ua":"Айфон 11",
        "en":"Iphone 11",
        "pu":"iPhone 11"
    }
    ,
    iphone12:{
        "ua":"Айфон 12",
        "en":"Iphone 12",
        "pu":"iPhone 12"
    }
    ,
    iphone13:{
        "ua":"Айфон 13",
        "en":"Iphone 13",
        "pu":"iPhone 13"
    }
    ,
    iphone14:{
        "ua":"Айфон 14",
        "en":"Iphone 14",
        "pu":"iPhone 14"
    }
    ,
    buyNow:{
        "ua":"Купити зараз",
        "en":"Buy now",
        "pu":"Kup Teraz"
    }
    ,
}
let lang = 'en';
ua.onclick = function(){
    lang = 'ua';
    changeURL();
}
en.onclick = function(){
    lang = 'en';
    changeURL();
}
pu.onclick = function(){
    lang = 'pu';
    changeURL();
}
function changeURL(){
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
function cahangeLanguage(){
    let hash = (window.location.hash).substring(1);
    console.log(hash);
    for (let key in semanticCore){
        $('.lng-' + key).text(semanticCore[key][hash])
    }
}
cahangeLanguage();