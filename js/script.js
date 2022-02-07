function Modulo() {
  // Variabili associate ai campi del modulo
  var nome = document.modulo.nome.value;
  var oggetto = document.modulo.oggetto.value;
  var email = document.modulo.email.value;
  var messaggio = document.modulo.messaggio.value;

  // Espressione regolare dell'email
  var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  var nome_reg_exp = /^[A-Za-z ]{6,30}$/;

  //Effettua il controllo sul campo NOME;
  if (!nome_reg_exp.test(nome) || (nome == "") || (nome == "undefined")) {
    alert("Inserire un nome e un cognome validi.");
    document.modulo.nome.select();
    return false;
  }

  //Effettua il controllo sul campo OGGETTO
  else if ((oggetto == "") || (oggetto == "undefined")) {
    alert("Il campo Oggetto è obbligatorio.");
    document.modulo.oggetto.focus();
    return false;
  }

  else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
    alert("Inserire un indirizzo email valido.");
    document.modulo.email.select();
    return false;
  }

  //Effettua il controllo sul campo MESSAGGIO
  else if ((messaggio == "") || (messaggio == "undefined")) {
    alert("Il campo Messaggio è obbligatorio.");
    document.modulo.messaggio.focus();
    return false;
  }
  //INVIA IL MODULO
  else {
    document.modulo.action = "elabora_dati.asp";
    document.modulo.submit();
  }
}
