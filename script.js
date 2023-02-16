// selection 

const iphoneMinusBtn = document.getElementById('iphone-minus-btn');
const iphoneInput = document.getElementById('iphone-input');
const iphonePlusBtn = document.getElementById('iphone-plus-btn');
// case selection
const caseMinusBtn = document.getElementById('case-minus-btn');
const caseInput = document.getElementById('case-input');
const casePlusBtn = document.getElementById('case-plus-btn');
// displayer 
const iphoneTotalPrice = document.getElementById('iphone-total-price');
const caseTotalPrice = document.getElementById('case-total-price');

// this function will return total price for any quantity
function crease(isIncrease, input) {
    console.log(input.value);
    const inputStringValue = input.value;
    const inputParseIntValue = parseInt(inputStringValue);
    let newInputValue;
    if (isIncrease === true) {
        newInputValue = inputParseIntValue + 1;
    }
    else{
        newInputValue = inputParseIntValue - 1;
        if(newInputValue <= 0){
            return alert(`you can't do that`)
        }
    }
    return newInputValue;
}

// multiply and display total price 
function getPhoneTotalPirce(newInputValue, elementId) {
    const totalPirce =  1219 * newInputValue ;
    document.getElementById(elementId).innerText = totalPirce;
}
function getCaseTotalPirce(newInputValue, elementId) {
    const totalPirce =  59 * newInputValue ;
    document.getElementById(elementId).innerText = totalPirce;
}


// iphone increse
iphonePlusBtn.addEventListener('click', function(){
    const newInputValue = crease(true, iphoneInput);
    const totalPrice = getPhoneTotalPirce(newInputValue, 'iphone-total-price');
    iphoneInput.value = newInputValue;
    subTotal()
});
// iphone decrease
iphoneMinusBtn.addEventListener('click', function(){
    const newInputValue =  crease(false, iphoneInput);
    const totalPrice = getPhoneTotalPirce(newInputValue, 'iphone-total-price');
    iphoneInput.value = newInputValue;
    subTotal();
});



// case increse
casePlusBtn.addEventListener('click', function(){
    const newInputValue = crease(true, caseInput);
    const totalPrice = getCaseTotalPirce(newInputValue, 'case-total-price');
    caseInput.value = newInputValue;
    subTotal();
});
// case decrease
caseMinusBtn.addEventListener('click', function(){
    const newInputValue =  crease(false, caseInput);
    const totalPrice = getCaseTotalPirce(newInputValue, 'case-total-price');
    caseInput.value = newInputValue;
    subTotal();
});

function subTotal() {
    const caseTotal = parseFloat(caseTotalPrice.innerText );
    const iphoneTotal = parseFloat(iphoneTotalPrice.innerText);
    const subTotal = caseTotal + iphoneTotal;
    console.log(subTotal);
    document.getElementById('sub-total').innerText = subTotal;
    // tax
    const taxStringValue = document.getElementById('tax').innerText;
    const taxValue = parseFloat(taxStringValue)
    const tax = (taxValue * subTotal) / 100;
    
    const Total = subTotal + tax;
    document.getElementById('total').innerText = parseInt(Total);
    console.log(Total);
    
}







// // case increase 
// casePlusBtn.addEventListener('click',function(){
//     const newInputValue = crease(true);
    
// })
// // case decrease 
// caseMinusBtn.addEventListener('click',function(){
//     const newInputValue = crease(false);
// })

