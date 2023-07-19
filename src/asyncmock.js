const misProductos = [
    { id: "1", nombre: "Sahumerios", precio: 500, img: "/imagenes/sahumerios.png", idCat: "sahumerios" },
    { id: "2", nombre: "Velas Aromaticas", precio: 850, img: "/imagenes/velas.jpg", idCat: "velasaromaticas" },
    { id: "3", nombre: "Aceites Escenciales", precio: 600, img: "/imagenes/aceitesescenciales.jpg", idCat: "aceitesescenciales" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)

    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);

        }, 100)
    })
}