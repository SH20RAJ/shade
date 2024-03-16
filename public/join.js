function showSection(section) {
    // Remove 'active' class from all sections
    document.querySelectorAll('.playground .layout').forEach(function (el) {
        el.classList.remove('active');
    });

    // Add 'active' class to the selected section
    document.querySelector(`.${section}`).classList.add('active');

    // Scroll the selected section into view
    document.querySelector(`.${section}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.querySelector("#register").addEventListener("click",()=> {
    showSection("section1")
})
document.querySelector("#login").addEventListener("click",()=> {
    showSection("section2")
})