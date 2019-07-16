class HangmanCanvas {
  constructor(secretWord){
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.clearRect(0, 0, 1000, 600);
    this.createBoard()
    this.drawLines(secretWord);
  }
  createBoard(){
    this.ctx.beginPath(); //triangle   
    this.ctx.moveTo(50, 500);
    this.ctx.lineTo(200, 500);
    this.ctx.moveTo(200, 500);
    this.ctx.lineTo(125, 400);
    this.ctx.moveTo(125, 400);
    this.ctx.lineTo(50, 500);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath(); //hangman structure   
    this.ctx.moveTo(125, 400);
    this.ctx.lineTo(125, 100);
    this.ctx.lineTo(400, 100);
    this.ctx.lineTo(400, 150);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath(); //small circle 
    this.ctx.arc(400, 180, 30, 0, Math.PI*2); // ctx.arc(x, y, radius, startAngle, endAngle)
    this.ctx.stroke();
    this.ctx.beginPath(); //body   
    this.ctx.moveTo(400, 210);
    this.ctx.lineTo(400, 320);  
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath(); //left arm   
    this.ctx.moveTo(400, 250);
    this.ctx.lineTo(340, 220);  
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath(); //right arm   
    this.ctx.moveTo(400, 250);
    this.ctx.lineTo(460, 220);  
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath(); //left leg   
    this.ctx.moveTo(400, 320);
    this.ctx.lineTo(460, 380);  
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath(); //right leg   
    this.ctx.moveTo(400, 320);
    this.ctx.lineTo(340, 380);  
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawLines(secretWord){
    let x = 250;
    console.log(secretWord);
    for(let i =  0; i < secretWord.length; i += 1){
      this.ctx.beginPath();
      this.ctx.moveTo(x, 500);
      x += 50;
      this.ctx.lineTo(x, 500);
      x += 30;
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  writeCorrectLetter(){
 
  }
  writeWrongLetter(){
 
  }
  drawHangman(){
 
  }
  gameOver(){
 
  }
  winner(){
 
  }
 }


 
