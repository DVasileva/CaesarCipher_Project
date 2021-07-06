	 let originalMsg = 'abcdefg';
	 	let shift = 1;

		//get the input data
		let inputMsg = $('#original').val();
		let inputShift = $('#offset').val();
		let inputCipher = $('#cipher').val();

		inputMsg.addEventListener('input', enteredLetter)

			function (enteredLetter){
				
			}


//other option ???
		// var alphbet = 'abcdefghijklmnopqrstuvwxyz';
		// full = alphbet+alphbet+alphbet;



		function Encrypt(){
			console.log('it works');
			let encryptMsg = '';

		 for (letter of originalMsg){

		 	encryptMsg += letterShift(letter, shift);
		 }
		 console.log(encryptMsg)
		 }
		 Encrypt();

		function letterShift(letter,shift){
			let newLetter = '';
			//return the unicode of a character
			let letterCode = letter.charCodeAt(0);//-> the unicode of letter
			let newLetterCode = letterCode + shift;//-> the shifted letter


			//check ASCII table
			if (newLetterCode < 97) {
				newLetterCode += 26;

			}else if (newLetterCode > 122){
				newLetterCode -= 26;

			}
			//converts the unicode into a character
			newLetter = String.fromCharCode(newLetterCode); 
			return newLetter;

		}

//$(this) = e.target