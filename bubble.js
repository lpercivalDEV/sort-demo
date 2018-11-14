// practice making a bubble sort algorithm! :)
console.log("linked!")



//***bubble sort function***
// when button is clicked, bubble function is called and the sort method begins sorting the inputs   :)
function bubbles(arr) {
    for( i=0; i<arr.length; i++ ) {
        for(j=0; j<arr.length; j++) {
            if(arr[j-1] > arr[j]) {
                let bucket = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = bucket;
                let final = arr;
                console.log(final);
                //sort method is printed to the dom so users can see it in action.
                results.innerHTML = document.createElement;
            }
        }


    }

};

//global variables
let input = document.getElementById("nums");
let goSort = document.getElementById("submit");
let results = document.getElementById("sortPrint");
let temp =[];


//checks for new inputs
input.addEventListener("change", () => {

    //checking to see if correct input is grabbed
    console.log(input.value);

    // splits inputs and returns them as integers and stores them in an array for bubble sort function to work with
    function makeSet(stuff) {

            //splitting single string input into an array of strings
            let hold = input.value.split(",");

            //converting array of strings into integers
            for(var i=0; i<hold.length; i++) { hold[i] = +hold[i]; };

            //saving numerical values in temp for bubble sort
            temp = hold;

            //checking to see if set was converted to integers correctly
            console.log(temp);

    };

    //on click, inputs are processed using makeSet function and then sorted using bubbles function
    goSort.addEventListener("click", function() {
        makeSet();
        bubbles(temp);
        console.log("success!");
    });

});
