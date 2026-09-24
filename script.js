// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// Scroll reveal (respects reduced motion)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// Contact form -> sends details straight to the company email via FormSubmit (free service).
// NOTE: the very first submission triggers a one-time activation email to
// harmoniicshub@gmail.com — open it and click "Activate" once, then all
// future messages arrive directly in the inbox.
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const btn = this.querySelector('button[type="submit"]');
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const subject = this.subject.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !subject || !message) {
    note.className = 'form-note err';
    note.textContent = 'Please fill in every field before sending.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.className = 'form-note err';
    note.textContent = 'Please enter a valid email address.';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Sending…';
  try {
    const res = await fetch('https://formsubmit.co/ajax/harmoniicshub@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: 'Website enquiry: ' + subject,
        message: message,
        _template: 'table',
        _captcha: 'false'
      })
    });
    if (!res.ok) throw new Error('Request failed');
    note.className = 'form-note ok';
    note.textContent = 'Message sent! We will get back to you shortly.';
    this.reset();
  } catch (err) {
    note.className = 'form-note err';
    note.textContent = 'Could not send right now. Please chat us on WhatsApp or email harmoniicshub@gmail.com.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send message';
  }
});

// Training registration form -> sends straight to the company email via FormSubmit.
const registerForm = document.getElementById('registerForm');
if (registerForm) registerForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const note = document.getElementById('registerNote');
  const btn = this.querySelector('button[type="submit"]');
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const email = this.email.value.trim();
  const course = this.course.value;
  const mode = this.mode.value;

  if (!name || !phone || !email || !course || !mode) {
    note.className = 'form-note err';
    note.textContent = 'Please fill in every field before registering.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.className = 'form-note err';
    note.textContent = 'Please enter a valid email address.';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Registering…';
  try {
    const res = await fetch('https://formsubmit.co/ajax/harmoniicshub@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        course: course,
        mode: mode,
        _subject: 'Course registration: ' + course,
        _template: 'table',
        _captcha: 'false'
      })
    });
    if (!res.ok) throw new Error('Request failed');
    note.className = 'form-note ok';
    note.textContent = 'Registration received! We will contact you with the next start date and fees.';
    this.reset();
  } catch (err) {
    note.className = 'form-note err';
    note.textContent = 'Could not register right now. Please chat us on WhatsApp instead.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Register';
  }
});

// Summer Classes registration form -> sends straight to the company email via FormSubmit.
const summerForm = document.getElementById('summerForm');
if (summerForm) summerForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const note = document.getElementById('summerNote');
  const btn = this.querySelector('button[type="submit"]');
  const registeringFor = this.registering_for.value;
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const email = this.email.value.trim();
  const course = this.course.value;
  const location = this.location.value;

  if (!registeringFor || !name || !phone || !email || !course || !location) {
    note.className = 'form-note err';
    note.textContent = 'Please fill in every field before registering.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.className = 'form-note err';
    note.textContent = 'Please enter a valid email address.';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Registering…';
  try {
    const res = await fetch('https://formsubmit.co/ajax/harmoniicshub@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        registering_for: registeringFor,
        name: name,
        phone: phone,
        email: email,
        course: course,
        location: location,
        _subject: 'Summer Classes registration: ' + course + ' (' + location + ')',
        _template: 'table',
        _captcha: 'false'
      })
    });
    if (!res.ok) throw new Error('Request failed');
    note.className = 'form-note ok';
    note.textContent = 'Registration received! We will contact you to confirm your seat and payment.';
    this.reset();
  } catch (err) {
    note.className = 'form-note err';
    note.textContent = 'Could not register right now. Please chat us on WhatsApp instead.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Register Now';
  }
});

// Summer Classes: clicking a course's "Register for this course" preselects it in the form.
document.querySelectorAll('.course-btn[data-course]').forEach(a => {
  a.addEventListener('click', () => {
    const sel = document.getElementById('sCourse');
    if (sel) {
      const course = a.getAttribute('data-course').replace('&amp;', '&');
      for (const opt of sel.options) {
        if (opt.textContent.trim() === course) { sel.value = opt.value; break; }
      }
    }
  });
});
