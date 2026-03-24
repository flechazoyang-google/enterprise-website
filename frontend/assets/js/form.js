/**
 * 绑定联系表单事件（验证+提交）
 */
function bindContactFormEvents() {
  const form = document.getElementById('contact-form');
  if (!form) {
    console.error('联系表单未找到，请检查HTML结构');
    return;
  }

  console.log('表单绑定成功，ID:', form.id);
  
  // 调试：打印表单中所有input元素
  console.log('表单中包含的输入字段:');
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    console.log(`- ${input.id || input.name}:`, '类型:', input.type, '值:', input.value);
  });

  // 监听表单提交
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('表单提交事件触发');
    
    // 立即执行异步函数
    handleFormSubmit(form).catch(error => {
      console.error('表单提交处理失败:', error);
      showToast('提交处理出错，请重试', 'error');
    });
    
    return false;
  });

  // 监听留言输入，实时计算字数
  const messageInput = document.getElementById('message');
  const wordCount = document.getElementById('word-count');
  
  if (messageInput && wordCount) {
    // 输入时更新字数
    messageInput.addEventListener('input', () => {
      const length = messageInput.value ? messageInput.value.length : 0;
      updateWordCount(length);
    });
    
    // 初始加载时更新字数
    const initialLength = messageInput.value ? messageInput.value.length : 0;
    updateWordCount(initialLength);
  } else {
    console.warn('留言输入框或字数统计元素未找到');
  }
  
  // 添加实时验证
  setupRealTimeValidation();
}

/**
 * 更新字数统计
 */
function updateWordCount(length) {
  const wordCount = document.getElementById('word-count');
  if (!wordCount) return;
  
  wordCount.textContent = `${length}/500`;
  
  // 实时更新字数显示样式
  if (length > 500) {
    wordCount.style.color = 'var(--danger-color)';
    showError('message-error', '留言内容不能超过500字');
  } else if (length > 450) {
    wordCount.style.color = 'var(--warning-color)';
    hideError('message-error');
  } else {
    wordCount.style.color = 'var(--success-color)';
    hideError('message-error');
  }
}

/**
 * 处理表单提交
 */
async function handleFormSubmit(form) {
  console.log('=== 开始处理表单提交 ===');
  
  // 方法1：使用FormData API（推荐）
  const formData = new FormData(form);
  
  console.log('FormData内容:');
  for (let [key, value] of formData.entries()) {
    console.log(`- ${key}:`, value);
  }
  
  const data = {
    name: (formData.get('name') || '').toString().trim(),
    phone: (formData.get('phone') || '').toString().trim(),
    email: (formData.get('email') || '').toString().trim(),
    message: (formData.get('message') || '').toString().trim()
  };
  
  console.log('表单数据 (FormData方式):', data);
  
  // 方法2：直接DOM获取（对比）
  const debugData = {
    name: document.getElementById('name')?.value?.trim() || '',
    phone: document.getElementById('phone')?.value?.trim() || '',
    email: document.getElementById('email')?.value?.trim() || '',
    message: document.getElementById('message')?.value?.trim() || ''
  };
  
  console.log('表单数据 (直接DOM方式):', debugData);
  
  // 如果两种方式获取的数据不一致，使用FormData的结果
  const finalData = data;
  
  // 验证表单
  const validationResult = validateForm(finalData);
  if (!validationResult.isValid) {
    console.log('表单验证失败:', validationResult.errors);
    showToast('请检查表单中的错误信息', 'error');
    return;
  }
  
  console.log('表单验证通过');
  
  // 显示加载状态
  let submitBtn = form.querySelector('.submit-btn');
  if (!submitBtn) {
    console.error('提交按钮未找到，尝试查找button[type="submit"]');
    const submitBtnAlt = form.querySelector('button[type="submit"]');
    if (!submitBtnAlt) {
      console.error('未找到任何提交按钮');
      showToast('表单配置错误，请刷新页面重试', 'error');
      return;
    }
    submitBtn = submitBtnAlt;
  }
  
  const originalText = submitBtn.textContent;
  const originalDisabled = submitBtn.disabled;
  
  submitBtn.textContent = '提交中...';
  submitBtn.disabled = true;
  
  try {
    console.log('开始提交表单数据...');
    
    // ====== 修改这里：使用真实后端接口 ======
    // 原来的模拟请求（注释掉）：
    // const res = await simulateFormSubmit(finalData);
    
    // 新的真实请求：使用正确的后端路径 '/contact/message'
    console.log('发送POST请求到 /contact/message');
    const res = await request('/contact/message', 'POST', finalData);
    
    console.log('提交响应:', res);
    
    if (res.code === 200) {
      // 提交成功
      showToast('留言提交成功，我们会尽快联系您！', 'success');
      
      // 重置表单
      form.reset();
      
      // 重置字数统计
      updateWordCount(0);
      
      // 重置所有错误提示
      ['name-error', 'phone-error', 'email-error', 'message-error'].forEach(id => {
        hideError(id);
      });
    } else {
      // 提交失败
      showToast(`提交失败：${res.msg || '服务器错误'}`, 'error');
    }
  } catch (error) {
    console.error('表单提交过程中发生错误:', error);
    showToast('网络错误，请稍后重试', 'error');
  } finally {
    // 恢复按钮状态
    submitBtn.textContent = originalText;
    submitBtn.disabled = originalDisabled;
  }
  
  console.log('=== 表单提交处理完成 ===');
}

