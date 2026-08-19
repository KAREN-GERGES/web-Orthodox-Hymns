// ===============================
// مكتبة الترانيم
// ===============================

const songs = [
  {
    title: "يا أم النور",
    category: "روحية",
    audio: "audio/ya-om-el-noor.mp3"
  },

  {
    title: "إبؤورو",
    category: "التسبحة",
    audio: "audio/ebouro.mp3"
  },

  {
    title: "تين أوي إنجيم",
    category: "التسبحة",
    audio: "audio/ten-oui-enhimen.mp3"
  },

  {
    title: "السلام لك يا مريم",
    category: "روحية",
    audio: "audio/elsalam-laki.mp3"
  },

  {
    title: "ترنيمة المناسبة",
    category: "مناسبات",
    audio: "audio/taraneem.mp3"
  }
];


// ===============================
// عناصر الصفحة
// ===============================

const songsContainer = document.getElementById("songsContainer");

const searchInput = document.getElementById("searchInput");

const noResults = document.getElementById("noResults");

const player = document.getElementById("player");

const audioPlayer = document.getElementById("audioPlayer");

const currentSong = document.getElementById("currentSong");

const currentCategory = document.getElementById("currentCategory");

const filterButtons = document.querySelectorAll(".filter");


// التصنيف المختار حاليًا
let selectedCategory = "all";


// ===============================
// عرض الترانيم
// ===============================

function displaySongs() {

  // الكلام اللي المستخدم كتبه في البحث
  const searchText = searchInput.value.trim().toLowerCase();


  // فلترة الترانيم
  const filteredSongs = songs.filter(song => {

    const title = song.title.toLowerCase();

    const category = song.category.toLowerCase();


    // البحث في اسم الترانيمة أو التصنيف
    const matchesSearch =
      title.includes(searchText) ||
      category.includes(searchText);


    // التأكد من التصنيف
    const matchesCategory =
      selectedCategory === "all" ||
      song.category === selectedCategory;


    return matchesSearch && matchesCategory;
  });


  // مسح الترانيم القديمة
  songsContainer.innerHTML = "";


  // لو مفيش نتائج
  if (filteredSongs.length === 0) {

    noResults.classList.remove("hidden");

    return;
  }


  // إخفاء رسالة مفيش نتائج
  noResults.classList.add("hidden");


  // عرض الترانيم
  filteredSongs.forEach(song => {

    const songCard = document.createElement("div");

    songCard.className = "song-card";


    songCard.innerHTML = `
      <div class="song-icon">🎵</div>

      <h3>${song.title}</h3>

      <div class="category">
        ${song.category}
      </div>

      <button class="play-btn">
        ▶ تشغيل الترانيمة
      </button>
    `;


    // زر التشغيل
    const playButton = songCard.querySelector(".play-btn");


    playButton.addEventListener("click", () => {

      playSong(song);

    });


    songsContainer.appendChild(songCard);

  });

}


// ===============================
// تشغيل الترانيمة
// ===============================

function playSong(song) {

  currentSong.textContent = song.title;

  currentCategory.textContent = song.category;


  // مكان ملف الصوت
  audioPlayer.src = song.audio;


  // إظهار المشغل
  player.classList.remove("hidden");


  // تشغيل الصوت
  audioPlayer.play().catch(() => {

    alert(
      "ملف الصوت غير موجود.\n" +
      "تأكدي إن ملف الـ MP3 موجود داخل مجلد audio."
    );

  });

}


// ===============================
// البحث
// ===============================

searchInput.addEventListener("input", function() {

  displaySongs();

});


// ===============================
// التصنيفات
// ===============================

filterButtons.forEach(button => {

  button.addEventListener("click", function() {

    // إزالة active من كل الأزرار
    filterButtons.forEach(btn => {

      btn.classList.remove("active");

    });


    // تفعيل الزر اللي اتضغط
    button.classList.add("active");


    // معرفة التصنيف
    selectedCategory = button.dataset.category;


    // إعادة عرض الترانيم
    displaySongs();

  });

});


// ===============================
// تشغيل المكتبة أول ما الصفحة تفتح
// ===============================

displaySongs();