let jonSnowAttack = 35;
let jamieLanisterAttack = 35;

let jonSnowHealth = 50;
let jamieLanisterHealth = 50;

let jonSnowDefense = 0;
let jamieLanisterDefense = 20;

// if (jonSnowAttack < jamieLanisterAttack) {
//   console.log("Jamie has the stronger attack!");
// } else if (jonSnowAttack > jamieLanisterAttack) {
//   console.log("Jon has the stronger attack!");
// } else {
//   console.log("They are both equal!");
// }

jonSnowDefense += 25;

for (let i = 0; i < 7; i++) {
  if (jonSnowHealth <= 0) {
    console.log("Jon Snow has perished in battle");
  } else {
    jonSnowHealth -= jamieLanisterAttack - jonSnowDefense;
    console.log("Jon's health is " + jonSnowHealth);
  }
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
  }

// if(jonSnowHealth <= 0){
//     console.log('Jon Snow has perished in battle')
// } else {
//     jonSnowHealth -= jamieLanisterAttack - jonSnowDefense;
//     console.log("Jon's health is "  + jonSnowHealth)
// }