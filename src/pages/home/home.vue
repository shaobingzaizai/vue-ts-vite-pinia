<template>
	<CommonPage
		fixed="static"
		:is-back="false"
		title="home"
		:is-tab="true"
		:the-tab="0"
	>
		<view class="content">
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
		</view>
	</CommonPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeApi from '@/api/home';

const { themeObject } = useStore('app');
const title = ref('home');

onLoad(async () => {
	await HomeApi.getMerchantList();
});
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.logo {
		width: 200rpx;
		height: 200rpx;
		margin: 200rpx auto 50rpx;
	}
	.text-area {
		display: flex;
		justify-content: center;
		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
}
</style>
