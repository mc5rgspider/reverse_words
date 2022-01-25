/*
Question: Write a function in Javascript that will reverse every word in a given string and return the new string. 
Every word should be reversed but the string as a whole should not be reversed. 
And DO NOT use array.reverse() method

Note: Push your puzzle answer into your GitHub repo and submit the link. Make sure you comment on your code.
*/

/*
Ex.
Given string: I am happy
Reversed solution: I ma yppah
*/

/*
**** Assign each word to each element ****
Create an array 
Create a int variable 'end = 0;'
Create a string 'tempstr'

Loop through 'message'

**** Reverse each words. ****
Loop to the beginning: decrement i as long as i >= end 
If it finds a space, initialize it to tempstr[i]

*/

function WordReverse() {

    //Original mesage
    let message = "I am happy";

    //end tracks the elemen that has not been checked
    let end = -1;

    //Stored the inversed version of message
    let tempstr = [];

    //temp counts the number of elements in 'tempstr'
    let temp = 0;

    for(let i=0; i <= message.length; i++) {

        //When it encounters a space or pass over the end of the string
        //Store the word backward ito 'tempstr'
        if(message[i] == " " || i == message.length) {

            for(let j=(i - 1); j > end; j--) {

                tempstr[temp] = message[j];
                
                temp++;
            }

            end = i;
            temp++;
            tempstr[temp] = " ";
        }
    }

    //Print 
    console.log(String(tempstr));

}

WordReverse();