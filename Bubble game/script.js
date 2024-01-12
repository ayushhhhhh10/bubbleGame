var timer = 30;
var score = 0;
var newHit = 0;

document.querySelector("#pbtm").innerHTML = `<button>Start The Game</button>`

document.querySelector("#pbtm button").addEventListener("click",function() {
  function gameTimer() {
    var valTimer = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
      }
      else{
          clearInterval(valTimer);
          document.querySelector("#pbtm").innerHTML = `<h1>Your Score Is : ${score}</h1>`;
          document.querySelector("#ptop").innerHTML = `<h1>Game Over</h1>`;
          document.querySelector("#restart").innerHTML = `<button>Restart Game</button>`;
      }
    }, 1000);
  }
  function getNewHit() {
      newHit = Math.floor(Math.random() * 10);
      document.querySelector("#hitval").textContent = newHit;
  }
  function increaseScore() {
    score+=10;
    document.querySelector("#scoreval").textContent = score;
  }
  function makeBubble() {
    var clutter = "";
  
    for (var i = 0; i < 152; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rn}</div>`;
    }
  
    document.querySelector("#pbtm").innerHTML = clutter;
  }
  
  document.querySelector("#pbtm")
  .addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === newHit){
      increaseScore();
      makeBubble();
      getNewHit();
    }
  })
  
  function RestartGame() {
    document.querySelector("#restart").
    addEventListener("click",function(){
      location.reload();
    })
  }
  
  gameTimer();
  getNewHit();
  makeBubble();
  RestartGame();
 });


