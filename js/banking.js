function setDepositOrWithdrawAndTotalAmount(inputDepositOrWithdrawAmount, previousAmount, previousTotalAmount) {
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

    //setting total deposit or withdraw amount
    getPreviousDepositOrWithdrawAmount.innerHTML = depositOrWithdrawAmount + previousDepositOrWithdrawAmount;

    //clear the input field
    getDepositOrWithdrawAmount.value = '';
}
//deposit button handler
document.getElementById('deposit-button').addEventListener('click', function () {
    setDepositOrWithdrawAndTotalAmount('deposit-input', 'deposit-amount', 'total-amount');
});

//withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    setDepositOrWithdrawAndTotalAmount('withdraw-input', 'withdraw-amount', 'total-amount');
});