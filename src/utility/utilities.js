export const getImgUrl = (name)=>{
    return new URL(`../assets/product_image/${name}`, import.meta.url).href
}


export const getRating = ()=>{
    return (
        '★'
    )
}