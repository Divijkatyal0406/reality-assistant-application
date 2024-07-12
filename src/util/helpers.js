export const getQuantity = (title, cartItems) => {
    const _index = cartItems.findIndex(item => item.title === title);
    if (_index >= 0) {
        return cartItems[_index].quantity;
    }
    return 0;
}