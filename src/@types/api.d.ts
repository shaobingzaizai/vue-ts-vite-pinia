declare namespace Http {
	type Response<T> = Promise<{
		[x: string]: string;
		data?: T;
		code?: number;
		msg?: string;
	}>;
	type PageResponse<T> = {
		/**
		 * 查看页码
		 */
		pageNum?: number | null;
		/**
		 * 每页显示数量
		 */
		pageSize?: number | null;
		/**
		 * 记录数据
		 */
		recordList?: T | null;
		/**
		 * 总条数
		 */
		total?: number | null;
		/**
		 * 总页数
		 */
		totalPage?: number | null;
	};
}
