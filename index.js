// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(street) {
    const scuberStreet = 42;
    return Math.abs(street - scuberStreet);
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

// Returns the number of feet from Scuber's headquarters to the pickup location. 
// Use your distanceFromHqInBlocks function to help return the correct value here.
function distanceFromHqInFeet(street) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(street) * feetPerBlock;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

// Calculates the number of feet a passenger travels given a starting block and an ending block — 
// it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
}
console.log(distanceTravelledInFeet(34, 38));

// Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. 
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
// Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — t
// he function returns 'cannot travel that far' if a ride over 2500 feet is requested.
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 38));