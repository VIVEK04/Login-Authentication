document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register").style.display = "block";
});

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("registerMessage").textContent = "Registration successful! You can now log in.";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "block";
    } else {
        document.getElementById("registerMessage").textContent = "Please enter a username and password.";
    }
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {

        window.location.href = "page.html";
        
    } 
    
    else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
    }
}




