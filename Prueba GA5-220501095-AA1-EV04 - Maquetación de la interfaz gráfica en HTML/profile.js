// Obtener los elementos del formulario
const profileForm = document.getElementById("profileForm");

// Al cargar la página, rellenar el formulario con los datos guardados
window.onload = function () {
    const storedUserProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (storedUserProfile) {
        document.getElementById("firstName").value = storedUserProfile.firstName || "";
        document.getElementById("secondName").value = storedUserProfile.secondName || "";
        document.getElementById("lastName").value = storedUserProfile.lastName || "";
        document.getElementById("secondLastName").value = storedUserProfile.secondLastName || "";
        document.getElementById("document").value = storedUserProfile.document || "";
        document.getElementById("birthDate").value = storedUserProfile.birthDate || "";
        document.getElementById("email").value = storedUserProfile.email || "";
        document.getElementById("phone").value = storedUserProfile.phone || "";
        document.getElementById("hireDate").value = storedUserProfile.hireDate || "";
        document.getElementById("position").value = storedUserProfile.position || "";
        document.getElementById("area").value = storedUserProfile.area || "";
    }
};

// Guardar los datos ingresados por el usuario en LocalStorage
profileForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el envío del formulario

    // Crear un objeto con los datos del formulario
    const userProfile = {
        firstName: document.getElementById("firstName").value,
        secondName: document.getElementById("secondName").value,
        lastName: document.getElementById("lastName").value,
        secondLastName: document.getElementById("secondLastName").value,
        document: document.getElementById("document").value,
        birthDate: document.getElementById("birthDate").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        hireDate: document.getElementById("hireDate").value,
        position: document.getElementById("position").value,
        area: document.getElementById("area").value,
    };

    // Guardar el objeto en LocalStorage
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    alert("¡Datos guardados correctamente!");
});
