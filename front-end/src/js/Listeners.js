

export function addListeners() {
    let claro = false;
    const headersIcon = document.querySelectorAll(".headerItem");
    console.log(headersIcon);
    headersIcon.forEach((icon) => {
        icon.addEventListener("click", () => {
            console.log("cambiando a modo oscuro");
            /*console.log("cambiando a modo oscuro");
            if (!claro) {
                console.log("cambiando a modo claro");
                document.documentElement.style.setProperty("--BackgroundColor", "#F8FAFC");
                document.documentElement.style.setProperty("--fontColor", "#1E293B");
                document.documentElement.style.setProperty("--selectColor", "#f5f5f5");
                document.documentElement.style.setProperty("--secondaryColor", "#f5f5f5");
                claro = true;
            } else {
                claro = false;
            }*/
        });
    });
}