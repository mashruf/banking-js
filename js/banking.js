function setDepositOrWithdrawAndTotalAmount(inputDepositOrWithdrawAmount, previousAmount, previousTotalAmount, isAdd) {
    //get input value from the input field
    const getDepositOrWithdrawAmount = document.getElementById(inputDepositOrWithdrawAmount);
    //converting input field value into float
    const depositOrWithdrawAmount = parseFloat(getDepositOrWithdrawAmount.value);

    //get previous deposit or withdraw amount from the display section
    const getPreviousDepositOrWithdrawAmount = document.getElementById(previousAmount);
    //converting previous deposit or withdraw text amount into float
    const previousDepositOrWithdrawAmount = parseFloat(getPreviousDepositOrWithdrawAmount.innerHTML);

    // get previous total amount from display section
    const getPreviousTotalAmount = document.getElementById(previousTotalAmount);
    //converting previous total text amount into float
    const totalAmount = parseFloat(getPreviousTotalAmount.innerText);

    //setting total deposit or withdraw amount and total ammount
    if (isAdd == true) {
        if (depositOrWithdrawAmount > 0) {
            getPreviousDepositOrWithdrawAmount.innerText = depositOrWithdrawAmount + previousDepositOrWithdrawAmount;
            getPreviousTotalAmount.innerText = totalAmount + depositOrWithdrawAmount;
        }
        else {
            alert('Invalid amount')
        }
    }
    else if (isAdd == false) {
        if (depositOrWithdrawAmount > 0 && depositOrWithdrawAmount < totalAmount) {
            getPreviousDepositOrWithdrawAmount.innerText = depositOrWithdrawAmount + previousDepositOrWithdrawAmount;
            getPreviousTotalAmount.innerText = totalAmount - depositOrWithdrawAmount;
        }
        else {
            alert('Invalid amount')
        }
    }



    //clear the input field
    getDepositOrWithdrawAmount.value = '';
}
//deposit button handler
document.getElementById('deposit-button').addEventListener('click', function () {
    setDepositOrWithdrawAndTotalAmount('deposit-input', 'deposit-amount', 'total-amount', true);
});

//withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    setDepositOrWithdrawAndTotalAmount('withdraw-input', 'withdraw-amount', 'total-amount', false);
});