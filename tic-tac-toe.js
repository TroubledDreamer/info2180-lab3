document.addEventListener("DOMContentLoaded", function () {
  
    

    const squareVar = Array.from(document.getElementById('board').children);
    const status = document.getElementById("status")
    const btn = document.querySelector(".btn");
    let turn = 1;
    //squareVar.classList.add("square");

    function clear(){

      squareVar.forEach((square, index) => {
        square.innerText = "";
      }
      
      )
    }



    function winCheck(listArray, index){
      console.log("wincheck");
      switch (index){
        case 1:
          if (listArray[0] == listArray[1] == listArray[2]){
            return true;
          }
          break;
        case 7:
          if (listArray[6] == listArray[7] == listArray[8]){
            return true;
          }
          break;
        case 3:
          if (listArray[0] == listArray[3] == listArray[6]){
            return true;
          }
          break;
        case 5:
          if (listArray[2] == listArray[5] == listArray[8]){
            return true;
          }
          break;
        case 4:
          if ((listArray[1] == listArray[4] == listArray[7]) || (listArray[3] == listArray[4] == listArray[5]) || (listArray[0] == listArray[4] == listArray[7]) || (listArray[2] == listArray[4] == listArray[6])){
            return true;
          }
          break;
        default: 
          console.log("error in win logic or didnt win");
      }


      return false

      
    }


    function winStatement(player){
 
      status.innerText = "Congratulations! " + player + " is the Winner!";


    }


  

  
    // Loop through each square and add the necessary classes
    squareVar.forEach((square, index) => {
      // Add your logic to determine the appropriate class based on the index
      // Example: If you want to alternate between 'x' and 'o' classes


      square.classList.add("square");

      square.addEventListener('mouseenter', function () {
        square.classList.add("hover");
      }
      )

    



      square.addEventListener('mouseleave', function () {
        square.classList.remove("hover");
      }
      )





      

      square.addEventListener('click', function () {

        
        if (square.innerText == ""){
          if (turn % 2 == 0){

            square.innerText = "X";
            square.classList.add("X")
  
          }else{
  
            square.innerText = "O";
            square.classList.add("O")
          }
          turn++


        console.log(winCheck(squareVar, index));
        if (winCheck(squareVar, index)){
          winStatement(square.innerText)

        }


        }





      }
      )

    })


    

    
    btn.addEventListener('click', clear)

    const squares = document.querySelectorAll(".square");

    
 




  })