/**
 * 模拟表单提交（用于测试，没有后端时使用）
 */
async function simulateFormSubmit(formData) {
  console.log('模拟表单提交，数据:', formData);
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // 总是返回成功（为了测试）
  return {
    code: 200,
    msg: '表单提交成功',
    data: {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...formData
    }
  };
}

/**
 * 验证表单数据
 */
function validateForm(formData) {
  console.log('开始验证表单数据:', formData);
  
  const errors = {};
  let isValid = true;
  
  // 验证姓名
  if (!validator.isRequired(formData.name)) {
    errors.name = '姓名不能为空';
    showError('name-error', '姓名不能为空');
    isValid = false;
  } else if (formData.name.length < 2 || formData.name.length > 20) {
    errors.name = '姓名长度应为2-20个字符';
    showError('name-error', '姓名长度应为2-20个字符');
    isValid = false;
  } else {
    hideError('name-error');
  }
  
  // 验证手机号
  if (!validator.isRequired(formData.phone)) {
    errors.phone = '手机号不能为空';
    showError('phone-error', '手机号不能为空');
    isValid = false;
  } else if (!validator.isPhoneValid(formData.phone)) {
    errors.phone = '请输入有效的手机号';
    showError('phone-error', '请输入有效的手机号（11位，1开头）');
    isValid = false;
  } else {
    hideError('phone-error');
  }
  
  // 验证邮箱
  if (!validator.isRequired(formData.email)) {
    errors.email = '邮箱不能为空';
    showError('email-error', '邮箱不能为空');
    isValid = false;
  } else if (!validator.isEmailValid(formData.email)) {
    errors.email = '请输入有效的邮箱';
    showError('email-error', '请输入有效的邮箱（如：example@domain.com）');
    isValid = false;
  } else {
    hideError('email-error');
  }
  
  // 验证留言内容
  if (!validator.isRequired(formData.message)) {
    errors.message = '留言内容不能为空';
    showError('message-error', '留言内容不能为空');
    isValid = false;
  } else if (!validator.isMessageValid(formData.message)) {
    errors.message = '留言内容不能超过500字';
    showError('message-error', '留言内容不能超过500字');
    isValid = false;
  } else if (formData.message.length < 10) {
    errors.message = '留言内容至少10个字符';
    showError('message-error', '留言内容至少10个字符');
    isValid = false;
  } else {
    hideError('message-error');
  }
  
  console.log('验证结果:', { isValid, errors });
  return { isValid, errors };
}

/**
 * 设置实时验证
 */
function setupRealTimeValidation() {
  console.log('设置实时验证');
  
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  
  if (phoneInput) {
    phoneInput.addEventListener('blur', () => {
      const phone = phoneInput.value ? phoneInput.value.trim() : '';
      if (phone && !validator.isPhoneValid(phone)) {
        showError('phone-error', '请输入有效的手机号（11位，1开头）');
      } else if (phone) {
        hideError('phone-error');
      }
    });
  } else {
    console.warn('手机号输入框未找到');
  }
  
  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      const email = emailInput.value ? emailInput.value.trim() : '';
      if (email && !validator.isEmailValid(email)) {
        showError('email-error', '请输入有效的邮箱（如：example@domain.com）');
      } else if (email) {
        hideError('email-error');
      }
    });
  } else {
    console.warn('邮箱输入框未找到');
  }
  
  // 添加实时验证到姓名字段
  const nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('blur', () => {
      const name = nameInput.value ? nameInput.value.trim() : '';
      if (name && name.length < 2) {
        showError('name-error', '姓名至少2个字符');
      } else if (name) {
        hideError('name-error');
      }
    });
  }
}

/**
 * 显示错误提示
 */
function showError(id, msg) {
  const errorEl = document.getElementById(id);
  if (errorEl) {
    errorEl.textContent = msg;
    errorEl.style.color = 'var(--danger-color)';
    errorEl.style.fontSize = '0.9rem';
    errorEl.style.marginTop = '5px';
    errorEl.style.display = 'block';
    
    // 添加错误样式到对应的输入框
    const inputField = document.getElementById(id.replace('-error', ''));
    if (inputField) {
      inputField.style.borderColor = 'var(--danger-color)';
      inputField.addEventListener('input', function() {
        this.style.borderColor = '';
      }, { once: true });
    }
  } else {
    console.warn(`错误提示元素 #${id} 未找到`);
  }
}

/**
 * 隐藏错误提示
 */
function hideError(id) {
  const errorEl = document.getElementById(id);
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
    
    // 移除输入框的错误样式
    const inputField = document.getElementById(id.replace('-error', ''));
    if (inputField) {
      inputField.style.borderColor = '';
    }
  }
}