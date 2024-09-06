/*
 * @Author: Wolf.Ma
 * @Date: 2024-09-02 21:36:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 00:11:39
 * @FilePath: /zhenghe/src/config/env.ts
 * @Description:
 */
const env = import.meta.env;
export const apiEnv: ApiEnv =
	env.VITE_USER_NODE_ENV === 'development' ? 'dev' : 'prod';
// export const apiEnv: ApiEnv = "prod";
console.log('env', env.VITE_USER_NODE_ENV);

const envMap = {
	dev: {
		apiBaseUrl: 'https://instest.vspo.cn/ins-sns-api',
		imgBaseUrl: '/static/zhenghe'
	},
	prod: {
		apiBaseUrl: 'https://www.mmweb.top',
		imgBaseUrl: 'https://cdn.vspo.cn/ins/images'
	}
};

type ApiEnv = keyof typeof envMap;
type Env<T extends ApiEnv> = {
	apiEnv: T;
} & (typeof envMap)[T];

function createEnv(apiEnv: ApiEnv): Env<typeof apiEnv> {
	return Object.assign({ apiEnv }, envMap[apiEnv]);
}

const envApi = createEnv(apiEnv);
export default envApi;
