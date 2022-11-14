const defaultResult=0;

let operand1Value;
let operand2Value;
let operatorValue;

function takeInput(){

    operand1Value=parseInt(operand1.value);
    operand2Value=parseInt(operand2.value);
    
   // console.log(operators)
    for (op of operators){
        
        if(op.checked){
          
            operatorValue=op.value;
        }
    }    
   
}

function add(){

    let finalOutput=operand1Value+operand2Value;
    output.innerText=finalOutput;
}

function sub(){

    let finalOutput=operand1Value-operand2Value;
    output.innerText=finalOutput;
}

function multiply(){

    let finalOutput=operand1Value*operand2Value;
    output.innerText=finalOutput;
}

function divide(){

    let finalOutput=operand1Value/operand2Value;
    output.innerText=finalOutput;
}

function initiateCalculation(){

    takeInput();
    switch(operatorValue){
        case "add":
            add();
            break;
        case "sub":
            sub();
            break;
        case "mul":
            multiply();
            break;
        case "divide":
            divide();
            break;
        default:
            alert("No operator selected")
    }
}


btn.addEventListener('click',initiateCalculation);