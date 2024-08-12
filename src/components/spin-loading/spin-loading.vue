<template>
	<view class="spin-loading">
		<view v-if="loading" class="loading">
			<view class="loading-txt">
				<text class="iconfont icon icon-loading"></text>
				<text v-if="tips" class="icon1">{{ tips }}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script lang="ts" setup>
const props = defineProps({
	loading: {
		type: Boolean,
		default: true
	},
	tips: {
		type: String,
		default: ''
	}
});
const { themeObject } = useStore('app');
</script>

<style lang="scss" scoped>
.spin-loading {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	.content {
		width: 100%;
		height: 100%;
	}
	.loading {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: transparent;
		.loading-txt {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			// margin-top: 200rpx;
			padding: 48rpx 52rpx;
			background-color: v-bind('themeObject.themeColor');
			border-radius: 16rpx;
			.icon {
				font-size: 40rpx;
				color: v-bind('themeObject.themeColor');
				animation: rotate 1.6s linear infinite;

				@keyframes rotate {
					0% {
						transform: rotate(0);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			}
			.icon1 {
				margin-top: 24rpx;
				font-size: 24rpx;
				color: v-bind('themeObject.themeColor');
			}
		}
	}
}
</style>
