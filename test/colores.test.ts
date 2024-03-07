import { hello, ValorColor, CombinarColores, throttle, debounce, memoize } from '../src/colores';

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

// Esto es la función debounce
describe('Función CombinarColores con debounce', () => {
    jest.useFakeTimers();

    test('debounce limita llamadas a CombinarColores', () => {
        const mockCombinarColores = jest.fn(CombinarColores);
        const debouncedCombinar = debounce(mockCombinarColores, 500);

        debouncedCombinar(['Red', 'Blue']);
        debouncedCombinar(['Green', 'Violet']);

        jest.advanceTimersByTime(500);
        expect(mockCombinarColores).toHaveBeenCalledTimes(1);

        debouncedCombinar(['Yellow', 'Black']);
        jest.advanceTimersByTime(50);
        expect(mockCombinarColores).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(450);
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

// Esto es la función memoize
describe('Función ValorColor con memoize', () => {
    test('memoize cachea correctamente el resultado', () => {
        const mockValorColor = jest.fn().mockImplementation((color) => {
            return ColorAndNumber[color] || "Error: Color no válido";
        });
        const memoizedValorColor = memoize(mockValorColor);

        expect(memoizedValorColor('Red')).toEqual('2');
        expect(memoizedValorColor('Red')).toEqual('2');
        expect(memoizedValorColor('Blue')).toEqual('6');
        expect(memoizedValorColor('Blue')).toEqual('6');

        // La función debe haber sido llamada sólo una vez por color debido a la memoización
        expect(mockValorColor).toHaveBeenCalledTimes(2);
    });
});
