async function renderCompanyIntro() {
  const introContent = document.querySelector('.intro-content');
  try {
    const res = await request('/company/intro');
    if (res.code === 200) {
      const intro = res.data.intro;
      introContent.innerHTML = `
        <div class="intro-text">
          <p>${escapeHtml(intro)}</p>
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
            <h3 class="advantage-title">${escapeHtml(item.title)}</h3>
            <p class="advantage-desc">${escapeHtml(item.desc)}</p>
          </div>
        `;
      });
      advantagesList.innerHTML = html;
      scrollAnimation('.advantage-item', 'animate');
    } else {
      advantagesList.innerHTML = `<p class="error">核心优势加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    advantagesList.innerHTML = `<p class="error">核心优势加载失败，请刷新重试</p>`;
  }
}

async function renderHotProducts() {
  const productsList = document.querySelector('.products-list');
  try {
    const res = await request('/products');
    if (res.code === 200) {
      const hotProducts = res.data.slice(0, 4);
      let html = '';
      hotProducts.forEach(item => {
        html += `
          <div class="product-item">
            <div class="product-img">
              <img src="${item.img_url}" alt="${item.name}" loading="lazy">
            </div>
            <div class="product-info">
              <h3 class="product-name"><a href="product-detail.html?id=${item.id}">${escapeHtml(item.name)}</a></h3>
              <p class="product-desc">${escapeHtml(item.desc)}</p>
              <a href="product-detail.html?id=${item.id}" class="btn btn-outline">查看详情</a>
            </div>
          </div>
        `;
      });
      productsList.innerHTML = html;
    } else {
      productsList.innerHTML = `<p class="error">产品加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    productsList.innerHTML = `<p class="error">产品加载失败，请刷新重试</p>`;
  }
}

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
              <h3 class="case-name">${escapeHtml(item.name)}</h3>
              <p class="case-desc">${escapeHtml(item.desc)}</p>
            </div>
          </div>
        `;
      });
      casesList.innerHTML = html;
    } else {
      casesList.innerHTML = `<p class="error">客户案例加载失败：${res.msg}</p>`;
    }
  } catch (error) {
    casesList.innerHTML = `<p class="error">客户案例加载失败，请刷新重试</p>`;
  }
}
