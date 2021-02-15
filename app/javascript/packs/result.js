const definition = document.querySelector('.definition');

fetch(`https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${userinput}`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "3a3fb97506msh8b49abdff28130fp180f5bjsn82a2b01e5bad",
    "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com"
  }
})
.then(response => response.json())
.then((data) => {
  const results = data.meaning;
  for (const result in results) {
    if (results[result] == "") {continue}
    definition.insertAdjacentHTML('beforeend', `<p>${result}: ${results[result]}</p>`);
  }
})
.catch(err => {
  console.error(err);
});
