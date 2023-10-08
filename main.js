　　 let lastInputIsOperator = false;

        function get_calc(btn) {
            if (btn.value === "=") {
                if (lastInputIsOperator) {
                    return;
                }
                document.dentaku.display.value = eval(document.dentaku.display.value);
                lastInputIsOperator = false;
            }else if (btn.value === "AC") {
                document.dentaku.display.value = "";
                lastInputIsOperator = false;
            }else{
              if((btn.value === "0" || btn.value === "00") &&document.dentaku.display.value === ""){
                  document.dentaku.display.value = "1";
                   lastInputIsOperator = false;
              }else if (lastInputIsOperator && "+-*/.".includes(btn.value)) {
               return;
            }else{
                 document.dentaku.display.value += btn.value;
            lastInputIsOperator = "+-*/.".includes(btn.value);
            }
        }
    }
