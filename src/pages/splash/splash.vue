<template>
	<view class="splash">
		<image
			v-if="dataInfo?.openScreenType === 1"
			mode="aspectFill"
			class="img"
			:src="dataInfo?.openScreenUrl"
		></image>
		<video
			v-else
			class="video"
			:src="dataInfo?.openScreenUrl"
			autoplay
			loop
			:controls="false"
			:show-progress="false"
		/>
	</view>
</template>

<script lang="ts" setup>
import HomeApi from '@/api/home';
const dataInfo = ref();
setTimeout(() => {
	uni.switchTab({
		url: '/pages/home/home'
	});
}, dataInfo.value?.openScreenTime || 2000);

const init = async () => {
	const res = await HomeApi.openScreenUrl();
	dataInfo.value = res.data;
};
onLoad(() => {
	init();
});
</script>

<style scoped lang="scss">
.splash {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	.video {
		width: 100vw;
		height: 100vh;
	}
	.img {
		width: 100%;
		height: 100%;
	}
}
.logo {
	width: 200px;
	height: 200px;
}
.title {
	margin-top: 20px;
	font-size: 24px;
}
</style>
