document.addEventListener("DOMContentLoaded", () => {

  // TYPING EFFECT
  const typingText = document.querySelector(".typing-text");
  const words = ["Web Developer", "Aspiring Software Engineer"];
  let i = 0, j = 0, deleting = false;

  
  function type() {
    const word = words[i];
    typingText.textContent = deleting
      ? word.slice(0, --j)
      : word.slice(0, ++j);

    if (!deleting && j === word.length) {
      setTimeout(() => deleting = true, 1200);
    } else if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, deleting ? 60 : 100);
  }
  type();

  // CONTACT FORM
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", e => {
    e.preventDefault();
    status.textContent = "Sending...";

    emailjs.send("service_zr0bdl2", "template_gv4urhg", {
      from_name: form.from_name.value,
      email: form.email.value,
      message: form.message.value
    })
    .then(() => {
      status.textContent = "Message sent!";
      form.reset();
    })
    .catch(() => {
      status.textContent = "Failed to send. Try again!";
    });
  });

  // NAVBAR AUTO CLOSE
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
    
  });

});


// 🔥 SCROLL REVEAL ANIMATION
const allSections = document.querySelectorAll("section");

const reveal = () => {
  allSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

// 🔥 CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 600);
});



const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const title = document.getElementById("modal-title");

cards.forEach(card => {
  card.addEventListener("click", () => {
    title.textContent = card.querySelector("h3").textContent;
    modal.style.display = "flex";
  });
});

document.querySelector(".close-btn").onclick = () => {
  modal.style.display = "none";
};

window.addEventListener("scroll", () => {
  document.querySelector(".background-blobs").style.transform =
    `translateY(${window.scrollY * 0.2}px)`;
});

const card = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector(".hero").style.transform =
    `translate(${x * 10}px, ${y * 10}px)`;
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});