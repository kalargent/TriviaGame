// WATCHED THE FOLLOWING VIDEO AS A RESOURCE TO CREATING MY GAME - USED IT TO SET MY MAIN PSEUDOCODE SECTIONS, ALL CODE IS MY OWN
// https://www.youtube.com/watch?v=KndV7UxLpnk&list=PLf1tvjFO2P7vIxVV5fZh7by2Vpm-vBhWN&index=9&t=6s


// ON CLICK EVENT FOR START BUTTON TO GO AWAY 
$(".btn-primary").on("click", function() {
    $(".btn-primary").remove(); 
})

// ON CLICK FOR RESET BUTTON 

// ON CLICK FOR ANSWER BUTTONS


// GAME VARIABLE WITH METHODS
// declare Game variable as an object with the following properties: 
    // questions
    // current question 
    // correct answers 
    // incorrect answers 
    // timeouts 

    // QUESTIONS OBJECT WHICH INCLUDES AN ARRAY OF 
    // QUESTIONS
        //question text 
        // question answers (array)
        // correct answer 

    //METHODS 
    // COUNTER
        // set the counter 

    // GET QUESTION 
        // set the counter 
        // display counter on screen 
        // display the question on the screen 
        // display answer buttons on the screen 
            // if correct answer call correct method
            // else incorrect call incorrect method 
            // else timeout call timeout method 
        // is last question? 
            // yes, call results 
            // no, call next question 

    // NEXT QUESTION 
        // reset the counter 
        // display counter on screen 
        // display the question on the screen 
        // display answer buttons on the screen 
            // if correct answer call correct method
            // else incorrect call incorrect method 
            // else timeout call timeout method 
        // is last question? 
            // yes, call results 
            // no, call next question 

    // CORRECT ANSWER 
        //increments answer var by 1
        // displays a screen saying you were correct and <xx> was right
        // screen times out in 3 second 
        // checks if that was the last question 
            // if last: call results method 
            // else: call next question 

    // INCORRECT ANSWER 
        //increments incorrect answer var by 1
        // displays a screen saying you were correct and <xx> was right
        // screen times out in 3 second 
        // checks if that was the last question 
            // if last: call results method 
            // else: call next question 

    // TIMED OUT 
        // increments timeout var by 1 
        // displays a screen telling you time is up 
        // screen times out in 3 second 
        // checks if that was the last question 
            // if last: call results method 
            // else: call next question 


    // SHOW RESULTS 
        // display the results screen with 
            // correct 
            // incorrect 
            // timed out
            // reset button that calls reset method

    // RESET GAME 
        // reset all variables (tbd) 
        // call get question method 