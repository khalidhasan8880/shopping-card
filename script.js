// selection 
// iphone selection
const iphoneMinusBtn = document.getElementById('iphone-minus-btn');
const iphoneInput = document.getElementById('iphone-input');
const iphonePlusBtn = document.getElementById('iphone-plus-btn');
// case selection
const caseMinusBtn = document.getElementById('case-minus-btn');
const caseInput = document.getElementById('case-input');
const casePlusBtn = document.getElementById('case-plus-btn');

// iphone section event handler
// increase 
iphonePlusBtn.addEventListener('click', function(){
    const inputStringValue = iphoneInput.value;
    let inputParseIntValue = parseInt(inputStringValue);
    
    let increase = inputParseIntValue + 1;
    iphoneInput.value = increase;
});
// decrease
iphoneMinusBtn.addEventListener('click', function(){
    const inputStringValue = iphoneInput.value;
    let inputParseIntValue = parseInt(inputStringValue);
    if(inputParseIntValue <= 0){
        return  alert('you Cant do that')
    }
    let increase = inputParseIntValue -1;
    iphoneInput.value = increase;
});

