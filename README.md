# Golovait — Гид по ИИ для новичков

Статика на **Starlight + Tailwind + Astro**. Контент — `src/content/docs/*.md` из ИИ, деплой `GitHub Pages -> golovait.ru`.

**Структура**
```
src/content/docs/
  index.mdx          # ленд
  guide/01..08*.md   # 8 блоков полного гайда
  blog/01-*.md       # статьи (клепай md + push)
  about.md
astro.config.mjs     # site: https://golovait.ru, sidebar, tailwind
```

**Команды**
```
npm install
npm run dev    # localhost:4321
npm run build  # -> dist/
npm run preview
```

**Новый пост**
```
# создать src/content/docs/blog/02-tema.md
---
title: "Заголовок"
description: "130 симв для SEO"
---
контент
```
Пуш в `starlight` или `main` -> `Actions` -> `Pages` -> `https://golovait.ru/blog/02-tema/`

**Деплой**
- `Pages` source: `GitHub Actions` (workflow `deploy.yml` билд `dist`)
- DNS: 4 A `@` + CNAME `www` + `Enforce HTTPS` (уже настроен)
- `site` в `astro.config.mjs` — менять при смене домена

**Старый гайд** — `main` ветка архив (`index.html` статика), текущий — `starlight` ветка.
