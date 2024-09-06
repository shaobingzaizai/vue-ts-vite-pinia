<template>
	<view class="tab-bar tabular">
		<view
			v-for="(item, index) in tabLists"
			class="tab-item"
			:class="{ select: index === theTab, 'item-tab2': index === 1 }"
			@click.stop="changeTab(item, index)"
		>
			<view v-if="index === 1" class="tab-item2"></view>
			<image
				class="icon"
				:src="index === theTab ? item.activeIcon : item.icon"
				mode="heightFix"
			/>
			<text class="font">{{ item.label }}</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
import envApi from '@/config/env';
interface tabObj {
	label: string;
	icon: string;
	activeIcon: string;
	url: string;
	isTabBar: Boolean;
}
const props = defineProps({
	/**
	 * 当前显示的是第几个 tab标签
	 */
	theTab: {
		type: Number,
		default: 0
	}
});
const { themeObject } = useStore('app');

const tabLists: tabObj[] = [
	{
		label: '首页',
		icon: envApi.imgBaseUrl + '/icon/home.png',
		activeIcon: envApi.imgBaseUrl + '/icon/home-active.png',
		url: 'pages/home/home',
		isTabBar: true
	},
	{
		label: '预约',
		icon: envApi.imgBaseUrl + '/icon/book.png',
		activeIcon: envApi.imgBaseUrl + '/icon/book.png',
		url: 'pages/book/book',
		isTabBar: false
	},
	{
		label: '我的',
		icon: envApi.imgBaseUrl + '/icon/my.png',
		activeIcon: envApi.imgBaseUrl + '/icon/my-active.png',
		url: 'pages/my/my',
		isTabBar: true
	}
];

/**
 * 切换底部按键
 */
const changeTab = (item: tabObj, index: number) => {
	let currentRoutes: any = getCurrentPages(); // 获取当前打开过的页面路由数组
	let currentRoute = currentRoutes[currentRoutes.length - 1].route; //获取当前页面路由
	let currentParam = currentRoutes[currentRoutes.length - 1].options; //获取路由参数
	// 拼接参数
	let param = '';
	for (let key in currentParam) {
		param += '?' + key + '=' + currentParam[key];
	}
	const localRoute = currentRoute + param;
	if (item.url === localRoute) return; // 页面相同的时候 不处理
	if (item.isTabBar) {
		uni.switchTab({ url: `/${item.url}` });
	} else {
		uni.navigateTo({ url: `/${item.url}` });
	}
};
</script>

<style scoped lang="scss">
.tab-bar {
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	min-height: 80rpx;
	background-color: v-bind('themeObject.tabBgColor');
	// box-shadow: 0 -5px 10px rgb(0 0 0 / 10%);
	&.tabular {
		height: calc(80rpx + env(safe-area-inset-bottom) / 2);
		padding: 0 0 calc(env(safe-area-inset-bottom) / 2);
	}
	.tab-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100rpx;
		color: v-bind('themeObject.unThemeColor');
		position: relative;
		&.select {
			color: v-bind('themeObject.themeColor');
		}
		&.item-tab2 {
			margin-bottom: 20rpx;
			.icon {
				width: 70rpx;
				height: 70rpx;
			}
		}
		.tab-item2 {
			position: absolute;
			top: -12rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
			background-color: v-bind('themeObject.tabBgColor');
			z-index: -1;
		}
		.icon {
			font-size: 40rpx;
			width: 50rpx;
			height: 44rpx;
		}
		.font {
			margin-top: 4rpx;
			font-size: 22rpx;
		}
	}
}
</style>
