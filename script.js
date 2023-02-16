// selection 
// iphone selection
const iphoneMinusBtn = document.getElementById('iphone-minus-btn');
const iphoneInput = document.getElementById('iphone-input');
const iphonePlusBtn = document.getElementById('iphone-plus-btn');
// case selection
const caseMinusBtn = document.getElementById('case-minus-btn');
const caseInput = document.getElementById('case-input');
const casePlusBtn = document.getElementById('case-plus-btn');

function crease(isIncrease) {
    const inputStringValue = iphoneInput.value;
    const inputParseIntValue = parseInt(inputStringValue);
    let newInputValue;
    if (isIncrease === true) {
        newInputValue = inputParseIntValue + 1;
    }
    else{
        newInputValue = inputParseIntValue - 1;
        if(newInputValue <= 0){
            return alert('you cant do that')
        }
    }
    iphoneInput.value = newInputValue;

    return newInputValue;
}


// increse
iphonePlusBtn.addEventListener('click', function(){
    const newInputValue = crease(true)
    console.log(newInputValue);
});
// decrease
iphoneMinusBtn.addEventListener('click', function(){
    const newInputValue = crease(false)
    console.log(newInputValue);
});

