//side tab
function setSubMenuActive() {
  const currentPage = window.location.pathname.split("/").pop();
  const subBtns = document.querySelectorAll(".sub-btn");

  subBtns.forEach(function (btn) {
    btn.classList.remove("active");

    const href = btn.getAttribute("href");

    if (href === currentPage) {
      btn.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setSubMenuActive);

/* About us */

/* Visit us */

/* Adopt-dog */
const tabBtns = document.querySelectorAll('.adopt-tab-btn');
const petContents = document.querySelectorAll('.adopt-pet');

tabBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    const target = btn.dataset.pet;

    // active 제거
    tabBtns.forEach(tab => tab.classList.remove('active'));

    petContents.forEach(content => {
      content.classList.remove('active');
    });

    // active 추가
    btn.classList.add('active');

    document.getElementById(target)
      .classList.add('active');

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
/* Adopt-cat */

/* Donate-info */document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".donation-tab");
  const panels = document.querySelectorAll(".donation-panel");

  const openFormBtns = document.querySelectorAll(".open-form-btn");
  const formWrap = document.getElementById("donationFormWrap");
  const formTitle = document.getElementById("formTitle");
  const donationType = document.getElementById("donationType");

  const amountRadios = document.querySelectorAll("input[name='amount']");
  const customAmountRadio = document.getElementById("customAmountRadio");
  const customAmount = document.getElementById("customAmount");

  // 탭 전환
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const targetId = tab.dataset.target;

      tabs.forEach(function (item) {
        item.classList.remove("active");
      });

      panels.forEach(function (panel) {
        panel.classList.remove("active");
      });

      tab.classList.add("active");

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }

      // 탭 바꾸면 폼 닫기
      if (formWrap) {
        formWrap.classList.remove("open");
      }
    });
  });

  // 후원하기 버튼 클릭 시 폼 열기
  openFormBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const title = btn.dataset.title;

      if (formTitle) {
        formTitle.textContent = title + " 후원 신청";
      }

      if (donationType) {
        donationType.value = title;
      }

      if (formWrap) {
        formWrap.classList.add("open");

        setTimeout(function () {
          formWrap.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 200);
      }
    });
  });

  amountRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (customAmountRadio.checked) {
        customAmount.classList.add("show");
        customAmount.setAttribute("required", "required");
      } else {
        customAmount.classList.remove("show");
        customAmount.removeAttribute("required");
        customAmount.value = "";
      }
    });
  });
});
/* Imfact-report */
document.addEventListener("DOMContentLoaded", function () {
  const reportCard = document.querySelector(".report-card");
  const scrollItems = document.querySelectorAll(".scroll-ani, .chart-wrap");
  const progressBars = document.querySelectorAll(".bar span");

  progressBars.forEach(function (bar) {
    bar.style.setProperty("--w", bar.dataset.width);
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        if (reportCard) {
          reportCard.classList.add("active");
        }
      } else {
        entry.target.classList.remove("active");

        if (reportCard) {
          reportCard.classList.remove("active");
        }
      }
    });
  }, {
    threshold: 0.3
  });

  scrollItems.forEach(function (item) {
    observer.observe(item);
  });
});

// adopt modal

const adoptModal = document.getElementById('adoptModal');
const adoptCloseBtn = document.getElementById('adoptCloseBtn');
const applyBtns = document.querySelectorAll('.apply-btn');

// open modal

applyBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    adoptModal.classList.add('active');

    document.body.style.overflow = 'hidden';

  });

});

// close button

adoptCloseBtn.addEventListener('click', () => {

  adoptModal.classList.remove('active');

  document.body.style.overflow = '';

});

// background click close

adoptModal.addEventListener('click', (e) => {

  if(e.target === adoptModal){

    adoptModal.classList.remove('active');

    document.body.style.overflow = '';

  }

});
/* Volunteer */

/* Notice */
