const filtter2 = document.getElementById("filtter2");
const button = document.getElementById("button");
button.addEventListener("click", () => {
  filtter2.classList.toggle("d-none");
});

const filter = document.querySelector(".arowButton");
const moreinfo = document.querySelector(".moreinfo");

filter.addEventListener("click", () => {
  moreinfo.classList.toggle("show");
});

// const filter2 = document.querySelector(".onushondanm")
// const onushondhanPosition = document.querySelector(".onushondhanPosition")

// filter2.addEventListener("click", () => {
//   onushondhanPosition.classList.toggle("show2");
// });

//



// Bubble sort Implementation using Javascript
 
 
// Creating the bblSort function

function bblSort(arr){

    

  for(var i = 0; i < arr.length; i++){
 
     
 
    // Last i elements are already in place  
 
    for(var j = 0; j < ( arr.length - i -1 ); j++){
 
       
 
      // Checking if the item at present iteration 
 
      // is greater than the next iteration
 
      if(arr[j] > arr[j+1]){
 
         
 
        // If the condition is true then swap them
 
        var temp = arr[j]
 
        arr[j] = arr[j + 1]
 
        arr[j+1] = temp
 
      }
 
    }
 
  }
 
  // Print the sorted array
 
  console.log(arr);
 }
  
  
 // This is our unsorted array
 
 var arr = [];
  
  
 // Now pass this array to the bblSort() function
 bblSort(arr);

 $(document).ready(function() {
  $('.js-example-basic-single').select2();
});