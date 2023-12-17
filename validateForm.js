function validateForm() {
    // Validate Name
    var nameInput = document.getElementById('name');
    if (!/^[A-Z][a-z]*$/.test(nameInput.value)) {
        alert('Please enter a name starting with a capital letter.');
        return false;
    }

    // Validate Email
    var emailInput = document.getElementById('email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate Phone Number
    var phoneInput = document.getElementById('phone');
    if (!/^\d{8}$/.test(phoneInput.value)) {
        alert('Please enter a valid phone number with exactly 8 digits.');
        return false;
    }

    return true;
}
