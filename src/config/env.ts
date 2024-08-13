const env = import.meta.env;
const accountInfo = uni.getAccountInfoSync();
const envVersion = accountInfo.miniProgram.envVersion;
export const apiEnv: ApiEnv =
	env.VITE_USER_NODE_ENV === 'development' ? 'dev' : 'prod';
// export const apiEnv: ApiEnv = "prod";
console.log('env', env.VITE_USER_NODE_ENV);

const envMap = {
	dev: {
		apiBaseUrl: 'https://instest.vspo.cn/ins-sns-api',
		imgBaseUrl: 'https://testcdn.vspo.cn/ins/images'
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
