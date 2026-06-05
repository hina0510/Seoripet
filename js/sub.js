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
/* ==============================
about-us 스크롤업
============================== */
document.addEventListener("DOMContentLoaded", function () {
  const scrollFadeItems = document.querySelectorAll(".scroll-fade");

  if (scrollFadeItems.length > 0) {
    const cabinetObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: "0px 0px -50px 0px"
    });

    scrollFadeItems.forEach(function (item) {
      cabinetObserver.observe(item);
    });
  }
});


/* Visit us */

/* Adopt-dog */
const tabBtns = document.querySelectorAll('.adopt-tab-btn');
const petContents = document.querySelectorAll('.adopt-pet');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.pet;

    tabBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');

    petContents.forEach(content => {
      content.classList.remove('active');
    });

    document.getElementById(target).classList.add('active');
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
/* Volunteer */

/* Notice */
