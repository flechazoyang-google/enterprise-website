async function request(url, method = 'GET', data = {}) {
  const baseUrl = '/api';
  let requestUrl = baseUrl + url;
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin'
  };

  if (method === 'GET' && Object.keys(data).length > 0) {
    const params = new URLSearchParams(data);
    requestUrl += '?' + params.toString();
  }

  if (method === 'POST' && Object.keys(data).length > 0) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(requestUrl, options);
    if (!response.ok) {
      return { code: response.status, msg: `HTTP错误: ${response.status}` };
    }
    return await response.json();
  } catch (error) {
    console.error(`请求 ${requestUrl} 失败：`, error);
    return { code: 500, msg: '网络错误，请检查后端服务是否启动' };
  }
}

function getUrlParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

const validator = {
  isRequired(value) {
    return value !== undefined && value !== null && value.trim() !== '';
  },
  isPhoneValid(phone) {
    const reg = /^1[3-9]\d{9}$/;
    return reg.test(phone);
  },
  isEmailValid(email) {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
    return reg.test(email);
  },
  isMessageValid(message) {
    return message.length <= 500;
  }
};

function showToast(msg, type = 'success') {
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

  if (type === 'success') {
    toast.style.backgroundColor = 'var(--success-color)';
  } else {
    toast.style.backgroundColor = 'var(--danger-color)';
  }

  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '1'; }, 10);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => { document.body.removeChild(toast); }, 300);
  }, 3000);
}

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
  elements.forEach(element => observer.observe(element));
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDetailContent(content) {
  if (!content) return '';
  return content.split('\n').map(paragraph => {
    return paragraph.trim() ? `<p>${escapeHtml(paragraph)}</p>` : '';
  }).join('');
}
