"use strict";var _math = require('./math');
var _jestcucumber = require('jest-cucumber');


_jestcucumber.defineFeature.call(void 0, _jestcucumber.loadFeature.call(void 0, './src/math.feature'), test => {
    test('Sum two numbers', ({ given, when, then }) => {
        
        let math = new (0, _math.Math)();
        let result;

        given('two numbers', () => {
            // No-op
        });

        when('I sum both numbers', () => {
            result = math.sum(2, 3);
        });

        then('I get the sum of the two numbers', () => {
            expect(result).toBe(5);
        });
    });

    test('Subtract two numbers', ({ given, when, then }) => {
        let math = new (0, _math.Math)();
        let result;

        given('two numbers', () => {
            // No-op
        });

        when('I subtract the second number from the first number', () => {
            result = math.sub(5, 2);
        });

        then('I get the subtraction of the two numbers', () => {
            expect(result).toBe(3);
        });
    });

    test('Multiply two numbers', ({ given, when, then }) => {
        let math = new (0, _math.Math)();
        let result;

        given('two numbers', () => {
            // No-op
        });

        when('I multiply both numbers', () => {
            result = math.mult(2, 3);
        });

        then('I get the multiplication of the two numbers', () => {
            expect(result).toBe(6);
        });
    });
});