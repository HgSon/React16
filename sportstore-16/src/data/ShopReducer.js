import {ActionTypes} from "./Types";

/**
 * 상태를 받아서 액션으로 상태 변경
 *
 * @param storeData state 초기값
 * @param action 데이터 수정방법
 * @returns {{[p: string]: *}|*|{}}
 * @constructor
 */
export const ShopReducer = (storeData, action) => {
	//console.log("reducer storeData", storeData);
	//console.log("reducer action", action);
	switch (action.type) {
		case ActionTypes.DATA_LOAD:
			return {
				...storeData,
				[action.payload.dataType] : action.payload.data,
				[`${action.payload.dataType}_total`]: action.payload.total,
				[`${action.payload.dataType}_params`]: action.payload.params,
			};
		case ActionTypes.DATA_SET_PAGESIZE:
			return {
				...storeData,
				pageSize : action.payload
			};
		case ActionTypes.DATA_SET_SORT_PROPERTY:
			return {
				...storeData,
				sortKey : action.payload
			}
		default:
			return storeData || {};
	}
}
