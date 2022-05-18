import {ActionTypes} from "./Types";

export const CartReducer = (storeData, action) => {
	let newStore = {
		cart: [],
		cartItems: 0,
		cartPrice: 0,
		...storeData
	}

	const { product, quantity } = action.payload;

	switch (action.type) {
		//상품 담기
		case ActionTypes.CART_ADD:
			newStore.cart = [...newStore.cart, product]
			newStore.cartItems++;
			newStore.cartPrice += product.price * quantity;
			break;
		//수량 변경
		case ActionTypes.CART_UPDATE:
			newStore.cart.map(item => {
				if (item.id === product.id) {
					const diff = product.quantity - item.quantity;
					//차액만큼 더함
					newStore.cartPrice += diff * product.price;
					return product;
				}
				return item;
			})
			break;
		//상품 장바구니에서 삭제
		case ActionTypes.CART_REMOVE:
			let index = newStore.cart.findIndex(item => item.id === product.id);
			if (index !== -1) {
				const { price, quantity } = newStore.cart[index];
				newStore.cartItems--;
				newStore.cartPrice -= price * quantity;
				newStore.cart = newStore.filter(item => item.id !== product.id);
			}
			break;
		//장바구니 비우기
		case ActionTypes.CART_CLEAR:
			newStore = {
				cart: [],
				cartItems: 0,
				cartPrice: 0,
				...storeData
			}
			break;
		default:
			return newStore
	}
}