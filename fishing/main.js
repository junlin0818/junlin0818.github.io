function passwordChangeType() {
    const passwordInput = document.getElementsByName("password")[0];
    const eyeIcon = document.getElementById("eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.textContent = "visibility";
    } else {
        passwordInput.type = "password";
        eyeIcon.textContent = "visibility_off";
    }
}