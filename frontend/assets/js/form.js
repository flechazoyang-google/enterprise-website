function bindContactFormEvents() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleFormSubmit(form).catch(error => {
      console.error('表单提交处理失败:', error);
      showToast('提交处理出错，请重试', 'error');
    });
    return false;
  });

  const messageInput = document.getElementById('message');
  const wordCount = document.getElementById('word-count');

  if (messageInput && wordCount) {
    messageInput.addEventListener('input', () => {
      updateWordCount(messageInput.value ? messageInput.value.length : 0);
    });
    updateWordCount(messageInput.value ? messageInput.value.length : 0);
  }

  setupRealTimeValidation();
}

function updateWordCount(length) {
  const wordCount = document.getElementById('word-count');
  if (!wordCount) return;

  wordCount.textContent = `${length}/500`;

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

async function handleFormSubmit(form) {
  const formData = new FormData(form);
  const data = {
    name: (formData.get('name') || '').toString().trim(),
    phone: (formData.get('phone') || '').toString().trim(),
    email: (formData.get('email') || '').toString().trim(),
    message: (formData.get('message') || '').toString().trim()
  };

  const validationResult = validateForm(data);
  if (!validationResult.isValid) {
    showToast('请检查表单中的错误信息', 'error');
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  const originalText = submitBtn.textContent;
  submitBtn.textContent = '提交中...';
  submitBtn.disabled = true;

  try {
    const res = await request('/contact/message', 'POST', data);

    if (res.code === 200) {
      showToast('留言提交成功，我们会尽快联系您！', 'success');
      form.reset();
      updateWordCount(0);
      ['name-error', 'phone-error', 'email-error', 'message-error'].forEach(id => {
        hideError(id);
      });
    } else {
      showToast(`提交失败：${res.msg || '服务器错误'}`, 'error');
    }
  } catch (error) {
    console.error('表单提交失败:', error);
    showToast('网络错误，请稍后重试', 'error');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

function validateForm(formData) {
  const errors = {};
  let isValid = true;

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

  if (!validator.isRequired(formData.message)) {
    errors.message = '留言内容不能为空';
    showError('message-error', '留言内容不能为空');
    isValid = false;
  } else if (formData.message.length < 10) {
    errors.message = '留言内容至少10个字符';
    showError('message-error', '留言内容至少10个字符');
    isValid = false;
  } else if (!validator.isMessageValid(formData.message)) {
    errors.message = '留言内容不能超过500字';
    showError('message-error', '留言内容不能超过500字');
    isValid = false;
  } else {
    hideError('message-error');
  }

  return { isValid, errors };
}

function setupRealTimeValidation() {
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const nameInput = document.getElementById('name');

  if (phoneInput) {
    phoneInput.addEventListener('blur', () => {
      const phone = phoneInput.value ? phoneInput.value.trim() : '';
      if (phone && !validator.isPhoneValid(phone)) {
        showError('phone-error', '请输入有效的手机号（11位，1开头）');
      } else if (phone) {
        hideError('phone-error');
      }
    });
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
  }

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

function showError(id, msg) {
  const errorEl = document.getElementById(id);
  if (errorEl) {
    errorEl.textContent = msg;
    errorEl.style.color = 'var(--danger-color)';
    errorEl.style.fontSize = '0.9rem';
    errorEl.style.marginTop = '5px';
    errorEl.style.display = 'block';

    const inputField = document.getElementById(id.replace('-error', ''));
    if (inputField) {
      inputField.style.borderColor = 'var(--danger-color)';
      inputField.addEventListener('input', function() {
        this.style.borderColor = '';
      }, { once: true });
    }
  }
}

function hideError(id) {
  const errorEl = document.getElementById(id);
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';

    const inputField = document.getElementById(id.replace('-error', ''));
    if (inputField) {
      inputField.style.borderColor = '';
    }
  }
}
