// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    }
  });
});

// Modal logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modal.style.display = 'block';
  });
});

document.getElementById('closeModal').onclick = () => {
  modal.style.display = 'none';
};

// Form validation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  if (![name, email, subject, message].every(i => i.value.trim())) {
    alert('Fill all fields.');
    return;
  }

  alert('Message sent successfully!');
  e.target.reset();
});
