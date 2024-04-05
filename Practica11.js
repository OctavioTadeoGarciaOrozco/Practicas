function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hoursFace').innerText = hours;
    document.getElementById('minuteFace').innerText = minutes;
    document.getElementById('secondFace').innerText = seconds;
    
   
    const hoursRotation = (hours % 12) * 30;
    const minutesRotation = minutes * 6;
    const secondsRotation = seconds * 6;

  
    const cube = document.getElementById('cube');
    cube.style.transform = `rotateX(${360 - hoursRotation}deg) rotateY(${360 - minutesRotation}deg) rotateZ(${360 - secondsRotation}deg)`;
}


setInterval(updateClock, 1000);


updateClock();