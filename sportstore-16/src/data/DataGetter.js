import React, { Component} from 'react';
import {DataTypes} from "./Types";

export class DataGetter extends Component {
	render() {
		return <React.Fragment>{ this.props.children }</React.Fragment>
	}

	componentDidMount() {
		this.getData()
	}

	componentDidUpdate() {
		this.getData()
	}

	getData() {
		/**
		 * 데이터스토어에서 가져온 정보와 현재 url params 정보 비교.
		 * 다를 경우 현재 params로 업데이트 = 새 액션 부착
		 * 페이지네이션 기준(_sort, _limit)은  데이터 스토어에서 가져오기
		 */
		//console.log("dataGetter getData", this.props);
		const dsData = this.props.product_params || {};
		const rtData = {
			_limit : this.props.pageSize || 5,
			_sort : this.props.sortKey || "name",
			_page : this.props.match.params.page || 1,
			category_like : ( this.props.match.params.category || "") === "all" ? "" : this.props.match.params.category
		}

		if(Object.keys(rtData).find(key => rtData[key] !== dsData[key])) {
			this.props.loadData(DataTypes.PRODUCTS, rtData);
		}

	}
}