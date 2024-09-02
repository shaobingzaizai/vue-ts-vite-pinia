import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import PiniaAutoRefs from 'pinia-auto-refs';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	plugins: [
		PiniaAutoRefs(),
		AutoImport({
			dts: 'src/auto-imports.d.ts',
			imports: [
				'vue',
				'uni-app',
				'pinia',
				{
					'@/helper/pinia-auto-refs': ['useStore']
				}
			],
			exclude: ['createApp'],
			eslintrc: {
				enabled: true
			}
		}),
		Components({
			dirs: ['src/components'],
			extensions: ['vue'],
			dts: 'src/components.d.ts'
		}),
		uni()
	],
	server: {
		open: true, // 自动打开
		proxy: {
			// 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
			// 正则表达式写法
			// 针对h5 本地打包
			'^/api': {
				target: 'https://www.mmweb.top',
				changeOrigin: true, // 开启代理
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
