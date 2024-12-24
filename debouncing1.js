let input = document.getElementById("input");
let data = document.getElementById("data");
console.log(input, "input");
//https://demo.dataverse.org/api/search?q=est%20dataset&type=dataset

async function searchHandler(query) {
  // Make an API call with search query
  const response = await fetch(
    `https://demo.dataverse.org/api/search?q=${query}%20dataset&type=dataset`
  );
  const result = await response.json();
  console.log(result.data, "query");
  if (result.data) {
    data.innerHTML = result.data?.items?.map(
      (dataItem) =>
        `<div style="height:200px;width:40%;border:1px solid black; padding:20px"><h1 style="color:red">${dataItem.name}</h1>
        <h4>${dataItem.description}</h4></div>
        `
    );
  }
  // getSearchResults(query);
}
function debounce(fn, delay) {
  let timer;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
}
const serachBar = debounce(searchHandler, 1000);

input.addEventListener("input", function (event) {
  const query = event.target.value; //priyanak
  serachBar(query);
});