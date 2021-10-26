window.onload = game;


function game(){   
   ImagePositioning();
}

var imaGes = ["image1", "image2","image3"];
//console.log(imageClass);
var backImage = Math.floor(Math.random() * 3) +1;

//shuffle and position image behind door
function ImagePositioning(){
   
   for(let i = 1; i<imaGes.length + 1; i++){
      if(i === backImage){
        document.getElementById("image" + i).innerHTML = '<img src ="/images/car.png" id ="y" />';

      }
      else{
         document.getElementById("image" + i).innerHTML = '<img src ="/images/dog.png" id ="x" />'; 
      }
   }
}

//an array holds all the doors that can be opened, this function opens doors that are only in the array.
function ClickSelection(id){

   var array =[];
   var listClass = document.getElementsByClassName("listClass");

   for(let i=0; i<listClass.length; i++){
      array.push(listClass[i].getAttribute("id"));
   }

   var clickSelection = document.getElementById(id).getAttribute("id");
   //console.log(clickSelection);
   
   
   if(array.indexOf(clickSelection) !== -1){

      Clicked(id);
      // console.log(array[0]);
      // console.log(clickSelection);

    }

}

function Clicked(id){
   
   var listclass = document.getElementById(id);
   var listclasschild = listclass.getElementsByClassName("hiddenImg")[0];
   var listclasschildchild = listclasschild.children[0].getAttribute("src");

   var doorpath = listclass.getElementsByClassName("door")[0];
   var doorpathpath = doorpath.children[0];
   var doorpathpathpath = doorpathpath.getAttribute("id");
  
   console.log(doorpathpathpath);
   //transforms door at a rotate Y of -90 degrees when clicked
   document.getElementById(doorpathpathpath).style.transform="rotateY(-90deg)";
   //if door with car behind is selected first 
   if(listclasschildchild =="/images/car.png")
   {
      let txt = "You've won. Game Over";
      setTimeout(function(){
      GameOver(txt);
      },1000);
   }
   else{
      
      setTimeout(function(){let confirmAction = confirm("You've lost, Do you want to continue?");
      //delete door after wrong image is chosen and user clicks ok to continue
      if(confirmAction){
         var divRemove = document.getElementById(id);
         divRemove.parentNode.removeChild(divRemove);
        // console.log(document.getElementsByClassName("door"));
       }else{
        //when user clicks cancel to quit game
          let txt = "Game Over";
         GameOver(txt);
      }},1000);

   }
   
}

//game over alert
function GameOver(txt){
   setTimeout(function(){alert(txt);},2);
   refresh();
}

//refresh page after game over
function refresh() {    
   setTimeout(function () {
       location.reload()
   }, 1000);
}



