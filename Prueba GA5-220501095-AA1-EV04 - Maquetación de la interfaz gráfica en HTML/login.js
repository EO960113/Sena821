document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Captura los datos ingresados por el usuario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtiene los datos guardados en LocalStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Verifica si los datos ingresados coinciden con los guardados
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + storedUserData.username + "!");
        window.location.href = "dashboard.html"; // Redirige al Dashboard
    } else {
        alert("Correo electrónico o contraseña incorrectos. Por favor, verifica tus datos.");
    }
});
