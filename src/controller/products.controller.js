import Product from '../model/products.model.js'

export const createProductController = (productData) => {
    const productCreated =  new Product (productData.id,productData.name, productData.price) 
    // Guardar en DB

    return productCreated
}