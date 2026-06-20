/* Part001: Random Values Between 1 and 6 */
const RollButton=document.getElementById('idBttnRoll');
const LabelValue=document.getElementById('idlbl001');

RollButton.onclick=function(){
    let varRandomNum=Math.random();     /* Gets us a random number */

    let varCleanRandomNum=Math.floor(varRandomNum * 6);     /* Gets us a whole number wO decimals*/

    let varDiceNum=(varCleanRandomNum +1 );     /* Gets us a whole number between 1 and 6*/
    
    LabelValue.textContent=varDiceNum;
};


/* Part002: Random Values Between 50 and 100 */
const RollButton001A=document.getElementById('idBttnRoll001A');
const LabelValue001A=document.getElementById('idlbl001001A');
const LabelValue001B=document.getElementById('idlbl001001B');

RollButton001A.onclick=function(){

    let varDiceNum001A=Math.floor((Math.random() * (100-50)) + 50);
    let varDiceNum001B=Math.floor((Math.random() * (100-50)) + 50);

    LabelValue001A.textContent=varDiceNum001A;
    LabelValue001B.textContent=varDiceNum001B;
};



