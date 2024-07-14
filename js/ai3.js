








 // Initialize canvas width & height


    var canWidth=1350;
    var canHeight=680;

// the position where the frame of the boy will be drawn
    var x=50;
    var y=500;

// Initialize boy status
	  var   boyAlive = true; 

// initialize visibility duration count
	  var count=0;

//  initialize boy actions
    var right =false;
    var left =false;
    var idle=true;


//  initialize rows of the sprite sheet
    var trackIdle =0;
    var trackRight=1;
    var trackLeft =2;
    
// coordinates of sprite sheet

    var srcX;
    var srcY;
// Actual width and height of sprite sheet
    var sheetWidth=600;
    var shetHeight=400;
 // number of coloumns and rows in the sprite sheet 
    var cols= 8;
    var rows=3;
// initialize the width and height of each frame
    var width = sheetWidth/cols;
    var height = shetHeight/rows;

 // index of the current frame

    var currentFrame = 0;

// set the image path for boy 
    var character = new Image();
    character.src =  "../img/boy.png";


    var canvas = document.getElementById('canvas'); // get ID by canvas

    canvas.width = canWidth; // canvas width
    canvas.height = canHeight; // canvas height
    var ctx = canvas.getContext('2d'); // get context to draw images on canvas

// Initializing boy movements

// Initialize boy idle
    function noMove(){

      left=false;
      right=false;
      idle=true;

    }
// Initialize boy move right
    function moveRight(){
      right=true;

      left=false;
      
      idle=false;

    }

// Initialize boy move left
    function moveLeft(){
      left=true;
      right=false;
      idle=false;

    }


    var keyPress = {} ;   // initialize the list that stores key presses

   


    addEventListener("keydown",  function (e) 
      {
          keyPress[e.keyCode] = true;   
       }   , false);

        addEventListener("keyup",   function (e)  
      {
          delete keyPress[e.keyCode]; 
      }  , false);


// update the sprite sheet frames

     function updateFrame() {

      // body...
      

        currentFrame = ++currentFrame%cols; 


        srcX = currentFrame * width;
          

        if (left)

          srcY = trackLeft * height;

        else if (right)

            srcY = trackRight * height;   
        else
            srcY =  trackIdle * height;   


        ctx.clearRect(x,y,width,height);

               
        
        if (37 in keyPress)  // left arrorw pressed
          {
            moveLeft();// call boy movement functions
            x =  x - 20; // boy move left


           }
          if (39 in keyPress)  // right arrow pressed
          {
            moveRight();// call boy movement functions
            x = x + 20; // boy move right

         }  


         if (40 in keyPress) // press down arrow 
         {
          noMove() // boy idle
         }


         if (37 in keyPress && 39 in keyPress )
         {
          noMove() // boy idle

         }

     }


     function drawImage(){


  if (boyAlive == true){

        updateFrame();

      ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height) //  draw boysimage
  }
  


     }

     setInterval(function(){
      drawImage();
     },100)





