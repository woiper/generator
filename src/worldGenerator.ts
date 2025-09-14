import { UserData, ParallelWorld, WorldStats, Quest } from './types';

const professions = {
  tech: [
    'Архитектор виртуальных миров',
    'Детектив цифровых преступлений',
    'Инженер временных парадоксов',
    'Программист эмоций',
    'Хакер реальности'
  ],
  creative: [
    'Дирижер цветовых симфоний',
    'Скульптор из звуков',
    'Художник снов',
    'Поэт параллельных измерений',
    'Архитектор эмоций'
  ],
  adventure: [
    'Исследователь забытых цивилизаций',
    'Капитан межгалактического корабля',
    'Дрессировщик драконов',
    'Охотник за сокровищами времени',
    'Гид по опасным мирам'
  ],
  mystical: [
    'Хранитель древних знаний',
    'Толкователь пророчеств',
    'Алхимик эмоций',
    'Маг стихий',
    'Целитель душ'
  ],
  futuristic: [
    'Пилот квантовых кораблей',
    'Биоинженер новых форм жизни',
    'Торговец воспоминаниями',
    'Архитектор планет',
    'Дипломат между видами'
  ]
};

const worldTitles = {
  tech: [
    'Неоновый Мегаполис',
    'Цифровая Утопия',
    'Киберпанк Реальность',
    'Техно-Рай',
    'Матрица Будущего'
  ],
  creative: [
    'Богемный Квартал',
    'Город Искусств',
    'Творческая Вселенная',
    'Мир Вдохновения',
    'Артистическая Реальность'
  ],
  adventure: [
    'Дикие Земли',
    'Неизведанные Территории',
    'Мир Приключений',
    'Земля Героев',
    'Континент Открытий'
  ],
  mystical: [
    'Мистический Лес',
    'Земля Магии',
    'Царство Тайн',
    'Мир Чудес',
    'Священные Земли'
  ],
  futuristic: [
    'Космическая Станция Альфа',
    'Планета Новых Возможностей',
    'Футуристический Мегаполис',
    'Мир Завтрашнего Дня',
    'Галактическая Империя'
  ]
};

const icons = {
  tech: '🤖',
  creative: '🎨',
  adventure: '🗺️',
  mystical: '🔮',
  futuristic: '🚀'
};

function generateStats(personality: string, theme: string): WorldStats {
  const baseStats = {
    happiness: Math.floor(Math.random() * 30) + 70,
    adventure: Math.floor(Math.random() * 30) + 70,
    success: Math.floor(Math.random() * 30) + 70
  };

  // Модификация статистик на основе личности и темы
  if (personality === 'extrovert') {
    baseStats.happiness += 10;
    baseStats.adventure += 5;
  } else if (personality === 'introvert') {
    baseStats.success += 10;
    baseStats.happiness += 5;
  }

  if (theme === 'adventure') {
    baseStats.adventure += 15;
  } else if (theme === 'tech') {
    baseStats.success += 10;
  } else if (theme === 'creative') {
    baseStats.happiness += 10;
  }

  // Ограничиваем значения до 100
  Object.keys(baseStats).forEach(key => {
    baseStats[key as keyof WorldStats] = Math.min(100, baseStats[key as keyof WorldStats]);
  });

  return baseStats;
}

