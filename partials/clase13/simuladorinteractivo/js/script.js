class Producto {
    constructor(nombre, precio, color) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.colo = color.toUpperCase();
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    
}
const producto1 = new Producto("Remera Básica", "1500", "Negro");
const producto2 = new Producto("Remera Musculosa", "1000", "Negro");
producto1.sumaIva();
producto2.sumaIva();