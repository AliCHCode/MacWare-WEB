
    console.log("contact.js activated");

    const dil = document.documentElement.lang;

    function harfKontrol(event) {
        const girilenDeger = event.target.value;
        const rakamKontrol = /[^a-zA-Z ]/g; // Sadece harfler dışındaki karakterleri kontrol et
        
        // Eğer rakam varsa alert göster
        if (rakamKontrol.test(girilenDeger)) {
            if(dil === "tr"){
                alert("İsim kısmında rakam veya işaret kullanmayınız.");
            }
            else{
                alert("Please do not use numbers or special characters in the name field.");
            }
          // Girilen değerden rakamları temizle
          const sonDeger = girilenDeger.replace(rakamKontrol, '');
          event.target.value = sonDeger;
        }
      }

      function telefonKontrol(event) {
        const girilenDeger = event.target.value;
        const harfKontrol = /[^0-9]/g; // Sadece rakam dışındaki karakterleri kontrol et
        
        // Eğer harf veya özel karakter varsa alert göster
        if (harfKontrol.test(girilenDeger)) {
            if(dil === "tr"){
                alert("Telefon numaranızı başında 0 olmadan, boşluk bırakmadan ve harf kullanmadan giriniz.");
            }
            else{
                alert("Please enter your phone number without a leading 0, no spaces, and no letters.");
            }
          // Girilen değerden harfleri ve diğer özel karakterleri temizle
          const sonDeger = girilenDeger.replace(harfKontrol, '');
          event.target.value = sonDeger;
        }
      }

    function sendMail() {
        // Form verilerini al
        let informations = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Boş alanları kontrol et
        if (!informations.name || !informations.phone || !informations.email) {
            if(dil === "tr"){
                alert("Lütfen tüm alanları doldurduğunuzdan emin olun.");
            }
            else{
                alert("Please make sure all fields are filled out.");
            }
            return false; // Eğer herhangi bir alan boşsa, mail gönderilmez
        }

        // Telefon numarasını kontrol et (sadece rakam)
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(informations.phone)) {
            if(dil === "tr"){
                alert("Telefon numaranızı başında 0 olmadan, boşluk bırakmadan ve harf kullanmadan giriniz.");
            }
            else{
                alert("Please enter your phone number without a leading 0, no spaces, and no letters.");
            }
            return false; // Eğer telefon numarası geçerli değilse, mail gönderilmez
        }

        

        // E-posta adresini kontrol et (sadece @gmail.com ile bitmeli)
        let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(informations.email)) {
            if(dil === "tr"){
                alert("E-posta adresi geçerli değil, lütfen @gmail.com ile biten bir e-posta girin.");
            }
            else{
                alert("The email address is invalid, please enter an email ending with @gmail.com.");
            }
            return false; // Eğer e-posta adresi geçerli değilse, mail gönderilmez
        }
        
        // E-posta gönderme işlemi
        emailjs.send("service_d9qigbk", "template_lsr5m4i", informations)
            .then(function(response) {
                if(dil === "tr"){
                    alert("Bilgileriniz başarıyla gönderildi!");
                }
                else{
                    alert("Your information has been successfully sent!");
                }
                console.log("Başarı ile gönderildi:", response);
            })
            .catch(function(error) {
                if(dil === "tr"){
                    alert("Bir hata oluştu, lütfen tekrar deneyin.");
                }
                else{
                    alert("An error occurred, please try again.");
                }
                console.log("Hata:", error);
            });

        console.log("Başarı ile çağırdın");
        return false; // Sayfanın yenilenmesini engelle
    }