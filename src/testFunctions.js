export const add = (x, y) => {
    return ( x + y );
}
 

export const total = (deliveryCost, productPrice) => {
    return '$' + add(deliveryCost, productPrice)
}