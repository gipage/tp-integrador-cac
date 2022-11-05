const valorTicket = 200;
const cantidad = document.getElementById("formCantidad");
const opcion=document.getElementById("formSelect");
const resumen= document.getElementById("btnResumen");
const borrar= document.getElementById("btnBorrar");
resumen.addEventListener("click",funresumen);
borrar.addEventListener("click",funborrar);
function calculoTotal(){
    let total=0;
    if(opcion.value=='Estudiante'){
        total = (valorTicket - (valorTicket* 0.80)) * cantidad.value;
    }if(opcion.value == 'Junior'){
        total =  (valorTicket - (valorTicket* 0.15)) * cantidad.value;
    }if(opcion.value == 'Trainee'){
            total = (valorTicket-(valorTicket* 0.50)) * cantidad.value;
        }
    return  total;
}
function funresumen(){
    document.getElementById("total").innerHTML=calculoTotal();
}
function funborrar(){
    document.getElementById("total").innerHTML=0.00;
}
