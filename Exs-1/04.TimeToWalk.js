function solve(steps, length, speed){
    let distance = (steps * length) / 1000 ;
    let timeForBreak = (Math.floor(steps * length / 500)) * 60; 
    let time = (distance / speed) * 3600;
    let totalTime = timeForBreak + time;
    let seconds = Math.ceil(totalTime % 60);
    let minutes = Math.ceil(((totalTime - seconds) / 60) % 60);
    let hours = Math.ceil((totalTime - minutes * 60 - seconds));
  
    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
}

solve(2564, 0.70, 5.5)
solve(1,2,3)