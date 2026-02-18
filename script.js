<script>
function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim() || "Not provided";
  const city = document.getElementById("city").value.trim();
  const social = document.getElementById("social").value.trim() || "Not provided";

  const confirmInfo = document.getElementById("confirmInfo").checked;
  const contactConsent = document.getElementById("contactConsent").checked;
  const mediaConsent = document.getElementById("mediaConsent").checked;

  if (!name || !age || !gender || !mobile || !city) {
    alert("Please fill all required fields.");
    return;
  }

  if (!confirmInfo || !contactConsent || !mediaConsent) {
    alert("Please accept all declarations to proceed.");
    return;
  }

  const whatsappNumber = "7204651935"; // ✅ fixed";

  const message = `
👑 *ABHARAN QUEEN 2026 – REGISTRATION* 👑

👤 *Personal Details*
Name: ${name}
Age: ${age}
Gender: ${gender}
City: ${city}

📞 *Contact*
WhatsApp: ${mobile}
Email: ${email}
Instagram: ${social}

✅ *Consent*
✔ Information confirmed
✔ Contact permission granted
✔ Media usage approved

📸 I will now attach my photos and video.
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}
</script>



