import http from '@/utils/request';

const HomeApi = {
	// 查看店铺列表
	getMerchantList: () =>
		http.get<Home.MerchantListResp[]>(
			'/feign/sns/ticket-activity/get-merchant-list',
			null
		),
	// 获取开屏页地址
	openScreenUrl: () =>
		http.get<Home.SystemOpenScreenResp>('/feign/sns/system/open-screen-url')
};

export default HomeApi;
