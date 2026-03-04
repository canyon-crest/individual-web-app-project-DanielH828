window.onload = function() {

    const button = document.querySelector("button");
    const form = document.getElementById("contactForm");
    const recentMessages = document.getElementById("recentMessages");

    button.addEventListener("click", function(event) {

        event.preventDefault(); // FORCE stop reload

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message-item");

        messageDiv.innerHTML = `
            <strong>${name}</strong>
            <p>${message}</p>
            <span>Just now</span>
        `;

        recentMessages.prepend(messageDiv);

        form.reset();
    });

};





document.getElementById("Backtotop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});