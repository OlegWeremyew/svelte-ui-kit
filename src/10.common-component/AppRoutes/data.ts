import { PATHS } from '@/constants/router';
import { Buttons, Features, Footers, Notes, Other, Subscribes, Swipers, Switchers, Titles } from '@/pages';

type RouteItemType = {
	id: number
	path: string
	component: HTMLElement
}

export const RouteItem : RouteItemType[] = [
	{
		id: 1,
		path: PATHS.SWITCHERS,
		component: Switchers
	},
	{
		id: 2,
		path: PATHS.BUTTONS,
		component: Buttons
	},
	{
		id: 3,
		path: PATHS.SUBSCRIBES,
		component: Subscribes
	},
	{
		id: 4,
		path: PATHS.TITLES,
		component: Titles
	},
	{
		id: 5,
		path: PATHS.FEATURES,
		component: Features
	},
	{
		id: 6,
		path: PATHS.NOTES,
		component: Notes
	},
	{
		id: 7,
		path: PATHS.FOOTERS,
		component: Footers
	},
	{
		id: 8,
		path: PATHS.SWIPERS,
		component: Swipers
	},
	{
		id: 9,
		path: PATHS.OTHER,
		component: Other
	},
]
