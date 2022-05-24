import React, {Component} from "react";
import {PaginationButtons} from "./PaginationButtons";

export class PaginationControls extends Component {
	constructor(props) {
		super(props);
		this.pageSizes = this.props.sizes || [5, 10, 15, 20];
		this.sortKeys = this.props.keys || ["Name", "Price"];
	}

	handleChangePageSize = (event) => {
		this.props.setPagesize(event.target.value);
	}

	handleChangeSortKey = (event) => {
		this.props.setSortProperty(event.target.value);
	}

	render() {
		return (
			<div className="m-2">
				<div className="text-center m-1">
					<PaginationButtons currentPage={this.props.currentPage}
					                   pageCount={this.props.pageCount}
					                   navigate={this.props.navigateToPage} />
				</div>
				<div className="form-inline justify-content-center">
					<select className="form-control"
					        value={this.props.pageSize || this.pageSizes[0]}
					        onChange={this.handleChangePageSize}>
						{this.pageSizes.map(size =>
							<option value={size} key={size}>{size} per page</option>
						)}
					</select>
					<select className="form-control"
					        value={this.props.sortKey || this.sortKeys[0]}
					        onChange={this.handleChangeSortKey}>
						{this.sortKeys.map(key =>
							<option value={key} key={key}>Sort By {key}</option>
						)}
					</select>
				</div>
			</div>
		)
	}
}