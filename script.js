const yearTarget = document.getElementById("site-year");
if (yearTarget) {
  yearTarget.textContent = `Copyright ${new Date().getFullYear()} HARMONICS HUB`;
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const entries = Object.fromEntries(formData.entries());
    const requiredFields = ["firstname", "lastname", "email", "mobilenumber", "service", "message"];
    const missingField = requiredFields.find((field) => !String(entries[field] || "").trim());

    if (missingField) {
      formStatus.textContent = "Please complete all fields before sending your inquiry.";
      formStatus.className = "form-status error";
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entries.email);
    if (!emailOk) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    const subject = encodeURIComponent(`New inquiry from ${entries.firstname} ${entries.lastname}`);
    const body = encodeURIComponent(
      `Name: ${entries.firstname} ${entries.lastname}\n` +
      `Email: ${entries.email}\n` +
      `Phone: ${entries.mobilenumber}\n` +
      `Service: ${entries.service}\n\n` +
      `Project Details:\n${entries.message}`
    );

    localStorage.setItem("harmonicsHubLastInquiry", JSON.stringify(entries));
    formStatus.textContent = "Your details are ready. Your email app will open so you can send the inquiry.";
    formStatus.className = "form-status success";

    window.location.href = `mailto:hello@harmonicshub.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}
