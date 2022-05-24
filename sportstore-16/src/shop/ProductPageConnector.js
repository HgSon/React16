import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setPagesize, setSortProperty} from "../data/ActionCreators";


const mapStateToProps = (dataStore) => dataStore;
const mapDispatchToProps = { setPagesize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => ({
	...dataStore, ...actionCreators, ...router,
	currentPage: Number(router.match.params.page),
	pageCount: Math.ceil(dataStore.products_total / (dataStore.pageSize || 5)),
	navigateToPage: (page) => router.history.push(`/shop/products/${router.match.params.category}/${page}`)
})

export const ProductPageConnector = (PageComponent) => withRouter(
	connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
);