'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function getTravelTime(firstStop, lastStop, point, time, walkingSpeed, busStop, busSpeed, busTimeInterval){
    let reachingTimeToStop, waitingTimeForBus, travelTimeInBus, totalTime, busTravelTimeToPoint;
    busTravelTimeToPoint = parseFloat((nearestBusStop -  firstStop)/busSpeed);
    if(busStop > point){
        reachingTimeToStop = parseFloat((busStop-point)/walkingSpeed);
    }else{
        reachingTimeToStop = parseFloat((point-busStop)/walkingSpeed);
    }
    time = time+reachingTimeToStop;
    waitingTimeForBus = Math.ceiling((time-busTravelTimeToPoint)/busTimeInterval)-time;
    travelTimeInBus = parseFloat((lastStop - busStop)/busSpeed);
    totalTime = reachingTimeToStop + waitingTimeForBus + travelTimeInBus;
    return totalTime;

}
// Complete the minimumTimeToEnd function below.
function minimumTimeToEnd(busStops, busTimeInterval, busSpeed, numPpl) {
    let numBusStops = busStops.length;
    let totalDistance = busStops[numBusStops-1];
    let pplDesc = [], i=0, j=0, point, time, walkingSpeed;
    let walkingTimeTaken, totalWalkingTimeTaken;
    let nearestBusStop, totalTime,previousStop;
    let nearestStopTotalTime, previousStopTotalTime
    for (i=0;i<numPpl;i++){
        pplDesc[i] = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));
        point = pplDesc[i][0];
        time = pplDesc[i][1];
        walkingSpeed = pplDesc[i][2];
        walkingTimeTaken = parseFloat((totalDistance-point)/walkingSpeed );
        totalWalkingTimeTaken = walkingTimeTaken+time;
        if(walkingSpeed>busSpeed){
            console.log(Number(totalWalkingTimeTaken).toFixed(10));
        }else{
            for(j=0;j<busStops.length;j++){
                if(busStops[j]>=point){
                    nearestBusStop = busStops[j];
                    previousStop=busStops[j-1];
                    break;
                }
            }
            nearestStopTotalTime = getTravelTime(firstStop, lastStop, point, time, walkingSpeed, nearestBusStop, busSpeed, busTimeInterval);
            previousStopTotalTime = getTravelTime(busTravelTimeToPoint, point, time, walkingSpeed, nearestBusStop, busSpeed, busTimeInterval);
            totalTime = Math.min(nearestStopTotalTime,previousStopTotalTime,totalWalkingTimeTaken);
            console.log(Number(totalTime).toFixed(10));
        }
        
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const x = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));

    const wv = readLine().split(' ');

    const w = parseInt(wv[0], 10);

    const v = parseInt(wv[1], 10);

    const q = parseInt(readLine(), 10);

    minimumTimeToEnd(x, w, v, q);
}
