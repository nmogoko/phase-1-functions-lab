const destination = 42;
const feet = 264;


function distanceFromHqInBlocks(start){
  if (start < destination) {
return destination - start 
  } else 
  {
    return start - destination 
  }
 }
console.log(distanceFromHqInBlocks(60));

 function distanceFromHqInFeet(start){
     return distanceFromHqInBlocks(start) * feet 
 }
console.log(distanceFromHqInFeet(60));

  //returns the number of feet traveled
function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
return (destination -start) * feet;
    } else {  
      return (start - destination) * feet;
    }
}

//returns the fare for the customer
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance < 400 ) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
      return ((distance - 400) * 2)/ 100;
  } else if (distance >  2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}