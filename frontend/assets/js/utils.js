/**
 * AJAX请求工具函数
 * @param {string} url - 请求地址
 * @param {string} method - 请求方法（GET/POST）
 * @param {Object} data - 请求数据
 * @returns {Promise} - 响应结果
 */
async function request(url, method = 'GET', data = {}) {
  const baseUrl = 'http://localhost:3000/api'; // 后端接口基础地址
  let requestUrl = baseUrl + url;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin' // 如果需要处理cookie
  };

  // GET请求：拼接参数
  if (method === 'GET' && Object.keys(data).length > 0) {
    const params = new URLSearchParams(data);
    requestUrl += '?' + params.toString();
  }

  // POST请求：设置请求体
  if (method === 'POST' && Object.keys(data).length > 0) {
    options.body = JSON.stringify(data);
  }

  try {
    console.log(`发送 ${method} 请求到: ${requestUrl}`, options);
    const response = await fetch(requestUrl, options);
    
    // 检查HTTP状态码
    if (!response.ok) {
      console.error(`HTTP错误: ${response.status} ${response.statusText}`);
      return { code: response.status, msg: `HTTP错误: ${response.status}` };
    }
    
    const result = await response.json();
    console.log(`请求 ${requestUrl} 响应:`, result);
    return result;
  } catch (error) {
    console.error(`请求 ${requestUrl} 失败：`, error);
    return { code: 500, msg: '网络错误，请检查后端服务是否启动' };
  }
}

/**
 * 获取URL参数
 * @param {string} key - 参数名
 * @returns {string|null} - 参数值
 */
function getUrlParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

/**
 * 表单验证工具
 */
const validator = {
  // 非空验证
  isRequired(value) {
    return value !== undefined && value !== null && value.trim() !== '';
  },
  // 手机号验证
  isPhoneValid(phone) {
    const reg = /^1[3-9]\d{9}$/;
    return reg.test(phone);
  },
  // 邮箱验证
  isEmailValid(email) {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
    return reg.test(email);
  },
  // 留言长度验证
  isMessageValid(message) {
    return message.length <= 500;
  }
};

/**
 * 显示提示弹窗
 * @param {string} msg - 提示信息
 * @param {string} type - 类型（success/error）
 */
function showToast(msg, type = 'success') {
  // 创建弹窗元素
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '4px';
  toast.style.color = '#fff';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  toast.textContent = msg;

  // 设置样式
  if (type === 'success') {
    toast.style.backgroundColor = 'var(--success-color)';
  } else {
    toast.style.backgroundColor = 'var(--danger-color)';
  }

  // 添加到页面
  document.body.appendChild(toast);

  // 显示弹窗
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);

  // 3秒后移除
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

/**
 * 滚动动画：元素进入视口时添加动画类
 * @param {string} selector - 元素选择器
 * @param {string} animationClass - 动画类名
 */
function scrollAnimation(selector, animationClass) {
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * 滚动动画：元素进入视口时添加动画类
 * @param {string} selector - 元素选择器（如 '.advantage-item'）
 * @param {string} animationClass - 动画类名（如 'animate'）
 */
function scrollAnimation(selector, animationClass) {
  const elements = document.querySelectorAll(selector);
  
  // 检查元素是否在视口中
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // 初始检查一次
  elements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add(animationClass);
    }
  });
  
  // 滚动时检查
  window.addEventListener('scroll', () => {
    elements.forEach(el => {
      if (isInViewport(el) && !el.classList.contains(animationClass)) {
        el.classList.add(animationClass);
      }
    });
  });
}

