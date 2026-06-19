/* The below script gets the current year and assigns it to the target element */
/* Basically, when the footer loads, the Year element gets assigned the current year */
    let HuuMwaka=new Date();

document.getElementById('ftrFooter').onload=document.getElementById('prpgrphFooterYear').textContent = HuuMwaka.getFullYear();    

let varBaseValue=0;

document.getElementById('idResetBttn').onclick=function(){
    document.getElementById('prpgrphCounterVariable').value=0;
}

/* When the Increase button is clicked, it should ADD 1 */
document.getElementById('idIncreaseBttn').onclick=function(){
   varBaseValue=Number(document.getElementById('prpgrphCounterVariable').value);

   if(varBaseValue>=30)
        document.getElementById('prpgrphCounterVariable').value=30
   else
        document.getElementById('prpgrphCounterVariable').value=varBaseValue +=1;
   //end if

}

/* When the Decrease button is clicked, it should DEDUCT 1 */
document.getElementById('idDecreaseBttn').onclick=function(){
   varBaseValue=Number(document.getElementById('prpgrphCounterVariable').value);
   
   if(varBaseValue<=0)
        document.getElementById('prpgrphCounterVariable').value=0
   else
        document.getElementById('prpgrphCounterVariable').value=varBaseValue -=1;
   //end if
}