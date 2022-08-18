
let homeScore = document.getElementById("home-el");
let guestScore = document.getElementById("guest-el");

let count1 = 0;
let count2 = 0;

function oneHome(){
  count1 += 1
  homeScore.textContent = count1
  
}

function twoHome(){
  count1 += 2
  homeScore.textContent = count1
  
}

function threeHome(){
  count1 += 3
  homeScore.textContent = count1
  
}

function oneGuest(){
  count2 += 1
  guestScore.textContent = count2
  
}

function twoGuest(){
  count2 += 2
  guestScore.textContent = count2
  
}

function threeGuest(){
  count2 += 3
  guestScore.textContent = count2
  
}