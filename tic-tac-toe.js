//function reloader(){
document.addEventListener("DOMContentLoaded", function () {
  
    

    const squareVar = Array.from(document.getElementById('board').children);
    const status = document.getElementById("status")
    const btn = document.querySelector(".btn");
    let turn = 1;
    //squareVar.classList.add("square");

    function clear(){

      squareVar.forEach((square, index) => {
        square.innerText = "";
        square.classList.remove("O");
        square.classList.remove("X");
        status.innerText = "Move your mouse over a square and click to play an X or an O.";



      }
      
      )

      //reloader()
    }



    function winCheck(listArray, index) {
      console.log("wincheck");
    
      const winCombinations = [
        [0, 1, 2], // Horizontal top row
        [3, 4, 5], // Horizontal middle row
        [6, 7, 8], // Horizontal bottom row
        [0, 3, 6], // Vertical left column
        [1, 4, 7], // Vertical middle column
        [2, 5, 8], // Vertical right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
      ];
    
      for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (listArray[a].innerText === listArray[b].innerText && listArray[b].innerText === listArray[c].innerText && listArray[c].innerText !== "") {
          return true;
        }
      }
    
      console.log("error in win logic or didn't win");
      return false;
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


//reloader()
