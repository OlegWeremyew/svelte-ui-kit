import {
	Button_Ai_Art_Android,
	Button_Ai_Art_Android_A,
	Button_Ai_Art_Android_AA,
	Button_Ai_Keyboard_Android,
	Button_Chat_Android,
	Button_Coin,
	Button_Fonts,
	Button_Fonts_A,
	Button_In_Pulse,
	Button_Lottie,
	Button_Nature_ID,
	Button_On_Skin, Button_On_Skin_A, Button_Solvo,
	Buttons_Live_Wallpapers, Buttons_Live_Wallpapers_A,
	ButtonWatchVideo_Iremover,
	ButtonWatchVideo_Iremover_A,
} from '@/2.buttons';

type ButtonItem = {
	id: number
	appName: string
	os: string
	component: HTMLElement,
	code?: any
}

export const buttonsList: ButtonItem[] = [
	{
		id: 1,
		appName: 'fonts',
		os: 'android',
		component: Button_Lottie,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 2,
		appName: 'ai-arta',
		os: 'android',
		component: Button_Ai_Art_Android,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 3,
		appName: 'ai-arta',
		os: 'android',
		component: Button_Ai_Art_Android_A,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 4,
		appName: 'ai-arta',
		os: 'android',
		component: Button_Ai_Art_Android_AA,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 5,
		appName: 'ai-keyboard',
		os: 'android',
		component: Button_Ai_Keyboard_Android,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 6,
		appName: 'coin-id',
		os: 'ios',
		component: Button_Coin,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 7,
		appName: 'fonts',
		os: 'android',
		component: Button_Chat_Android,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 8,
		appName: 'on-skin',
		os: 'ios',
		component: Button_On_Skin,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 9,
		appName: 'nature-id/plantum',
		os: 'ios',
		component: Button_Nature_ID,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 10,
		appName: 'in-pulse',
		os: 'ios',
		component: Button_In_Pulse,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 11,
		appName: 'i-remover',
		os: 'ios',
		component: ButtonWatchVideo_Iremover,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 12,
		appName: 'i-remover',
		os: 'ios',
		component: ButtonWatchVideo_Iremover_A,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 13,
		appName: 'fonts',
		os: 'ios',
		component: Button_Fonts,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 14,
		appName: 'fonts',
		os: 'ios',
		component: Button_Fonts_A,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 15,
		appName: 'wallpaper',
		os: 'ios',
		component: Buttons_Live_Wallpapers,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 16,
		appName: 'solvo',
		os: 'ios',
		component: Button_Solvo,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 17,
		appName: 'on-skin',
		os: 'ios',
		component: Button_On_Skin_A,
		code: 'dfdfdfgdfgdf'
	},
	{
		id: 18,
		appName: 'wallpaper',
		os: 'ios',
		component: Buttons_Live_Wallpapers_A,
		code: 'dfdfdfgdfgdf'
	},
];
