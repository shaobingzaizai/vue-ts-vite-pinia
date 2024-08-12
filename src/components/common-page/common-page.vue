<template>
	<view class="common-page">
		<NavBar
			:fixed="fixed"
			:is-back="isBack"
			:is-back-home="isBackHome"
			:title="title"
			:bgColor="bgColor"
			:color="color"
			:background-color="backgroundColor"
			:background-url="backgroundUrl"
		/>
		<!-- ios禁止弹性滚动 -->
		<scroll-view
			v-if="disabledIosElasticity"
			scroll-y
			enhanced
			:bounces="false"
			class="scroll-content"
			:class="{ 'bar-bottom': isTab }"
		>
			<slot></slot>
		</scroll-view>
		<!-- 以前逻辑，采用默认配置 -->
		<view v-else class="view-content" :class="{ 'bar-bottom': isTab }">
			<slot></slot>
		</view>
		<TabBar v-if="isTab" :the-tab="theTab" />
	</view>
</template>

<script lang="ts" setup>
const props = defineProps({
	/**
	 * 是否禁用ios 弹性布局
	 */
	disabledIosElasticity: {
		type: Boolean,
		default: false
	},
	/**
	 * 布局样式 是否占位
	 */
	fixed: {
		type: String,
		default: 'static'
	},
	/**
	 * 是否显示返回按钮
	 */
	isBack: {
		type: Boolean,
		default: true
	},
	/**
	 * 是否显示返回首页按钮
	 */
	isBackHome: {
		type: Boolean,
		default: false
	},
	/**
	 * 标题
	 */
	title: {
		type: String,
		default: ''
	},
	/**
	 * 导航栏背景色
	 */
	bgColor: {
		type: String,
		default: '#fff'
	},
	/**
	 * 导航栏字体色
	 */
	color: {
		type: String,
		default: '#000'
	},
	/**
	 * 全页面背景色
	 */
	backgroundColor: {
		type: String,
		default: '#fff'
	},
	/**
	 * 背景图片
	 */
	backgroundUrl: {
		type: String,
		default: ''
	},
	/**
	 * 是否显示 tab标签
	 */
	isTab: {
		type: Boolean,
		default: false
	},
	/**
	 * 当前显示的是第几个 tab标签
	 */
	theTab: {
		type: Number,
		default: 0
	}
});
</script>

<style lang="scss" scoped>
.common-page {
	display: flex;
	flex-direction: column;
	height: 100vh;
	.scroll-content {
		position: relative;
		flex: 1;
		&.bar-bottom {
			padding: 0 0 calc(100rpx + env(safe-area-inset-bottom));
		}
	}
	.view-content {
		position: relative;
		flex: 1;
		overflow: auto;
		&.bar-bottom {
			padding: 0 0 calc(100rpx + env(safe-area-inset-bottom));
		}
	}
}
</style>
