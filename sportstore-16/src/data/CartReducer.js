import {ActionTypes} from "./Types";

export const CartReducer = (storeData, action) => {
	let newStore = {
		cart: [],
		cartItems: 0,
		cartPrice: 0,
		...storeData
	}

	//console.log("action", action)

	switch (action.type) {
		//상품 담기, 기존상품 추가
		case ActionTypes.CART_ADD:
			let existing = newStore.cart.find(item => item.product.id === action.payload.product.id);
			if (existing) {
				existing.quantity += action.payload.quantity;
			} else {
				newStore.cart = [...newStore.cart, action.payload]
			}

			newStore.cartItems += action.payload.quantity;
			newStore.cartPrice += action.payload.product.price * action.payload.quantity;

			return newStore;
		//수량 변경
		case ActionTypes.CART_UPDATE:
			newStore.cart = newStore.cart.map((item) => {
				if (item.product.id === action.payload.product.id) {
					const diff = action.payload.quantity - item.quantity;
					//차액만큼 더함
					newStore.cartPrice += diff * item.product.price;
					newStore.cartItems += diff;
					return action.payload;
				}
				return item;
			})
			return newStore;
		//상품 장바구니에서 삭제
		case ActionTypes.CART_REMOVE:
			let selection = newStore.cart.find(item => item.product.id === action.payload.id);
			if (selection) {
				newStore.cartItems -= selection.quantity;
				newStore.cartPrice -= selection.product.price * selection.quantity;
				newStore.cart = newStore.cart.filter(item => item !== selection);
			}

			return newStore;
		//장바구니 비우기
		case ActionTypes.CART_CLEAR:
			return {
				cart: [],
				cartItems: 0,
				cartPrice: 0,
				...storeData
			}
		default:
			return storeData || {};
	}
}