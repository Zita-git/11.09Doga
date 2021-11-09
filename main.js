let szovegHiba, meretHiba;



function szovegMegvaltozott(){

    let szoveg= document.getElementById("szoveg").value;
    document.getElementById("elonezet").innerHTML = szoveg;


}

function szovegBillentyu(e){
    e.stopPropagation();
}

function meretMegvaltozott(){

    let meret= document.getElementById("meret").value;

    document.getElementById("elonezet").style.fontSize = meret+"pt";


}

function meretBillentyu(e){
    e.stopPropagation();
}



function alap(){
    let alapBeallitas = document.getElementById("elonezet").value;
    szoveg.classList.add("alap");


}





function init(){
    
    document.getElementById("szoveg").addEventListener("input", szovegMegvaltozott);
    document.addEventListener("keydown", szovegBillentyu);

    document.getElementById("meret").addEventListener("input", meretMegvaltozott);
    document.addEventListener("keydown", meretBillentyu);
    
    document.getElementById("alaphelyzet").addEventListener("click", alap);
}
document.addEventListener("DOMContentLoaded", init);