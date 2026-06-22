const objParagraph001=document.getElementById('prpgrphCheckBox');

const objParagraph002=document.getElementById('prpgrphRadioButtons');

const objCheckBoxSubscribe=document.getElementById('IDchckSubscribe');

const objSubmitBttn=document.getElementById('IDCmdBttnSubmit');

const objRdBttnVisa=document.getElementById('rdBttnVisa');

const objRdBttnMastercard=document.getElementById('rdBttnMastercard');

const objRdBttnPayPal=document.getElementById('rdBttnPayPal');

objSubmitBttn.onclick=function(){

    /* The below scripts display the use of the Ternary Operators */

    (objCheckBoxSubscribe.checked)? objParagraph001.textContent=`The Subscribe button is CHECKED.`:      objParagraph001.textContent=`The Subscribe button is NOT CHECKED`;

    if (objRdBttnVisa.checked)
         objParagraph002.textContent=`The Visa radio button is CHECKED.`
    else if (objRdBttnMastercard.checked)
        objParagraph002.textContent=`The Mastercard radio button is CHECKED.`
    else if (objRdBttnPayPal.checked)
        objParagraph002.textContent=`The PayPal radio button is CHECKED.`
    else    
        objParagraph002.textContent=`You MUST SELECT A PAYMENT TYPE`;
    //end if
};