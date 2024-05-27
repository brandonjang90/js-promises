let favNum = 8;
let url = "http://numbersapi.com";

1.
async function fact() {
  let data = $.getJSON(`${url}/${favNum}?json`);
  console.log(data);
}

// 2.
let favNums = [7, 8, 24];
async function multipleNumsfavNums(){
  let data = await $.getJSON(`${url}/${favNum}?json`);
  console.log(data);
}

// 3.
async function fourFacts(){
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${url}/${favNum}?json`))
  );
  facts.forEach(data => {
    $("body").append(`<p>${data.text}</p>`)
  });
}