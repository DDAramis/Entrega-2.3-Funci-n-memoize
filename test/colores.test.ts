import { hello, memoize, BandaDeColores, ColorAndNumber, ValorColor, CombinarColores, throttle, debounce } from '../src/colores'; // Reemplaza './tu_archivo' con la ruta correcta a tu archivo

describe('hello function', () => {
    it('should return "Hello, World"', () => {
        expect(hello()).toBe('Hello, World');
    });
});

describe('memoize function', () => {
    it('should memoize the function correctly', () => {
        const fn = (x: number) => x * 2;
        const memoizedFn = memoize(fn);

        expect(memoizedFn(2)).toBe(4);
        expect(memoizedFn(2)).toBe(4); // Cached result
    });
});

describe('ValorColor function', () => {
    it('should return correct value for valid color', () => {
        expect(ValorColor('Red')).toBe('2');
    });

    it('should return "Error: Color no válido" for invalid color', () => {
        expect(ValorColor('Pink')).toBe('Error: Color no válido');
    });
});

describe('CombinarColores function', () => {
    it('should correctly combine colors', () => {
        expect(CombinarColores(['Blue', 'Red'])).toBe(62); 
    });
});

describe('throttle function', () => {
    it('should throttle the function correctly', () => {
        jest.useFakeTimers();

        const mockFunc = jest.fn();
        const throttledFunc = throttle(mockFunc, 1000);

        throttledFunc(['Blue', 'Red']);
        expect(mockFunc).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(1000);

        throttledFunc(['Blue', 'Red']);
        expect(mockFunc).toHaveBeenCalledTimes(2); 

        jest.useRealTimers();
    });
});

describe('debounce function', () => {
    it('should debounce the function correctly', () => {
        jest.useFakeTimers();

        const mockFunc = jest.fn();
        const debouncedFunc = debounce(mockFunc, 1000);

        debouncedFunc(['Blue', 'Red']);
        debouncedFunc(['Blue', 'Red']);
        debouncedFunc(['Blue', 'Red']);
        debouncedFunc(['Blue', 'Red']);

        expect(mockFunc).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1000);

        expect(mockFunc).toHaveBeenCalledTimes(1);

        jest.useRealTimers();
    });
});
