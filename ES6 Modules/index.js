import{PI,getArea,getCircumference,getVolume} from `./mathUtils`

const circumference = getCircumference(10);
const area = getArea(20);
const volume = getVolume(30);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
console.log(PI);