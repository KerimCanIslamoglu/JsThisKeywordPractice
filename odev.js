/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.car.registrationNumber + " " + this.car.brand);
    }
}

var myCarDetails =  car.displayDetails;
myCarDetails();


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
 if (typeof name=="string"&&name!=""&&(name.replace(/ /g, "").length>1)){
  
   return console.log(true);
 }
  return console.log(false)
}

isValidName("a")


/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${book.title} was written by ${book.author}. It is a ${genre} novel written in ${year}.`,
  )
}

summary("dystopian",1932);



