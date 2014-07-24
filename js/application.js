$(document).ready(function (){

	$("#Rules").hide();
	$("label").hide();

    var fizz = "<li> FIZZ </li>";

	var buzz = "<li> BUZZ </li>";

	var fizzBuzz = "<li>FIZZBUZZ</li>";

    var onRefresh = function(promptInput){
          var promptInput = confirm("Welcome to FIZZBUZZ\nThese are the rules\nEnter a number below between 1 and 100.\nIf the number is divisible by 3 it will FIZZ.\nIf the number is divisible by 5 it will BUZZ.\nIf the number is divisible by 3 and 5 it will FIZZ BUZZ.");
	           if (promptInput) {
                   

                    var promptString = prompt("Enter your number in the box below");
                    var promptNo = parseInt(promptString);
                    var fizzbuzz = function (inputNo){
	     
	                   var inputNo = promptNo
	     
						        for (i = 1; i <= inputNo; i++) {
						    
						          if (i % 3 == 0 && i % 5 == 0) {
						          	$("#result").append(fizzBuzz)
						          }
						          else if (i % 3 == 0) {
						          	$("#result").append(fizz)
						          }
						          else if (i % 5 == 0) {
						          	$("#result").append(buzz)
						          }
						          else {
						          	$("#result").append("<li>" + i + "</li>")
						          };
						                          
						        };

                    };

                    if (promptNo >= 0 && promptNo <= 100 && promptNo % 1 === 0) {
                     fizzbuzz(promptNo);

                    } else {
                     alert("You have not entered a valid number!");
                    
                    }

				
				} 

				else {

				  alert("Go and play HELLO KITTY then!");
				};

     };

    
    
    onRefresh();

    $("#clearResult").mousedown(function () {
        	$("li").remove();
        });

    $("#inputNumber").mousedown(function () {
        	onRefresh();
        });


});







   
