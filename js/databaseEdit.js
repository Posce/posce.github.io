const userId = 1;

const database = firebase.database();
const rootRef = database.ref('dati');
const userRef = database.ref('dati/' + userId);

VitaTotale = document.getElementById('VitaTotal');
VitaValore = document.getElementById('VitaValue');
VitaDanno = document.getElementById('VitaDamage');
StaminaTotale = document.getElementById('StaminaTotal');
StaminaValore = document.getElementById('StaminaValue');
StaminaDanno = document.getElementById('StaminaDamage');
SennoTotale = document.getElementById('SennoTotal');
SennoValore = document.getElementById('SennoValue');
SennoDanno = document.getElementById('SennoDamage');

userRef.on('value', (snapshot) =>{
  console.log("changing");
  const data = snapshot.val();
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
  rootRef.child(userId).set({
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

});


function Aggiorna(){
rootRef.child(userId).set({
  Valore_Vita: VitaValore.value,
  Totale_Vita: VitaTotale.value,
  Danno_Vita: VitaDanno.value,
  Valore_Stamina: StaminaValore.value,
  Totale_Stamina: StaminaTotale.value,
  Danno_Stamina: StaminaDanno.value ,
  Valore_Senno: SennoValore.value,
  Totale_Senno: SennoTotale.value,
  Danno_Senno: SennoDanno.value
});
}



