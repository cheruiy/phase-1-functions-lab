// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // Each block is 264 feet long
  }

  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264; // Each block is 264 feet long
    return distance;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    
    if (distance <= 400) {
      fare = 0; // First 400 feet are free
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance <= 2500) {
      fare = 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
    
    return fare;
  }
  