<!--
 * @Author: Wolf.Ma
 * @Date: 2024-09-02 21:37:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 03:01:28
 * @FilePath: /vue-ts-vite-pinia/src/pages/home/home.vue
 * @Description: 
-->
<template>
	<CommonPage
		fixed="static"
		:is-back="false"
		:is-show-nav="false"
		title="home"
		:is-tab="true"
		:the-tab="0"
	>
		<view class="content">
			<!-- src="@/static/zhenghe/home/home-bg.png" -->
			<!-- 首页顶部背景-->
			<view class="home-bg">
				<image
					class="bg-image"
					mode="widthFix"
					:src="`${envApi.imgBaseUrl}/home/home-bg.png`"
				/>
			</view>
			<!-- 图书馆标题logo-->
			<view class="top-logo">
				<image class="top-image" mode="heightFix" />
			</view>
			<!-- 轮播图 -->
			<view class="home-swiper">
				<My-Swiper :swiper-list="swiperList" />
			</view>
			<!-- 公告 -->
			<view class="home-notice">
				<image
					class="notice-right"
					:src="`${envApi.imgBaseUrl}/home/home-notice.png`"
				/>
				<view class="notice-center">
					<view class="notice-text">
						关于开展2024年“八一”建军节主题活动关于开展2024年“八一”建军节主题活动
					</view>
				</view>
				<text class="iconfont icon-right notice-left" />
			</view>
			<!-- 首页菜单 -->
			<view class="home-menu">
				<view
					v-for="item in menuList"
					:key="item.id"
					class="home-menu-item"
				>
					<image :src="item.img" class="menu-image" />
					<text class="menu-text">{{ item.label }}</text>
				</view>
			</view>
		</view>
	</CommonPage>
</template>

<script setup lang="ts">
import envApi from '@/config/env';
import HomeApi from '@/api/home';

const { themeObject } = useStore('app');
const title = ref('home');
const swiperList = ref([
	{
		id: '2',
		img: 'https://wx4.sinaimg.cn/mw690/60ed0cf7ly1hriy7c1hh0j219c28wb29.jpg'
	},
	{
		id: '1',
		img: 'https://wx4.sinaimg.cn/mw690/60ed0cf7ly1hriy7c1hh0j219c28wb29.jpg'
	},
	{
		id: '3',
		img: 'https://wx4.sinaimg.cn/mw690/60ed0cf7ly1hriy7c1hh0j219c28wb29.jpg'
	},
	{
		id: '4',
		img: 'https://wx4.sinaimg.cn/mw690/60ed0cf7ly1hriy7c1hh0j219c28wb29.jpg'
	}
]);

const menuList = ref([
	{
		id: 'book',
		img: envApi.imgBaseUrl + '/home/book.png',
		label: '参观预约'
	},
	{
		id: 'introduce',
		img: envApi.imgBaseUrl + '/home/introduce.png',
		label: '博物馆介绍'
	},
	{
		id: 'number',
		img: envApi.imgBaseUrl + '/home/number.png',
		label: '数字文物'
	},
	{
		id: 'exhibition',
		img: envApi.imgBaseUrl + '/home/exhibition.png',
		label: '展览展馆'
	},
	{
		id: 'wenbo',
		img: envApi.imgBaseUrl + '/home/wenbo.png',
		label: '文博资讯'
	},
	{
		id: 'traffic',
		img: envApi.imgBaseUrl + '/home/traffic.png',
		label: '交通线路'
	},
	{
		id: 'notice',
		img: envApi.imgBaseUrl + '/home/notice.png',
		label: '参观须知'
	},
	{
		id: 'interact',
		img: envApi.imgBaseUrl + '/home/interact.png',
		label: '互动留言'
	}
]);

onLoad(async () => {
	await HomeApi.getMerchantList();
});
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
	.top-logo {
		width: 692rpx;
		height: 60rpx;
		margin-top: 140rpx;
		.top-image {
			width: auto;
			min-width: 200rpx;
			height: 60rpx;
			background-color: #aaa;
		}
	}
	.home-swiper {
		width: calc(100% - 30rpx);
		margin-top: 40rpx;
		margin-left: 30rpx;
		// height: 400rpx;
	}
	.home-notice {
		width: 692rpx;
		height: 75rpx;
		background: v-bind('themeObject.themeSubBgColor');
		border-radius: 12px 12px 12px 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 21rpx;
		margin-top: 60rpx;

		.notice-right {
			width: 61rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
		.notice-center {
			flex: 1;
			.notice-text {
				color: v-bind('themeObject.titleColor');
				width: 540rpx;
				overflow: hidden; // 溢出部分隐藏
				text-align: center;
				text-overflow: ellipsis; // 显示省略号
				white-space: nowrap; // 文字不换行
			}
		}
		.notice-left {
			font-size: 32rpx;
			color: v-bind('themeObject.titleColor');
		}
	}

	.home-menu {
		width: 692rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.home-menu-item {
			margin-top: 60rpx;
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.menu-image {
				width: 89rpx;
				height: 89rpx;
			}
			.menu-text {
				margin-top: 20rpx;
				color: v-bind('themeObject.unThemeColor');
				font-size: 24rpx;
			}
		}
	}
}
</style>
