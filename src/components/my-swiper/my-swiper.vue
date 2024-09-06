<!--
 * @Author: Wolf.Ma
 * @Date: 2024-09-06 21:34:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 00:07:11
 * @FilePath: /zhenghe/src/components/my-swiper/my-swiper.vue
 * @Description: 
-->
<template>
	<view class="home-scroll-view">
		<!-- circular -->
		<swiper
			class="home-scroll-box"
			circular
			previous-margin="0"
			next-margin="258rpx"
			easing-function="easeInOutCubic"
			:current="curIntegral"
			@change="swiperIntegral"
		>
			<swiper-item
				v-for="(item, index) in swiperList"
				:key="index"
				class="item"
			>
				<view
					class="scroll-view-item"
					:class="{ active: curIntegral === index }"
				>
					<image class="pic" :src="item.img" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts" setup>
const props = defineProps({
	/**
	 * 轮播图列表
	 */
	swiperList: {
		type: Array as PropType<{ id: string; img: string }[]>,
		default: () => []
	}
});
const curIntegral = ref<number>(0);
const animationData = ref();
const animationDataActive = ref();
/**
 * 轮播图切换
 * @param num
 */
const swiperIntegral = (val: any) => {
	curIntegral.value = val.detail.current;
	console.log('val.detail.current', val.detail.current);
};

onMounted(async () => {
	const animation: any = uni.createAnimation({
		duration: 400,
		timingFunction: 'ease'
	});
	animation.scale(0.9).step();
	animationData.value = animation.export();
	const animationActive: any = uni.createAnimation({
		duration: 400,
		timingFunction: 'ease'
	});
	animationActive.scale(1).step();
	animationDataActive.value = animationActive.export();
});
</script>

<style lang="scss" scoped>
.home-scroll-view {
	width: 100%;
	.uni-scroll-view {
		border-radius: 20rpx;
	}
	.home-scroll-box {
		position: relative;
		width: 100%;
		min-height: 584rpx;
		box-sizing: border-box;
		overflow-x: hidden;
		.item {
			display: flex;
			align-items: center;
			justify-content: flex;
		}
	}
	.scroll-view-item {
		display: inline-block;
		width: 460rpx;
		border-radius: 20rpx;
		transform: scale(0.9);
		transition: all 0.3s ease-in-out;
		.pic {
			display: block;
			width: 420rpx;
			height: 584rpx;
			border-radius: 20rpx;
			transition: all 0.3s ease-in-out;
		}
		&.active {
			transform: scale(1);
			.pic {
				// width: 420rpx;
				// height: 560rpx;
			}
		}
	}
}
</style>
