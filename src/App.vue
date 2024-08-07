<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useStore } from '@/store/pinia';
import { ThemeList } from '@/config/theme';

const { selectTheme, SET_THEME_OBJECT } = useStore('app');

/**
 * 初始化主题颜色
 */
const initTheme = () => {
	SET_THEME_OBJECT(ThemeList[selectTheme.value || 'default']);
};

onLaunch(() => {
	initTheme();
});
onShow(() => {
	console.log('App Show');
});
onHide(() => {
	console.log('App Hide');
});
</script>
<style></style>
