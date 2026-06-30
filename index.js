const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age>=18){
        resultElement.textContent = `you are old enough to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `you can not enter you were just born`;
    }
    else if(age < 0){
        resultElement.textContent = `you have not been born yet!!`;
    }
    else{
         resultElement.textContent = `you must be 18+ to enter this site`;
    }

}
