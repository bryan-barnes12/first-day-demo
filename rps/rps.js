const weapons = ["R", "P", "S"];
let score = [0, 0, 0];
function myFunction() {
  let userWeapon = prompt("Select rock(R), paper(P), or scissors(S).");
  let playState = "Y"
  for (playState == "Y"; playState != "Y";) {  
  if (userWeapon == "R" || userWeapon == "P" || userWeapon == "S") {
    confirm("You have selected " + userWeapon + ".");
    } else {
    userWeapon = prompt("Select rock(R), paper(P), or scissors(S).");
    }
    let computerWeapon = "R" //weapons[Math.floor(Math.random() * weapons.length)];
    if (computerWeapon == userWeapon) {
        score[2] ++;
        alert("Computer selected " + computerWeapon + ". You draw.");
        prompt(`Current score: ${score[0]} wins, ${score[1]} losses, and ${score[2]} draws. Play again? (Y/N)`);
    } else {
        alert("poop");
    }
}
}