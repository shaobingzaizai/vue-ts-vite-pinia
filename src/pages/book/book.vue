<!--
 * @Author: Wolf.Ma
 * @Date: 2024-09-01 15:58:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 02:26:50
 * @FilePath: /zhenghe/src/pages/book/book.vue
 * @Description: 
-->
<template>
	<CommonPage
		fixed="fixed"
		:is-back="true"
		bg-color="transparent"
		background-color="transparent"
		:is-tab="false"
		:the-tab="2"
	>
		<view class="content">
			<image
				class="home-bg"
				mode="widthFix"
				:src="`${envApi.imgBaseUrl}/book/book-bg.png`"
			/>
		</view>
	</CommonPage>
</template>

<script setup lang="ts">
import envApi from '@/config/env';
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
	}
}
</style>
