import { UserData, ParallelWorld } from './types';

export function createUserForm(): HTMLElement {
  const form = document.createElement('div');
  form.className = 'form-container';
  
  form.innerHTML = `
    <div class="form-grid">
      <div class="form-group">
        <label for="name">Ваше имя</label>
        <input type="text" id="name" placeholder="Введите ваше имя" required>
      </div>
      <div class="form-group">
        <label for="age">Возраст</label>
        <input type="number" id="age" min="16" max="100" placeholder="25" required>
      </div>
      <div class="form-group">
        <label for="profession">Текущая профессия</label>
        <input type="text" id="profession" placeholder="Дизайнер, программист, учитель..." required>
      </div>
      <div class="form-group">
        <label for="hobby">Любимое хобби</label>
        <input type="text" id="hobby" placeholder="Чтение, спорт, музыка..." required>
      </div>
      <div class="form-group">
        <label for="personality">Тип личности</label>
        <select id="personality" required>
          <option value="">Выберите тип</option>
          <option value="extrovert">Экстраверт</option>
          <option value="introvert">Интроверт</option>
          <option value="ambivert">Амбиверт</option>
        </select>
      </div>
      <div class="form-group">
        <label for="dreamLocation">Место мечты</label>
        <input type="text" id="dreamLocation" placeholder="Токио, Париж, космос..." required>
      </div>
    </div>
    <button type="button" class="generate-btn" id="generateBtn">
      🌟 Создать параллельные миры
    </button>
  `;
  
  return form;
}

export function createWorldCard(world: ParallelWorld): HTMLElement {
  const card = document.createElement('div');
  card.className = `world-card ${world.theme} fade-in`;
  
  card.innerHTML = `
    <div class="world-header">
      <div class="world-icon">${world.icon}</div>
      <div>
        <h3 class="world-title">${world.title}</h3>
        <p class="world-profession">${world.profession}</p>
      </div>
    </div>
    
    <p class="world-description">${world.description}</p>
    
    <div class="world-stats">
      <div class="stat">
        <div class="stat-value">${world.stats.happiness}%</div>
        <div class="stat-label">Счастье</div>
      </div>
      <div class="stat">
        <div class="stat-value">${world.stats.adventure}%</div>
        <div class="stat-label">Приключения</div>
      </div>
      <div class="stat">
        <div class="stat-value">${world.stats.success}%</div>
        <div class="stat-label">Успех</div>
      </div>
    </div>
    
    <div class="world-quest">
      <h4 class="quest-title">🎯 ${world.quest.title}</h4>
      <p class="quest-description">${world.quest.description}</p>
    </div>
  `;
  
  // Добавляем интерактивность
  card.addEventListener('click', () => {
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
      card.style.transform = '';
    }, 200);
  });
  
  return card;
}

export function createLoadingSpinner(): HTMLElement {
  const loading = document.createElement('div');
  loading.className = 'loading';
  
  loading.innerHTML = `
    <div class="loading-spinner"></div>
    <h3>Создаем ваши параллельные миры...</h3>
    <p>Анализируем данные и генерируем уникальные сценарии</p>
  `;
  
  return loading;
}

export function getUserData(): UserData | null {
  const name = (document.getElementById('name') as HTMLInputElement).value.trim();
  const age = parseInt((document.getElementById('age') as HTMLInputElement).value);
  const profession = (document.getElementById('profession') as HTMLInputElement).value.trim();
  const hobby = (document.getElementById('hobby') as HTMLInputElement).value.trim();
  const personality = (document.getElementById('personality') as HTMLSelectElement).value;
  const dreamLocation = (document.getElementById('dreamLocation') as HTMLInputElement).value.trim();
  
  if (!name || !age || !profession || !hobby || !personality || !dreamLocation) {
    alert('Пожалуйста, заполните все поля!');
    return null;
  }
  
  if (age < 16 || age > 100) {
    alert('Возраст должен быть от 16 до 100 лет!');
    return null;
  }
  
  return {
    name,
    age,
    profession,
    hobby,
    personality,
    dreamLocation
  };
}