



		var nbDrop = 300; // Initialize number of rain drops

		function randRange(minNum,maxNum){
			return(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}

	// create rain

	function createRain(){

		rain = true

		for ( i = 1; i < nbDrop; i++) {
			var dropLeft = randRange(0,1400); //  rain drops from left
			var dropTop = randRange(-1000,900); //  rain drops from Top

			$('.rain').append('<div class="drop" id="drop' + i +'"></div>');
			$('#drop' + i).css('left',dropLeft);
			$('#drop' + i).css('top',dropTop);

			
		}
	}


 // Initialize canvas width & height

    var canWidth=2000; 
    var canHeight=680; 

// rain status

   var rain = false;


// the position where the frame of the boy will be drawn
    var x=10;
    var y=575;

//  the position of bus sign
    var x2 =500;
    var y2 =500;

//  the position of bus stop
    var x3=300;
    var y3=500;



// Initialize boy status
	  var   boyAlive = true; 


// initialize visibility duration count

	  var count=0;

// 	initialize boy actions
    
    var right =false;
    var left =false;
    var idle=true;

// 	initialize rows of the sprite sheet

    var trackIdle =0;
    var trackRight=1;
    var trackLeft =2;

// coordinates of sprite sheet
    var srcX;
    var srcY;

// Acatual width and height of sprite sheet
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
    character.src =  "img/boy.png";


// set the image path for text apperas when rain

    var txtImage = new Image(); 
    txtImage.src = "img/raintext.png";  


// set the image path for bus stop

    var bustStop = new Image(); 
    bustStop.src = "img/bustop01.png";  

// set the image path for bus sign

    var busSign = new Image(); 
    busSign.src = "img/bussign.png";  


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

          

        
        
        if (37 in keyPress) // left arrorw pressed
          {
            moveLeft(); // call boy movement functions
            x =  x - 20; // boy move left


           }
          if (39 in keyPress)  // right arrow pressed
          {
            moveRight(); // call boy movement functions
            x = x + 20;    // boy move right

         }  

         if (96 in keyPress) // numeral (ins) 0 pressed
         {

         	rain = true;

         	createRain();  // rain fall

         	ctx.drawImage(txtImage, x-50,y-150); // draw rain sense message

         }

         	else 
         {
         	rain= false;

         }	

         if (97 in keyPress) // number 1 pressed
         {
          location.reload(true); // reload (rain stops)
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


      ctx.drawImage(busSign,x2,y2,200,200) //  draw bus sign image

      ctx.drawImage(bustStop,x3,y3,250,180) //  draw bus stop image

      ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height) //  draw boysimage



      if   (x > 700)
      {
      	     x3= x3-2; // move the bus stop to denote boy has move far away
      	     x2= x2-2; // move the bus sign to denote boy has move far away

      	  ctx.clearRect(x3,y3,260,180 ); // clear the bus stop image frame
      	
      	  ctx.clearRect(x2,y2,200,200); // clear the bus sign image frame
 
      }


  }
  

     }

     setInterval(function(){
      drawImage();
     },100)





