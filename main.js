

function szovegMegvaltozott(){

    let szoveg= document.getElementById("szoveg").value;
    document.getElementById("elonezet").innerHTML = szoveg;

    if(szoveg===""){
        document.getElementById("szovegHiba").innerHTML = "A szöveget meg kell adni!";
    }else if(szoveg===" "){
        document.getElementById("szovegHiba").innerHTML = "A szöveget meg kell adni!";
    }else{
        document.getElementById("szovegHiba").innerHTML = "";
    }

}

function szovegBillentyu(e){
    e.stopPropagation();
}

function meretMegvaltozott(){

    let meret= document.getElementById("meret").value;
    if(meret<=0){
        document.getElementById("meretHiba").innerHTML = "A méret nem lehet 0 vagy kevesebb!";
    }else if(meret===!isNaN){
        document.getElementById("meretHiba").innerHTML = "A méretet számmal kell megadni!";
    }else{
        document.getElementById("meretHiba").innerHTML = "";
    }

    document.getElementById("elonezet").style.fontSize = meret+"pt";



}

function meretBillentyu(e){
    e.stopPropagation();
}

function szovSzinMegvaltozott(){
    let szin=document.getElementById("szovSzin").value;
    document.getElementById("elonezet").style.color=szin;
}

function szovSzinBillentyu(e){
    e.stopPropagation();
}



function alap(){

    document.getElementById("elonezet").style.color= '#000000';
    document.getElementById("szovSzin").value= '#000000';

    document.getElementById("elonezet").style.fontSize = 12+"pt";
    document.getElementById("meret").value= 12;
}





function init(){
    alap();
    document.getElementById("alaphelyzet").addEventListener("click", alap);

    document.getElementById("szoveg").addEventListener("input", szovegMegvaltozott);
    document.addEventListener("keydown", szovegBillentyu);

    document.getElementById("meret").addEventListener("input", meretMegvaltozott);
    document.addEventListener("keydown", meretBillentyu);

    document.getElementById("szovSzin").addEventListener("input", szovSzinMegvaltozott);
    document.addEventListener("keydown", szovSzinBillentyu);
    
}
document.addEventListener("DOMContentLoaded", init);