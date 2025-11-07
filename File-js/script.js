 function validateForm() {
            const true_value = document.getElementById("nom");
            const true_second_value = document.getElementById("Prenom");
            const true_tri_value = document.getElementById("qualite");
            const true_four_value = document.getElementById("telephone");
            const true_fiv_value = document.getElementById("quantite");
            const true_six_value = document.getElementById("email");
            if ((true_value.value.trim() === "") || (true_second_value.value.trim() === "")
            || (true_tri_value.value.trim() === "") || (true_four_value.value.trim() === "")
            || (true_five_value.trim() === "")  || (true_six_value.trim() === "")) {
                alert("Veillez mettre des entrées valides et correctes.");
                true_value.focus();
                return false;
            }
            return true;
        }