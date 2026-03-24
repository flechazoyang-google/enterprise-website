// 导航高亮
function setActiveNav() {
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (currentPath.includes(href)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// 吸顶导航
function stickyNav() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

// 汉堡菜单
function hamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
  
  // 点击导航项关闭菜单（移动端）
  const navItems = document.querySelectorAll('.nav-item a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('show');
      }
    });
  });
}

// 回到顶部
function backToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  stickyNav();
  hamburgerMenu();
  backToTop();
});