/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - COntiene el valor del input que ingreso el usuario
 */

function convertirUnidades(id, valor){
    if (isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        document.lasUnidades.unid_metro.value = " ";
        document.lasUnidades.unid_pulgada.value= " ";
        document.lasUnidades.unid_pie.value= " ";
        document.lasUnidades.unid_yarda.value= " ";
    } else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value= valor*39.3701;
        document.lasUnidades.unid_pie.value= valor * 3.28084;
        document.lasUnidades.unid_yarda.value= valor * 1.09361;
    } else if (id=="pulgada") {
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.08333;
        document.lasUnidades.unid_yarda.value = valor * 0.027778;
    } else if (id=="pie") {
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_yarda.value = valor * 0.333333;
    } else if (id=="yarda") {
        document.lasUnidades.unid_metro.value = valor * 0.9144;
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
    }
}