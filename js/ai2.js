

window.onload = init();
function init() 
{

  var count=0;

 var x4 = 1520 ; // X coordinate Yellow UFO
 var y4 = 1 ; //y coordinate

  var x5 = 1350 ; // X coordinate RED UFO
 var y5 = 1 ; //y coordinate

 var x6 = 200; // Killed Imaged
 var y6= 100;

 var x7=-400; // Air Craft
 var y7=50;	// Air Craft


// Missiles 
  var x8=-200; 
 var y8=50;


  var x9=-400;
 var y9=80;


 var SPEED = 1;  //speed of the UFO


var   callHelp = false; 


 

 // Initial state of the UFO
ufoDetectedBoy = false;




  function shootBoy() 
  { 
     ctx.lineWidth = 1; 
     ctx.strokeStyle = "orange"; 
     ctx.moveTo(x+100,y+10); //start at dragon's location 
     ctx.lineTo(x4+80,y4); //conect to player by line  
     ctx.stroke();

     boyAlive = false; 

     var expImage = new Image(); // make image object 
     expImage.src = "img/boom.png";  // set the image path 
    ctx.drawImage(expImage, x-35, y-45,200, 200);

  }

  function shootUFO() 
  { 
    var  shootAliens = new Image(); //make image object
    shootAliens.src = "img/shootfire.png";
    ctx.drawImage(shootAliens, x8, y8,200,80);


    var  shootAliens2 = new Image(); //make image object
    shootAliens2.src = "img/shootfire.png";
    ctx.drawImage(shootAliens2, x9, y9,200,80);
  }



  function aircraft()  
  {
    var  heli = new Image(); //make image object
    heli.src = "img/jet.png";
    ctx.drawImage(heli, x7, y7,270,120);

   }


function checkDetection() 
  {
     
	     if (x > 650 ){ // check if boy closer to UFO

		        ufoDetectedBoy = true; // UFO Detects boy

		   			count=count+1; //boy was visible for 6 seconds count start


		   			x4 =x4 - SPEED	// stop UFO to locate target when boy detected		

		   			SPEED =SPEED * -1

		   			 
	   			if  ( 13 in keyPress) // check press enter key

	         	  callHelp = true; // Boy calls help
   			} 

     else 

		     {
		        ufoDetectedBoy = false; // UFO dosen't detect boy

		        count =0;


			 }
	    

	    if (count>250 && x4 < 1350) { // 3 seconds aprox. 

	     	 shootBoy(); // Shoot the Boy

	  	 	var killImage = new Image(); // make image object 
	     	killImage.src = "img/kill.png";  // set the image path 
	    	ctx.drawImage(killImage, x6, y6); 
	    

	         if (32 in keyPress) // press space bar to restart 
	         {
	          location.reload(true);
	         }

	   }
    

   }  // end checkDetection



function UfoChangeColour()
{

	checkDetection() // check wether boy

      	var wingImage2 = new Image();
    	wingImage2.src = "img/ufored.png";

		 var  ufoImage = new Image(); // make image object
		 ufoImage.src = "img/ufo.png";  // set the image path


    	if  (callHelp == true)
    	 {
		      var helpImage = new Image(); // make image object
		      helpImage.src = "img/redspeech.png";  // set the image path
		      ctx.drawImage(helpImage, x-50,y-150 );
		      // call dog
		      aircraft(); // Aircraft appears

		      shootUFO();  // Aicraft Shoots to the UFO
					
					// launch missle 1 
		   	  		 x8 = x8 + 10;  		
		   	  		 y8 = y8 -0.5;
		   	  		
		   	  		// launch missle 2

		   	  		 x9 = x9 + 10; 

		   	  		 y9 = y9 -0.2; 

		   	  		// Air Strike comes for bOYS help
		      		 x7 = x7 + 5;  


		      		 if (x8 > 300) // detect misile distance from the UFO is closer
		      		 {
	   	  		  
		   	  		 	x4 = x4 + 8; // escape from UFO being fear

		      		 }


		      if  (x7 > 1400)
		      {

		      	var xt= 1100;
		      	var yt =320;

		      	ctx.clearRect(x-50,y-250, 200,170 ); // clear the help text

		      		
			        var boySaved = new Image(); // make image object
			        boySaved.src = "img/boySaved.png";  // set the image path
			    	ctx.drawImage(boySaved, 200, 40 );

		      		
		      		var tree = new Image(); // make image object
		     		tree.src = "img/tree.png";  // set the image path
		      		ctx.drawImage(tree,xt,yt );

                                          

		      	 	var feelTired = new Image(); // make image object
		     		feelTired.src = "img/tired.png";  // set the image path
		      		ctx.drawImage(feelTired,x-50,y-150 );


		      }

		      if  (16 in keyPress || count > 600) 

		      {

		      	window.open("../index2.html", "_self"); //open second scene

		      }
		      	
    			
       	}	


	    	if (ufoDetectedBoy == true )  // check wether UFO Detected Boy
          {
       		ctx.drawImage(wingImage2, x4, y4 ); // Yellow Beam turns to red

       		ctx.clearRect(x5,y5,160,400);// clear moving path
       	}

            else 
       	 {	
                ctx.drawImage(ufoImage, x4, y4 );// No change in the Yellow Beam 

                
           } 
 }       





function update()
 {

 
if  (x > 200 )

{
	  x4 = x4 + SPEED;      // move the UFO
}


	  if (x4>1350)
	  	
	     SPEED = SPEED * -1;

	  if (x4<1000)

	      y4 = y4 -SPEED;  

	  if (x4<950)
	  y4 = y4 + SPEED;  // UFO go down a little

	  if (x4<800) 
	     SPEED = SPEED * -1;



     ctx.clearRect(x4,y4,154,398);// Yellow UFO
     ctx.clearRect(x5,y5,154,398);// Red UFO
     ctx.clearRect(x7,y7,450,157)// Craft

     // Missiles
	 ctx.clearRect(x8,y8,534,171);
     ctx.clearRect(x9,y9,534,171);


 }//end update

function Loop() 
{

    update();
    UfoChangeColour();  

    setTimeout(Loop, 20);  //call game loop every 20 mili sec 
   } //end Loop
 Loop();  //call loop for the first time
}  //end init function