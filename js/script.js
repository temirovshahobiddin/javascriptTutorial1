var userName = prompt("Ismingizni kiriting");

var userAge = +prompt(userName + " yoshingiz nechida");

if(isNaN (userAge)){
    alert("harf emas son yozing")
} else if (userAge <= 18){
    alert("Bu sayt siz uchun emas")
} else if (userAge <= 50){
    alert("nima bor internetda ishlab oylezi boqsez bomidimi")
} else if (userAge <= 59){
    alert("kop kotta odam boshqa qiladigan ishiz yomi")
} else if (userAge <= 150){
    alert("Iy siz haliyam tirikmisz ?")
} else {
    alert("nimadir natogri ketdi")
}



 /* else if (userAge <= 18){
    alert("Hali yoshli qilarkansiz qumizi o'ynen")
} if (18 > userAge >= 50 ){
    alert("internetda nima bor turib oylezi boqsez bomidimi")
} if ( 51 > userAge >= 59 ){
    alert("Kop kotta odamsiz botta nima bor sizga")
} */