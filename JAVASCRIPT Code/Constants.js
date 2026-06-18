/* NOTE: Whenever you expect User Input, it's best to PERFORM TYPE CONVERSION IF YOU PLAN ON DOING ARITHMETIC ACTIVITIES, ie changing one datatype into another format. For instance, if your expecting a number, it's best to convert the value received into a number, e.g number(varUserInput).

This is because, user input converts INPUT DATA INTO STRING DATA TYPE. 

The type conversion can be from boolean to string, string to number, boolean to number etc.   */

const PI=(2*3.14);

let varUserRadius;

let varTheCircumference;

document.getElementById('cmdBttnCalculateCircumference').onclick=function(){
    varUserRadius=document.getElementById('txtbxIDRadius').value;

    /* Type conversion taking place */
    varUserRadius=Number(varUserRadius)

    varTheCircumference=(PI * varUserRadius)

    window.alert(`The circumference is ${varTheCircumference}`);
    
}