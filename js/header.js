window.addEventListener("load", () => {
  // =========================
  // AOS INIT
  // =========================
  AOS.init({
    duration: 1000,
    once: true,
  });

  // =========================
  // 🔥 영상 자동재생
  // =========================
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.muted = true;

    video.play().catch((error) => {
      console.log("자동재생 차단:", error);
    });
  });

  // =========================
  // 🔥 연대기 swiper
  // =========================
  const historySwiper = new Swiper(".history-sw", {
    loop: true,

    pagination: {
      el: ".history-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".history-next",
      prevEl: ".history-prev",
    },
  });

  // =========================
  // 🔥 유명인 swiper
  // =========================
  const famousSwiper = new Swiper(".famous-sw", {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: ".famous-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 24,
      },

      1200: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
      },
    },
  });

  // =========================
  // 🔥 축제 swiper
  // =========================
  const festivalSwiper = new Swiper(".festival-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: ".festival-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 24,
      },

      1200: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
      },
    },
  });

  // =========================
  // 헤더 스크롤
  // =========================
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-section");

    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});

// =========================
// 🔥 관광지 클릭 모달
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  const modalImg = document.getElementById("modal-img");

  const modalTitle = document.getElementById("modal-title");

  const modalDesc = document.getElementById("modal-desc");

  const closeBtn = document.querySelector(".close");

  const modalLink = document.getElementById("modal-link");

  const cards = document.querySelectorAll(".tourist-img img");

  let slideInterval;

  // 관광 데이터
  const data = [
    {
      imgs: [
        "images/마산관광지.jpg",
        "images/마산돝섬.jpg",
        "images/마산관광지3.jpg",
        "images/마산관광지4.jpg",
        "images/마산관광지5.jpg",
      ],

      title: "마산 관광",

      desc: "마산은 바다와 역사, 레트로 감성이 살아있는 도시입니다.",

      link: "https://travel.naver.com/domestic/03125/summary?seasonIndex=0",
    },

    {
      imgs: [
        "images/창원관광지1.jpg",
        "images/창원관광지2.jpg",
        "images/창원관광지3.jpg",
        "images/창원관광지4.jpg",
        "images/창원관광지5.jpg",
      ],

      title: "창원 관광",

      desc: "창원은 자연과 산업이 조화를 이루는 도시입니다.",

      link: "https://travel.naver.com/domestic/03120/summary?seasonIndex=0",
    },

    {
      imgs: [
        "images/진해관광지1.jpg",
        "images/진해관광지2.jpg",
        "images/진해관광지3.jpg",
        "images/진해관광지4.jpg",
        "images/진해관광지5.jpg",
      ],

      title: "진해 관광",

      desc: "진해는 벚꽃으로 유명한 아름다운 도시입니다.",

      link: "https://travel.naver.com/domestic/03129/summary?seasonIndex=0",
    },
  ];

  // 카드 클릭
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      const item = data[index];

      let current = 0;

      clearInterval(slideInterval);

      modalImg.src = item.imgs[current];

      modalTitle.innerText = item.title;

      modalDesc.innerText = item.desc;

      modalLink.href = item.link;

      modal.style.display = "flex";

      slideInterval = setInterval(() => {
        modalImg.style.opacity = 0;

        setTimeout(() => {
          current++;

          if (current >= item.imgs.length) {
            current = 0;
          }

          modalImg.src = item.imgs[current];

          modalImg.style.opacity = 1;
        }, 400);
      }, 3000);
    });
  });

  // 링크 클릭 충돌 방지
  modalLink.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 닫기 버튼
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";

    clearInterval(slideInterval);
  });

  // 바깥 클릭 닫기
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";

      clearInterval(slideInterval);
    }
  });
});

// =========================
// 🔥 맛집
// =========================
const foodList = document.getElementById("food-list");

const foodTitle = document.getElementById("food-title");

const foodDesc = document.getElementById("food-desc");

const foodAreas = document.querySelectorAll(".food-area");
