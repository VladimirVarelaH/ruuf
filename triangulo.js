function determinarAngulo(adyacente1, adyacente2, opuesto) {
    const cosAngulo = (adyacente1 ** 2 + adyacente2 ** 2 - opuesto ** 2) / (2 * adyacente1 * adyacente2);
    const angulo = Math.acos(cosAngulo);
    const anguloGrados = angulo * (180 / Math.PI);

    return anguloGrados;
}

function encontrarAdyacenteConOpuesto(ladoPanel, anguloTriangulo) {
    // Convertir el ángulo de grados a radianes
    const anguloRadianes = anguloTriangulo * (Math.PI / 180);
    
    // Calcular el espaciado entre paneles (lado adyacente de un triángulo rectángulo)
    const espaciado = ladoPanel / Math.tan(anguloRadianes);
    
    return espaciado;
}

function pitagoras(cateto1, cateto2, hipotenuza){
    if(cateto1==null){
        return Math.sqrt(hipotenuza ** 2 - cateto2 ** 2);
    } else if(cateto2==null){
        return Math.sqrt(hipotenuza ** 2 - cateto1 ** 2);
    } else if(hipotenuza==null){
        return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    } else {
        return NaN;
    }
}

function econcontrarCuantosPanelesCabenTriangulo(triangulo, panel){  
    var ladox = panel[0];
    var ladoy = panel[1];

    var alturaTriangulo = pitagoras(triangulo[2]/2, null, triangulo[0]);
    var totalPanel = 0;
    var anguloInferior = determinarAngulo(triangulo[2],triangulo[1],triangulo[0]);

    while(alturaTriangulo>ladoy){
        // Valida si el panel cabe en el triangulo
        if(ladox>triangulo[2] || ladoy>alturaTriangulo){
            break;
        }
        // Calcula los nuevos paneles a añadir
        var espaciadoPanelBordeInferior = encontrarAdyacenteConOpuesto(ladoy, anguloInferior); 
        var nuevaFilaPaneles = Math.floor((triangulo[2]-espaciadoPanelBordeInferior*2)/ladox); 
        if(nuevaFilaPaneles==0){
            break;
        }
        totalPanel += nuevaFilaPaneles;

        // Genera el nuevo triangulo
        alturaTriangulo -= ladoy; 
        var mediaBase = encontrarAdyacenteConOpuesto(alturaTriangulo, anguloInferior);
        var nuevoLado = pitagoras(mediaBase, alturaTriangulo, null);

        triangulo = [nuevoLado, nuevoLado,mediaBase*2];
    }
    return totalPanel;
}

function encontrarOrientacionOptima(triangulo, panel){

    var horizontal = econcontrarCuantosPanelesCabenTriangulo(triangulo, panel);
    if(panel[0]==panel[1]){
        return horizontal;
    }

    var vertical = econcontrarCuantosPanelesCabenTriangulo(triangulo, [panel[1], panel[0]]);

    return horizontal>vertical?horizontal:vertical;
}

var panel = [2,2];
var triangulo = [15,15,10]; // [lado, lado, base]

console.log(encontrarOrientacionOptima(triangulo, panel));