const level = prompt('levelni tanlang:   1 = oson      2 = qiyin      3 = ekspert');

if (level == 1) {
  const suu = 'Siz notogri sonlarni kirittingiz!!!   Iltimos qayta urinib koring';

  const suu3 = 'Siz togri sonlarni kirittingiz!  Sizning xotirangiz juda yaxshi ekan'
  
  const res1 = Math.floor(Math.random() * 10000);

alert('eslab qoling:   ' + res1)

const check = prompt('Eslab qolganingizni yozing');

if (check.length >= 5) {
  document.getElementById('demo').innerHTML = 'Siz kop son kiritib yubordingiz!';
}else if (check.length == 4) {
  if (check == res1){
    document.getElementById('demo').innerHTML = suu3;
  } else {
    document.getElementById('demo').innerHTML = suu;
  }
}else if (check.length == 0){
  document.getElementById('demo').innerHTML = 'Siz son kiritmadingiz!';
}else if (check.length < 4) {
  document.getElementById('demo').innerHTML = 'Sizga korsatilgan sonlardan kamroq son kirittingiz!';
}
} else if (level == 2) {
  const suu = 'Siz notogri sonlarni kirittingiz!!!   Iltimos qayta urinib koring';

  const suu3 = 'Siz togri sonlarni kirittingiz!  Sizning xotirangiz juda yaxshi ekan'

  const res = Math.floor(Math.random() * 100000000);

alert('eslab qoling:   ' + res)

const check = prompt('Eslab qolganingizni yozing');

if (check.length >= 9) {
  document.getElementById('demo').innerHTML = 'Siz kop son kiritib yubordingiz!';
}else if (check.length == 8) {
  if (check == res){
    document.getElementById('demo').innerHTML = suu3;
  } else {
    document.getElementById('demo').innerHTML = suu;
  }
}else if (check.length == 0){
  document.getElementById('demo').innerHTML = 'Siz son kiritmadingiz!';
}else if (check.length < 8) {
  document.getElementById('demo').innerHTML = 'Sizga korsatilgan sonlardan kamroq son kirittingiz!';
}
}else if (level == 3) {//----------------------------
  const suu = 'Siz notogri sonlarni kirittingiz!!!   Iltimos qayta urinib koring';

  const suu3 = 'Siz togri sonlarni kirittingiz!  Sizning xotirangiz juda yaxshi ekan'

  const res3 = Math.floor(Math.random() * 1000000000000);

alert('eslab qoling:   ' + res3)

const check = prompt('Eslab qolganingizni yozing');

if (check.length >= 13) {
  document.getElementById('demo').innerHTML = 'Siz kop son kiritib yubordingiz!';
}else if (check.length == 12) {
  if (check == res3){
    document.getElementById('demo').innerHTML = suu3;
  } else {
    document.getElementById('demo').innerHTML = suu;
  }
}else if (check.length == 0){
  document.getElementById('demo').innerHTML = 'Siz son kiritmadingiz!';
}else if (check.length <= 11) {
  document.getElementById('demo').innerHTML = 'Sizga korsatilgan sonlardan kamroq son kirittingiz!';
}
}