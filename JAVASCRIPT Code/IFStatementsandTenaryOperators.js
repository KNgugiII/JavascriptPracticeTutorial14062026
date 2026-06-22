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

 /* let varDiscount=20;
 let varCostOfGoods=30000;
 let varFinalCostOfGoods= (varCostOfGoods>=10000) ? `The Discount is ${varDiscount}% and the Final Cost of Goods is Kshs. ${varCostOfGoods - (varCostOfGoods*0.2)}`:`There is No Discount. The Final Cost of Goods is Kshs. ${varCostOfGoods}`

 console.log(varFinalCostOfGoods); */

 /* A SWITCH STATEMENT CAN BE AN EFFICIENT REPLACEMENT TO MANY IF Else Statements */
 /*Example001 - a long If Else Statement */

 let varDay=2;
 let varOutCome;

if (varDay==1)
    varOutCome=(`Today is Monday.`);
else if (varDay==2)
    varOutCome=(`Today is Tuesday.`);
else if (varDay==3)
    varOutCome=(`Today is Wednesday.`);
else if (varDay==4)
    varOutCome=(`Today is Thursday.`);
else if (varDay==5)
    varOutCome=(`Today is Friday.`);
else if (varDay==6)
    varOutCome=(`Today is Saturday.`);
else if (varDay==7)
    varOutCome=(`Today is Sunday.`);
else
    varOutCome=(`That isn't a recognized day`);
//end if

console.log(varOutCome)
    
/* The above can be reWritten as below using the Switch Statement */
let varDay001='Sunday';
let varOutCome001;

switch (varDay001) {
    case 'Monday':
        varOutCome001=(`${varDay001} is the 1st day of the week.`);
        break;
    case 'Tuesday':
        varOutCome001=(`${varDay001} is the 2nd day of the week.`);
        break;
    case 'Wednesday':
        varOutCome001=(`${varDay001} is the 3rd day of the week.`);
        break;
    case 'Thursday':
        varOutCome001=(`${varDay001} is the 4th day of the week.`);
        break;
    case 'Friday':
        varOutCome001=(`${varDay001} is the 5th day of the week.`);
        break;
    case 'Saturday':
        varOutCome001=(`${varDay001} is the 6th day of the week.`);
        break;
    case 'Sunday':
        varOutCome001=(`${varDay001} is the 7th day of the week.`);
        break;
    default:
        varOutCome001=(`${varDay001} isn't a recognized day!`);
        break;
}//end switch
    
console.log(varOutCome001);