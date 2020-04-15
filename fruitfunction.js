var FruitEater = function(){
    
        var pearCounter = 0;
        var appleCounter = 0;
        
        function pearEat(){
          pearCounter++;
        }
    
        function appleEat(){
          appleCounter++;
        }

        function applesEaten(){
          return appleCounter;
        }
    
        function pearsEaten(){
          return pearCounter;
        }
    
        return {
          pearEat,
         pearsEaten ,
         appleEat, 
         applesEaten
          
        }
    
    }
    

    /*function eat(fruit){
      if(fruit="pear"){
        pearCounter++;
      }
      else if (fruit="apple")
      {appleCounter++

      }
    }*/

    // this is scoped inside the ShoppingBasket function

