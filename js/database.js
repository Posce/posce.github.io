
const userId = 1;

NomePersonaggio = document.getElementById('Nome');
CognomePersonaggio = document.getElementById('Cognome');
SottotitoloPersonaggio = document.getElementById('Sottotitolo');
const ImmagineProfilo = document.getElementById('proImg');

const database = firebase.database();
const rootRef = database.ref('dati');
const userRef = database.ref('dati/' + userId);

userRef.on('value', (snapshot) =>{
  console.log("changing");
  const data = snapshot.val();
  NomePersonaggio.innerHTML = data.Nome_Personaggio;
  CognomePersonaggio.innerHTML = data.Cognome_Personaggio;
  SottotitoloPersonaggio.innerHTML = data.Sottotitolo_Personaggio;
  proImg.style.setProperty('--proimage-link', "url("+ data.Immagine_Profilo+ ")");
  hBar.dataset.value = data.Valore_Vita;
  hBar.dataset.total = data.Totale_Vita;
  hBar.dataset.damage = data.Danno_Vita;
  sBar.dataset.value = data.Valore_Stamina;
  sBar.dataset.total = data.Totale_Stamina;
  sBar.dataset.damage = data.Danno_Stamina;
  mBar.dataset.value = data.Valore_Senno;
  mBar.dataset.total = data.Totale_Senno;
  mBar.dataset.damage = data.Danno_Senno;
  lifebar();
});