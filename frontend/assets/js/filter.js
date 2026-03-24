let allProducts = []; // 存储所有产品数据

/**
 * 渲染产品列表
 * @param {Array} products - 待渲染的产品数据（默认全部）
 */
async function renderProductList(products = []) {
  const productsGrid = document.querySelector('.products-grid');
  productsGrid.innerHTML = '<div class="loading"></div>';
  
  try {
    // 首次加载时从接口获取所有产品
    if (products.length === 0 && allProducts.length === 0) {
      const res = await request('/products');
      if (res.code === 200) {
        allProducts = res.data;
      } else {
        productsGrid.innerHTML = `<p class="error">产品加载失败：${res.msg}</p>`;
        return;
      }
    }
    
    // 确定最终要渲染的产品
    const renderProducts = products.length > 0 ? products : allProducts;
    
    if (renderProducts.length === 0) {
      productsGrid.innerHTML = `<p class="error">暂无匹配的产品</p>`;
      return;
    }
    
    let html = '';
    renderProducts.forEach(item => {
      html += `
        <div class="product-card">
          <div class="product-card-img">
            <img src="${item.img_url}" alt="${item.name}" loading="lazy">
          </div>
          <div class="product-card-content">
            <h3 class="product-card-title"><a href="product-detail.html?id=${item.id}">${item.name}</a></h3>
            <p class="product-card-desc">${item.desc}</p>
            <a href="product-detail.html?id=${item.id}" class="btn btn-outline">查看详情</a>
          </div>
        </div>
      `;
    });
    
    productsGrid.innerHTML = html;
    
    // 添加入场动画
    scrollAnimation('.product-card', 'animate');
    
    // 同步URL参数（分类筛选时）
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab.dataset.category !== 'all') {
      const url = new URL(window.location);
      url.searchParams.set('category', activeTab.dataset.category);
      window.history.pushState({}, '', url);
    } else {
      // 全部产品时移除分类参数
      const url = new URL(window.location);
      url.searchParams.delete('category');
      window.history.pushState({}, '', url);
    }
  } catch (error) {
    productsGrid.innerHTML = `<p class="error">产品加载失败，请刷新重试</p>`;
  }
}

/**
 * 绑定产品筛选事件（分类标签）
 */
function bindProductFilterEvents() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 更新标签激活状态
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const category = tab.dataset.category;
      if (category === 'all') {
        // 全部产品
        renderProductList();
      } else {
        // 筛选对应分类的产品
        const filteredProducts = allProducts.filter(product => product.category === category);
        renderProductList(filteredProducts);
      }
    });
  });
  
  // 初始化时根据URL参数激活对应分类
  const urlCategory = getUrlParam('category');
  if (urlCategory) {
    const targetTab = document.querySelector(`.filter-tab[data-category="${urlCategory}"]`);
    if (targetTab) {
      targetTab.click(); // 触发点击事件，自动筛选
    }
  }
}

/**
 * 绑定产品搜索事件
 */
function bindProductSearchEvent() {
  const searchInput = document.getElementById('product-search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  // 搜索逻辑
  const searchProducts = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword === '') {
      renderProductList(); // 空关键词显示全部
      return;
    }
    
    // 按产品名称或描述匹配关键词
    const filteredProducts = allProducts.filter(product => {
      const name = product.name.toLowerCase();
      const desc = product.desc.toLowerCase();
      return name.includes(keyword) || desc.includes(keyword);
    });
    
    renderProductList(filteredProducts);
  };
  
  // 点击搜索按钮
  searchBtn.addEventListener('click', searchProducts);
  
  // 回车搜索
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchProducts();
    }
  });
}