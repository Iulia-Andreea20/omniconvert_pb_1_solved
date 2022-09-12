fetch('https://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
    .then((response) => response.json())
    .then((data) => console.log(data.news[0].title));