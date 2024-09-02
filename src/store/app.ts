import { defineStore } from 'pinia';

interface NavBarConfig {
	Custom: any;
	CustomBar: number;
	StatusBar: number;
}

export default defineStore({
	id: 'app',
	state: () => {
		return {
			selectTheme: 'default',
			themeObject: {},
			navBarConfig: {
				Custom: {},
				CustomBar: 0,
				StatusBar: 0
			}
		} as {
			selectTheme: String;
			themeObject: any;
			navBarConfig: NavBarConfig;
		};
	},
	actions: {
		SET_SELECT_THEME(str: string) {
			this.selectTheme = str || 'default';
		},
		SET_THEME_OBJECT(obj: any) {
			this.themeObject = { ...obj };
		},
		INIT_SYSTEM_INFO() {
			return new Promise((resolve) => {
				uni.getSystemInfo({
					success: (e: any) => {
						// 微信
						// #ifdef MP-WEIXIN
						const Custom = uni.getMenuButtonBoundingClientRect();
						const config: any = {
							StatusBar: e.statusBarHeight,
							Custom,
							CustomBar:
								Custom.bottom + Custom.top - e.statusBarHeight
						};
						this.navBarConfig = { ...config };
						// #endif
						resolve(null);
					}
				});
			});
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				key: 'selectTheme',
				storage: localStorage,
				paths: ['selectTheme']
			},
			{
				key: 'navBarConfig',
				storage: localStorage,
				paths: ['navBarConfig']
			}
		]
	}
});
