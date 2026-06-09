
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

//card
const tabBtns = document.querySelectorAll(".tab-btn");
const petMarquees = document.querySelectorAll(".pet-marquee");
const petTracks = document.querySelectorAll(".pet-track");

if (tabBtns.length > 0 && petMarquees.length > 0 && petTracks.length > 0) {
  petTracks.forEach((track) => {
    track.innerHTML += track.innerHTML;
  });
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.pet;

      tabBtns.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");

      petMarquees.forEach((marquee) => {
        marquee.classList.remove("active");

        if (marquee.id === target) {
          marquee.classList.add("active");
        }
      });

      // 아이콘 변경
      const dogIcon = document.querySelector('[data-pet="dog"] img');
      const catIcon = document.querySelector('[data-pet="cat"] img');

      if(target === 'dog'){
        dogIcon.src = 'image/bone_c.png';
        catIcon.src = 'image/fish_g.png';
      }else{
        dogIcon.src = 'image/bone_g.png';
        catIcon.src = 'image/fish_c.png';
      }
    });
  });
}
//Review
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.review-track');
  const cards = Array.from(track.querySelectorAll('.review-card'));

  cards.forEach(card => {
    track.appendChild(card.cloneNode(true));
  });
});

// Modal
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const reserveModal = document.querySelector("#reserveModal");
const reserveForm = document.querySelector("#reserveForm");
const toastSuccess = document.querySelector("#toastSuccess");

if (openModal && reserveModal) {
  openModal.addEventListener("click", () => {
    reserveModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  document.querySelector("#closeModal").addEventListener("click", () => {
    reserveModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  reserveModal.addEventListener("click", (e) => {
    if (e.target === reserveModal) {
      reserveModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

if (reserveForm && toastSuccess) {
  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    reserveModal.classList.remove("active");
    document.body.style.overflow = "";
    toastSuccess.classList.add("show");
    setTimeout(() => toastSuccess.classList.remove("show"), 3500);
    reserveForm.reset();
  });
}

