/* IF Statements illustrate statements that assess a condition - If the condition is true, it executes a predefined set of statements. If Not true, it evaluates another set of statements.  */

/* An IF Statement is like a FORK in the road - which path will we take based on the conditions to be met? */

/* Example001 */
/* let varTime=7;

if (varTime<12)
    console.log('Goodmorning');
else
    console.log('Goodafternoon'); */
//end if

/* The above can also be written as below, ie in Tenary terms */
/* A ternary operator is just a shortened version of an IF Statement */

/* let varDay='Wednesday';

(varDay==='Monday')? console.log(`YES - it's ${varDay}.`):console.log(`NO - it's NOT. Today is ${varDay}.`); */

/* Example002 */
/* let IsStudent=false;

if (IsStudent)
    console.log('You are a student.');
else    
     console.log('You are NOT a student.'); */
//end if
    
/* The above can also be written as below, ie in Tenary terms */
/* let IsTeacher=true;
IsTeacher ? console.log('You are a Teacher.'):console.log('You are NOT a Teacher.'); */

/* IF Statements can be nested. 
The Order of the conditions matter in the iF else lines - hence the most appropriate condition should be placed higher.
To compare if 2 values are EQUAL; use 2 double == symbols. One (=) symbol implies an assignment. For greater accuracy, use 3 equal symbols, ie === */

/* let varLegalRecommendedAge=18;
let varUserAge;
    
let objSubmit = document.getElementById('IDCmdBttnSubmit');

let objAge = document.getElementById('IDtxtbxAge');

let objAgeOutcome = document.getElementById('IDLabelAgeOutCome');

objSubmit.onclick=function(){

    varUserAge=Number(objAge.value); */

    /* if (varUserAge==''){
        objAgeOutcome.textContent=`Kindly input the age! You haven't entered anything`;
    } else if (varUserAge<varLegalRecommendedAge){
        objAgeOutcome.textContent=`You are ${varUserAge} years old. You are too young - Permission DENIED!`;
    }else if (varUserAge>60){
        objAgeOutcome.textContent=`You are ${varUserAge} years old. You are too old - Permission DENIED!`;
    }else if (varUserAge>=varLegalRecommendedAge){
        objAgeOutcome.textContent=`You are ${varUserAge} years old. You are an adult - Permission GRANTED!`;
    }//end if       
}; */

 /* NOTE: A ternary operator is best used to assign a variable based on a condition. For instance; */

 let varDiscount=20;
 let varCostOfGoods=30000;
 let varFinalCostOfGoods= (varCostOfGoods>=10000) ? `The Discount is ${varDiscount}% and the Final Cost of Goods is Kshs. ${varCostOfGoods - (varCostOfGoods*0.2)}`:`There is No Discount. The Final Cost of Goods is Kshs. ${varCostOfGoods}`

 console.log(varFinalCostOfGoods);
 