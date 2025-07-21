// Закрытие модалки
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Добавление друзей
const addBtn = document.getElementById('addFriend');
const friendsContainer = document.getElementById('friendsContainer');
let friendCount = 0;

addBtn.addEventListener('click', () => {
  if (friendCount >= 3) return;
  friendCount++;

  const div = document.createElement('div');
  div.className = 'friend-group';
  div.innerHTML = `
    <div class="form-group">
      <label>ФИО друга ${friendCount}</label>
      <input type="text" placeholder="Введите ФИО" required>
      <div class="caption-hint">ФИО вашего друга</div>
    </div>
    <div class="form-group">
      <label>Имейл друга ${friendCount}</label>
      <input type="email" placeholder="Введите имейл" required>
      <div class="caption-hint">Email вашего друга</div>
    </div>
    <div class="form-group">
      <label>Телефон друга ${friendCount}</label>
      <input type="tel" placeholder="+7 777 77 77" required>
      <div class="caption-hint">Телефон вашего друга</div>
    </div>
  `;
  friendsContainer.appendChild(div);

  if (friendCount >= 3) {
    addBtn.disabled = true;
    addBtn.style.opacity = '0.5';
    addBtn.style.cursor = 'not-allowed';
  }
});

// Валидация при клике «Дальше»
document.getElementById('nextBtn').addEventListener('click', () => {
  // Удаляем старые подсказки и ошибки
  document.querySelectorAll('.error-hint').forEach(el => el.remove());
  document.querySelectorAll('.form-group.error').forEach(fg => fg.classList.remove('error'));

  const fields = document.querySelectorAll(
    '.modal-body .form-group input[required], .modal-body .form-group select[required]'
  );
  let valid = true;

  fields.forEach(field => {
    if (!field.value.trim()) {
      valid = false;
      const fg = field.closest('.form-group');
      fg.classList.add('error');
      const hint = document.createElement('div');
      hint.className = 'error-hint';
      hint.textContent = 'Обязательное поле';
      fg.appendChild(hint);
    }
  });

  if (valid) {
    console.log('Все поля заполнены — переходим дальше');
    // сюда добавьте логику переключения шага
  }
});
