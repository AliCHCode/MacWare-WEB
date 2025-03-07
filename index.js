document.addEventListener('DOMContentLoaded', () => {
    console.log('deneme');

    let indexElements = document.querySelectorAll('.serviceContentİndex');
    let detailBoxElements = document.querySelectorAll('.servicesDetailBox');
    let detailArrowElements = document.querySelectorAll('.servicesDetailArrow');

    detailBoxElements.forEach((detailBox, i) => {
        detailBox.addEventListener('click', () => {

            indexElements.forEach((index, j) => {
                if (i !== j) { // Eğer şu an tıklanan öğe değilse
                    index.classList.remove("listed");
                    detailArrowElements[j].classList.remove("listedArrow");
                }
            });

            // Şu an tıklanan öğe için açma/kapama işlemi
            let index = indexElements[i];
            let detailArrow = detailArrowElements[i];

            if(index.classList.contains("listed")) {
                index.classList.remove("listed");
                detailArrow.classList.remove("listedArrow");
            } 
            else{
                index.classList.add("listed");
                detailArrow.classList.add("listedArrow");
            }
        });
    });
});
