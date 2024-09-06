<!--
 * @Author: Wolf.Ma
 * @Date: 2024-09-02 21:37:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-06 21:21:41
 * @FilePath: /zhenghe/src/App.vue
 * @Description: 
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { ThemeList } from '@/config/theme';

const { selectTheme, SET_THEME_OBJECT, INIT_SYSTEM_INFO } = useStore('app');

/**
 * 初始化主题颜色
 */
const initTheme = () => {
	SET_THEME_OBJECT(ThemeList[selectTheme.value || 'default']);
};

onLaunch(() => {
	initTheme();
	INIT_SYSTEM_INFO();
});
onShow(() => {
	console.log('App Show');
});
onHide(() => {
	console.log('App Hide');
});
</script>
<style>
/**
  *   theme.ts   themeBgColor: "#F1ECDC", // 主题背景色
  */
page {
	z-index: -999;
	background-color: #f1ecdc;
}
</style>
<style lang="scss">
.uni-tabbar-bottom {
	display: none;
}
</style>
