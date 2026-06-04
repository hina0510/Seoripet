function navTop() {
  document.querySelectorAll(".gnb > li").forEach((li) => {
    li.onmouseenter = () => {
      const sub = li.querySelector(".sub");
      if (sub) sub.style.display = "block";
    };

    li.onmouseleave = () => {
      const sub = li.querySelector(".sub");
      if (sub) sub.style.display = "none";
    };
  });
}

function initAll() {
  navTop();
}

initAll();

// Main Banner
const banner = document.querySelector("#s1");
const track = document.querySelector(".banner-track");
const dots = document.querySelectorAll(".banner-indicator button");

let currentIndex = 0;
let isAnimating = false;

function updateBanner(index){
  currentIndex = index;
  track.style.transform =
    `translateX(-${currentIndex * 100}vw)`;
  dots.forEach(dot=>{
    dot.classList.remove("active");
  });
  dots[currentIndex].classList.add("active");
}

function wheelLock(){
  isAnimating = true;
  setTimeout(()=>{
    isAnimating = false;
  },800);
}

banner.addEventListener("wheel",(e)=>{
  if(isAnimating) return;
  const down = e.deltaY > 0;
  const up = e.deltaY < 0;
  // 1 → 2 → 3

  if(down && currentIndex < 2){
    e.preventDefault();
    updateBanner(currentIndex + 1);
    wheelLock();
  }

  // 3 → 2 → 1
  if(up && currentIndex > 0){
    e.preventDefault();
    updateBanner(currentIndex - 1);
    wheelLock();
  }
},{
  passive:false
});

dots.forEach(dot=>{
  dot.addEventListener("click",()=>{
    const index =
      Number(dot.dataset.index);
    updateBanner(index);
  });
});

//Scroll Animation
const s3 = document.querySelector("#s3");
const fills = document.querySelectorAll(".fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fills.forEach((fill) => {
          const width = fill.dataset.width;
          fill.style.width = width + "%";
        });
      } else {
        fills.forEach((fill) => {
          fill.style.width = "0";
        });
      }
    });
  },
  {
    threshold: 0.4
  }
);
observer.observe(s3);

//Tab Slide
const tabBtns = document.querySelectorAll(".tab-btn");
const petMarquees = document.querySelectorAll(".pet-marquee");
const petTracks = document.querySelectorAll(".pet-track");

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

//Review
const reviewTrack = document.querySelector(".review-track");

reviewTrack.innerHTML += reviewTrack.innerHTML;

//Modal
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const reserveModal = document.querySelector("#reserveModal");

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