/**
 * Main Application Logic & Interactivity
 */
document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initScrollReveal();
  initSkillsFilter();
  initProjectModals();
  initContactForm();
  initCopyButtons();
  initMobileMenu();
  initCounterStats();
});

/* Hero Typewriter Code Animation */
function initTypewriter() {
  const codeEl = document.getElementById('heroCodeTypewriter');
  if (!codeEl) return;

  const codeSnippet = `const developer = {
  name: "Ajinkya",
  title: "Senior Web Developer",
  theme: "Tokyo Night 🌙",
  font: "Fira Code",
  status: "Available for Clients 🚀",
  skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
  motto: "Building ultra-fast, visually stunning web experiences."
};`;

  let i = 0;
  codeEl.innerHTML = '';
  
  function type() {
    if (i < codeSnippet.length) {
      const char = codeSnippet.charAt(i);
      if (char === '\n') {
        codeEl.innerHTML += '<br>';
      } else if (char === ' ') {
        codeEl.innerHTML += '&nbsp;';
      } else {
        codeEl.innerHTML += escapeHtml(char);
      }
      i++;
      setTimeout(type, 18);
    } else {
      // Add animated cursor at the end
      const cursor = document.createElement('span');
      cursor.className = 'animate-cursor';
      codeEl.appendChild(cursor);
    }
  }

  type();
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* Scroll Reveal Observer & Active Navigation */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-up, .reveal-scale');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        // Animate skill progress bars if inside skills section
        const progressBars = entry.target.querySelectorAll('.skill-progress-fill');
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          if (targetWidth) {
            bar.style.width = targetWidth + '%';
          }
        });
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  // Active Nav Highlighting
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* Skills Filter Logic */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* Project Preview Modal */
function initProjectModals() {
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');
  const triggerBtns = document.querySelectorAll('.view-project-btn');

  const projectDetails = {
    'saas': {
      title: 'Nexa Analytics - SaaS Dashboard Platform',
      image: 'assets/images/saas_dashboard.jpg',
      tags: ['HTML5', 'CSS3', 'JS ES6+', 'Chart.js', 'REST API'],
      desc: 'High-performance analytics web dashboard created for modern tech startups. Features real-time metric updates, dynamic charts, theme customizable widgets, and responsive data visualizer.',
      features: [
        'Interactive real-time user session graphs',
        'Custom modular card widgets with glow effects',
        'Exportable CSV and PDF report summaries',
        'Optimized sub-second render performance'
      ],
      demoUrl: '#',
      repoUrl: '#'
    },
    'ecommerce': {
      title: 'CyberShop - High Conversion E-Commerce Store',
      image: 'assets/images/ecommerce_store.jpg',
      tags: ['HTML5', 'CSS3 Architecture', 'JS ES6+', 'Stripe Checkout'],
      desc: 'Next-generation tech shop frontend with glowing cyber aesthetics, interactive cart overlay, instant keyword search, and seamless checkout flow.',
      features: [
        'Interactive shopping cart state management in pure JS',
        'Filter products by category, rating, and price spectrum',
        'Responsive mobile grid layout with instant animations',
        'Stripe payment gateway modal interface'
      ],
      demoUrl: '#',
      repoUrl: '#'
    },
    'aicode': {
      title: 'Aether AI Code Studio & Assistant',
      image: 'assets/images/ai_code_editor.jpg',
      tags: ['HTML5', 'CSS Grid/Flexbox', 'JS Canvas/Worker', 'Monaco API'],
      desc: 'A browser-based developer IDE interface with syntax highlighting, live code preview, and AI suggestion sidebar.',
      features: [
        'Tokyo Night code editor styling with monospace typography',
        'Real-time AI code refactoring suggestions panel',
        'Web worker based code compilation and linting',
        'Customizable editor settings & keybindings'
      ],
      demoUrl: '#',
      repoUrl: '#'
    }
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetails[projKey];
      if (!data) return;

      modalTitle.innerText = data.title;
      modalBody.innerHTML = `
        <div style="margin-bottom: 1.2rem; border-radius: 8px; overflow: hidden;">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 8px;">
        </div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
          ${data.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <p style="color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.6;">${data.desc}</p>
        <h4 style="color: var(--accent-cyan); margin-bottom: 0.6rem;">Key Features:</h4>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.2rem; color: var(--text-main);">
          ${data.features.map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 1rem;">
          <button onclick="alert('Live demo loaded in test sandbox mode!')" class="btn btn-primary btn-sm">Launch Live Demo</button>
          <button onclick="alert('Redirecting to client repository...')" class="btn btn-secondary btn-sm">View Source Code</button>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* Form Handler */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Sending Message...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      
      statusMsg.className = 'form-status success';
      statusMsg.innerHTML = '✔ Thank you! Your message has been sent successfully. I will get back to you within 24 hours.';
      
      setTimeout(() => {
        statusMsg.style.display = 'none';
      }, 6000);
    }, 1200);
  });
}

/* Copy to Clipboard */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.color = 'var(--accent-green)';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.color = 'var(--accent-cyan)';
        }, 2000);
      }
    });
  });
}

/* Mobile Navigation Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      toggleBtn.innerHTML = navMenu.classList.contains('mobile-open') ? '✕' : '☰';
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        toggleBtn.innerHTML = '☰';
      });
    });
  }
}

/* Stats Counter Animation */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        let count = 0;
        const speed = target / 35;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            entry.target.innerText = Math.ceil(count) + '+';
            setTimeout(updateCount, 40);
          } else {
            entry.target.innerText = target + '+';
          }
        };

        updateCount();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}
