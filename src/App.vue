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
<style lang="scss">
.uni-tabbar-bottom {
	display: none;
}
</style>
