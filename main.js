let raceNumber = Math.floor(Math.random() * 1000);
const early = false;
const age = 18;
if (early && age > 18) {
  raceNumber += 1000;
}
if (early && age > 18){
  console.log(`Early adult runner #${raceNumber}, your scheduled race time is 9:30am.`)
} else if (!early && age > 18){
  console.log(`Late adult runner #${raceNumber}, your scheduled race time is 11:00am.`)
} else if (age < 18){
  console.log(`Youth runner #${raceNumber}, your scheduled race time is 12:30pm.`)
} else {
  console.log(`Runners who are 18 years old should see the registration desk.`)
}