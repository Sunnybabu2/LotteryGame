const pickNumberBtn = document.getElementById("pickNumberBtn");
const resultBtn = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const tick =  new Audio("tap2.mp3")
const completedSound =  new Audio("tap3.wav")
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "SmartPhone Cover",
  "Book",
  "HeadePhones",
  "₹50 Cash",
  "Gift Vocher",
  " Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  " Sunglasses",
  "₹1000 Cash ",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "NoteBook Set",
  "Gaming MousePad",
  "₹250 Cash ",
  " Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figer",
  "₹300 Cash",
  "Travel Pillow",
  "Mini BackPack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cach ",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "BackPack",
  "Gift Hamper",
];
console.log(gifts);
resultBtn.textContent = "Choose Your Luck..👇👇";
pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i < 50; i++) {
    // console.log(i)
    document.getElementById(i).classList.remove("winningBox");
  }
  resultBtn.textContent = "Please Wait Few Seconds.....⌛";
  // setTimeout(function () {
  //   let randomNum = Math.random() * 50;
  //   let drawnumber = Math.floor(randomNum) + 1;
  //   const gift = gifts[drawnumber - 1];
  //   resultBtn.textContent = `You have got ${drawnumber},and you Won ${gift}`;
  //   document.getElementById(drawnumber).classList.add("winningBox");
  // }, 5000);

  let secondCount = 0
  const interalId =  setInterval(function () {
    tick.pause()
    tick.currentTime =0
    tick.play();
    const randomBox = Math.floor(Math.random() * 50) + 1;
    secondCount++
    console.log(randomBox);
    for(let i = 1; i<50; i++){
      if(i===randomBox){
        document.getElementById(i).classList.add("heghlightedBox")
    } else{
      document.getElementById(i).classList.remove("heghlightedBox")
    }
  }
  

    if(secondCount===5){
    
    let randomNum = Math.random() * 50;
    let drawnumber = Math.floor(randomNum) + 1;
    const gift = gifts[drawnumber - 1];
    resultBtn.textContent = `You have got ${drawnumber},and you Won ${gift}`;
     document.getElementById(randomBox).classList.remove("heghlightedBox")
    document.getElementById(drawnumber).classList.add("winningBox");
    completedSound.pause()
    completedSound.currentTime = 0
    completedSound.play()
    clearInterval(interalId)
    }
  }, 1000);
});

gifts.forEach(function (value, i) {
  const boxElement = `<div class="box" id=${i + 1}>${i + 1}. ${value}</div>`;
  // console.log(boxElement);
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});
