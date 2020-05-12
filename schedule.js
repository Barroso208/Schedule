const dia1 = document.getElementById("task");
let i = 0;
dia1.onclick = function(){
    if (i===0){
        dia1.style.textDecoration ="line-through";
        i++
    }else{
        dia1.style.textDecoration = "none";
        i--
    }
}
