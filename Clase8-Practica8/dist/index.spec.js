"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const factura = new index_1.Factura();
describe("Functions Randoms", () => {
    test('Debe sumar la [cantidad1] del producto que coincide mas [cantidad2] del producto que llega y devolver [result] con la funcion calcularCantidad', () => {
        const cantidad1 = 3;
        const cantidad2 = 6;
        const resulExpected = 9;
        let result;
        result = factura.calcularCantidad(cantidad1, cantidad2);
        //asserts
        expect(result).toBe(resulExpected);
    });
    test('Debe multiplicar la [cantidad] del producto por el [precio] devolver [result] con la funcion calcularSubtotalProducto', () => {
        const cantidad = 3;
        const precio = 6.50;
        const resulExpected = 19.50;
        let result;
        result = factura.calcularSubtotalProducto(cantidad, precio);
        //asserts
        expect(result).toBe(resulExpected);
    });
    test("Obtener un string de la funcion Imprimir Factura", () => {
        //AAA -> arranque,actuacion,asert
        const expected = expect.any(String);
        const result = factura.imprimirFactura();
        expect(result).toEqual(expected);
    });
});
