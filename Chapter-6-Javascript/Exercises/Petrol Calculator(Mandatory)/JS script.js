function calculateTotal() {
    // Get the values from input fields
    const petrolCost = parseFloat(document.getElementById('petrol-cost').value); // Retrieve the petrol cost per liter entered by the user and convert it to a floating-point number
    const liters = parseFloat(document.getElementById('liters').value); // Retrieve the number of liters purchased entered by the user and convert it to a floating-point number

    // Calculate the total cost
    const totalCost = petrolCost * liters; // Multiply the petrol cost per liter by the number of liters purchased to get the total cost

    // Display the total cost
    document.getElementById('total-cost').textContent = `Total Cost: AED${totalCost.toFixed(2)}`; // Update the content of the HTML element with the id "total-cost" to display the total cost, formatted as AED with two decimal places
}
