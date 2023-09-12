function ekraniTemizle(){
    document.getElementById("sonuc").value="";
}

function goruntule(deger){
    document.getElementById("sonuc").value += deger;
}

function hesapla(){
    var p = document.getElementById("sonuc").value;
    var q = eval(p);//parametre olarak yazılan kodu çalıştırmak için kullanılır
    document.getElementById("sonuc").value = q;
}