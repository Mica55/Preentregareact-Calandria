const misProductos = [
    { id: 1, nombre: "Sahumerios", precio: 500, img: "" },
    { id: 2, nombre: "Velas Aromaticas", precio: 850, img: "" },
    { id: 3, nombre: "Aceites Escenciales", precio: 600, img: "" },

]

const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    } ) 
}