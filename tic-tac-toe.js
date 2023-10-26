document.addEventListener("DOMContentLoaded", function () {
  
    

    const squareVar = Array.from(document.getElementById('board').children);
    let turn = 1;
    //squareVar.classList.add("square");

    function clear(){

      squareVar.forEach((square, index) => {
        square.innerText = "";
      }
      
      )
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


        }

      }
      )



    

    


      
    });

    const squares = document.querySelectorAll(".square");



  });