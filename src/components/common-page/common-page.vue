<template>
	<view class="common-page">
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
	}
	.view-content {
		overflow: auto;
		position: relative;
		flex: 1;
	}
}
</style>
