document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validar que las  contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
        return;
    }

    // Crear un objeto con los datos del usuario
    const userData = {
        username: username,
        email: email,
        password: password,
    };

    // Guardar los datos en LocalStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registro exitoso. ¡Ahora puedes iniciar sesión!");

    // Redireccionar al inicio de sesión
    window.location.href = "index.html";
});
