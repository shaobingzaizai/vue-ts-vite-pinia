import http from '@/utils/request';

const HomeApi = {
	// 查看店铺列表
	getMerchantList: () =>
		http.get<Home.MerchantListResp[]>(
			'/feign/sns/ticket-activity/get-merchant-list',
			null
		)
};

export default HomeApi;
