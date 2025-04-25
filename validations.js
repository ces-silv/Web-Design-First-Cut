document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.forms');

    // Popup Error
    const errorPopup = document.createElement("div");
    errorPopup.id = "popup-error";
    errorPopup.style.position = "fixed";
    errorPopup.style.top = "20px";
    errorPopup.style.left = "50%";
    errorPopup.style.transform = "translateX(-50%)";
    errorPopup.style.backgroundColor = "#f44336";
    errorPopup.style.color = "white";
    errorPopup.style.padding = "15px 25px";
    errorPopup.style.borderRadius = "8px";
    errorPopup.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
    errorPopup.style.fontFamily = "Arial, sans-serif";
    errorPopup.style.fontSize = "16px";
    errorPopup.style.display = "none";
    errorPopup.style.zIndex = "9999";
    errorPopup.style.transition = "opacity 0.5s ease";
    document.body.appendChild(errorPopup);

    // Popup Exitoso
    const successPopup = document.createElement("div");
    successPopup.id = "popup-success";
    successPopup.style.position = "fixed";
    successPopup.style.top = "20px";
    successPopup.style.left = "50%";
    successPopup.style.transform = "translateX(-50%)";
    successPopup.style.backgroundColor = "#4CAF50"; // Es practicamente igual solo que verde xd 
    successPopup.style.color = "white";
    successPopup.style.padding = "15px 25px";
    successPopup.style.borderRadius = "8px";
    successPopup.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
    successPopup.style.fontFamily = "Arial, sans-serif";
    successPopup.style.fontSize = "16px";
    successPopup.style.display = "none";
    successPopup.style.zIndex = "9999";
    successPopup.style.transition = "opacity 0.5s ease";
    document.body.appendChild(successPopup);

    function showPopup(element, message) {
        element.textContent = message;
        element.style.opacity = "1";
        element.style.display = "block";

        setTimeout(() => {
            element.style.opacity = "0";
            setTimeout(() => {
                element.style.display = "none";
            }, 500);
        }, 3000);
    }

    form.addEventListener('submit', function(event) {
        let valid = true;
        let firstInvalidField = null;

        const nombre = document.getElementById('nombre').value;
        if (!nombre.trim()) {
            valid = false;
            firstInvalidField = firstInvalidField || document.getElementById('nombre');
        }

        const correo = document.getElementById('correo').value;
        if (!correo.trim()) {
            valid = false;
            firstInvalidField = firstInvalidField || document.getElementById('correo');
        }

        const carrera = document.getElementById('carrera').value;
        if (!carrera) {
            showPopup(errorPopup, 'Debe seleccionar una carrera');
            valid = false;
            firstInvalidField = firstInvalidField || document.getElementById('carrera');
        }

        const intereses = document.querySelectorAll('input[name="intereses[]"]:checked');
        if (intereses.length === 0) {
            showPopup(errorPopup, 'Debe seleccionar al menos un evento de interés');
            valid = false;
            firstInvalidField = firstInvalidField || document.querySelector('input[name="intereses[]"]');
        }

        if (!valid) {
            event.preventDefault();
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        } else {
            event.preventDefault();
            showPopup(successPopup, '¡Registro completado!');

            setTimeout(() => {
                form.reset();
            }, 500);
        }
    });
});