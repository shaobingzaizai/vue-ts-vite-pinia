<template>
	<view class="common-page">
		<NavBar
			:fixed="fixed"
			:is-back="isBack"
			:is-back-home="isBackHome"
			:title="title"
			:bgColor="bgColor"
		/>
		<!-- ios禁止弹性滚动 -->
		<scroll-view
			v-if="disabledIosElasticity"
			scroll-y
			enhanced
			:bounces="false"
			class="content"
		>
			<slot></slot>
		</scroll-view>
		<!-- 以前逻辑，采用默认配置 -->
		<view v-else class="common-content">
			<slot></slot>
		</view>
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
	fixed: {
		type: String,
		default: 'static'
	},
	isBack: {
		type: Boolean,
		default: true
	},
	isBackHome: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: ''
	},
	bgColor: {
		type: String,
		default: '#fff'
	}
});
console.log('props', props);
</script>

<style lang="scss" scoped>
.common-page {
	display: flex;
	flex-direction: column;
	height: 100vh;
	.scroll-content {
		position: relative;
		flex: 1;
	}
	.view-content {
		position: relative;
		flex: 1;
		overflow: auto;
	}
}
</style>
