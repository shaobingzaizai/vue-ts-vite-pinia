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
	/**
	 * 请求数据
	 *
	 * SystemOpenScreenResp
	 */
	interface SystemOpenScreenResp {
		/**
		 * 开屏页类型：1图片，2视频
		 */
		openScreenType?: number | null;
		/**
		 * 开屏页地址
		 */
		openScreenUrl?: null | string;
		[property: string]: any;
	}
}
