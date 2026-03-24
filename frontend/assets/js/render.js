/**
 * 渲染企业简介
 */
async function renderCompanyIntro() {
  const introContent = document.querySelector('.intro-content');
  try {
    const res = await request('/company/intro');
    if (res.code === 200) {
      const intro = res.data.intro;
      introContent.innerHTML = `
        <div class="intro-text">
          <p>${intro}</p>
          <a href="about.html" class="btn">了解更多</a>
        </div>
        <div class="intro-img">
          <img src="assets/images/企业环境.jpg" alt="企业环境">
        </div>
      `;
    } else {
      introContent.innerHTML = `<p class="error">企业简介加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    introContent.innerHTML = `<p class="error">企业简介加载失败，请刷新重试</p>`;
  }
}

/**
 * 渲染核心优势
 */
async function renderAdvantages() {
  const advantagesList = document.querySelector('.advantages-list');
  try {
    const res = await request('/advantages');
    if (res.code === 200) {
      const advantages = res.data;
      let html = '';
      advantages.forEach((item, index) => {
        html += `
          <div class="advantage-item" data-index="${index}">
            <div class="advantage-icon">
              <i class="fas ${item.icon}" style="font-size: 2.5rem; color: var(--primary-color);"></i>
            </div>
            <h3 class="advantage-title">${item.title}</h3>
            <p class="advantage-desc">${item.desc}</p>
          </div>
        `;
      });
      advantagesList.innerHTML = html;
      
      // 添加入场动画
      scrollAnimation('.advantage-item', 'animate');
    } else {
      advantagesList.innerHTML = `<p class="error">核心优势加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    advantagesList.innerHTML = `<p class="error">核心优势加载失败，请刷新重试</p>`;
  }
}

/**
 * 渲染热门产品（取前4个）
 */
async function renderHotProducts() {
  const productsList = document.querySelector('.products-list');
  try {
    const res = await request('/products');
    if (res.code === 200) {
      const hotProducts = res.data.slice(0, 4); // 取前4个热门产品
      let html = '';
      hotProducts.forEach(item => {
        html += `
          <div class="product-item">
            <div class="product-img">
              <img src="${item.img_url}" alt="${item.name}" loading="lazy">
            </div>
            <div class="product-info">
              <h3 class="product-name"><a href="product-detail.html?id=${item.id}">${item.name}</a></h3>
              <p class="product-desc">${item.desc}</p>
              <a href="product-detail.html?id=${item.id}" class="btn btn-outline">查看详情</a>
            </div>
          </div>
        `;
      });
      productsList.innerHTML = html;
      
      // 产品卡片悬浮动画
      const productItems = document.querySelectorAll('.product-item');
      productItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.transform = 'translateY(-5px)';
          item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          item.style.transition = 'var(--transition)';
        });
        item.addEventListener('mouseleave', () => {
          item.style.transform = 'translateY(0)';
          item.style.boxShadow = 'var(--shadow)';
        });
      });
    } else {
      productsList.innerHTML = `<p class="error">产品加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    productsList.innerHTML = `<p class="error">产品加载失败，请刷新重试</p>`;
  }
}

/**
 * 渲染客户案例
 */
async function renderCustomerCases() {
  const casesList = document.querySelector('.cases-list');
  try {
    const res = await request('/cases');
    if (res.code === 200) {
      const cases = res.data;
      let html = '';
      cases.forEach(item => {
        html += `
          <div class="case-item">
            <div class="case-img">
              <img src="${item.img_url}" alt="${item.name}" loading="lazy">
            </div>
            <div class="case-info">
              <h3 class="case-name">${item.name}</h3>
              <p class="case-desc">${item.desc}</p>
            </div>
          </div>
        `;
      });
      casesList.innerHTML = html;
      
      // 案例卡片悬浮动画
      const caseItems = document.querySelectorAll('.case-item');
      caseItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.transform = 'translateY(-5px)';
          item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          item.style.transition = 'var(--transition)';
        });
        item.addEventListener('mouseleave', () => {
          item.style.transform = 'translateY(0)';
          item.style.boxShadow = 'var(--shadow)';
        });
      });
    } else {
      casesList.innerHTML = `<p class="error">客户案例加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    casesList.innerHTML = `<p class="error">客户案例加载失败，请刷新重试</p>`;
  }
}

