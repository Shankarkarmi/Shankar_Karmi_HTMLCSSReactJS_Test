document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const password = document.getElementById("password").value;

    // Simple validation
    if (!firstName || !lastName || !email || !phoneNumber || password.length < 8) {
        alert("Please fill in all fields with valid information.");
        return;
    }

    // Log data as an object
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password
    };

    console.log(formData);
    alert("Form submitted successfully!");
});
