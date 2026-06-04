function mobileMenu(){
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const dim = document.querySelector(".mobile-dim");
  const depthBtns = document.querySelectorAll(".mobile-depth1");

  if (!menuBtn || !closeBtn || !mobileNav || !dim) return;

  menuBtn.onclick = function () {
    mobileNav.classList.add("open");
    dim.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  closeBtn.onclick = function () {
    mobileNav.classList.remove("open");
    dim.classList.remove("show");
    document.body.style.overflow = "";
  };

  dim.onclick = function () {
    mobileNav.classList.remove("open");
    dim.classList.remove("show");
    document.body.style.overflow = "";
  };

  depthBtns.forEach(function (btn) {
    btn.onclick = function () {
      const parent = btn.parentElement;
      const icon = btn.querySelector("span");

      parent.classList.toggle("active");
      icon.textContent = parent.classList.contains("active") ? "−" : "+";
    };
  });
};
// Main Banner
const banner = document.querySelector("#s1");
const track = document.querySelector(".banner-track");
const dots = document.querySelectorAll(".banner-indicator button");

if (banner && track && dots.length > 0) {
  let currentIndex = 0;
  let isAnimating = false;

  function updateBanner(index){
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}vw)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function wheelLock(){
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }

  banner.addEventListener("wheel", (e) => {
    if(isAnimating) return;

    const down = e.deltaY > 0;
    const up = e.deltaY < 0;

    if(down && currentIndex < 2){
      e.preventDefault();
      updateBanner(currentIndex + 1);
      wheelLock();
    }

    if(up && currentIndex > 0){
      e.preventDefault();
      updateBanner(currentIndex - 1);
      wheelLock();
    }
  }, { passive:false });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index);
      updateBanner(index);
    });
  });
}

//Scroll Animation
// Scroll Animation
const s3 = document.querySelector("#s3");
const fills = document.querySelectorAll(".fill");

if (s3 && fills.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        fills.forEach((fill) => {
          const width = fill.dataset.width;
          fill.style.width = entry.isIntersecting ? width + "%" : "0";
        });
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(s3);
}

//Review
const tabBtns = document.querySelectorAll(".tab-btn");
const petMarquees = document.querySelectorAll(".pet-marquee");
const petTracks = document.querySelectorAll(".pet-track");

if (tabBtns.length > 0 && petMarquees.length > 0 && petTracks.length > 0) {
  petTracks.forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.pet;

      tabBtns.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");

      petMarquees.forEach((marquee) => {
        marquee.classList.remove("active");

        if (marquee.id === target) {
          marquee.classList.add("active");
        }
      });
    });
  });
}

// Modal
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const reserveModal = document.querySelector("#reserveModal");

if (openModal && closeModal && reserveModal) {
  openModal.addEventListener("click", () => {
    reserveModal.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    reserveModal.classList.remove("active");
  });

  reserveModal.addEventListener("click", (e) => {
    if (e.target === reserveModal) {
      reserveModal.classList.remove("active");
    }
  });
}