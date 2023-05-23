/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - COntiene el valor del input que ingreso el usuario
 */
convertirUnidades = (id, valor) => {
    let met, pul, pie, tar;

    if(valor.includes(",")){
        valor=valor.replace (",", ".");
    }
    if (isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = " ";
        pul= " ";
        pie= " ";
        yar= " ";
    } else if (id=="metro"){
        met=valor;
        pul= valor*39.3701;
        pie= valor * 3.28084;
        yar= valor * 1.09361;
    } else if (id=="pulgada") {
        pul=valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id=="pie") {
        pie=valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id=="yarda") {
        yar=valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }
    document.lasUnidades.unid_metro.value =Number(met).toFixed(2);
    document.lasUnidades.unid_pulgada.value= Number(pul).toFixed(2);
    document.lasUnidades.unid_pie.value= Number(pie).toFixed(2);
    document.lasUnidades.unid_yarda.value= Number(yar).toFixed(2);
}
/**
 * Convierte grados a radianes o radianes a grados
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */
// mejorar esta funcion
convertirGR = (id) => {
    let gr, rad;
    if(id=="grados"){
        gr= document.getElementById("grados").value;
        document.getElementById("radianes").value= (gr*Math.PI)/180;
        if (isNaN(gr)){
            alert("El valor ingresado es incorrecto");
            gr= " ";
        }
    } else if(id=="radianes") {
        rad= document.getElementById("radianes").value;
    document.getElementById("grados").value= (rad*180)/Math.PI;
        if (isNaN(rad)){
            alert("El valor ingresado es incorrecto");
            rad= " ";
        }
}
}
/**
 * Muestra o oculta un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input radio en html
 */
let mostrar_ocultar = (id) =>{
    if (id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}
/**
 * Suma 2 inputs introducidos por el usuario
 * @method sumar
 */
let sumar =() =>{
    let res, s1, s2;
    s1=Number(document.operacionesMat.sum_num1.value)
    s2= Number(document.operacionesMat.sum_num2.value)
    res= s1 +s2 ;
    document.getElementById("totalS").innerHTML=res;
}
let restar =() =>{
    let res, s1, s2;
    s1=Number(document.operacionesMat.res_num1.value)
    s2= Number(document.operacionesMat.res_num2.value)
    res= s1 -s2 ;
    document.getElementById("totalR").innerHTML=res;
}
let multiplicacion =() =>{
    let res, s1, s2;
    s1=Number(document.operacionesMat.mul_num1.value)
    s2= Number(document.operacionesMat.mul_num2.value)
    res= s1 *s2 ;
    document.getElementById("totalM").innerHTML=res;
}
let dividir =() =>{
    let res, s1, s2;
    s1=Number(document.operacionesMat.div_num1.value)
    s2= Number(document.operacionesMat.div_num2.value)
    res= s1 /s2 ;
    document.getElementById("totalD").innerHTML=res;
}
/**
 * Si el campo contiene una letra, blanquee el campo
 * @method verLetra
 * @param {string} id- Id del elemento input del html
 * @param  {number/string} value- Contiene el valor del input que ingresa el usuario
 */
let verLetra = (id, value) => {
    if(isNaN(value)){
        document.getElementById(id).value = " ";
    }
}
/**
 * Redirige la primera pagina web a la segunda
 * @method generarUrl
 */
let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades") [0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

/**
 * Carga los valores de la primera pagina web en la segunda
 * @method cargarValor
 */
let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split ("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}
/**
 * Guarda los datos en la segunda pagina web, mediante local storage
 * @method guardarLS
 */
let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades") [0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
    window.open("web2.html");
}
/**
 * Carga los valores de la primera pagina web en la segunda mediante local storage
 * @method cargarLS
 */
let cargarLS = () => {
    const distancia= localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    console.log(distancia);
    console.log(unidad);
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}
/**
 * Dibuja un circulo y un rectangulo mediante CANVAS
 * @method dibujarCirculoCuadrado
 */
let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#333";
    //Dibujar rectangulo
    let margen = 5;
    ctx.fillRect(0+margen, yMax-120-margen, 130, 120);

   //Dibuja un circulo
    ctx.arc (xMax/2, yMax/2, 100, 0, 2 * Math.PI);
    ctx.stroke(); //IMP el STROKE para que dibuje las lineas
    ctx.fill(); //pinta el interior
}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}

let dibujar = () => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    ctx.fillRect(posX, posY, 5, 5);
    ctx.fill;
}