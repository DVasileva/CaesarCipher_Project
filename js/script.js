	 //other option ???
		var letters = 'абвгдежзийклмнопрстуфхцчшщъьюя';
		allLet = letters + letters + letters;


		function encrypt(){
			var inputMsg = $('#original').val();
			var inputShift = $('#offset').val();

			inputShift = (inputShift % letters.length);
			var encryptMsg = '';

			for ( i = 0; i < inputMsg.length; i ++ ){
				var currentLetter = inputMsg[i];
				var upperCase = (currentLetter == currentLetter.toUpperCase());
				letter = currentLetter.toLowerCase();

				var ind = letters.indexOf(currentLetter); //-> returns index at an element can be found 
					if(ind == -1 ){
						encryptMsg += currentLetter;		
					} else {
						ind = ((ind + inputShift) + letters.length);

						 var newLetter = allLet[ind];
						 if(upperCase)
						 	newLetter = newLetter.toUpperCase();
						 		encryptMsg += newLetter;

					}

			}
			$('#cipher').val(encryptMsg);

		}
			encrypt();

		// //get the input data
		// let inputMsg = $('#original')[0];
		// let inputShift = document.querySelector('#offset');//$('#offset').val();
		// let inputCipher = document.querySelector('#cipher');//$('#cipher').val();

		// let originalMsg = inputMsg.value;

		// inputMsg.addEventListener('input', enteredLetter, false)

		// 	function enteredLetter (e){
		// 		originalMsg = e.target.value; // ?-> $(this)
		// 		originalMsg = originalMsg.toLowerCase();
		// 		originalMsg = originalMsg.replace( /[^a-z\s]/, '' );

		// 		e.target.value = originalMsg;
		// 		Encrypt();

		// 	}


		// function Encrypt(){
		// 	//console.log('it works');
		// let encryptMsg = '';
		// let shift = inputShift.value ? Number(inputShift.value) : 0;
  // 		console.log(shift);

		//  for (letter of originalMsg){

		//  	encryptMsg += letterShift(letter, shift);
		//  }
		//  console.log(encryptMsg)

		//  inputCipher.value = encryptMsg;
		//  }
		//  Encrypt();

		// function letterShift(letter,shift){
		// 	let newLetter = '';
		// 	//return the unicode of a character
		// 	let letterCode = letter.charCodeAt(0);//-> the unicode of letter
		// 	let newLetterCode = letterCode + shift;//-> the shifted letter


		// 	//check ASCII table
		// 	if (newLetterCode < 97) {
		// 		newLetterCode += 26;

		// 	}else if (newLetterCode > 122){
		// 		newLetterCode -= 26;

		// 	}
		// 	//converts the unicode into a character
		// 	newLetter = String.fromCharCode(newLetterCode); 
		// 	return newLetter;

		// }

