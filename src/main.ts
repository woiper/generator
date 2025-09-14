import './style.css';
import { generateParallelWorlds } from './worldGenerator';
import { createUserForm, createWorldCard, createLoadingSpinner, getUserData } from './components';

class ParallelWorldsApp {
  private app: HTMLElement;
  private worldsContainer: HTMLElement;

  constructor() {
    this.app = document.getElementById('app')!;
    this.worldsContainer = document.createElement('div');
    this.worldsContainer.className = 'worlds-container';
    this.init();
  }

  private init(): void {
    this.renderHeader();
    this.renderForm();
    this.app.appendChild(this.worldsContainer);
  }

  private renderHeader(): void {
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
      <h1>🌌 Генератор Параллельных Миров</h1>
      <p>
        Откройте для себя альтернативные версии своей жизни! 
        Введите информацию о себе, и мы создадим 5 уникальных параллельных миров, 
        где вы могли бы жить совершенно другой жизнью.
      </p>
    `;
    this.app.appendChild(header);
  }

  private renderForm(): void {
    const container = document.createElement('div');
    container.className = 'container';
    
    const form = createUserForm();
    container.appendChild(form);
    
    const generateBtn = form.querySelector('#generateBtn') as HTMLButtonElement;
    generateBtn.addEventListener('click', () => this.handleGenerate());
    
    this.app.appendChild(container);
  }

  private async handleGenerate(): Promise<void> {
    const userData = getUserData();
    if (!userData) return;

    const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
    generateBtn.disabled = true;
    generateBtn.textContent = 'Создаем миры...';

    // Показываем загрузку
    this.worldsContainer.innerHTML = '';
    const loading = createLoadingSpinner();
    this.worldsContainer.appendChild(loading);

    // Имитируем процесс генерации
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Генерируем миры
    const worlds = generateParallelWorlds(userData);
    
    // Очищаем контейнер и добавляем миры
    this.worldsContainer.innerHTML = '';
    
    worlds.forEach((world, index) => {
      setTimeout(() => {
        const worldCard = createWorldCard(world);
        this.worldsContainer.appendChild(worldCard);
      }, index * 200);
    });

    // Восстанавливаем кнопку
    generateBtn.disabled = false;
    generateBtn.innerHTML = '🔄 Создать новые миры';

    // Прокручиваем к результатам
    setTimeout(() => {
      this.worldsContainer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 1000);
  }
}

// Инициализируем приложение
new ParallelWorldsApp();