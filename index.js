//  Code your solution in this file!
// Using the comparison operators so that if the distance from Hq is greater, 
// we subtract hq distance from it to  get a positive distance value,
// Otherwise if distanc is less, we subtract the distance from the hq distance to get a positive value
function distanceFromHqInBlocks(block){
     let result = (block > 42)? block - 42: (42-block);
     return result;
}
(distanceFromHqInBlocks(43))

// calling the distanceFromHqBocks within the distanceFromHqInFeet
 function distanceFromHqInFeet(block){
     let feet = distanceFromHqInBlocks(block) * 264
   return feet
 }

distanceFromHqInFeet(43);

 //returns the number of feet traveled
 let distanceTravelled;
 function distanceTravelledInFeet(start, destination){
     if (start > destination){
         return(start - destination) * 264;
     } else
 {
     return(destination - start) * 264 ;
 }
 
}
distanceTravelledInFeet(43, 48);

  //returns the fare for the customer
 function calculatesFarePrice(start, destination) {
   distanceTravelledInFeet(start, destination)
   if (distanceTravelledInFeet(start, destination) <= 400){
          return(0) 
   } else if (distanceTravelledInFeet(start, destination) >400 && distanceTravelledInFeet(start, destination)<= 2000){
          return(2 * distanceTravelledInFeet(start, destination))
    } else if (distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination)<= 2500){
          return(25)
    } else {
          return(`cannot travel that far`);
    }
 }
 calculatesFarePrice(43, 44);