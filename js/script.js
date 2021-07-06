	 //other option ???
		// var alphbet = 'abcdefghijklmnopqrstuvwxyz';
		// full = alphbet+alphbet+alphbet;

	 	let shift = 1;

		//get the input data
		let inputMsg = document.querySelector('#original');//$('#original').val();
		let inputShift = document.querySelector('#offset');//$('#offset').val();
		let inputCipher = document.querySelector('#cipher');//$('#cipher').val();

		let originalMsg = inputMsg.value;

		inputMsg.addEventListener('input', enteredLetter, false)

			function enteredLetter (e){
				originalMsg = e.target.value; // ?-> $(this)
				originalMsg = originalMsg.toLowerCase();
				originalMsg = originalMsg.replace(/[^a-z]/, '');

				e.target.value = originalMsg;
				Encrypt();

			}


		function Encrypt(){
			//console.log('it works');
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

