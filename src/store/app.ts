import { defineStore } from 'pinia';

export default defineStore({
	id: 'app',
	state: () => {
		return {
			selectTheme: 'default',
			themeObject: {}
		} as {
			selectTheme: String;
			themeObject: any;
		};
	},
	actions: {
		SET_SELECT_THEME(str: string) {
			this.selectTheme = str || 'default';
		},
		SET_THEME_OBJECT(obj: any) {
			this.themeObject = { ...obj };
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				key: 'selectTheme',
				storage: localStorage,
				paths: ['selectTheme']
			}
		]
	}
});
