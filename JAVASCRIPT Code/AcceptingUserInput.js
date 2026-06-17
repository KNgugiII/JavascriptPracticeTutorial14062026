/* Method001: Getting User Input using the window prompt method */

/* let varStrUserName;
let varStrGreeting='Hi, \nWhats your name?'; */

/* varStrUserName=window.prompt(varStrGreeting); */

/* console.log(varStrUserName); */
/* window.alert(`Pleasure to meet you ${varStrUserName}!`) */

/* Method002: Getting User Input using the text box method */

let strUserName;

/* The below function ascertains if the UserName text box is empty - If it's not, it submits the name */

document.getElementById('cmndBttnSubmit').onclick=function(){
        strUserName=document.getElementById('txtbxIDUserName').value;
            if (strUserName==='')
                window.alert('Please enter your name!');   
            else{
                window.alert(`Welcome ${strUserName}`); 
                document.getElementById('txtbxIDUserName').value='';
            }    
            //end if
    }

    /* OBSERVATION; Either i'm creating object variables wrong or its imppossible in Javascript. The below is what I wanted to have; */

    /* let SubmitButtonAction=document.getElementById('cmndBttnSubmit').onclick; */

    /* OBSERVATION; Also, to associate a label with an element, on its For Argument, capture the elements ID - that way, when you click the label, it navigates to the control; */

    


