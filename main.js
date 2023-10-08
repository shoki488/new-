　 let lastInputIsOperator = false;

        function get_calc(btn) {
            if (btn.value === "=") {
                if (lastInputIsOperator) {
                    return;
                }
                document.dentaku.display.value = eval(document.dentaku.display.value);
                lastInputIsOperator = false;
            } else if (btn.value === "AC") {
                document.dentaku.display.value = "";
                lastInputIsOperator = false;
            } else {
                if (btn.value === "0" && document.dentaku.display.value === "0") {
                    return;
                }
                if (lastInputIsOperator && "+-*/.".includes(btn.value)) {
                    return;
                }
                document.dentaku.display.value += btn.value;
                lastInputIsOperator = "+-*/.".includes(btn.value);
            }
        }