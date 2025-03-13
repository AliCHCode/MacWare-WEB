// Tarayıcı dilini algıla
const kullaniciDili = navigator.language || navigator.userLanguage; 

// Eğer dil Türkçe ise, TR-index.html sayfasına yönlendir
if (kullaniciDili.startsWith("tr")) {
    window.location.href = "TR-index.html";
} else {
    window.location.href = "index.html";
}