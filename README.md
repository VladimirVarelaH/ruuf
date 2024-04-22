# Desafío de posicionamiento de paneles

## Techo rectangular
La solución para el techo rectangular se encuentra en el archivo `techo.js`. En este archivo, se encuentra una función que toma las medidas de largo y ancho del techo, así como las dimensiones del panel. Con estas medidas, considera cuántos paneles enteros pueden entrar a lo alto y a lo ancho del techo. También evalúa los espacios sobrantes a lo largo y ancho como nuevos techos, rotando su posición 90°.  
La segunda función evalúa cuántos paneles caben tomando el panel en posición horizontal y vertical como posición inicial, ya que en algunos casos esto puede comprometer el resultado, como se ilustra en la siguiente imagen con los paneles de 3x2 y el techo de 6x3.  
![imagen del panel horizontal](./resources/techo36.png)  

### Notas
El sistema asume que los valores entregados serán válidos, es decir, que no habrá elementos con medidas cero, ya que esto plantearía divisiones por cero dentro del código.  

## Techo triangular

Para el techo triangular se plantea una aproximación similar, utilizando un método para encontrar la cantidad de paneles que se pueden posicionar y luego validando cuál es la mejor orientación. Estos están en el archivo `triangulo.js`. La función encargada de encontrar el número de paneles posicionables sigue la siguiente lógica: comienza analizando si el panel cabe dentro del triángulo, luego intenta posicionar una primera hilera de paneles en la base del triángulo. Después de este cálculo, genera un nuevo triángulo, esta vez restando la altura de la hilera de paneles añadida. Este proceso se repite hasta que ya no quepan más paneles, momento en el que sale del bucle y retorna la cantidad obtenida. 
![proceso de construccion de triangulos](./resources/proceso-triangulo.png)  
De esta forma, el problema se resuelve descomponiendo los segmentos utilizables del triángulo en rectángulos con la misma altura que los paneles a posicionar.

### Notas
El sistema asume que los elementos entregados serán válidos: que el triángulo es isósceles, que el tercer elemento del array que representa el triángulo será la base, que el triángulo es un triángulo posible y que ninguna medida es cero.
