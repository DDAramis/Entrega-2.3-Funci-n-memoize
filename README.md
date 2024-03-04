# Restiencia de identificando sus valores mediante
uno banda 
El programa tomará nombres de colores
como entrada y generará un número de dos dígitos.
si imprimieran una
banda marrón (valor 1) seguida de una banda verde (valor 5)
 se traduciría en el número 15,

fc memoize 
La función memoize aquí utiliza un Map para almacenar los resultados de las funciones basándose en una clave que es una representación en cadena de los argumentos de entrada. Esto es suficiente para demostraciones y casos de uso simples.


1- Banda de colores 
2- Asigno número a cada color modiante un type map
3- Aqui me aseguro de mapear los colores en la lista, y de su valorl asociado
en caso de no coincider, que develva un falsy como string, ya que
la funcion espera un valor de retorno tipo string.
4- interfaz de usuario donde el usuario selecciona colores y no quieres que
  la función se ejecute hasta que el usuario 
  haya terminado de hacer selecciones.

5- Esta funcion es lo que devoverá en 
    lugar de la funcion original, Esto es
    en caso de  que el tecnico decida 
    cambiar los valores de la bnda de calores.

FTR -Aqui agregaremos la funcion throttle, para que el
usuario al seleccionar click, mas de una vez en el color, 
no sobre cargue la pagina.

6- Aqui verificaré que el codigo se ejecute,una vez
haya seleccionado el color con el wait, 
si no, el temporizador se reinicaria.
7- que esto se llama cada vez que el usuario elige un par de colores.

