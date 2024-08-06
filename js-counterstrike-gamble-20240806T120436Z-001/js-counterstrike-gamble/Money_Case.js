
function processForm() {
    var moneyInput = document.getElementById("moneyInput").value * 100;
    var casePrice = document.getElementById("casePrice").value * 100;
    const keyPrice = 270;
    
    function caseCalc(moneyInput, keyPrice, casePrice) {
        return moneyInput / (keyPrice + casePrice);
    }
    
    if (caseCalc(moneyInput, keyPrice, casePrice) < 1) {
        document.write("Yo broke ass can't even buy a case and a key lmaoooooo   ");
    } else {
        document.write("You can waste your hard earned money on opening " + Math.trunc(caseCalc(moneyInput, keyPrice, casePrice)) + " cases... Yay...   ")
    }
    
    const resetButton = document.createElement('button');
    resetButton.textContent = "Go again... (please stop wasting your money on counter strike)";
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        location.reload();
    })

    console.log(casePrice);
    console.log(keyPrice);
    console.log(keyPrice + casePrice);
    console.log(caseCalc(moneyInput, keyPrice, casePrice));

    return false;
}