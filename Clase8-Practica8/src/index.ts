const uid :string = Math.random().toString(36).slice(2);

export interface Producto {
    id:string,
    nombre:string,
    precio:number;
    cantidad:number;
    subtotal?:number;
}

export class Factura {
    numFact: string;
    ruc:string="1721795126001";
    direccion:string="Turubamba Bajo - Calle OE2H y Cusubamba Casa S26-108";
    telefono:string="0989295810";
    subtotal?: number;
    total?: number;
    productos:Producto[]=[];

    constructor() {
        this.numFact=Math.random().toString(36).slice(2);
    }

    insertarProductos(producto:Producto) { 
        if(this.productos.length==0){
            this.productos.push(producto);
        }else{
            //var coincide = this.obtenerCoincidencia(producto.nombre);
            var coincide = this.encontrarPorNombre((el:Producto)=>el.nombre==producto.nombre);
            if(coincide!==undefined){
                coincide.cantidad=this.calcularCantidad(coincide.cantidad,producto.cantidad);
                coincide.subtotal=this.calcularSubtotalProducto(coincide.cantidad,coincide.precio);
            }else{
                producto.subtotal=producto.cantidad*producto.precio;
                this.productos.push(producto);
            }
        }
    }

    encontrarPorNombre(callback:any){
        return this.productos.find(callback);
    }

    obtenerCoincidencia(nombre:string){
        return this.productos.find((el:Producto)=>el.nombre==nombre);
    }

    calcularCantidad(cantidad:number, cantidad2:number){
        return cantidad + cantidad2;
    }

    calcularSubtotalProducto(cantidad:number,precio:number){
        return cantidad*precio;
    }


    calcularSubtotalesFactura():void{
        var subtotal=0;
        for(var p=0;p<this.productos.length;p++){
            subtotal= this.calcularCantidad(subtotal,this.calcularSubtotalProducto(this.productos[p].cantidad,this.productos[p].precio));
        }
        this.subtotal=subtotal;
        this.total=subtotal+(subtotal * 0.12);
        console.log(`Subtotal = ${this.subtotal}\nTotal = ${this.total}\n`);
    }

    imprimirFactura():string{
        this.calcularSubtotalesFactura();
        var impr=`Factura Numero ${this.numFact} tiene el siguiente detalle \n`;
        impr+=`Nº ! Codigo      ! Nombre    !  Cantidad ! Precio ! Subtotal \n`
        var count=1;
        for(var p=0;p<this.productos.length;p++){
            impr+=`${count++}-> ${this.productos[p].id}   !  ${this.productos[p].nombre}    !   ${this.productos[p].cantidad} !  ${this.productos[p].precio} ! ${this.subtotal} \n`
        }
        impr+=`Subtotal = ${this.subtotal}\nTotal = ${this.total}\n`;
        return impr;
    }

}


var fact= new Factura();
fact.insertarProductos({id:Math.random().toString(36).slice(2),nombre:"laptop",precio:500,cantidad:2});
fact.insertarProductos({id:Math.random().toString(36).slice(2),nombre:"tv",precio:1300,cantidad:1});
fact.insertarProductos({id:Math.random().toString(36).slice(2),nombre:"camara",precio:340,cantidad:2});
fact.insertarProductos({id:Math.random().toString(36).slice(2),nombre:"laptop",precio:500,cantidad:3});

console.log(`************************** FACTURA Nº ${fact.numFact} ********************`);
console.log(`------------------------------------------------------------------------------`);
console.log(`                         RUC  ${fact.ruc} `);
console.log(`     DIRECCION :  ${fact.direccion} `);
console.log(`                        TELEFONO ${fact.telefono} `);
console.log(`------------------------------------------------------------------------------`);
console.log(`**************************** DETALLES DE FACTURA  ************************`);
console.log(fact.productos);
console.log(`**************************** TOTALES DE FACTURA  ************************`);
fact.calcularSubtotalesFactura();