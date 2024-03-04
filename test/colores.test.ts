import { hello, ValorColor, CombinarColores, throttle } from '../src/colores';

test('says hello world', () => {
    expect(hello()).toEqual('Hello, World');
});

describe('Función CombinarColores con throttle', () => {
    jest.useFakeTimers();

    test('throttle limita llamadas a CombinarColores', () => {
        const mockCombinarColores = jest.fn(CombinarColores);
        const throttledCombinar = throttle(mockCombinarColores, 1000);

        throttledCombinar(['Red', 'Blue']);
        throttledCombinar(['Green', 'Violet']);

        jest.advanceTimersByTime(500);
        expect(mockCombinarColores).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(1000);
        throttledCombinar(['Yellow', 'Black']);
        jest.advanceTimersByTime(1000); 
        expect(mockCombinarColores).toHaveBeenCalledTimes(2);
    });

    afterAll(() => {
        jest.useRealTimers();
    });
});

describe('Función ValorColor', () => {
    test('devolviendo el valor de un color', () => {
        expect(ValorColor('Red')).toEqual('2');
        expect(ValorColor('Blue')).toEqual('6');
    });

    test('"Error: Color no válido" en caso de que no haya colores', () => {
        expect(ValorColor('Magenta')).toEqual("Error: Color no válido");
    });
});

describe('Función CombinarColores', () => {
    test('combina valores de colores', () => {
        expect(CombinarColores(['Red', 'Blue'])).toEqual(26);
        expect(CombinarColores(['Green', 'Violet'])).toEqual(57);
    });

    test('colores no válidos', () => {
        expect(CombinarColores(['Red', 'Magenta'])).toBeNaN();
    });
});
