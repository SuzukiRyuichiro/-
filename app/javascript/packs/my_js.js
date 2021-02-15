const letters = document.querySelectorAll('.letter-box');
const userinput = document.querySelector('#userinput');

letters.forEach(letter => {
  letter.addEventListener('click', (event) => {
    console.log(letter.innerText);
    userinput.value += letter.innerText.trim();
  });
});
