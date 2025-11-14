// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.getElementById('tooltip');
  const hotspots = document.querySelectorAll('svg .hotspot');

  // De tekstbokse, der skal opdateres
  const titleEl = document.querySelector('.info-text h2');
  const articleEl = document.querySelector('.info-text .placeholder');
  const effBox = document.getElementById('efficiency');
  const reqBox = document.getElementById('requirement');

  // Indhold til hver hotspot
  const CONTENT = {
    'hotspot-centered': {
      title: 'Centerknap',
      text: 'Dette er centerknappen. Den nulstiller systemet og bringer ro i kaos.',
      efficiency: '<h2>Effekt</h2><p>Nulstiller til grundtilstand uden at slukke for maskinen.</p>',
      requirement: '<h2>Krav</h2><p>Må kun bruges når systemet står stille.</p>'
    },
    'hotspot-arm': {
      title: 'Øverste knap',
      text: 'Dette hotspot fortæller om det øverste felt i diagrammet.',
      efficiency: '<h2>Effekt</h2><p>Forøger præcision og retning.</p>',
      requirement: '<h2>Krav</h2><p>Bruges kun ved behov for manuel korrektion.</p>'
    },
    'hotspot-blue': {
      title: 'Blå hjul',
      text: 'Det blå hjul styrer de sekundære funktioner.',
      efficiency: '<h2>Effekt</h2><p>Finjusterer rotationshastighed.</p>',
      requirement: '<h2>Krav</h2><p>Kræver regelmæssig vedligeholdelse.</p>'
    }
  };

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', (e) => {
      const id = hotspot.id;
      const data = CONTENT[id];
      const info = data ? data.text : hotspot.dataset.info;

      // 🟡 Vis tooltip
      tooltip.textContent = info;
      tooltip.style.display = 'block';

      // 🟢 Opdater tekstbokse automatisk
      if (data) {
        if (titleEl) titleEl.textContent = data.title;
        if (articleEl) articleEl.textContent = data.text;
        if (effBox) effBox.innerHTML = data.efficiency;
        if (reqBox) reqBox.innerHTML = data.requirement;
      }
    });

    hotspot.addEventListener('mousemove', (e) => {
      tooltip.style.left = e.pageX + 10 + 'px';
      tooltip.style.top = e.pageY + 10 + 'px';
    });

    hotspot.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
});

const openBtns = document.querySelectorAll(".openModal");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modalOverlay").classList.add("active");
  });
});

document.querySelector(".close_btn").addEventListener("click", () => {
  document.getElementById("modalOverlay").classList.remove("active");
});

// MODAL 2-kode
const overlay2 = document.getElementById("modalOverlay2");
document.querySelectorAll(".openModal2").forEach(btn => {
  btn.addEventListener("click", () => {
    overlay2.classList.add("active");
  });
});
overlay2.querySelector(".close_btn").addEventListener("click", () => {
  overlay2.classList.remove("active");
});
overlay2.addEventListener("click", (e) => {
  if (e.target === overlay2) {
    overlay2.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay3 = document.getElementById("modalOverlay3");

  // Åbn modal 3
  document.querySelectorAll(".openModal3").forEach(btn => {
    btn.addEventListener("click", () => {
      overlay3.classList.add("active");
    });
  });

  // Luk via X
  overlay3.querySelector(".close_btn").addEventListener("click", () => {
    overlay3.classList.remove("active");
  });

  // Klik udenfor boksen lukker
  overlay3.addEventListener("click", (e) => {
    if (e.target === overlay3) {
      overlay3.classList.remove("active");
    }
  });

  // ESC lukker også
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay3.classList.remove("active");
    }
  });
});


