import { Math } from './math';
import { defineFeature, loadFeature } from 'jest-cucumber';


defineFeature(loadFeature('./src/math.feature'), test => {
    test('Sum two numbers', ({ given, when, then }) => {
        
        let math = new Math();
        let result: number;

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
        let math = new Math();
        let result: number;

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
        let math = new Math();
        let result: number;

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