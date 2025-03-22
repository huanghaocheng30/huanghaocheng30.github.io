// 菜单按钮功能
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// 轮播功能
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
let isMuted = true; // 提升到文件顶部

// 初始化函数
const init = () => {
    const videos = document.querySelectorAll(".video-slide");
    videos.forEach(video => {});
    const bgm = document.getElementById('bgm');
    bgm.muted = isMuted;
    bgm.loop = true;
  };
  
  
  // DOM加载后执行
  document.addEventListener("DOMContentLoaded", () => {
    init();
    
    // 添加其他事件监听...
    soundControl.addEventListener("click", toggleSound);
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => sliderNav(i));
    });
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });
  });
const sliderNav = function(manual) {
    try {
      btns.forEach((btn) => btn.classList.remove("active"));
      slides.forEach((slide) => {
        slide.classList.remove("active");
        slide.pause(); // 新增：暂停非当前视频
      });
      contents.forEach((content) => content.classList.remove("active"));
  
      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
      
      // 强制刷新播放
      slides[manual].play().catch(e => console.log("自动播放被阻止"));
    } catch (error) {
      console.error("轮播切换错误:", error);
    }
  };


btns.forEach((btn, i) => {
  btn.addEventListener("click", () => sliderNav(i));
});

// 声音控制功能
const soundControl = document.querySelector(".sound-control");


const toggleSound = () => {
  const bgm = document.getElementById('bgm');
  isMuted = !isMuted;
  bgm.muted = isMuted;
  
  if (!isMuted && bgm.paused) {
    bgm.play().catch(() => {
      alert("请先点击页面任意位置激活音频");
    });
  }
  
  soundControl.innerHTML = isMuted 
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
};

soundControl.addEventListener("click", toggleSound);
