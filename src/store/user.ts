import { defineStore } from 'pinia';

export default defineStore({
	id: 'user',
	state: () => {
		return {
			token: ''
		} as {
			token: String;
		};
	},
	actions: {
		SET_SELECT_THEME(str: string) {
			this.token = str;
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				key: 'token',
				storage: localStorage,
				paths: ['token']
			}
		]
	}
});
