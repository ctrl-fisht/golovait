// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://golovait.ru',
	integrations: [
		starlight({
			title: 'Golovait — Гид по ИИ',
			description: 'Полный гайд по ИИ для новичков с нуля. Карта ИИ, промпты, роадмап, ошибки — за 1 вечер в теме.',
			defaultLocale: 'root',
			locales: { root: { label: 'Русский', lang: 'ru' } },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ctrl-fisht/golovait' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/golovait' },
			],
			editLink: { baseUrl: 'https://github.com/ctrl-fisht/golovait/edit/starlight/' },
			customCss: ['./src/styles/global.css'],
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://golovait.ru/og.png' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#0ea5e9' } },
			],
			sidebar: [
				{ label: 'Старт', slug: 'index' },
				{
					label: 'Гайд с нуля',
					items: [
						{ label: 'Что такое ИИ — за 3 мин', slug: 'guide/01-chto-takoe-ii' },
						{ label: 'Карта ИИ — 5 веток', slug: 'guide/02-karta-ii' },
						{ label: 'Старт за 15 минут', slug: 'guide/03-start-15-min' },
						{ label: '5 промптов копипаст', slug: 'guide/04-prompty' },
						{ label: 'Где применять', slug: 'guide/05-keysy' },
						{ label: 'Ошибки новичка', slug: 'guide/06-oshibki' },
						{ label: 'Роадмап 7/30 дней', slug: 'guide/07-roadmap' },
						{ label: 'Словарь + чек-лист', slug: 'guide/08-finale' },
					],
				},
				{
					label: 'Блог',
					items: [{ autogenerate: { directory: 'blog' } }],
				},
				{ label: 'О проекте', slug: 'about' },
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
