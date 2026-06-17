/* The below illustrates the use of variables and backticks */
/* The document dot getElementById property has been used to target specific elements */

let strFullName='Kalvin Klein';
let numAge=35;
let boolIsBoolean='false';


document.getElementById('prgrph001').textContent=`My name is ${strFullName}. I'm from Kenya.`;
document.getElementById('prgrph002').textContent=`I am ${numAge} years old.`;
document.getElementById('prgrph003').textContent=`Student Status: ${boolIsBoolean}.`;
