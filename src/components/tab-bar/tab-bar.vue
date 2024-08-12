<template>
	<view class="tab-bar tabular">
		<view
			v-for="(item, index) in tabLists"
			class="tab-item"
			:class="{ select: index === theTab }"
			@click.stop="changeTab(item, index)"
		>
			<text class="icon iconfont" :class="index === theTab ? item.activeIcon : item.icon" />
			<text class="font">{{ item.label }}</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
interface tabObj {
	label: string;
	icon: string;
	activeIcon: string;
	url: string;
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
		icon: 'icon-home',
		activeIcon: 'icon-home',
		url: 'pages/home/home'
	},
	{
		label: '我的',
		icon: 'icon-wode',
		activeIcon: 'icon-wode',
		url: 'pages/my/my'
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
	uni.switchTab({ url: `/${item.url}` });
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
	background-color: #fff;
	box-shadow: 0 -5px 10px rgb(0 0 0 / 10%);
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
		&.select {
			color: v-bind('themeObject.themeColor');
		}
		.icon {
			font-size: 40rpx;
		}
		.font {
			margin-top: 4rpx;
			font-size: 22rpx;
		}
	}
}
</style>
