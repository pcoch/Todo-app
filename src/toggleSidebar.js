const toggleSideBar = () => {
    const hamburgerBtn = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    const smallScreen = window.matchMedia("(max-width: 720px)");
    smallScreen.addEventListener("change", () => {
        if (window.matchMedia("(max-width: 720px)").matches) {
            sidebar.classList.remove('show');
        };
    });
};

export {
    toggleSideBar
}