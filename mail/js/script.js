// Creare array con mail
var mailList = ["laura@yahoo.it", "marco@yahoo.it", "stefano@yahoo.it", "susanna@yahoo.it", "sara@yahoo.it", "nicola@yahoo.it"]

console.log("Le mail dell'array sono ", mailList);

// Chiedere all'utente di inserire la sua

var invia = document.getElementById('invia');

var emailUser;

invia.addEventListener('click',
 function () {
   emailUser = document.getElementById('campoMail').value;
   console.log("La mail inserita è ", emailUser)

   // Fare check se la mail dell'utente è presente nell'array

   flag = false;

   for (i = 0; i < mailList.length; i++) {
       var mailItem = mailList[i];

       // condizione mail corretta o errata
       if (mailItem === emailUser) {
       flag = true;
       console.log("La mail è nell'array");}

       // altrimenti
       else {
         console.log("La mail non è nell'array");
       }

  document.getElementById("esito").style.display = "block";


  // Output
    if (flag === true) {
      document.getElementById("esito").innerHTML = "Complimenti, sei invitato alla festa!";
      esito.className = "green";
    }
    else {
      document.getElementById("esito").innerHTML = "Che peccato, non sei invitato alla festa!";
      esito.className = "red";
    }
  }
});

// Annulla
reset.addEventListener('click',
 function () {
   document.getElementById("campoMail").value = "";
   document.getElementById("esito").style.display = "none";
 });
