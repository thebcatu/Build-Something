(function(window,document){
  var charString = 'Mahendra Singh Mahara';
  var charArray = charString.split('');
  var charStep = 16;
  var fontColor = '#7cfc00';
  var fontSize = '14';
  var canvasColor = 'rgba(0,0,0,0.2)';
  var refreshRate = 1000 / 18;
  var maxChars = 100;
  var canvas, ctx, height, width, delta, now, then = Date.now(), xCoords = [], chars = [], startAnimChars = [], startAnimCounter = 0;
  
  
  function randomChar(){
    return charArray[Math.floor(Math.random() * charArray.length)];
  }
  
  function randX(){
    return xCoords[Math.floor(Math.random() * xCoords.length)];
  }
  
  var charObj = function(){
    this.char = randomChar();
    this.posX = randX();
    this.posY = charStep;
  };
  
  charObj.prototype.update = function(){
    this.char = randomChar();
    this.posY += charStep;
  };
  
  function initCoords(){
    var numCoords = width / charStep;
    for(var i = 0; i < numCoords; xCoords[i++] = (i * charStep) - 14);
  }
  
  function update(){
    for(var i = 0; i < chars.length; chars[i++].update()){
      if (chars[i].posY > height){
        chars.splice(i,1);
      }
    }
    if (chars.length < maxChars){
      var delay = Math.ceil(Math.random() * 20);
      window.setTimeout(function(){
        var c = new charObj();
        chars.push(c);
      },delay);
    }
  }
  
  function draw(){
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0,0,width,height);
    ctx.save();
    ctx.fillStyle = fontColor;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 5;
    for(var i = 0; i < chars.length; i++){ 
      ctx.fillText(chars[i].char, chars[i].posX, chars[i].posY);
    }
    ctx.restore();
    update();
  }
  
  function animate() {
    window.requestAnimationFrame(animate);
    now = Date.now();
    delta = now - then;
    if (delta > refreshRate) {
      then = now - (delta % refreshRate);
      draw();
    }
  }
  
  function startAnimation(){
  	// HELLO WORLD
  	/*
    var textIndeces = [
      [1,5,8,9,10,13,17,19,20,21,22,23,25,26,27,28,31],
      [1,5,7,11,13,17,19,25,29,31],
      [1,2,3,4,5,7,11,13,17,19,20,21,22,25,26,27,28,31],
      [1,5,7,11,14,16,19,25,28,],
      [1,5,8,9,10,15,19,20,21,22,23,25,29,31]
    ];  */
    // SUBSCRIBE
    /*
    var textIndeces = [
    [1, 2, 3, 4, 5, 7, 11, 13,14,15,16,19,20,21,22,23, 25, 26,27,28,29,31,32,33,34,37,38,39,40,41,43, 44, 45, 46,49,50,51,52,53,55],
          
    [1,  7, 11,13, 17,19, 25,31,35,39,43,47, 49,55],
    
    [1, 2, 3, 4, 5, 7, 11,13,14,15,16,19,20,21,22,23,25,31,32,33,34,39,43,44,45,46,49,50,51,52,55],
    
    [5, 7, 11, 13, 17,23,25,31,35,39,43,47,49],
    
    [1, 2, 3, 4, 5, 7, 8, 9, 10, 11,13,14,15,16, 19, 20, 21, 22, 23,25,26,27,28,29,31,35,37,38,39,40,41,43,44,45,46,49,50,51,52,53,55],
        ];
    */
    // THANK YOU
    /*
    var textIndeces = [
    	[1,2,3,4,5,7,11,13,14,15,16,17,19, 23,25,29,32, 36,38,39,40,41,42,44,48,51,53],
    	
    	[3, 7,11,13,17, 19, 20, 23,25,28, 33, 35,38,42,44,48,50,52,54],
    	
    	[3,7,8,9,10,11,13,14,15,16,17,19, 21, 23,25,26,27, 34,38,42,44,48,50,54],
    	
    	[3,7,11,13,17, 19, 22, 23,25,28,34,38,42,44,48,51,53],
    	
    	[3,7,11,13,17, 19, 23, 25, 29,34,38,39,40,41,42,44,45,46,47,48,52]
    	]
    	*/
    	//  CREATVEWIZ
    var textIndeces = [
    	[1,2,3,4,6,7,8,9,10,12,13,14,15,17,18,19,20,22,23,24,25,26,28,29,30,32,36,38,39,40, 41,43,47,49,50,51,53,54,55,56,57],
    	
    	[1,6,10,12,17,20,24,29,32,36,38,43,47,50,56],
    	
    	[1,6,8,9,12,13,14,17,18,19,20,24,29,32,36,38,39,40,43,45,47,50,55],
    	
    	[1,6,9,12,17,20,24,29,33,35,38,43,44,46,47,50,54],
    	
    	[1,2,3,4,6,10,12,13,14,15,17,20,24,28,29,30,34,38,39,40,41,43,47,49,50,51,53,54,55,56,57,]
    	
    	
    	]
    	
    for(var i = 0; i < textIndeces.length; i++){
      for(var j = 0; j < textIndeces[i].length; j++){
        var c = new charObj();
        c.posX = (textIndeces[i][j] + 1) * charStep;
        c.posY = (i + 2) * charStep;
        startAnimChars.push(c);
      }
    }
    var anim = setInterval(function(){
      startAnimCounter++;
      ctx.save();
      ctx.fillStyle = fontColor;
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 5;
      for (var i = 0; i < startAnimChars.length; i++){
        ctx.fillText(startAnimChars[i].char, startAnimChars[i].posX, startAnimChars[i].posY);
        startAnimChars[i].char = randomChar();
      }
      ctx.restore();
      if(startAnimCounter > 30){
        for (var i = 0; i < startAnimChars.length; i++){
          var c = startAnimChars[i];
          chars.push(c);
          startAnimChars.splice(startAnimChars[i], 1);
        }
        window.clearInterval(anim);
      }
    }, 200);
  }
  
  function hover(e){
    var c = new charObj();
    var x = Math.ceil(e.clientX/charStep) * charStep;
    var y = Math.ceil(e.clientY/charStep) * charStep;
    c.posX = x;
    c.posY = y;
    chars.push(c);
  }
  
  function init(){
    canvas = document.getElementById('canvas');
    height = window.innerHeight;
    width = window.innerWidth;
    canvas.height = height;
    canvas.width = width;
    ctx = canvas.getContext('2d');
    ctx.font = '17px courier';
    ctx.imageSmoothingEnabled = false;
    window.onmousemove = hover;
    initCoords();
    animate();
    startAnimation();
  }
  
  window.onload = init;
}(this,document));