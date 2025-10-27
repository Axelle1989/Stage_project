 function validateForm() {
            const true_value = document.getElementById("nom");
            const true_second_value = document.getElementById("prenom");
            const true_tri_value = document.getElementById("age");
            const true_four_value = document.getElementById("email");
            if ((true_value.value.trim() === "") || (true_second_value.value.trim() === "")
            || (true_tri_value.value.trim() === "") || (true_four_value.value.trim() === "")){
                alert("Veillez mettre des entrées valides et correctes.");
                true_value.focus();
                return false;
            }
            return true;
        }