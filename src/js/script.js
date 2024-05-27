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

// Üzerine gelince açma kapama yapan metot.
function hoverShow(buttonId, divId) {
    const resourcesButton = document.getElementById(buttonId);
    const resourcesDiv = document.getElementById(divId);

    if (resourcesButton && resourcesDiv) {
        resourcesButton.addEventListener("mouseenter", () => {
            resourcesDiv.classList.remove("hidden");
        });
        resourcesButton.addEventListener("mouseleave", () => {
            resourcesDiv.classList.add("hidden");
        });
    }
}

// Belirtilen elementin resourcesDiv veya resourcesButton olup olmadığını kontrol et
function isClickOutside(element, resourcesDiv, resourcesButton) {
    return !resourcesDiv.contains(element) && element !== resourcesButton;
}

// Sayfa yüklendiğinde fonksiyonları tetiklemek için
document.addEventListener('DOMContentLoaded', () => {
    toggleShow('navbarToggler', 'navbarCollapse');
    toggleShow('resourcesButton', 'resourcesDiv');

    toggleShow('modalClose', 'default-modal')
    toggleShow('modalButton1', 'default-modal')
    toggleShow('modalButton2', 'default-modal')
    toggleShow('modalButton3', 'default-modal')
    toggleShow('modalButton4', 'default-modal')
    toggleShow('modalButton5', 'default-modal')
    toggleShow('modalButton6', 'default-modal')


    const resourcesButton = document.getElementById('resourcesButton');
    const resourcesDiv = document.getElementById('resourcesDiv');

    if (resourcesButton && resourcesDiv) {

        document.addEventListener("click", (event) => {
            if (isClickOutside(event.target, resourcesDiv, resourcesButton)) {
                resourcesDiv.classList.add("hidden");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Her bir dil seçeneği için
    const imageOptions = document.querySelectorAll("#gallery div");

    // Her bir dil seçeneği için tıklama olayını ekle
    imageOptions.forEach(function (option) {
        option.addEventListener("click", function (event) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

            // Tıklanan dil seçeneğinin bayrağının URL'sini al
            const imageUrl = option.querySelector("img").getAttribute("src");

            // Input alanına bayrağın görüntüsünü ekle
            const inputImage = document.querySelector("#image");
            inputImage.setAttribute("src", imageUrl);
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    let counter = parseInt(counterElement.textContent);

    document.getElementById("decreaseBtn").addEventListener("click", () => {
        if (counter > 0) {
            counter--;
            counterElement.textContent = counter;
        }
    });

    document.getElementById("increaseBtn").addEventListener("click", () => {
        counter++;
        counterElement.textContent = counter;
    });
});
