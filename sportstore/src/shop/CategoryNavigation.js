import React, { Component } from "react";
import { Link} from "react-router-dom";

export class CategoryNavigation extends Component {

	render() {
		return (
			<React.Fragment>
				<Link to={ this.props.baseUrl } className="btn btn-secondary btn-block">ALL</Link>
				{ this.props.categories && this.props.categories.map( cat =>
					<Link to={ `${this.props.baseUrl}/${cat.toLowerCase()}` }
					      key={ cat } className="btn btn-secondary btn-block">
						{ cat }
					</Link>
				)}
			</React.Fragment>
		);
	}
}