var letters = 'абвгдежзийклмнопрстуфхцчшщъьюя';

function encrypt(){
var inputMsg = $('#original').val();
var inputShift = $('#offset').val();

inputShift = (inputShift % letters.length);

var encryptMsg = '';

for ( i = 0; i < inputMsg.length; i ++ ){
var currentLetter = inputMsg[i];
var upperCase = (currentLetter == currentLetter.toUpperCase());

currentLetter = currentLetter.toLowerCase();


		var ind = letters.indexOf(currentLetter); 

				if(ind == -1 ){
					encryptMsg += currentLetter;

				} else {
					
						ind = ((ind + inputShift) + letters.length);
				//console.log(ind);

				var allLet = letters + letters + letters;
				var newLetter = allLet[ind];
				if(upperCase)
					newLetter = newLetter.toUpperCase();
				encryptMsg += newLetter;
			}

		}
		$('#cipher').val(encryptMsg);

	}

	$(document).ready(function(){
		let inputMsg = $('#original')[0];
		let originalMsg = inputMsg.value;

		inputMsg.addEventListener('input', enteredLetter)

		function enteredLetter(e){
			originalMsg = e.target.value;
			originalMsg = originalMsg.replace( /[^а-я, А-Я\s]/, '' );
			e.target.value = originalMsg;
			encrypt();
		}

	});


