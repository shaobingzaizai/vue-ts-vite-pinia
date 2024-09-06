<!--
 * @Author: Wolf.Ma
 * @Date: 2024-09-01 15:58:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 02:23:02
 * @FilePath: /zhenghe/src/pages/my/my.vue
 * @Description: 
-->
<template>
	<CommonPage
		fixed="static"
		:is-back="false"
		:is-show-nav="false"
		title=""
		:is-tab="true"
		:the-tab="2"
	>
		<view class="content">
			<view class="home-bg">
				<image
					class="bg-image"
					mode="widthFix"
					:src="`${envApi.imgBaseUrl}/home/home-bg.png`"
				/>
			</view>

			<view class="my-header">
				<image class="header-image" :src="''" />
				<text class="header-text">请先登录</text>
			</view>
		</view>
	</CommonPage>
</template>

<script setup lang="ts">
import envApi from '@/config/env';

const { themeObject } = useStore('app');
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	position: relative;
	.home-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 710rpx;
		z-index: -1;
		background-color: v-bind('themeObject.temeHightBgColor');
		.bg-image {
			position: absolute;
			top: 80rpx;
			right: 0;
			width: 360rpx;
			height: 200rpx;
		}
	}

	.my-header {
		margin-top: 200rpx;
		margin-left: 50rpx;
		width: calc(100% - 50rpx);
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.header-image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 60rpx;
			background-color: #eee;
			margin-right: 30rpx;
		}
		.header-text {
			font-size: 36rpx;
			color: v-bind('themeObject.titleColor');
			font-weight: 600;
		}
	}
}
</style>
