/* This is the method of calling one method after another in a continuous line of code, ie combines all processes into 1 long chain */

/* Example 001 Tasks 
Capitalize the first letter of a name,
Change the rest to lower case */
const varUserName='kENn FoLLeT'

/* Stage001 - get the first character*/
let varFirstChar=varUserName.charAt(0);
console.log(varFirstChar);


/* Stage002 - Capitalize the first character*/
let varUcaseFirstChar=varFirstChar.toUpperCase();
console.log(varUcaseFirstChar);

/* Stage003 - Get the rest of the characters*/
let varRestOfChars=varUserName.slice(1);
console.log(varRestOfChars);

/* Stage004 - Convert the rest to Lower Case*/
let varConvertToLowerChars=varRestOfChars.toLowerCase();
console.log(varConvertToLowerChars);


/* Stage005 - Combine the first Capital Letter with the rest of the Lower Case Letters*/
let varFinalSubmission=(varUcaseFirstChar + varConvertToLowerChars)
console.log(varFinalSubmission);

/* All the above steps can be combined into one long method chain as below; */
/* Example 002 - Method CHaining*/

let varFinalUserName=varUserName.charAt(0).toUpperCase() + varUserName.slice(1).toLowerCase();
console.log(`The final username value is; ${varFinalUserName}`);
