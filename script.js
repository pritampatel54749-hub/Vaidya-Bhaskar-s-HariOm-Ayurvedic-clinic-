script.js

// ================= MOBILE MENU =================

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navbar").classList.remove("active");
  });
});


// ================= WHATSAPP APPOINTMENT FORM =================

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "919348571270";

  const whatsappMessage =
    "🌿 *New Appointment Request - HariOm Ayurvedic Clinic* 🌿\n\n" +
    "👤 *Name:* " + name + "\n" +
    "📞 *Phone:* " + phone + "\n" +
    "💬 *Message:* " + message + "\n\n" +
    "Sent from the HariOm Ayurvedic Clinic website.";

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (event) {

    event.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ================= SIMPLE SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll(
  ".service-card, .why-card, .gallery-item, .contact-form, .doctor-image-card"
);

const observer = new IntersectionObserver(

  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.1
  }

);


animatedElements.forEach(function (element) {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);

});
