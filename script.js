document.getElementById("bookingForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  const successBox = document.getElementById("successMessage");

  // SHOW SUCCESS MESSAGE
  successBox.style.display = "block";

  const whatsappMessage =
`🍽 *NEW RESERVATION - DE POSH*

👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
👥 Guests: ${guests}
📝 Request: ${message || "None"}`;

  // DELAY REDIRECT (so user sees message)
  setTimeout(() => {
    window.open(
      `https://wa.me/254795583817?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    successBox.innerText = "Redirecting to WhatsApp...";
  }, 1200);
});