# Изменения в системе фильтрации проектов

## 📁 Новые файлы

### API функции
- `src/entities/projects/api/getFilterOptions.js` - получение опций фильтра с бэкенда

### Хуки
- `src/app/(pages)/(index)/widgets/ProjectsBlock/model/useFilterOptions.js` - хук для загрузки опций фильтра
- `src/app/(pages)/(index)/widgets/ProjectsBlock/model/useProjectsFilter.js` - хук для управления фильтрами

### Компоненты
- `src/app/(pages)/(index)/widgets/ProjectsBlock/ui/ProjectsFilter.jsx` - основной компонент фильтра
- `src/app/(pages)/(index)/widgets/ProjectsBlock/ui/PriceRangeFilter.jsx` - фильтр ценового диапазона

### Индексные файлы
- `src/app/(pages)/(index)/widgets/ProjectsBlock/ui/index.js` - экспорты UI компонентов
- `src/app/(pages)/(index)/widgets/ProjectsBlock/model/index.js` - экспорты хуков

## 🔧 Измененные файлы

### API
- `src/entities/projects/api/getProjects.js` - добавлена поддержка фильтра по комнатам (потом убрана)

### Хуки
- `src/app/(pages)/(index)/widgets/ProjectsBlock/model/useProjectsList.js` - интеграция с новым фильтром

### Компоненты
- `src/app/(pages)/(index)/widgets/ProjectsBlock/ui/ProjectsBlock.jsx` - использование нового фильтра
- `src/shared/ui/PriceRange/PriceRange.jsx` - улучшенная логика ввода с лимитами

## 🎯 Основные изменения

### 1. Динамические фильтры с бэкенда
- Год заселения загружается с API
- Ценовой диапазон использует min/max с бэкенда
- Убрали фильтр по комнатам

### 2. Улучшенный ввод цены
- Debounce увеличен на 20% (600ms)
- Лимиты только сверху (не больше максимальной цены)
- Можно вводить числа меньше минимального
- Умная валидация при потере фокуса

### 3. Сброс фильтров
- Полный сброс всех фильтров
- Очистка полей ценового диапазона
- Синхронизация с URL параметрами

### 4. Архитектура
- Разделение на UI и модель
- Переиспользуемые компоненты
- Чистые экспорты через индексные файлы

## 📋 Как применить изменения

1. Скопируйте все новые файлы в соответствующие папки
2. Обновите существующие файлы согласно изменениям
3. Убедитесь, что API endpoint `/api/projects/filter-options` работает

## 🚀 Результат

- ✅ Динамические фильтры с бэкенда
- ✅ Улучшенный UX ввода цены
- ✅ Полный сброс фильтров
- ✅ Модульная архитектура 