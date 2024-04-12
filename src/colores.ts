export function hello(): string {
    return 'Hello, World';
}

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return function(...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key)!;
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    } as T;
}

export type BandaDeColores = 'Black' | 'Brown' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Violet' | 'Grey' | 'White';

export const ColorAndNumber: {[buscar in BandaDeColores]: string } = {
    "Black": "0", 
    "Brown": "1", 
    "Red": "2",
    "Orange": "3",
    "Yellow": "4",
    "Green": "5",
    "Blue": "6",
    "Violet": "7",
    "Grey": "8",
    "White": "9",
};

export const ValorColor = memoize((map: string): string => {
    return ColorAndNumber[map as BandaDeColores] || "Error: Color no válido";
});

export function CombinarColores(combinar: string[]): number {
    const [color1, color2] = combinar;
    const Combinacion = ValorColor(color1) + ValorColor(color2);
    return Number(Combinacion);
}

export function throttle(func: (combinar: string[]) => number, limit: number): (combinar: string[]) => void {
    let Enfriador: boolean;
    return function(combinar: string[]) {
        if (!Enfriador) {
            func(combinar);
            Enfriador = true;
            setTimeout(() => Enfriador = false, limit);
        }
    };
}

export function debounce(func: (colores: string[]) => number, wait: number): (colores: string[]) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return function(combinar: string[]) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = null;
            func(combinar);
        }, wait);
    };
}

const CombinacionSinCrona = debounce(CombinarColores, 500);

CombinacionSinCrona(['Blue', 'Red']);
