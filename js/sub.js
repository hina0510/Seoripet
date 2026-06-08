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
document.addEventListener("DOMContentLoaded", function () {
  const datesEl = document.getElementById("dates");
  const calendarWrap = document.getElementById("calendarWrap");
  const selectedDate = document.getElementById("selectedDate");
  const scheduleCount = document.getElementById("scheduleCount");
  const scheduleContent = document.getElementById("scheduleContent");
  const monthTitle = document.getElementById("monthTitle");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

  // 모달
  const applyModal = document.getElementById("applyModal");
  const closeModal = document.getElementById("closeModal");
  const modalDate = document.getElementById("modalDate");
  const modalTitle = document.getElementById("modalTitle");

  if (!datesEl) return;

  let currentYear = 2026;
  let currentMonth = 5;

  const weekNames = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];

  const scheduleData = {
    "2026-06-14": [
      {
        type: "green-line",
        icon: "☀️",
        title: "오전 봉사활동",
        time: "08:00 - 12:00",
        desc: "강아지 산책 보조 / 견사 청소",
        people: 15,
        apply: 5
      },
      {
        type: "orange-line",
        icon: "🌤️",
        title: "오후 봉사활동",
        time: "13:00 - 17:00",
        desc: "고양이 케어 / 미용 보조",
        people: 10,
        apply: 3
      }
    ],

    "2026-06-27": [
      {
        type: "green-line",
        icon: "☀️",
        title: "오전 봉사활동",
        time: "08:00 - 14:00",
        desc: "보호소 환경정리 : 실내 청소 및 사료 정리",
        people: 10,
        apply: 3
      }
    ]
  };

  function getDateKey(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function renderCalendar(year, month) {
    datesEl.innerHTML = "";

    monthTitle.textContent =
      `${year}년 ${month + 1}월`;

    const firstDay =
      new Date(year, month, 1).getDay();

    const lastDate =
      new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("button");
      empty.className = "date disabled no-status";
      datesEl.appendChild(empty);
    }

    for (let day = 1; day <= lastDate; day++) {

      const btn = document.createElement("button");

      const dayOfWeek =
        new Date(year, month, day).getDay();

      const dateKey =
        getDateKey(year, month, day);

      btn.className = "date";
      btn.textContent = day;

      if (dayOfWeek === 0) btn.classList.add("sun");
      if (dayOfWeek === 6) btn.classList.add("sat");

      if (scheduleData[dateKey]) {
        btn.classList.add("available");
      }

      btn.addEventListener("click", function () {

        document
          .querySelectorAll(".date")
          .forEach(date => {
            date.classList.remove("selected");
          });

        btn.classList.add("selected");

        calendarWrap.classList.add("active");

        selectedDate.textContent =
          `${month + 1}월 ${day}일 ${weekNames[dayOfWeek]}`;

        renderSchedule(dateKey);
      });

      datesEl.appendChild(btn);
    }
  }

  function renderSchedule(dateKey) {

    const schedules = scheduleData[dateKey];

    if (!schedules) {

      scheduleCount.textContent =
        "총 0건의 일정";

      scheduleContent.innerHTML = `
        <div class="empty-schedule">
          등록된 일정이 없습니다.
        </div>
      `;

      return;
    }

    scheduleCount.textContent =
      `총 ${schedules.length}건의 일정`;

    scheduleContent.innerHTML =
      schedules.map(item => `
        <div class="schedule-card ${item.type}">

          <div class="icon">
            ${item.icon}
          </div>

          <div class="info">
            <strong>${item.title}</strong>

            <p>${item.time}</p>

            <p>${item.desc}</p>

            <small>
              모집인원 ${item.people}명 ·
              신청인원 ${item.apply}명
            </small>
          </div>

          <button
            type="button"
            class="apply-btn"
            data-date="${dateKey}"
            data-title="${item.title}"
            data-time="${item.time}"
          >
            신청하기
          </button>

        </div>
      `).join("");
  }

  // 이전달
  prevMonth.addEventListener("click", function () {

    currentMonth--;

    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }

    calendarWrap.classList.remove("active");

    renderCalendar(currentYear, currentMonth);
  });

  // 다음달
  nextMonth.addEventListener("click", function () {

    currentMonth++;

    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    calendarWrap.classList.remove("active");

    renderCalendar(currentYear, currentMonth);
  });

  // 신청하기 버튼 클릭
  document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("apply-btn")) return;

  modalDate.textContent = e.target.dataset.date + " / " + e.target.dataset.time;
  modalTitle.textContent = e.target.dataset.title;

  applyDate.value = e.target.dataset.date;
  applyTitle.value = e.target.dataset.title;
  applyTime.value = e.target.dataset.time;

  applyModal.classList.add("show");
});


if (volunteerApplyForm) {
  volunteerApplyForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("봉사활동 신청이 완료되었습니다.");
    volunteerApplyForm.reset();
    applyModal.classList.remove("show");
  });
}

    // 모달 닫기
    if (closeModal) {
      closeModal.addEventListener("click", function () {
        applyModal.classList.remove("show");
      });
    }

    // 바깥영역 클릭
    if (applyModal) {
      applyModal.addEventListener("click", function (e) {
        if (e.target === applyModal) {
          applyModal.classList.remove("show");
        }
      });
    }

  renderCalendar(currentYear, currentMonth);
});

/* Notice */
