function formatCounter(value) {
    return value.toLocaleString();
}
  
function updateCounterFormat() {
counterElement.textContent = formatCounter(counter);
}

setInterval(updateCounterFormat, 1000);

function updateIncrementButtonColor() { 
    if (counter < 0) { 
        incrementBtn.style.backgroundColor = "#FF0000"; 
    } else if (counter > 0) { 
        incrementBtn.style.backgroundColor = "#00FF00"; 
    } else { 
        incrementBtn.style.backgroundColor = "#FFFF00";
    } 
}

setInterval(updateIncrementButtonColor, 100);

function updateDecrementButtonColor() { 
    if (counter < 0) { 
        decrementBtn.style.backgroundColor = "#FF0000"; 
    } else if (counter > 0) { 
        decrementBtn.style.backgroundColor = "#00FF00"; 
    } else { 
        decrementBtn.style.backgroundColor = "#FFFF00";
    } 
}

setInterval(updateDecrementButtonColor, 100);