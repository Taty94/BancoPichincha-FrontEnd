import {Factura,Producto} from "./index"
const factura = new Factura();
describe ("Functions Randoms", ()=>{

    test('Debe sumar la [cantidad1] del producto que coincide mas [cantidad2] del producto que llega y devolver [result] con la funcion calcularCantidad', ()=>{

        const cantidad1=3
        const cantidad2=6
        const resulExpected=9
        let result:number
        result= factura.calcularCantidad(cantidad1,cantidad2);

        //asserts
        expect(
            result
        ).toBe(resulExpected)
    })

    test('Debe multiplicar la [cantidad] del producto por el [precio] devolver [result] con la funcion calcularSubtotalProducto', ()=>{

        const cantidad=3
        const precio=6.50
        const resulExpected=19.50
        let result:number
        result= factura.calcularSubtotalProducto(cantidad,precio);

        //asserts
        expect(
            result
        ).toBe(resulExpected)
    })

    test('Verificar que la funcion obtenerCoincidencia retorne un objeto Producto', () => {
        factura.insertarProductos({id:"123",nombre:"laptop",precio:500,cantidad:2});
        const prod =factura.obtenerCoincidencia(factura.productos[0].nombre);
        expect(prod).toEqual(
          expect.objectContaining({
            "cantidad": 2,
            "id": "123",
            "nombre": "laptop",
            "precio": 500,
          })
        );
      });

    test("Verificar que la funcion imprimirFactura me devuelva un string", ()=>{
        
        factura.insertarProductos({id:"123",nombre:"laptop",precio:500,cantidad:2});
        const respuesta =factura.imprimirFactura();
        
        const expected =expect.any(String)

        expect(
            respuesta
        ).toEqual(
            expected
        )
    });

    test("Verificar que llame dos veces la fn callback", ()=>{
        
        factura.insertarProductos({id:"123",nombre:"laptop",precio:500,cantidad:2});
        factura.insertarProductos({id:"546",nombre:"tv",precio:1300,cantidad:1});

        const filterNombre = jest.fn()
        factura.encontrarPorNombre(filterNombre);

        expect(
            filterNombre
        ).toHaveBeenCalled();
    });
});