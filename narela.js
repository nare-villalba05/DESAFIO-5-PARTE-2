const Productos = ["teclado", "prod2", "prod3", "prod4"]

for (let i = 0; i < Productos.length; i++){
    console.log("producto en indice"+i+ "=  "+Productos[i])
}

Productos.pop()
console.log("-----------------------------")
console.log("Nuevo stock despues de la venta:   ")

for(let i =0; i < Productos.length;i++){
    console.log("Producto  " + (i+1)+ ":"+Productos[i] );
}