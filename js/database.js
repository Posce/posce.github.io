
const userId = 1;

const database = firebase.database();
const rootRef = database.ref('dati');
const userRef = database.ref('dati/' + userId);

const hBarValue = hBar.dataset.value;
const hBarTotal = hBar.dataset.total;
const hBarDamage = hBar.dataset.damage;
const sBarValue = sBar.dataset.value;
const sBarTotal = sBar.dataset.total;
const sBarDamage = sBar.dataset.damage;
const mBarValue = mBar.dataset.value;
const mBarTotal = mBar.dataset.total;
const mBarDamage = mBar.dataset.damage;

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
});