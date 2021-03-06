// get a reference to the sms or call radio buttons
        var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
        if (checkedRadioBtn){
            var billItemType = checkedRadioBtn.value
            // billItemType will be 'call' or 'sms'

// get references to all the settings fields
const billStringElement = document.querySelector(".billString");
// do this for all the DOM elements

//get a reference to the add button
    
//get a reference to the 'Update settings' button
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "bill"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
}
// create a variables that will keep track of all the settings
callsTotalElem.innerHTML = callsTotal.toFixed(2);
smsTotalElem.innerHTML = smsTotal.toFixed(2);
var totalCost = callsTotal + smsTotal;
totalCostElem.innerHTML = totalCost.toFixed(2);
}
// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed
    calculateBtn.addEventListener('click', calculateBtnClicked);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
