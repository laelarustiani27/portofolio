document.addEventListener('mousemove', (e) => {  
    const cardRect = card.getBoundingClientRect();  
    const x = e.clientX - cardRect.left;  
    const y = e.clientY - cardRect.top;  

    const xRotation = ((y / cardRect.height) - 0.5) * 20; // rotasi berdasarkan posisi vertikal  
    const yRotation = ((x / cardRect.width) - 0.5) * -20; // rotasi berdasarkan posisi horizontal  

    card.style.transform = `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;  
});  

card.addEventListener('mouseleave', () => {  
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';  
});