const circleArea = require('./circleArea');
const circleCircumference = require('./circleCircumference');
const r= 5;
const alan = circleArea(r);
const cevre =circleCircumference(r);

console.log(`Yarıçapı ${r} olan dairenin alanı ${alan}'dır ve çevresi ${cevre}'dir`);