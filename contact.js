
    console.log("contact.js activated")

    function sendMail(){
        let informations = {
            name : document.getElementById("name").value,
            phone : document.getElementById("phone").value,
            email : document.getElementById("email").value,
        }
        emailjs.send("service_d9qigbk","template_lsr5m4i",informations).then(alert("Your İnformation has been sent successfully!"))
        console.log("başarı ile çağırdın")
    }
