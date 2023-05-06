var  input = document.getElementById("screen").value;
     btn7 =  document.getElementById("numbtn7").value;
     btn8 =  document.getElementById("numbtn8").value;
     btn9 =  document.getElementById("numbtn9").value;
     oprt1 =  document.getElementById("oprt1").value;
     btn4 =  document.getElementById("numbtn4").value;
     btn5 =  document.getElementById("numbtn5").value;
     btn6 =  document.getElementById("numbtn6").value;
     oprt2 =  document.getElementById("oprt2").value;
     btn1 =  document.getElementById("numbtn1").value;
     btn2 =  document.getElementById("numbtn2").value;
     btn3 =  document.getElementById("numbtn3").value;
     oprt3 =  document.getElementById("oprt3").value;
     btn0 =  document.getElementById("numbtn0").value;
     btndott =  document.getElementById("numbtn.").value;
     oprt4 =  document.getElementById("oprt4").value;
     oprt5 =  document.getElementById("oprt5").value;
function concatone(){
    "use strict";
    input += btn7;
    document.getElementById("screen").value = input;
}
function concattwo(){
    "use strict";
    input += btn8;
    document.getElementById("screen").value = input;
}
function concatthree(){
    "use strict";
    input += btn9;
    document.getElementById("screen").value = input;
}
function concatplus(){
    "use strict";
    input +=  oprt1;
    document.getElementById("screen").value = input;
}
function concatfour(){
    "use strict";
    input += btn4;
    document.getElementById("screen").value = input;
}
function concatfive(){
    "use strict";
    input += btn5;
    document.getElementById("screen").value = input;
}
function concatsix(){
    "use strict";
    input += btn6;
    document.getElementById("screen").value = input;
}
function concatminus(){
    "use strict";
    input +=  oprt2;
    document.getElementById("screen").value = input;
}
function concatseven(){
    "use strict";
    input += btn1;
    document.getElementById("screen").value = input;
}
function concateight(){
    "use strict";
    input += btn2;
    document.getElementById("screen").value = input;
}
function concatnine(){
    "use strict";
    input += btn3;
    document.getElementById("screen").value = input;
}
function concatX(){
    "use strict";
    input +=  oprt3;
    document.getElementById("screen").value = input;
}
function concatten(){
    "use strict";
    input += btn0;
    document.getElementById("screen").value = input;
}
function concateleven(){
    "use strict";
    input += btndott;
    document.getElementById("screen").value = input;
}
function concatfour(){
    "use strict";
    input +=  oprt5;
    document.getElementById("screen").value = input;
    }
    function equal(){
        "use strict";
         document.getElementById("operation").value = eval(input);
    }
    
    function earaser(){
         "use strict";
          document.getElementById("screen").value = " ";
          document.getElementById("operation").value = " ";
    }
    
