function validateSignup() {
  const input = document.getElementById("emailOrPhone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(input) && !phoneRegex.test(input)) {
    alert("Please enter a valid email or phone number.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // ✅ Everything is valid, now redirect manually
  window.location.href = "signup-success.html";
  return false; // prevent default form submission
}


function validateLogin() {
  const input = document.getElementById("loginInput").value.trim();
  const password = document.getElementById("loginPassword").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(input) && !phoneRegex.test(input)) {
    alert("❌ Please enter a valid Email or Phone Number.");
    return false;
  }

  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters.");
    return false;
  }

  // ✅ If validation passes, redirect to main page
  // Delay redirect slightly to allow any animations or UX changes
  setTimeout(() => {
    window.location.href = "mainpage.html";
  }, 200); // 200ms delay

  return false; // prevent form submission so JS can handle it
}


function validateResetPassword() {
  const emailOrPhone = document.getElementById('resetEmail').value.trim();
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  if (!emailPattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
    alert("Please enter a valid Email or Phone number.");
    return false;
  }

  if (newPassword.length < 6) {
    alert("Password should be at least 6 characters.");
    return false;
  }

  if (newPassword !== confirmNewPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Password reset successfully!");
  return true;
}

