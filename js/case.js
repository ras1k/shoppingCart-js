function updateNumber(icIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previouCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;

    if (icIncrease === true){
        newCaseNumber = previouCaseNumber + 1;
    } else {
        newCaseNumber = previouCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice (newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateNumber(true);
    // console.log(newCaseNumber);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});    

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
})