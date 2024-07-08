function submitRegisterForm() {
    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Vérifier si les champs ne sont pas vides
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' ) {
        seeMessage("Veuillez remplir tous les champs.", true, false);
        return;
    }
    // Vérifier si email est une adresse email valide
    if (!isValidEmail(email)) {
        seeMessage("Veuillez saisir une adresse email valide.", true, false);
        return;
    }
    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
        seeMessage("Les mots de passe ne correspondent pas.", true, false);
        return;
    }

    // Afficher les valeurs dans la console
    sendRegistrationData(name, email, password, );
}

function sendRegistrationData(name, email, password) {
    var elt_div = document.createElement("div");
    elt_div.innerHTML = `
        <div class="spinner loaders h-100 w-100 position-absolute bg-dark text-white d-flex align-items-center justify-content-center" style="top: 0; left: 0; z-index: 5; opacity: 0.5;">
            <div class="spinner-border" style="width: 100px; height: 100px;"></div>
        </div>
    `;

    // Afficher le spinner avec SweetAlert2
    Swal.fire({
        title: "",
        html: elt_div,
        showConfirmButton: false
    });

    // Créer un objet contenant les données à envoyer
    const value = {
        jsonrpc: "2.0",
        params: {
            name: name,
            email: email,
            password: password
        },
    };

    // Envoyer la requête AJAX
    $.ajax({
        url: "/create_user",
        data: JSON.stringify(value),
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.result.status === "error") {
                // Afficher le modal avec les résultats
                seeMessage(data.result.message, true);
            } else if (data.result.status === "success") {
                seeMessage(data.result.message, false, false);
                setTimeout(function() {
                    window.location.href = "/web/login";
                }, 3000);
            } else if (data.result.status === undefined) {
                seeMessage("Quelque chose s'est mal passé. Veuillez réessayer plus tard.", true);
            } else {
                seeMessage("Statut inconnu : " + data.result.status, true);
            }

            // Fermer le spinner SweetAlert2
            Swal.close();
        },
        error: function (error) {
            console.error("Erreur lors de la requête :", error);
            // Fermer le spinner SweetAlert2 en cas d'erreur
            Swal.close();
            seeMessage("Quelque chose s'est mal passé. Veuillez réessayer plus tard.", true, false);
        },
    });
}

function isValidEmail(email) {
    // Expression régulière pour vérifier le format de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function seeMessage(message, isError = true, reloadPage = true) {
    var messageClass = isError ? 'text-danger' : 'text-dark';
    $("#errorMessageContent").html(`<h2 class='text-center ${messageClass} py-5'>${message}</h2>`);
    $('#errorMessageModal').modal('show');
    if (reloadPage) {
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
}
