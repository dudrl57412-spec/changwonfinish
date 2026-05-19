window.addEventListener("load", () => {
  /* =========================
     AOS
  ========================= */
  AOS.init({
    duration: 1200,
    once: false,
    mirror: true,
    easing: "ease-out-cubic",
  });

  /* =========================
     SWIPER (그대로 유지)
  ========================= */
  new Swiper(".history-sw", {
    loop: true,
    pagination: { el: ".history-pagination", clickable: true },
    navigation: { nextEl: ".history-next", prevEl: ".history-prev" },
  });

  new Swiper(".famous-sw", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: { el: ".famous-pagination", clickable: true },
    breakpoints: {
      0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 20 },
      768: { slidesPerView: 2, centeredSlides: false, spaceBetween: 24 },
      1200: { slidesPerView: 3, centeredSlides: false, spaceBetween: 30 },
    },
  });

  const festivalSwiper = new Swiper(".festival-swiper", {
    speed: 900,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 18,
    pagination: { el: ".festival-pagination", clickable: true },
    breakpoints: {
      0: { slidesPerView: 1.08, centeredSlides: true, spaceBetween: 12 },
      768: { slidesPerView: 2, centeredSlides: false, spaceBetween: 16 },
      1200: { slidesPerView: 3, centeredSlides: false, spaceBetween: 18 },
    },
  });

  /* =========================
     HEADER
  ========================= */
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-section");
    if (!header) return;

    header.classList.toggle("active", window.scrollY > 50);
  });

  /* =========================
     VIDEO
  ========================= */
  const video = document.querySelector(".bg-video");
  if (video) {
    video.muted = true;
    video.play().catch(() => {
      document.addEventListener("touchstart", () => video.play(), {
        once: true,
      });
    });
  }

  /* =========================
     관광 모달
  ========================= */
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalLink = document.getElementById("modal-link");
  const closeBtn = document.querySelector(".close");
  const cards = document.querySelectorAll(".tourist-img img");

  let slideInterval;

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

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const item = data[index];
      let current = 0;

      clearInterval(slideInterval);

      modal.style.display = "flex";
      modalImg.src = item.imgs[0];
      modalTitle.textContent = item.title;
      modalDesc.textContent = item.desc;
      modalLink.href = item.link;

      slideInterval = setInterval(() => {
        modalImg.style.opacity = 0;

        setTimeout(() => {
          current = (current + 1) % item.imgs.length;
          modalImg.src = item.imgs[current];
          modalImg.style.opacity = 1;
        }, 300);
      }, 3000);
    });
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
    clearInterval(slideInterval);
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      clearInterval(slideInterval);
    }
  });

  /* =========================
   🔥 맛집 (안전 수정 버전)
========================= */

  const foodList = document.getElementById("food-list");
  const foodTitle = document.getElementById("food-title");
  const foodDesc = document.getElementById("food-desc");
  const foodAreas = document.querySelectorAll(".food-map .area");

  if (foodList && foodTitle && foodDesc && foodAreas.length > 0) {
    const foodData = {
      masan: {
        title: "마산 맛집",
        desc: "마산의 대표 로컬 맛집들을 소개합니다.",
        foods: [
          {
            name: "오동동 아구찜",
            text: "마산 대표 맛집",
            img: "images/아구찜.jpg",
            address: "오동동 123",
            phone: "055-123-4567",
            pet: "가능",
          },
          {
            name: "수산시장 횟집",
            text: "싱싱한 해산물",
            img: "images/해산물.jpg",
            address: "어시장 2길 10",
            phone: "055-222-1111",
            pet: "가능",
          },
          {
            name: "가포 칼국수",
            text: "해물 칼국수",
            img: "images/칼국수.jpg",
            address: "가포로 55",
            phone: "055-333-9999",
            pet: "불가",
          },
        ],
      },

      changwon: {
        title: "창원 맛집",
        desc: "창원 현지인이 자주 찾는 맛집입니다.",
        foods: [
          {
            name: "국밥거리",
            text: "진한 국밥",
            img: "images/국밥.jpg",
            address: "중앙대로",
            phone: "055-444-1111",
            pet: "가능",
          },
          {
            name: "브런치 카페",
            text: "감성 브런치",
            img: "images/브런치.jpg",
            address: "가로수길",
            phone: "055-555-2222",
            pet: "가능",
          },
          {
            name: "스테이크",
            text: "고급 레스토랑",
            img: "images/스테이크.jpg",
            address: "상남동",
            phone: "055-666-3333",
            pet: "불가",
          },
        ],
      },

      jinhae: {
        title: "진해 맛집",
        desc: "벚꽃과 함께 즐기는 맛집",
        foods: [
          {
            name: "벚꽃카페",
            text: "감성 카페",
            img: "images/벚꽃카페.jpg",
            address: "여좌천",
            phone: "055-777-1111",
            pet: "가능",
          },
          {
            name: "해산물",
            text: "싱싱한 회",
            img: "images/해산물.jpg",
            address: "중앙시장",
            phone: "055-888-2222",
            pet: "가능",
          },
          {
            name: "야시장",
            text: "길거리 음식",
            img: "images/야시장.jpg",
            address: "여좌동",
            phone: "055-999-3333",
            pet: "가능",
          },
        ],
      },
    };

    function render(key) {
      const data = foodData[key];
      if (!data) return;

      foodTitle.textContent = data.title;
      foodDesc.textContent = data.desc;

      foodList.innerHTML = data.foods
        .map(
          (f) => `
      <div class="food-card">
        <img src="${f.img}">
        <div class="food-card-text">
          <h4>${f.name}</h4>
          <p>${f.text}</p>
          <div class="food-info">
            <div>📍 ${f.address}</div>
            <div>📞 ${f.phone}</div>
            <div>🐶 ${f.pet}</div>
          </div>
        </div>
      </div>
    `,
        )
        .join("");
    }

    foodAreas.forEach((area) => {
      area.addEventListener("click", () => {
        let key = null;

        if (area.classList.contains("masan")) key = "masan";
        else if (area.classList.contains("changwon")) key = "changwon";
        else if (area.classList.contains("jinhae")) key = "jinhae";

        if (!key) return;

        foodAreas.forEach((el) => el.classList.remove("active"));
        area.classList.add("active");

        render(key);
      });
    });

    render("masan");
  }
});
