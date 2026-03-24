/**
 * 轮播图逻辑：自动切换+手动切换+指示器
 */
let carouselData = [];
let currentIndex = 0;
let carouselTimer = null;

// 初始化轮播图
async function initCarousel() {
  try {
    // 从接口获取轮播图数据
    const res = await request('/carousel');
    if (res.code === 200) {
      carouselData = res.data;
      renderCarouselItems();
      renderCarouselIndicators();
      startCarouselTimer();
      bindCarouselEvents();
    } else {
      console.error('轮播图数据获取失败：', res.msg);
    }
  } catch (error) {
    console.error('轮播图初始化失败：', error);
  }
}

// 渲染轮播图项
function renderCarouselItems() {
  const wrapper = document.querySelector('.carousel-wrapper');
  wrapper.innerHTML = '';
  
  carouselData.forEach(item => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    carouselItem.innerHTML = `
      <img src="${item.img_url}" alt="${item.title}" loading="lazy">
      <div class="carousel-desc">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
    wrapper.appendChild(carouselItem);
  });
  
  // 设置初始位置
  updateCarouselPosition();
}

// 渲染轮播图指示器
function renderCarouselIndicators() {
  const indicators = document.querySelector('.carousel-indicators');
  indicators.innerHTML = '';
  
  carouselData.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
    indicator.dataset.index = index;
    indicators.appendChild(indicator);
  });
}

// 更新轮播图位置
function updateCarouselPosition() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const itemWidth = document.querySelector('.carousel-item')?.offsetWidth || 0;
  wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  
  // 更新指示器激活状态
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

// 启动自动切换计时器
function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarouselPosition();
  }, 3000); // 3秒切换一次
}

// 绑定轮播图事件（手动切换）
function bindCarouselEvents() {
  // 上一张
  document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarouselPosition();
    startCarouselTimer(); // 重置计时器
  });
  
  // 下一张
  document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarouselPosition();
    startCarouselTimer();
  });
  
  // 指示器点击
  document.querySelectorAll('.carousel-indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
      currentIndex = parseInt(indicator.dataset.index);
      updateCarouselPosition();
      startCarouselTimer();
    });
  });
  
  // 鼠标悬停暂停，离开继续
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(carouselTimer);
  });
  carouselContainer.addEventListener('mouseleave', () => {
    startCarouselTimer();
  });
}

// 暴露给全局，供首页调用
window.renderCarousel = initCarousel;