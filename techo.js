function encontrarCuantosPanelesEntran(roof, panel){
    if(roof[0]<panel[0] || roof[1]<panel[1]){
        return 0;
    }

    let panelesX = Math.floor(roof[0]/panel[0]);
    let sobranteX = roof[0]%panel[0];

    let panelesY = Math.floor(roof[1]/panel[1]);
    let sobranteY = roof[1]%panel[1];

    let totalPanel = panelesX*panelesY;
    totalPanel += encontrarCuantosPanelesEntran([sobranteY, roof[0]], panel);
    totalPanel += encontrarCuantosPanelesEntran([roof[1], sobranteX], panel);

    return totalPanel;
}

function encontrarOrientacion(roof,panel){
    const horizontal = encontrarCuantosPanelesEntran(roof, panel);
    if(panel[0]==panel[1]){
        return horizontal;
    }

    const vertical = encontrarCuantosPanelesEntran(roof, [panel[1], panel[0]]);

    return horizontal>vertical?horizontal:vertical;
}

const roof = [3,6];
const panel = [3,2];

console.log(encontrarOrientacion(roof, panel));