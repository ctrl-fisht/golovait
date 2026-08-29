---
title: "Карта ИИ — 5 веток"
description: "Куда идти: текст, картинки, видео, голос, код/авто. Топ-сервисы и что генерит."
---

Не учи всё. Выбери 1–2 ветки на 2 недели.

import { Tabs, TabItem, Card, CardGrid } from '@astrojs/starlight/components';

<Tabs>
  <TabItem label="📝 Текст">
    **ChatGPT / Claude / Gemini** — тексты, идеи, анализ  
    **Perplexity** — поиск с источниками  
    **Notion AI** — конспекты, базы  
    Попробуй: *«Объясни тему X как будто мне 12 лет, 5 пунктов»*
  </TabItem>
  <TabItem label="🎨 Картинки">
    **Midjourney / Flux / DALL·E** — арт, фото, лого  
    **Ideogram** — текст на картинках  
    **Remove.bg / Magnific** — обработка  
    Промпт: `minimal poster, coffee shop, warm light, --ar 3:4`
  </TabItem>
  <TabItem label="🎬 Видео">
    **Runway / Luma / Kling** — видео из текста/фото  
    **HeyGen / D-ID** — аватары говорящие  
    **CapCut AI** — монтаж авто  
    Фото→видео: `camera slowly zooms in, cinematic`
  </TabItem>
  <TabItem label="🎙 Голос">
    **ElevenLabs / OpenAI TTS** — озвучка  
    **Suno / Udio** — музыка из текста  
    **Whisper** — транскрибация  
    Текст→голос за 10 сек: вставь пост → выбери голос
  </TabItem>
  <TabItem label="💻 Код/Авто">
    **Cursor / Copilot** — код + сайт  
    **Make / n8n / Zapier** — автоматизация без кода  
    **GPTs / Custom GPT** — твой бот  
    Авто: *«Когда новая заявка в ТГ → пиши в таблицу + шли письмо»*
  </TabItem>
</Tabs>

<CardGrid>
  <Card title="~2ч" icon="hourglass">чтобы освоить базу</Card>
  <Card title="0₽" icon="approve-check">старт бесплатно</Card>
  <Card title="80%" icon="rocket">задач закроет текстовая ИИ</Card>
</CardGrid>
