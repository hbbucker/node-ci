"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('index.ts', function () {
    describe('sum', function () {
        it('should return the sum of two numbers', function () {
            expect((0, index_1.sum)(2, 3)).toBe(5);
            expect((0, index_1.sum)(-5, 10)).toBe(5);
            expect((0, index_1.sum)(0, 0)).toBe(0);
        });
    });
    describe('sub', function () {
        it('should return the subtraction of two numbers', function () {
            expect((0, index_1.sub)(5, 2)).toBe(3);
            expect((0, index_1.sub)(10, -5)).toBe(15);
            expect((0, index_1.sub)(0, 0)).toBe(0);
        });
    });
    describe('mult', function () {
        it('should return the multiplication of two numbers', function () {
            expect((0, index_1.mult)(2, 3)).toBe(6);
            expect((0, index_1.mult)(-5, 10)).toBe(-50);
            expect((0, index_1.mult)(0, 10)).toBe(0);
        });
    });
});
