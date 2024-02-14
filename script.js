// display a number to field
function displayNumber(num){
  result.value+=num
}
// clear the text field
function clearText(){
    result.value=""
}

// 3 evaluate the expression
    function evaluateExpression(){
    exp=result.value
    res=eval(exp)
    result.value=res

    //OR
    // result.value=eval(result.value)
   }

   // 4 remove the last character from the text field
   function removeLastCharacter(){
    result.value=result.value.slice(0,-1)
   }
      
        