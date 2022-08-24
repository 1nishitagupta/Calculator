let inputString = '';

        let inputText = document.getElementById('inputText');

        function display(item) {
            inputString = inputString + `${item}`;
            inputText.value = inputString;
        }

        function Calculate() {

            if (inputString === '') {
                alert("Please enter some value.");
                return;
            }

            try {
                inputString = eval(inputString);
                inputString = Number(inputString).toFixed(2);
            }
            catch (e) {
                inputString = 'Invalid input';
            }
            inputText.value = inputString;
        }

        function Clear() {      
            inputString = '';
            inputText.value = inputString;
        }
    
        function del() {
            inputString = inputString.slice(0, -1);
            inputText.value = inputString; 
        }
         