/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person)
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)
    }.bind(this))
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name){
  if(typeof name !== 'string'){
   console.log(false);
  }
  else{
   if(name == " " || name.length < 2){
     console.log(false);
   }
   else if(name.indexOf(" ") >=0 ){
     console.log(false);
   }
   else{
     console.log(true);
   }    
  }
 }

isValidName(" J ohn")
isValidName("John")

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function attendTime(lessonTime,lessonNumber){
    var results;
    if(lessonNumber && lessonTime){
        typeof lessonTime === "string" || typeof lessonTime === "number" || typeof lessonTime !== "Boolean";
        typeof lessonNumber === "string" || typeof lessonNumber === "number" || typeof lessonNumber !== "Boolean";
             if(lessonNumber && lessonTime){
                 results = lessonNumber * lessonTime;
    }  else{
        results ="Yanlış Kriterler Girdiniz."
        }
    } else{
         results = "2 parametre giriniz."
     }
        console.log(results);     
}
attendTime(3,30);
attendTime("3", 50);
attendTime(true, "10");
attendTime(false, "3a")
attendTime(true , 10)

//hocam öncelikle bu soruyu yapamadım sizden kopya çektim mantığıma oturdu  biraz ama işin içine boolean girince sonuçlar sıkıntılı oldu.true olunca 1 gibi görüp çarpıyor.

