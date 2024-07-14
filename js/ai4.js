



window.onload = init();
function init() 
{

  var count=0;

 // Aline Normal

 var x4 = 1350 ; // X coordinate
 var y4 = 450; //y coordinate

  // Alien Red

  var x5 = 1350 ; // X coordinate
 var y5 = 1 ; //y coordinate

 // Killed Image x Coordinates

 var x6 = 120; 
 var y6= 100; 

 // Miltary Tank

 var x7=-600;
 var y7=430;


// missiles
  var x8=-200;
 var y8=485;


 var x9=-500;
 var y9=485;


 var SPEED = 1;  //speed of the UFO


var   callHelp = false; 

 var alienredeye = false;
 // Initial state of the UFO
alienDetectedBoy = false;

function alien()
{


alienredeye = false;

 var  alienImage = new Image(); // make image object
 alienImage.src = "../img/alien1.png";  // set the image path


  ctx.drawImage(alienImage, x4, y4);

}



function aliendetect()
{


      alienredeye = true;
      var brainAliende = new Image();
      brainAliende.src = "../img/badalien.png";

        ctx.drawImage(brainAliende, x4, y4 );

}


function alienMessage()
{
           var brainmessage = new Image();
          brainmessage.src = "../img/redspeech2.png";

        ctx.drawImage(brainmessage, x4-20, y4-160 );

}

  function shootBoy() 
  { 
     ctx.lineWidth = 1; 
     ctx.strokeStyle = "orange"; 
     ctx.moveTo(x+100,y+50); //start at dragon's location 
     ctx.lineTo(x4+80,y4+90); //conect to player by line  
     ctx.stroke();

     boyAlive = false; 

     var expImage = new Image(); // make image object 
     expImage.src = "../img/boom.png";  // set the image path 
    ctx.drawImage(expImage, x-35, y-45,200, 200);

  }

  function shootAlien() 
  { 
    var  shootAliens = new Image(); //make image object
    shootAliens.src = "../img/tankbullet.png";
    ctx.drawImage(shootAliens, x8, y8);


    var  shootAliens2 = new Image(); //make image object
    shootAliens2.src = "../img/tankbullet.png";
    ctx.drawImage(shootAliens2, x9, y9);
  }



  function miltaryTank()  
  {
    var  tank = new Image(); //make image object
    tank.src = "../img/tank.png";
    ctx.drawImage(tank, x7, y7);

   }


function checkDetection() 
  {
     if (x > 500 ){ // check if boy closer to alien

        alienDetectedBoy = true; // alien Detects boy

        count=count+1; //boy was visible for 6 seconds count start


        if (x < 500) // appear alien only of boy has move a certain distance
        {
          x4 = x4 + 1;
        }

        if  ( 13 in keyPress) //check press enter key
       

            callHelp = true; // Boy calls help

        } 

     else 

     {
        alienDetectedBoy = false; // alien dosen't detect boy

        count=0;
   }



      if (count>350 && x4 < 1350 && x > 600) { // 6 seconds aprox. 

         shootBoy();  // Shoot the Boy

        var killImage = new Image(); // make image object 
        killImage.src = "../img/kill.png";  // set the image path 
        ctx.drawImage(killImage, x6, y6); 
      

           if (32 in keyPress) // press space bar to restart 
           {
            location.reload(true); 
           }

     }
    

   }  // end checkDetection



function alienChangeColour()
{

  checkDetection(); // check wether boy is detected


      if  (callHelp == true)
       {
          var helpImage = new Image(); // make image object
          helpImage.src = "../img/redspeech3.png";  // set the image path
          ctx.drawImage(helpImage, x-50,y-145 );// draw help message
   
           miltaryTank(); // Tank  appears
           shootAlien(); //panser Shoots to the UFO



               x8 = x8 + 10;  // launch the misiles
               x9 = x9 + 10;  // launch the misiles
               x7 = x7 + 4;  // make the panser comes  for boys help

           

               if (x8 > 300) // detect bullets distance from the alien is closer
               {

               x5 = x5 + 8;  // make the Alien escape
               x4 = x4 + 8;
               }

          if  (x7> 400)  
          { 


          var boySaved = new Image(); // make image object
          boySaved.src = "../img/boySaved2.png";  // set the image path
          ctx.drawImage(boySaved, 200, 40 );

          }

            if  (x7 > 900)// check wether the alien has moved
          {



            ctx.clearRect(x-50,y-145, 217,131 ); // clear the help text

              
              var savetext = new Image(); // make image object
            savetext.src = "../img/textsave.png";  // set the image path
              ctx.drawImage(savetext,x-50,y-145 );// text after save


          }



         if  (x7 > 1400)

          {



            ctx.clearRect(x-50,y-145, 217,131 ); // clear the help text

              
              var homereachtext = new Image(); // make image object
              homereachtext.src = "../img/hometext.png";  // set the image path
              ctx.drawImage(homereachtext,x-50,y-145 );


          }




          if  (16 in keyPress) 

          {

            window.open("../index.html", "_self"); //open second scene

          }
            
          
        } 


        if (alienDetectedBoy == true )  
          {


          aliendetect();
          alienMessage();
 
   
        }

           
          else
          {
              alien();

          }
 }       




function update()
 {

  if (x>200) // checking wether the boyhas moved a certain deistance

  {

  x4 = x4 - SPEED;      // move the alien towards the boy


   }
    

  if (x4<1100) 
     SPEED = SPEED * 0; // stop the alien when the boy is detected


    ctx.clearRect(x4,y4,154,373); // clear ailen 
    ctx.clearRect(x5,y5,154,398);
    ctx.clearRect(x4-20, y4-160,200,170 );// Clear Message apperaing area
    ctx.clearRect( x-50,y-190, 250,190); // Clear Message apperaing area
    
    ctx.clearRect(x7,y7,550,184);
    ctx.clearRect(x8,y8,114,20);
     ctx.clearRect(x9,y9,114,20);


 }//end update


function Loop() 
{

    update();
    alienChangeColour();  

    setTimeout(Loop, 20);  //call game loop every 20 mili sec 
   } //end Loop
 Loop();  //call loop for the first time
}  //end init function