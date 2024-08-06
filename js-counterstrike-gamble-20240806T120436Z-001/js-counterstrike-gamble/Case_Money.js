
function processForm() {
    var caseNum = document.getElementById('caseNum').value * 100;
    var casePrice = document.getElementById('casePrice').value * 100;
    const keyPrice = 270
    let caseMath = casePrice + keyPrice;

    function caseCalc(caseNum, caseMath) {
        let finalMath = caseNum * caseMath;
        return finalMath / 10000;
    }

    document.write((caseNum / 100) + ' cases will cost you $' + caseCalc(caseNum, caseMath).toFixed(2) + '    ');

    const resetButton = document.createElement('button');
    resetButton.textContent = "Go again... (please stop wasting your money on counter strike)";
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        location.reload();
    })


    console.log(caseNum);
    console.log(caseMath);
    console.log(caseCalc(caseNum, caseMath));

    return false;
}