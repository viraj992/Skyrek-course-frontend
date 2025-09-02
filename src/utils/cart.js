export function getCart(){
    let cartInString = localStorage.getItem("cart"); //Try to load as...

    if(cartInString == null){
        cartInString = "[]"
        localStorage.setItem("cart", cartInString);
    }
    const cart = JSON.parse(cartInString); //convert to Jason format
    return cart;
}


export function addToCart(product, qty){
    const cart = getCart(); //load the cart first

    const existingProductIndex = cart.findIndex((item) => {
        return item.productId === product.productId;
    })

    if(existingProductIndex == -1){
        cart.push(
            {
               productId: product.productId,
               quantity: qty,
               price: product.price,
               name: product.name,
               altNames: product.altNames,
               image: product.images[0]
            }
        )
        localStorage.setItem("cart", JSON.stringify(cart));
    }else{
        const newQty = cart[existingProductIndex].quantity + qty;
        if(newQty <= 0){  //remove item
            const newCart = cart.filter((item, index)=>{
                return index !== existingProductIndex;  //keep everything except the product we’re removing.
            })
            localStorage.setItem("cart", JSON.stringify(newCart));
        }else{  //update item
            cart[existingProductIndex].quantity = newQty;
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
}