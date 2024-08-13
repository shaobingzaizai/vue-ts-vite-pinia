<template>
	<view class="block" :style="{ marginTop }">
		<image
			v-if="!props.img"
			src="https://static-mcn.netjoy.com/aigc/app-mini/block.png"
			mode="widthFix"
		/>
		<image v-else :src="props.img" mode="widthFix" />
		<text v-if="props.text">{{ props.text }}</text>
	</view>
</template>
<script setup lang="ts">
const props = defineProps({
	img: { type: String, default: '' }, // 图片地址
	text: { type: String, default: '' }, // 文案
	marginTop: { type: String, default: '0rpx' } // 距离顶部距离
});
</script>
<style lang="less" scoped>
.block {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> image {
		width: 326rpx;
		height: 198rpx;
	}

	> text {
		color: @textColor;
		margin-top: 20rpx;
		font-size: 28rpx;
		font-weight: 400;
	}
}
</style>
