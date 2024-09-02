<template>
	<view class="nav-bar-bg" :style="{ background: backgroundColor }">
		<image
			v-if="backgroundUrl"
			class="bg"
			:src="backgroundUrl"
			mode="scaleToFill"
		></image>
	</view>
	<view
		v-if="false"
		class="cu-view"
		:style="{ height: CustomBar + 'px', position: fixed }"
	>
		<view
			class="cu-custom"
			:style="{
				height: CustomBar + 'px',
				color: props.color,
				background: props.bgColor
			}"
		>
			<view
				class="cu-content flex-row-between"
				:style="{
					height: CustomBar - StatusBar + 'px',
					marginTop: StatusBar + 'px'
				}"
			>
				<view class="cu-left row-center-start">
					<view v-if="props.isBackHome" class="view1">
						<text
							class="iconfont icon-home icon"
							@click="cuBack"
						></text>
					</view>
					<view v-else-if="isBack" class="view1" @click="cuBack">
						<text class="iconfont icon-left1 icon"></text>
					</view>
					<view class="row-center-center view1">
						<slot name="backText"></slot>
					</view>
				</view>
				<view class="cu-center row-center-center">
					<text v-if="title">{{ title }}</text>
					<slot v-else name="content"></slot>
				</view>
				<view class="cu-left row-center-start"></view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { isMpWeixin, platform } from '@/utils/platform';

console.log('is', isMpWeixin, platform);
/**
 * 父类事件
 */
const emits = defineEmits<{
	(e: 'back', item: any): void;
}>();
/**
 *  父类传参
 */
const props = defineProps({
	bgColor: { type: String, default: '#fff' }, // 背景色
	color: { type: String, default: '#000' }, // 字体颜色
	isBack: { type: Boolean, default: true }, // 是否显示返回
	isBackHome: { type: Boolean, default: false }, // 是否显示返回首页
	title: { type: String, default: '' }, // 标题
	backgroundColor: { type: String, default: '#fff' }, // 全页面背景色
	backgroundUrl: { type: String, default: '' }, // 背景图片
	fixed: {
		type: String,
		default: 'static',
		enum: ['static', 'relative', 'absolute', 'fixed', 'sticky']
	} // 布局样式 是否占位
});
const { navBarConfig } = useStore('app');
const CustomBar: number = navBarConfig.value.CustomBar; // 高度
const StatusBar: number = navBarConfig.value.StatusBar; // 状态栏高度
const TheTabPage: any = ['pages/home/home'];

// 判断当前页面前是否有页面
const firstLevel = ref(true);
onLoad(() => {
	firstLevel.value = getCurrentPages().length === 1;
});
/**
 * 返回按钮
 */
const cuBack = () => {
	emits('back', {});
	if (firstLevel.value) {
		uni.reLaunch({ url: 'pages/home/home' });
	} else {
		uni.navigateBack({
			delta: 1
		});
	}
};
</script>

<style lang="scss" scoped>
.nav-bar-bg {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: -999;
	width: 100vw;
	height: 100vh;
	background-color: #000;
	.bg {
		width: 100%;
		height: 100%;
	}
}
.cu-view {
	z-index: 2048;
	width: 100vw;
	.cu-custom {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2048;
		display: block;
		width: 100%;
		height: 80rpx;
		background-color: transparent;
		&.no-shadow {
			box-shadow: 0 0 black;
		}
		.cu-content {
			.cu-left {
				width: 25%;
				white-space: nowrap;
				.view1 {
					padding: 10rpx 20rpx;
					> text {
						font-size: 40rpx;
					}
					.icon {
						font-size: 40rpx;
						color: #000;
					}
				}
				.view2 {
					width: 150rpx;
					height: 56rpx;
					margin-left: 20rpx;
					border: 1rpx solid rgb(0 0 0 / 35%);
					border-radius: 32rpx;
					transform: rotateZ(360deg);
					.icon1 {
						font-size: 40rpx;
						color: #000;
					}
					.line {
						width: 2rpx;
						height: 37rpx;
						margin: 0 20rpx;
						background: rgb(0 0 0 / 35%);
					}
					.icon2 {
						font-size: 36rpx;
						color: #000;
					}
				}
			}
			.cu-center {
				width: 50%;
				overflow: hidden; // 溢出部分隐藏
				font-size: 32rpx;
				font-weight: bold;
				text-overflow: ellipsis; // 显示省略号
				white-space: nowrap; // 文字不换行
				> view {
					width: 100%;
					overflow: hidden; // 溢出部分隐藏
					text-align: center;
					text-overflow: ellipsis; // 显示省略号
					white-space: nowrap; // 文字不换行
				}
			}
		}
	}
	.cu-custom-blank {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
	}
}
.row-center-start {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.row-center-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.flex-row-between {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
