const dia1 = document.getElementById("task"),
 dia2 = document.getElementById("task2"),
 dia3 = document.getElementById("task3"),
 dia4 = document.getElementById("task4"),
 dia5 = document.getElementById("task5"),
 dia6 = document.getElementById("task6"),
 dia7 = document.getElementById("task7"),
 dia8 = document.getElementById("task8"),
 dia9 = document.getElementById("task9");
let i = 0;
 function tachar(dias){
    if (i===0){
        dias.style.textDecoration ="line-through";
        i++
    }else{
        dias.style.textDecoration = "none";
        i--
    }
}
dia1.onclick = function(){tachar(dia1);}
dia2.onclick = function(){tachar(dia2);}
dia3.onclick = function(){tachar(dia3);}
dia4.onclick = function(){tachar(dia4);}
dia5.onclick = function(){tachar(dia5);}
dia6.onclick = function(){tachar(dia6);}
dia7.onclick = function(){tachar(dia7);}
dia8.onclick = function(){tachar(dia8);}
dia9.onclick = function(){tachar(dia9);}
