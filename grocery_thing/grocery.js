let amt1;
let amt2;
let amt3;
let amt4;

function calcTotalGrocery() {
    amt1 = parseFloat(document.getElementById('groceryAmt1').value);
    amt2 = parseFloat(document.getElementById('groceryAmt2').value);
    amt3 = parseFloat(document.getElementById('groceryAmt3').value);
    amt4 = parseFloat(document.getElementById('groceryAmt4').value);

    let totalAmt = amt1 + amt2 + amt3 + amt4;

    document.getElementById('result').innerHTML = `The total grocery amount is: $ ${totalAmt}`;
}
