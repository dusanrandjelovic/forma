//proglasavanje selektora i varijabli

const forma = document.getElementById("forma");
const polje1 = document.getElementById("polje1");
const polje2 = document.getElementById("polje2");
const polje3 = document.getElementById("polje3");

let sveValidno = true;

//Funkcije

function proveriIme(){

  if(polje1.value.length > 3 && polje1.value.length < 30 && polje1.value.includes(" ")){
    polje1.classList.add("valid");
    polje1.classList.remove("invalid");
  }

  else {
    sveValidno = false;
    polje1.classList.add("invalid");
    polje1.classList.remove("valid");
  }

}

function proveriEmail(){

if(polje2.value.includes("@") && polje2.value.includes(".")){
  polje2.classList.add("valid");
  polje2.classList.remove("invalid");
}

else {
  sveValidno = false;
  polje2.classList.add("invalid");
  polje2.classList.remove("valid");
}

}

function proveriLozinku(){

/*if(/[a-z]/.test(polje3.value) && /[A-Z]/.test(polje3.value) && /[0-9]/.test(polje3.value) && polje3.value.length >= 8){
  polje3.classList.add("valid");
  polje3.classList.remove("invalid");
}*/
if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(polje3.value)){
  polje3.classList.add("valid");
  polje3.classList.remove("invalid");
}

else {
  sveValidno = false;
  polje3.classList.add("invalid");
  polje3.classList.remove("valid");
}

}

function proveri(e){

  e.preventDefault();  //zaustavlja slanje forme
  let sveValidno = true;

  proveriIme();    // provera tacnost
  proveriEmail();
  proveriLozinku();

  if (sveValidno){  //moze i sveValidno == true
    forma.submit();
  }

}


//dogadjaji, bez dogadjaji funkcije se ne izvrsavaju

forma.addEventListener("submit", proveri);  //presrecemo slanje i proveravamo

polje1.addEventListener("keyup", proveriIme); //menja border boju inputa na potreban broj karaktera, moze "input" umesto keyup, moze i "change"
polje2.addEventListener("keyup", proveriEmail);
polje3.addEventListener("keyup", proveriLozinku);



/*function proveri(e){

  e.preventDefault();

  if(polje1.value.length > 3 && polje1.value.length < 30){
    polje1.classList.add("valid");
    polje1.classList.remove("invalid");
  }

  else {
    polje1.classList.add("invalid");
    polje1.classList.remove("valid");
  }

}*/
