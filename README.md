# ii-guide — Полный гайд по ИИ для новичков

Одностраничный HTML-гайд для телеграм-канала. С нуля за 1 вечер.

**Фичи:** прогресс-бар, липкое оглавление, табы карты ИИ, копипаст промптов, конструктор промпта, роадмап 7/30, чек-лист, печать в PDF.

**Стек:** vanilla HTML/CSS/JS, без сборки. Деплой на GitHub Pages через Actions.

## Деплой
1. Залей на GitHub в репо `ii-guide`
2. Settings → Pages → Source: **GitHub Actions**
3. Пуш в `main` → сайт на `https://username.github.io/ii-guide/`

## Локально
Просто открой `index.html` или `npx serve .`

## Кастом
- Канал: замени `href` у `#tgLink` в `index.html:150`
- Цвета: `:root` в `style.css:1`
- Контент: 8 секций `#s1`–`#s8`
- PDF: кнопка `window.print()` + `@media print`
