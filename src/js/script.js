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
