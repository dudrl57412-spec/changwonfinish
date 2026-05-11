window.addEventListener("load", () => {
  // =========================
  // AOS INIT
  // =========================
  AOS.init();

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
    spaceBetween: 5,
    freeMode: true,

    pagination: {
      el: ".famous-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

  // =========================
  // 🔥 축제 swiper 추가
  // =========================
  const festivalSwiper = new Swiper(".festival-swiper", {
    slidesPerView: "auto",

    spaceBetween: 60,

    speed: 1200,

    grabCursor: true,

    mousewheel: true,

    pagination: {
      el: ".festival-pagination",
      clickable: true,
    },
  });

  // =========================
  // 헤더 스크롤
  // =========================
  window.addEventListener("scroll", function () {
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

  // =========================
  // 관광 데이터
  // =========================
  const data = [
    // 마산
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

    // 창원
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

    // 진해
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

  // =========================
  // 카드 클릭
  // =========================
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      const item = data[index];

      let current = 0;

      // 기존 슬라이드 제거
      clearInterval(slideInterval);

      // 초기 이미지
      modalImg.style.opacity = 1;

      modalImg.src = item.imgs[current];

      // 텍스트
      modalTitle.innerText = item.title;

      modalDesc.innerText = item.desc;

      // 링크
      modalLink.href = item.link;

      // 모달 열기
      modal.style.display = "flex";

      // =========================
      // 자동 슬라이드
      // =========================
      slideInterval = setInterval(() => {
        // 페이드 아웃
        modalImg.style.opacity = 0;

        setTimeout(() => {
          current++;

          if (current >= item.imgs.length) {
            current = 0;
          }

          // 이미지 변경
          modalImg.src = item.imgs[current];

          // 페이드 인
          modalImg.style.opacity = 1;
        }, 400);
      }, 3000);
    });
  });

  // =========================
  // 링크 클릭시 이벤트 충돌 방지
  // =========================
  modalLink.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // =========================
  // 닫기 버튼
  // =========================
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";

    clearInterval(slideInterval);
  });

  // =========================
  // 바깥 클릭 닫기
  // =========================
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";

      clearInterval(slideInterval);
    }
  });
});

// 맛집
/* =========================
   맛집 데이터
========================= */

const foodList = document.getElementById("food-list");

const foodTitle = document.getElementById("food-title");

const foodDesc = document.getElementById("food-desc");

const foodAreas = document.querySelectorAll(".food-area");

/* 데이터 */
const foodData = [
  /* 마산 */
  {
    title: "마산 맛집",

    desc: "마산의 대표 로컬 맛집들을 소개합니다.",

    foods: [
      {
        name: "마산 아구찜",

        text: "매콤한 양념과 부드러운 아귀가 일품인 대표 음식",

        img: "images/아구찜.jpg",
      },

      {
        name: "오동동 복국",

        text: "시원하고 깔끔한 국물 맛으로 유명한 복국 맛집",

        img: "images/복국.jpg",
      },

      {
        name: "마산 해물찜",

        text: "신선한 해산물이 가득 들어간 인기 맛집",

        img: "images/해물찜.jpg",
      },
    ],
  },

  /* 창원 */
  {
    title: "창원 맛집",

    desc: "현지인들이 자주 찾는 창원 인기 맛집입니다.",

    foods: [
      {
        name: "창원 국밥거리",

        text: "진한 국물의 깊은 맛을 느낄 수 있는 국밥",

        img: "images/국밥.jpg",
      },

      {
        name: "가로수길 브런치",

        text: "감성적인 분위기의 브런치 카페",

        img: "images/브런치.jpg",
      },

      {
        name: "창원 스테이크",

        text: "분위기 좋은 레스토랑으로 데이트 명소",

        img: "images/스테이크.jpg",
      },
    ],
  },

  /* 진해 */
  {
    title: "진해 맛집",

    desc: "벚꽃과 함께 즐길 수 있는 진해 감성 맛집입니다.",

    foods: [
      {
        name: "진해 벚꽃카페",

        text: "벚꽃 시즌 최고의 감성 카페",

        img: "images/벚꽃카페.jpg",
      },

      {
        name: "진해 해산물",

        text: "싱싱한 회와 해산물이 유명한 맛집",

        img: "images/해산물.jpg",
      },

      {
        name: "진해 야시장",

        text: "다양한 먹거리를 즐길 수 있는 야시장",

        img: "images/야시장.jpg",
      },
    ],
  },
];

/* =========================
   렌더 함수
========================= */

function renderFood(index) {
  const item = foodData[index];

  /* 제목 */
  foodTitle.innerText = item.title;

  foodDesc.innerText = item.desc;

  /* 카드 */
  let html = "";

  item.foods.forEach((food) => {
    html += `
    
      <div class="food-card">

        <img src="${food.img}" alt="">

        <div class="food-card-text">

          <h4>${food.name}</h4>

          <p>${food.text}</p>

        </div>

      </div>

    `;
  });

  foodList.innerHTML = html;
}

/* =========================
   클릭 이벤트
========================= */

foodAreas.forEach((area, index) => {
  area.addEventListener("click", () => {
    /* active 제거 */
    foodAreas.forEach((el) => {
      el.classList.remove("active");
    });

    /* active 추가 */
    area.classList.add("active");

    /* 렌더 */
    renderFood(index);
  });
});

/* 최초 실행 */
renderFood(0);
