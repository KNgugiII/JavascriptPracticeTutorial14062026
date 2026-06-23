/* Prints the word 'Hello' 10 times */
for(let iCounter=0;iCounter<10;iCounter++){

    console.log('Hello');
}//end loop


/*Its very much possible to include a BREAK in a For Loop, ie a way to jump out of the code */
for(let iCounter001=0;iCounter001<10;iCounter001++){
    
    if (iCounter001==7){
        console.log(iCounter001);
        break       /* This has the NET EFFECT OF STOPPING THE LOOP AT 7 */
       }else 
        console.log(iCounter001);
    //end if
}//end loop

/*Its very much possible to SKIP AN ITERATION */
for(let iCounter002=0;iCounter002<10;iCounter002++){
    
    if (iCounter002==5){
        continue       /* This has the NET EFFECT OF SKIPPING THE ITERATION AT 5 and proceeding */
        console.log(iCounter002);
       }else 
        console.log(iCounter002);
    //end if
}//end loop