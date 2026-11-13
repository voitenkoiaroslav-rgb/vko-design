
/* =========================================
   V/KO DESIGN — ABOUT ME CAROUSEL
========================================= */

const aboutSlides = [
  {
    image: "assets/about/travel.jpg",
    en: {
      title: "I love travelling.",
      description: "Exploring new places, cultures and experiences."
    },
    ru: {
      title: "Люблю путешествовать.",
      description: "Открывать новые места, знакомиться с культурами и собирать впечатления."
    }
  },
  {
    image: "assets/about/events.jpg",
    en: {
      title: "The life of the party.",
      description: "I enjoy meeting people, creating connections and bringing positive energy."
    },
    ru: {
      title: "Душа компании.",
      description: "Люблю общаться, знакомиться с людьми и создавать вокруг себя атмосферу."
    }
  },
  {
    image: "assets/about/actives.jpg",
    en: {
      title: "An active community member.",
      description: "Taking part in initiatives, teamwork and making things happen."
    },
    ru: {
      title: "Активист.",
      description: "Участвую в инициативах, командных проектах и общественной жизни."
    }
  },
  {
    image: "assets/about/football.jpg",
    en: {
      title: "Football is my passion.",
      description: "I love the atmosphere of the game, the emotions and supporting my team."
    },
    ru: {
      title: "Люблю футбол.",
      description: "Ценю атмосферу игры, эмоции и возможность поддерживать любимую команду."
    }
  },
  {
    image: "assets/about/chill-guy.jpg",
    en: {
      title: "Just a chill guy.",
      description: "Enjoying the little things, staying curious and keeping a positive attitude."
    },
    ru: {
      title: "Просто чилловый парень.",
      description: "Умею наслаждаться моментом, сохранять лёгкость и находить радость в мелочах."
    }
  }
];


let activeAboutSlide = 0;

const aboutGallery = document.getElementById("about-gallery");

if (aboutGallery) {

  const aboutCards = [
    ...aboutGallery.querySelectorAll(".about-card")
  ];

  const aboutTitle = document.getElementById("about-caption-title");
  const aboutDescription = document.getElementById("about-caption-description");
  const aboutCounter = document.getElementById("about-counter");

  const aboutDots = [
    ...document.querySelectorAll(".about-dot")
  ];

  const previousButton = document.querySelector(".about-arrow-prev");
  const nextButton = document.querySelector(".about-arrow-next");


  /* Language */

  function getAboutLanguage() {
    return document.documentElement.lang === "ru" ? "ru" : "en";
  }


  /* Update caption */

  function updateAboutCaption() {

    const slide = aboutSlides[activeAboutSlide];
    const language = getAboutLanguage();
    const text = slide[language];

    aboutTitle.textContent = text.title;
    aboutDescription.textContent = text.description;

    aboutCounter.textContent =
      `${String(activeAboutSlide + 1).padStart(2, "0")} / 05`;

  }


  /* Render carousel */

  function renderAboutCarousel() {

    aboutCards.forEach((card, index) => {

      let offset = index - activeAboutSlide;

      // Keep the carousel circular
      if (offset > 2) offset -= aboutCards.length;
      if (offset < -2) offset += aboutCards.length;

      const distance = Math.abs(offset);

      const scale = distance === 0
        ? 1
        : distance === 1
          ? 0.82
          : 0.67;

      const opacity = distance === 0
        ? 1
        : distance === 1
          ? 0.8
          : 0.48;

      card.style.setProperty("--offset", offset);
      card.style.setProperty("--scale", scale);
      card.style.setProperty("--opacity", opacity);
      card.style.setProperty("--brightness", distance === 0 ? 1 : 0.6);
      card.style.setProperty("--z", 10 - distance);

      card.classList.toggle("is-active", offset === 0);

      card.setAttribute(
        "aria-pressed",
        String(offset === 0)
      );

    });


    // Update pagination dots
    aboutDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeAboutSlide);
    });

    updateAboutCaption();

  }


  /* Go to slide */

  function goToAboutSlide(index) {

    activeAboutSlide =
      (index + aboutSlides.length) % aboutSlides.length;

    renderAboutCarousel();

  }


  /* Previous / next */

  previousButton.addEventListener("click", () => {
    goToAboutSlide(activeAboutSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    goToAboutSlide(activeAboutSlide + 1);
  });


  /* Click on photo */

  aboutCards.forEach((card, index) => {

    card.addEventListener("click", () => {
      goToAboutSlide(index);
    });

  });


  /* Click on dots */

  aboutDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
      goToAboutSlide(index);
    });

  });


  /* Keyboard navigation */

  aboutGallery.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {
      goToAboutSlide(activeAboutSlide - 1);
    }

    if (event.key === "ArrowRight") {
      goToAboutSlide(activeAboutSlide + 1);
    }

  });


  /* Swipe on mobile */

  let touchStartX = 0;

  aboutGallery.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  aboutGallery.addEventListener("touchend", (event) => {

    const touchEndX = event.changedTouches[0].screenX;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) < 45) return;

    if (difference > 0) {
      goToAboutSlide(activeAboutSlide + 1);
    } else {
      goToAboutSlide(activeAboutSlide - 1);
    }

  }, { passive: true });


  /* React to EN / RU language switch */

  const languageObserver = new MutationObserver(() => {
    updateAboutCaption();
  });

  languageObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });


  /* Initial state */

  renderAboutCarousel();

}
