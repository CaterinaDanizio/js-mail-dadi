// Gioco dadi

  // l'utente tira i dadi e viene generato un numero randomica da 1 a 6

  genera.addEventListener('click',
   function () {
     var numeroUser = Math.floor(Math.random() * 5) + 1;
     console.log( "numeroUser ", numeroUser);

     // Adesso è il turno del pc di tirare i dadi
     var numeroPc = Math.floor(Math.random() * 5) + 1;
     console.log("numeroPc ", numeroPc);

     // Confrontare chi ha fatto il punteggio più alto e comunicalo all'utente
     if ( numeroUser > numeroPc ) {
         document.getElementById('risultato').innerHTML = numeroUser + "  contro " + numeroPc;
         document.getElementById('esito').innerHTML = "Hai vinto!";
       } else if ( numeroUser < numeroPc) {
         document.getElementById('esito').innerHTML = "Hai perso!";
         document.getElementById('risultato').innerHTML = numeroUser + " contro " + numeroPc;
       }
      else {
         document.getElementById('esito').innerHTML = "Hai pareggiato!";
       }
   });
