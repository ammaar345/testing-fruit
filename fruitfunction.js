var FruitEater = function(){
    
        var catsSpottedCounter = 0;
        var dogsSpottedCounter = 0;
        
        function pearsEaten(){
          dogsSpottedCounter++;
        }
    
        function catSpotted(){
          catsSpottedCounter++;
        }
    
        function catCount(){
          return catsSpottedCounter;
        }
    
        function dogCount(){
          return dogsSpottedCounter;
        }
    
        return {
          pearsEaten,
          catCount,
          dogSpotted,
          dogCount
        }
    
    }
    



    // this is scoped inside the ShoppingBasket function
//     var fruitsBought = {};

//     var eatFruit = function(fruitName){
//         if (fruitsBought[fruitName] === undefined){
//             fruitsBought[fruitName] = 0;
//         }
//         fruitsBought[fruitName] += 1;
//     };
//     var pears = function(fruitName){
//         var iCountPears=3;
//     if(fruitsBought[fruitName]==="pear"){
//         iCountPears++}
// else{iCountPears=iCountPears}
// return iCountPears
//  }

// var apples=function(fruitName){
// var iCountApples=3;
//     if(fruitsBought[fruitName]==="apple"){
//         iCountApples++}
// else{iCountApples=iCountApples}
 
//     return iCountApples
// }
//     return {
//         eat : eatFruit,
    
        
//         pearsEaten :pears,
//         applesEaten:apples
//     }
// }
