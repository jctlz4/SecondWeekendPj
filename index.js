const readlineSync = require('readline-sync')  
const weaponListSp = ["Laser Gun",
"Baseball bat","Rambo knife"]
const gunReload = ["Reload Gun",  "  Run Away Afraid",]
const zodOptions = ["Shoot him in the chest", "Shoot him on the leg", "Shoot him in the head"]
const startGame = () => {
  console.log("***************************************************")
console.log("***************************************************")
console.log("****************** Welcome to Superman: *******************")
console.log("****************** Man of Steel *************")
console.log("***************************************************")
console.log("***************************************************")
console.log("")
console.log("")
console.log("Is time to fight General Zod Help and I need your help.....")

let userName = readlineSync.question('Give me your name soldier : ')

console.log( userName + '!');

console.log("Let's hurry up and get you some weapons for our fight ")
console.log("I will walk you thru my spaceship")

let wrongList=true

while (wrongList){
let selectedWeaponListSp = readlineSync.keyInSelect(weaponListSp, "Ah, "+ userName + " which items have you chosen?")
if (selectedWeaponListSp == [0]){
    console.log("")
  //  console.log("     ***********************************")
    console.log(" Perfect selection " + userName + " this weapon will help us defeat Zod!")
      //  console.log("     ***********************************")

    wrongList=false

}else if (selectedWeaponListSp == [1]) {
    console.log("")
  //  console.log("     ***********************************")
    console.log(userName + " I don't think" + " a baseball bat will do the job. Let's choose again")
  //  console.log("     ***********************************")


}else if ( selectedWeaponListSp == [2]){
  console.log("")
    console.log( userName + " I love Rambo too but this time we are not fighting humans.. Choose again ")
       console.log("     ***********************************")

} else {console.log("")
     console.log("X X X You have failed selecting the option, choose again. X X X")
     console.log("              ***********************************")
}
}

//CONSOLE LOGS//
console.log("")
console.log("***Here we go to fight General Zod and his army!***")
console.log(userName + " before we get to Zod we will have to defeat some of his army,")
console.log(" but let's not be afraid "+userName+" your " + weaponListSp[0]  )
console.log(" will protect you.")
console.log("")
console.log("   ***** ON OUR WAY TO GENERAL ZOD *****")
console.log("***** WE RAN INTO HIS SOLDIERS *****")
console.log("***************************************************")
console.log("Time to choose either we FACE THEM or GO AROUND")
console.log("the most difficult option will lead us to victory and the other")
console.log("Will lead us to failure.....WE ARE HERE TO FIGHT!! LET'S CHOOSE!")
console.log("")
console.log("     ***********************************")
console.log("If you chose to FACE THEM well go straight ahead, If you chose to GO AROUND we will hide and see what happens")
console.log("     ***********************************")
// FACE THEM OR GO AROUND//
faceThemOrGoAround = readlineSync.question('WHATS YOUR CHOICE?', {
    trueValue: ['FACE THEM', 'Face them', 'face them', 'Face Them'],
    falseValue: ['GO AROUND', 'Go Around', 'go around', 'Go Around']
  });if (faceThemOrGoAround === true) {
    console.log("***************")
    console.log("Ok, " + userName + " let's face them!");
    console.log("***************")
  } else if (faceThemOrGoAround === false) {
      console.log("***************")
    console.log("Ok, " + userName + " let's go around! Oh wait there is no way around! ");
    console.log("***************")

  } else {
    console.log( userName + ' What did you choose? "' + faceThemOrGoAround + '"? I am having problems understanding you , lets just go face them!');
  }

// CONSOLE LOGS  // 

console.log("")
console.log("     ***********************************")
console.log(userName + " , We went the hard way");
console.log("     ***********************************")
console.log("");
console.log( "* Let's get ready to fight*");

fight = readlineSync.keyInYNStrict('"Shoot the laser gun to Zod soldiers"');
if (fight === true){
  console.log("THAT'S WAY TO DO IT!!!!")
  console.log("***************************************************")
  console.log("***************************************************")
  
}else console.log("")
console.log("*************************")
console.log("*Zod is seen from a distance* Well " + userName + " there he is!...")
console.log("*************************")
console.log(userName + " Lets get ready to fight him")
console.log("*Superman clears the dust from his shoulders*")
console.log("*************************")
console.log("*Heart beats are faster than normal!!!*")
console.log("*************************")
console.log("QUICKLY " + userName + " RELOAD YOUR GUN")
console.log("*************************")

let reloadGun=true

while (reloadGun){
let gunReloadTwo = readlineSync.keyInSelect(gunReload, "QUICKLY, "+ userName + " CHOOSE!!")
if (gunReloadTwo == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log("QUICKLY!! " + userName + " SHOOT!")
       console.log("     ***********************************")

    reloadGun=false

}else if (gunReloadTwo == [1]) {
    console.log("")
   console.log("     ***********************************")
    console.log(  userName + "!! COME ON!!! RUN AWAY IS NOT AN OPTION NOW!!! PICK AGAIN!!!")
   console.log("     ***********************************")

} else {console.log("")
     console.log("X X X You have failed selecting the option, choose again. X X X")
     console.log("              ***********************************")
}
}

console.log("              ***********************************")
console.log("              ***********************************")

console.log("*you keep on shooting*")
console.log("*Zod starts to get defeated*")
console.log("              ***********************************")
console.log("* Zod screams* NOT SO FAST!")
console.log("IF YOU WANT TO DEFEAT ME YOU MUST CHOOSE WISELY!!")

let wrongChoice=true

while (wrongChoice){
let chosenZodBattleOptions = readlineSync.keyInSelect(zodOptions, "CHOOSE WISELY TO DEFEAT ME!?!?!")
if (chosenZodBattleOptions == [0]){
    console.log("")
    console.log("NO!! " + userName + " HE IS COVERING HIS CHEST!! CHOOSE AGAIN!!")
       console.log("     ***********************************")


}else if (chosenZodBattleOptions == [1]) {
    console.log("")
    console.log("NOT ON THE LEG?!?! PICK AGAIN!")
   console.log("     ***********************************")


}else if ( chosenZodBattleOptions == [2]){
  console.log("")
     console.log("       ***********************************")
    console.log(userName + " YOU GOT HIM GOOD THIS TIME! WELL DONE!")
       console.log("     ***********************************")
       console.log("***********************************")
       console.log("***********************************")

       console.log("I knew you could do it SOLDIER!!")
       console.log("Time to celebrate! " +userName+ " YOU ARE NOW AN AVENGER!!")
       console.log("***********************************")
       console.log("***********************************")
       console.log("***********************************")
       console.log("***********************************")
       wrongChoice=false

} else {console.log("")
     console.log("X X X You have failed selecting the option, choose again. X X X")
     console.log("              ***********************************")
}
}
function playAgain() {
  let playAgain = readlineSync.question('Do you want to play again? y || n \n');
  playAgain = playAgain.toLowerCase();
  if (playAgain === 'y') {
startGame()
  } else {
    console.log('Thanks for playing.\nGoodbye.');
  }
}

playAgain()

}


startGame()
