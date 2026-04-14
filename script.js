const yearTarget = document.getElementById("site-year");
if (yearTarget) {
  yearTarget.textContent = `Copyright ${new Date().getFullYear()} HARMONICS HUB`;
}

const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.getElementById("site-nav");

if (navToggle && siteNav && body) {
  const closeNav = () => {
    body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      closeNav();
    }
  });
}

const cookiePreferenceKey = "harmonicsCookiePreference";
const savedCookiePreference = localStorage.getItem(cookiePreferenceKey);

if (!savedCookiePreference) {
  const cookieBanner = document.createElement("aside");
  cookieBanner.className = "cookie-banner";
  cookieBanner.setAttribute("role", "dialog");
  cookieBanner.setAttribute("aria-live", "polite");
  cookieBanner.setAttribute("aria-label", "Privacy notice");
  cookieBanner.innerHTML = `
    <p class="cookie-banner-title">Privacy Notice</p>
    <p>We only use essential browser storage to remember your privacy preference and keep this site working smoothly. We do not run advertising trackers on this interface.</p>
    <div class="cookie-banner-actions">
      <button type="button" class="button button-primary" id="cookie-accept">Understood</button>
      <button type="button" class="button button-secondary" id="cookie-close">Dismiss</button>
    </div>
  `;

  document.body.appendChild(cookieBanner);

  const saveCookiePreference = (value) => {
    localStorage.setItem(cookiePreferenceKey, value);
    cookieBanner.remove();
  };

  const cookieAcceptButton = document.getElementById("cookie-accept");
  const cookieCloseButton = document.getElementById("cookie-close");

  if (cookieAcceptButton) {
    cookieAcceptButton.addEventListener("click", () => saveCookiePreference("accepted"));
  }

  if (cookieCloseButton) {
    cookieCloseButton.addEventListener("click", () => saveCookiePreference("dismissed"));
  }
}

const formConfigs = {
  inquiry: {
    requiredFields: ["firstname", "lastname", "email", "mobilenumber", "service", "message"],
    successMessage: "Your inquiry has been submitted successfully. Our team will get back to you soon."
  },
  "academy-registration": {
    requiredFields: ["firstname", "lastname", "email", "mobilenumber", "course", "level", "format", "cohort", "message"],
    successMessage: "Your academy registration has been submitted successfully. The academy team will follow up with next steps."
  }
};

document.querySelectorAll("form[data-form-type], #contact-form").forEach((form) => {
  const formType = form.dataset.formType || "inquiry";
  const config = formConfigs[formType];
  const statusId = form.dataset.statusTarget || "form-status";
  const formStatus = document.getElementById(statusId);
  const endpoint = form.getAttribute("action") || "api/submit.php";
  const submitButton = form.querySelector('button[type="submit"]');
  const defaultButtonLabel = submitButton ? submitButton.textContent : "";

  if (!config || !formStatus) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    const missingField = config.requiredFields.find((field) => !String(entries[field] || "").trim());

    if (missingField) {
      formStatus.textContent = "Please complete all fields before submitting the form.";
      formStatus.className = "form-status error";
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entries.email);
    if (!emailOk) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    try {
      formStatus.textContent = "Submitting...";
      formStatus.className = "form-status";
      form.setAttribute("aria-busy", "true");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || payload.ok === false) {
        throw new Error(payload.message || "Submission failed");
      }

      formStatus.textContent = payload.message || config.successMessage;
      formStatus.className = "form-status success";
      form.reset();
    } catch (error) {
      formStatus.textContent = error.message || "We could not submit your form right now. Please try again in a moment.";
      formStatus.className = "form-status error";
    } finally {
      form.removeAttribute("aria-busy");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonLabel;
      }
    }
  });
});
