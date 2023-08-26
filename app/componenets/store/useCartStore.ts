import { create } from 'zustand';
import { Product } from '@/types/Product';
import { persist } from 'zustand/middleware';

// Define the interface of the Cart state
interface State {
  cart: Product[];
  cartItems: number;
  CartPrice: number;
  openSideBar: boolean;
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
  // setOpenSideBar: (barState : boolean ) => void;
}

// Initialize a default state
const INITIAL_STATE: State = {
  cart: [],
  cartItems: 0,
  CartPrice: 0,
  openSideBar: false,
};
// export const useCartStore = create(
// 	persist<State & Actions>(
// 		(set, get) => ({
// 			cart: INITIAL_STATE.cart,
// 			totalItems: INITIAL_STATE.totalItems,
// 			totalPrice: INITIAL_STATE.totalPrice,
// 			addToCart: (product: Product) => {
// 				const cart = get().cart
// 				const cartItem = cart.find(item => item.id === product.id)

// 				if (cartItem) {
// 					const updatedCart = cart.map(item =>
// 						item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
// 					)
// 					set(state => ({
// 						cart: updatedCart,
// 						totalItems: state.totalItems + 1,
// 						totalPrice: state.totalPrice + product.price,
// 					}))
// 				} else {
// 					const updatedCart = [...cart, { ...product, quantity: 1 }]

// 					set(state => ({
// 						cart: updatedCart,
// 						totalItems: state.totalItems + 1,
// 						totalPrice: state.totalPrice + product.price,
// 					}))
// 				}
// 			},
// 			removeFromCart: (product: Product) => {
// 				set(state => ({
// 					cart: state.cart.filter(item => item.id !== product.id),
// 					totalItems: state.totalItems - 1,
// 					totalPrice: state.totalPrice - product.price,
// 				}))
// 			},
// 		}),
// 		{
// 			name: "cart-storage",
// 			// getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
// 			// version: 1, // State version number,
// 			// migrate: (persistedState: unknown, version: number) => {
// 			// 	if (version === 0) {
// 			// 		// if the stored value is in version 0, we rename the field to the new name
// 			// 		persistedState.totalProducts = persistedState.totalItems
// 			// 		delete persistedState.totalItems
// 			// 	}

// 			// 	return persistedState as State & Actions
// 			// },
// 		}
// 	)
// );

// Create the store with Zustand, combining the status interface and actions

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  cartItems: INITIAL_STATE.cartItems,
  CartPrice: INITIAL_STATE.CartPrice,
  openSideBar: INITIAL_STATE.openSideBar,
  addToCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item._id === product._id);

    // If the item already exists in the Cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        cartItems: state.cartItems + 1,
        CartPrice: state.CartPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        cartItems: state.cartItems + 1,
        CartPrice: state.CartPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== product._id),
      cartItems: state.cart.length,
      CartPrice: state.CartPrice - product.price,
    }));
  },
}));

