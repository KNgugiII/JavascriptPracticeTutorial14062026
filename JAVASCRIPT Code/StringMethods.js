/* To get the length of a string */
let varUserName='kennedy klein';

/* console.log(`The length of ${varUserName} is ${varUserName.length}`); */ 

/* To CAPITALIZE a string */
/* console.log(`The capitalized version of ${varUserName} is ${varUserName.toUpperCase()}`); */

/* To LOWERCASE a string */
/* console.log(`The LowerCase version of ${varUserName} is ${varUserName.toLowerCase()}`); */

/* To REPLACE a character in a string */
console.log(`To Replace the letter 'n' in ${varUserName} is ${varUserName.replaceAll('n',7)}`);

/* To REPEAT STRING A CERTAIN NUMBER OF TIMES */
console.log(`To REPEAT ${varUserName} 3 times, use ${varUserName.repeat(3)}`);

/* To check whether a string STARTS with certain characters - Returns a Boolean Value (Case SENSITIVE) */
console.log(`To check whether ${varUserName} starts with 'k', use ${varUserName.startsWith('k')}`);

/* To check whether a string ENDS with certain characters */
console.log(`To check whether ${varUserName} ends with 'n', use ${varUserName.endsWith('n')}`);

/* Returns a character at the specified index */
console.log(`To return the first 'l' in ${varUserName}, use ${varUserName.charAt(9)}`);

/* Checks whether a character is available in a certain string - returns a boolean*/
console.log(`To check whether there's a space in in ${varUserName}, use ${varUserName.includes('')}`);

/* Return the index of the FIRST Occurence of the specified character */
console.log(`To return the first 'n' in ${varUserName}, use ${varUserName.indexOf('n')}`);

/* Return the index of the LAST Occurence of the specified character */
console.log(`To return the Last 'n' in ${varUserName}, use ${varUserName.lastIndexOf('n')}`);

/* String Slicing */
let VarFirstName=console.log(varUserName.slice(0,7));
console.log(VarFirstName);

let varLastName=console.log(varUserName.slice(7,13));
console.log(varLastName);

/* NOTE: If you're going to be creating an index all the way from the middle to the very end, the 'end' character is note necessary. Hence, let varLastName=console.log(varUserName.slice(7)); would still have sufficed. */

/* Combining the Slice Method and Index Of Method To get the Last and First names*/
/* Example001 */
/* const varFullName ='Broseph Code';  */

/* Retrieves the First Occurence of the SPACE CHAR */
/* let varFirstCharOfSpace=0;
varFirstCharOfSpace=varFullName.indexOf(' ');

console.log(`The space character is at Index: ${varFirstCharOfSpace}`); */


/* Therefore, the first and last names are as follows; */
/* console.log(`The First Name is ${varFullName.slice(0,varFirstCharOfSpace)}`);

console.log(`The Last Name is ${varFullName.slice(varFirstCharOfSpace + 1)}`); */

/* Example002 - Extract the Email, the Email Domain and UserName from the below*/
const varUserEmail='TheInternetMerchant@gmail.com'

/*Getting the Index of the @ symbol */
let varPosition=0;
varPosition=varUserEmail.indexOf('@');

console.log(`The UserName is: ${varUserEmail.slice(0,varPosition)}`);

console.log(`The Email Domain is: ${varUserEmail.slice(varPosition+1)}`);







