const yesButton = document.querySelector(".button-yes");
const hero = document.querySelector(".hero");
const detailsSection = document.querySelector(".details");
const yesForm = document.querySelector("#yes-form");

yesButton.addEventListener("click", async () => {

    yesButton.disabled = true;

    // Submit the response to Formspree
    try {
        const response = await fetch("https://formspree.io/f/mvkowekv", {
            method: "POST",
            body: new FormData(yesForm),
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            console.error("Formspree submission failed:", response.status);
        }

    } catch (error) {
        console.error("Could not submit response:", error);
    }

    // Continue with the visual transition regardless
    hero.classList.add("accepted");

    setTimeout(() => {
        detailsSection.scrollIntoView({
            behavior: "smooth"
        });
    }, 3000);

});