function generateQuest(theme: string, userData: UserData): Quest {
  const quests = {
    tech: [
      {
        title: 'Взлом Матрицы',
        description: `Используя свои навыки в ${userData.profession.toLowerCase()}, вы должны проникнуть в защищенную систему и освободить заключенные там воспоминания.`
      },
      {
        title: 'Цифровая Революция',
        description: `Ваша миссия - создать ИИ, который поможет человечеству достичь гармонии с технологиями.`
      }
    ],
    creative: [
      {
        title: 'Шедевр Века',
        description: `Создайте произведение искусства, которое объединит все культуры мира и принесет мир на планету.`
      },
      {
        title: 'Муза Вдохновения',
        description: `Найдите потерянную музу искусств и верните творческое вдохновение в мир.`
      }
    ],
    adventure: [
      {
        title: 'Сокровища Атлантиды',
        description: `Отправьтесь в экспедицию к затонувшему континенту и найдите артефакт, способный изменить ход истории.`
      },
      {
        title: 'Последний Дракон',
        description: `Найдите и защитите последнего дракона от охотников, чтобы сохранить магию в мире.`
      }
    ],
    mystical: [
      {
        title: 'Пророчество Древних',
        description: `Расшифруйте древнее пророчество и предотвратите надвигающуюся катастрофу.`
      },
      {
        title: 'Кристалл Времени',
        description: `Найдите утерянный кристалл времени, чтобы восстановить баланс между мирами.`
      }
    ],
    futuristic: [
      {
        title: 'Межгалактический Мир',
        description: `Установите дипломатические отношения с новой цивилизацией и предотвратите космическую войну.`
      },
      {
        title: 'Генетический Код',
        description: `Разработайте новую форму жизни, способную выжить в экстремальных условиях далеких планет.`
      }
    ]
  };

  const themeQuests = quests[theme];
  return themeQuests[Math.floor(Math.random() * themeQuests.length)];
}

function generateDescription(theme: string, profession: string, userData: UserData): string {
  const templates = {
    tech: [
      `В этом мире высоких технологий вы работаете как ${profession}. Ваша страсть к ${userData.hobby.toLowerCase()} помогает вам находить креативные решения в цифровом пространстве.`,
      `Неоновые огни города освещают ваш путь как ${profession}. Здесь технологии и ${userData.hobby.toLowerCase()} сливаются в единое целое.`
    ],
    creative: [
      `В этом мире искусства вы процветаете как ${profession}. Ваш опыт в ${userData.profession.toLowerCase()} дает уникальную перспективу на творчество.`,
      `Богемная атмосфера идеально подходит для ${profession}. Здесь ваша любовь к ${userData.hobby.toLowerCase()} находит новое выражение.`
    ],
    adventure: [
      `В мире бесконечных приключений вы известны как ${profession}. Ваши навыки ${userData.hobby.toLowerCase()} часто спасают в опасных ситуациях.`,
      `Дикие земли зовут вас, ${profession}. Каждый день приносит новые вызовы и открытия.`
    ],
    mystical: [
      `В мире магии и тайн вы служите как ${profession}. Древние знания переплетаются с вашим пониманием ${userData.hobby.toLowerCase()}.`,
      `Мистические силы направляют вас как ${profession}. Ваша мудрость помогает другим найти свой путь.`
    ],
    futuristic: [
      `В далеком будущем вы работаете как ${profession}. Ваш опыт в ${userData.profession.toLowerCase()} оказался неожиданно ценным в космическую эру.`,
      `Среди звезд вы известны как ${profession}. Технологии будущего открывают безграничные возможности.`
    ]
  };

  const themeTemplates = templates[theme];
  return themeTemplates[Math.floor(Math.random() * themeTemplates.length)];
}

export function generateParallelWorlds(userData: UserData): ParallelWorld[] {
  const themes: Array<'tech' | 'creative' | 'adventure' | 'mystical' | 'futuristic'> = 
    ['tech', 'creative', 'adventure', 'mystical', 'futuristic'];
  
  return themes.map((theme, index) => {
    const profession = professions[theme][Math.floor(Math.random() * professions[theme].length)];
    const title = worldTitles[theme][Math.floor(Math.random() * worldTitles[theme].length)];
    
    return {
      id: `world-${index + 1}`,
      title,
      profession,
      description: generateDescription(theme, profession, userData),
      icon: icons[theme],
      theme,
      stats: generateStats(userData.personality, theme),
      quest: generateQuest(theme, userData)
    };
  });
}