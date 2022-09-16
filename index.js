const newsContainer = document.querySelector(".news-container");
newsContainer.innerHTML = "";
let i;
fetch('https://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.news.length; i++) {
            newsContainer.innerHTML += `
                <h3>${data.news[i].title}</h3>
                    <p>${data.news[i].details}<a href="url">...</a></p>
            `;
        }
    });

window.setTimeout(function () { document.location.reload(true); }, 15000 * 4 * 3);



