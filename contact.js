
    console.log("contact.js activated")

    function sendMail(){
        let informations = {
            name : document.getElementById("name").value,
            phone : document.getElementById("phone").value,
            email : document.getElementById("email").value,
        }
        emailjs.send("service_8vgxzua","template_k3m3zdn",informations).then(alert("Your İnformation has been sent successfully!"))
        console.log("başarı ile çağırdın")
    }
