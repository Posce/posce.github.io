const userId = 1;

const database = firebase.database();
const rootRef = database.ref('dati');
const userRef = database.ref('dati/' + userId);

const NomePersonaggio = document.getElementById('Nome');
const CognomePersonaggio = document.getElementById('Cognome');
const SottotitoloPersonaggio = document.getElementById('Sottotitolo');


const VitaTotale = document.getElementById('VitaTotal');
const VitaValore = document.getElementById('VitaValue');
const VitaDanno = document.getElementById('VitaDamage');
const StaminaTotale = document.getElementById('StaminaTotal');
const StaminaValore = document.getElementById('StaminaValue');
const StaminaDanno = document.getElementById('StaminaDamage');
const SennoTotale = document.getElementById('SennoTotal');
const SennoValore = document.getElementById('SennoValue');
const SennoDanno = document.getElementById('SennoDamage');



userRef.on('value', (snapshot) =>{
  console.log("changing");
  const data = snapshot.val();
  NomePersonaggio.innerHTML = data.Nome_Personaggio;
  CognomePersonaggio.innerHTML = data.Cognome_Personaggio;
  SottotitoloPersonaggio.innerHTML = data.Sottotitolo_Personaggio;
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
  VitaTotale.value = data.Totale_Vita;
  VitaValore.value = data.Valore_Vita;
  VitaDanno.value = data.Danno_Vita;
  StaminaTotale.value = data.Totale_Stamina;
  StaminaValore.value = data.Valore_Stamina;
  StaminaDanno.value = data.Danno_Stamina;
  SennoTotale.value = data.Totale_Senno;
  SennoValore.value = data.Valore_Senno;
  SennoDanno.value = data.Danno_Senno;
});


function Aggiorna(){
rootRef.child(userId).update({
  Nome_Personaggio: NomePersonaggio.innerHTML,
  Cognome_Personaggio: CognomePersonaggio.innerHTML,
  Sottotitolo_Personaggio: SottotitoloPersonaggio.innerHTML,
  Valore_Vita: VitaValore.value,
  Totale_Vita: VitaTotale.value,
  Danno_Vita: VitaDanno.value,
  Valore_Stamina: StaminaValore.value,
  Totale_Stamina: StaminaTotale.value,
  Danno_Stamina: StaminaDanno.value,
  Valore_Senno: SennoValore.value,
  Totale_Senno: SennoTotale.value,
  Danno_Senno: SennoDanno.value
});
setTimeout(updAgg, 500);
}

function updAgg(){
  rootRef.child(userId).update({
    Valore_Vita: +VitaValore.value - +VitaDanno.value,
    Totale_Vita: VitaTotale.value,
    Danno_Vita: "0",
    Valore_Stamina: +StaminaValore.value - +StaminaDanno.value,
    Totale_Stamina: StaminaTotale.value,
    Danno_Stamina: "0",
    Valore_Senno: +SennoValore.value - +SennoDanno.value,
    Totale_Senno: SennoTotale.value,
    Danno_Senno: "0"
  });
}

