import {ActionTypes} from "./Types";
import {data as thData} from "./placeholderData";

export const loadData = (dataType) => ({
	type: ActionTypes.DATA_LOAD,
	payload: {
		dataType,
		data: thData[dataType]
	}
})