// Tıklama ile açma kapama yapan metot.
function toggleShow(buttonId, divId) {
    const toggleButton = document.getElementById(buttonId);
    const toggleDiv = document.getElementById(divId);

    if (toggleButton && toggleDiv) {
        toggleButton.addEventListener('click', () => {
            if (toggleDiv.classList.contains('hidden')) {
                toggleDiv.classList.remove('hidden');
                toggleDiv.classList.add('block');
            } else {
                toggleDiv.classList.remove('block');
                toggleDiv.classList.add('hidden');
            }
        });
    }
}

// Sayfa yüklendiğinde fonksiyonları tetiklemek için
document.addEventListener('DOMContentLoaded', () => {
    toggleShow('dropdown-menu-toggle', 'language-dropdown-menu');
    toggleShow('dropdown-menu-toggle1', 'language-dropdown-menu1');



    const resourcesButton = document.getElementById('dropdown-menu-toggle');
    const resourcesDiv = document.getElementById('language-dropdown-menu');
    const resourcesButton1 = document.getElementById('dropdown-menu-toggle1');
    const resourcesDiv1 = document.getElementById('language-dropdown-menu1');

    if (resourcesButton && resourcesDiv) {

        document.addEventListener("click", (event) => {
            if (isClickOutside(event.target, resourcesDiv, resourcesButton)) {
                resourcesDiv.classList.add("hidden");
            }
        });
    }

    if (resourcesButton1 && resourcesDiv1) {

        document.addEventListener("click", (event) => {
            if (isClickOutside(event.target, resourcesDiv1, resourcesButton1)) {
                resourcesDiv1.classList.add("hidden");
            }
        });
    }








});


document.addEventListener("DOMContentLoaded", function () {
    // Her bir dil seçeneği için
    const languageOptions = document.querySelectorAll("#language-dropdown-menu a");

    // Her bir dil seçeneği için tıklama olayını ekle
    languageOptions.forEach(function (option) {
        option.addEventListener("click", function (event) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

            // Tıklanan dil seçeneğinin bayrağının URL'sini al
            const flagUrl = option.querySelector("img").getAttribute("src");

            // Input alanına bayrağın görüntüsünü ekle
            const inputImage = document.getElementById('img')
            inputImage.setAttribute("src", flagUrl);

            // İşlem tamamlandıktan sonra dropdown menüsünü gizle (isteğe bağlı)
            const dropdownMenu = document.querySelector("#language-dropdown-menu");
            dropdownMenu.classList.add("hidden");
        });
    });
});



// JavaScript kodu
document.addEventListener("DOMContentLoaded", function () {
    // Her bir dil seçeneği için
    const languageOptions = document.querySelectorAll("#language-dropdown-menu1 a");

    // Her bir dil seçeneği için tıklama olayını ekle
    languageOptions.forEach(function (option) {
        option.addEventListener("click", function (event) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

            // Tıklanan dil seçeneğinin bayrağının URL'sini al
            const flagUrl = option.querySelector("img").getAttribute("src");

            // Input alanına bayrağın görüntüsünü ekle
            const inputImage = document.querySelector(".inline-block input[type='text'] + .absolute.left-1.bottom-0.top-0.z-0 img");
            inputImage.setAttribute("src", flagUrl);

            // İşlem tamamlandıktan sonra dropdown menüsünü gizle (isteğe bağlı)
            const dropdownMenu = document.querySelector("#language-dropdown-menu1");
            dropdownMenu.classList.add("hidden");
        });
    });
});



