// Get the form and form control elements
var tipCalculatorForm = document.getElementById("tipCalculator");
var billTotalInput = document.getElementById("billTotal");
var tipRangeInput = document.getElementById("tip");
var tipPercentageInput = document.getElementById("tipPercentage");
var tipAmountInput = document.getElementById("tipAmount");
var totalBillInput = document.getElementById("totalBill");

// Add an event listener to the form to calculate and update values
tipCalculatorForm.addEventListener("input", function () {
    // Validate if the bill total is a number
    if (isNaN(billTotalInput.value)) {
        alert("Please enter a valid number for the Bill Total.");
        billTotalInput.value = "";
        return;
    }

    // Get the bill total and tip percentage values
    var billTotal = parseFloat(billTotalInput.value);
    var tipPercentage = parseFloat(tipRangeInput.value);

    // Calculate the tip amount and total bill with tip
    var tipAmount = (billTotal * tipPercentage) / 100;
    var totalBill = billTotal + tipAmount;

    // Update the disabled input fields with the calculated values
    tipPercentageInput.value = tipPercentage.toFixed(2) + "%";
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillInput.value = totalBill.toFixed(2);
});
