// 防抖
export function debounce(func: Function, delay = 300, immediate = false): Function {
	let timer: number | undefined;
	return function (this: unknown, ...args: any[]) {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const self = this;
		if (immediate) {
			func.apply(self, args);
			immediate = false;
			return;
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(self, args);
		}, delay);
	};
}

// 节流
export const throttle = (func, delay = 200) => {
	let timeoutId;
	let lastExecTime = 0;
	return (...args) => {
		const currentTime = Date.now();
		const elapsed = currentTime - lastExecTime;
		if (!timeoutId && elapsed >= delay) {
			func.apply(this, args);
			lastExecTime = currentTime;
			timeoutId = setTimeout(() => {
				timeoutId = null;
			}, delay);
		}
	};
};

//千分位
export const thousandsFormat = (num: any) => {
	return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
};

/**
 *  map -> list
 * @param map
 * @returns {*[]}
 */
export const mapToList = (map) => {
	const list: { value: string; label: string }[] = [];
	Object.keys(map).forEach((key) => {
		list.push({ value: key, label: map[key] });
	});
	return list;
};
/**
 *  list -> map
 * @param list
 * @returns {*{}}
 */
export const listToMap = (list) => {
	const map = {};
	list.forEach((item) => {
		map[item.value] = item.label;
	});
	return map;
};
