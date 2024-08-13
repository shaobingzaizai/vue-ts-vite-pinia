/**
 * MerchantListResp
 */
declare namespace Home {
	interface MerchantListResp {
		/**
		 * 是否支持活动配置
		 */
		activity?: number;
		/**
		 * 商户id
		 */
		id: number;
		/**
		 * 是否是见面奖励店铺
		 */
		meet?: number;
		/**
		 * 商户name
		 */
		name?: string;
	}
}
