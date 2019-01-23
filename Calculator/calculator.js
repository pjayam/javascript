var currentOp = null;
var numStack = [];
var num1 = 0;
var isLastOperand = false;

// function doOpetation(num){
//     let existContent = document.getElementById('resultTab').innerHTML;
//     if(is_numeric(num)){
//         if(currentOp != null){
//             doMath(existContent,num)
//             currentOp = null;
//         } else {
//             if(existContent != 0)
//                 document.getElementById('resultTab').innerHTML=existContent+num;
//             else 
//                 document.getElementById('resultTab').innerHTML=num;
//         }
//     } else {
//         currentOp = num;
//         document.getElementById('resultTab').innerHTML=existContent+num;
//     } 
// }

function addNum(num){
    let existContent = document.getElementById('resultTab').innerHTML;
    if(existContent == 0 || isLastOperand == true){
        document.getElementById('resultTab').innerHTML=num;
        isLastOperand = false;
    } else {
        document.getElementById('resultTab').innerHTML=document.getElementById('resultTab').innerHTML+num;
    }
}

function applyOperator(thisObj){
    let existContent = document.getElementById('resultTab').innerHTML;
    if(existContent != null){
        if(currentOp != null){
            let res = doMath(num1, existContent, currentOp);
            document.getElementById('resultTab').innerHTML=res;
            numStack.push(res);
            currentOp = null;
            isLastOperand = false;
            _removeClasses();
        } else {
            currentOp = thisObj.innerHTML;
            thisObj.classList.add("selOperator");
            num1 = existContent;
            isLastOperand = true;
            document.getElementById('resultTab');
        }
    }
}

function _removeClasses () {
    var els = document.getElementsByClassName('symbol')
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('selOperator')
    }
}

function removeAll(){
    numStack = [];
    num1 = 0;
    isLastOperand = false;
    document.getElementById('resultTab').innerHTML=num1;
}

function doMath(num1, num2, currentOp){
    switch(currentOp) {
        case "+":
            return parseInt(num1) + parseInt(num2);
        case "-":
            return num1 - num2;            
        case "*":
            return num1 * num2;            
        case "/":
            return num1 / num2;            
    } 
}


function is_numeric(str){
    return /^\d+$/.test(str);
}