// get a reference to the sms or call radio buttons
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
}
//get a reference to the add button
    function calculateBtnClicked(){
        // logic goes here
    }
//create a variable that will keep track of the total bill
    var totalCost = callsTotal + smsTotal;
//add an event listener for when the add button is pressed
    calculateBtn.addEventListener('click', calculateBtnClicked);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
