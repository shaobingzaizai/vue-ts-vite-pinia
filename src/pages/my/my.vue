<template>
	<CommonPage fixed="static" :is-back="false" title="我的" :is-tab="true" :the-tab="1">
		<view class="content">
			<image class="logo" src="/static/logo.png" />
			<view class="text-area">
				<text class="title">{{ title }}</text>
			</view>
		</view>
	</CommonPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('my');
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.logo {
	width: 200rpx;
	height: 200rpx;
	margin: 200rpx auto 50rpx;
}
.text-area {
	display: flex;
	justify-content: center;
}
.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
