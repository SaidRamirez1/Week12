let user = document.getElementById("getNumber");
user.addEventListener("keydown" , function (e) {
    if (e.keyCode == 13) {
   run(e);
    }
}); 

user.focus(); 

let counter = 0;

  function run () {
     alert(`Hello World`);
}

function run1 () {
    document.getElementById("sentence").innerHTML = "Hello there";
    document.getElementById("sentence").style.backgroundColor = "red";  
    document.getElementById("sentence").style.color = "white";
    document.getElementById("sentence").style.padding = "20px";
    equation();
    userNumber();
    compareNumbers();     
}

function equation() {
    let runrandom = Math.floor(Math.random() * 10);
    document.getElementById("random1").innerHTML = runrandom;
    document.getElementById("random1").style.backgroundColor = "blue";  
    document.getElementById("random1").style.color = "white";
    document.getElementById("random1").style.padding = "15px";
    document.getElementById("random1").style.textAlign = "center";
    return runrandom;
}

function userNumber() {
    let user1 = document.getElementById("getNumber").value;
    alert(user1);
     document.getElementById("userNumber").innerHTML =  user1;
     document.getElementById("userNumber").style.backgroundColor = "purple"
     document.getElementById("userNumber").style.color = "red"
     document.getElementById("userNumber").style.padding = "20px"
     document.getElementById("userNumber").style.textAlign = "center"
     return user1;
}

function compareNumbers() {
    let a = userNum();
    let b = randomNumber();

    if ( a!= b) {
        document.getElementById("compare").innerHTML = "Numbers are not the same. Computer got " + b +  ", and user got " + a;
        counter++;
        document.getElementById("counter").innerHTML = "You have tried " + counter + "times. "
        
    } else if ( a == b) {
        document.getElementById("compare").innerHTML = "Numbers are the same. Computer got " + b +  ", and user got " + a;
        document.getElementById("counter").innerHTML = "You have tried " + counter + "times to get it right."
        counter = 0;
    }

    resetInput();
}

function resetInput(){
    document.getElementById("getNumber").value = "";
}




































//function equation2() {
  //  let ran = Math.floor(Math.random() * 10);
// let x = document.getElementById("random2");
   // x.innerHTML = ran;
   // x.style.backgroundColor = "black";
    // x.style.color = "yellow";
  //  x.style.padding = "10px";
   // x.style.textAlign = "center";
// }