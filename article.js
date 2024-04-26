function content() {
    fetch("data.json")
    .then((res) => { return res.json()})
    .then((res) => {
        console.log(res);
        const articles = res.articles.slice(0, 5); // Get the first 5 articles
        const container = document.getElementById("page2"); // Get the container element
        // Checking if articles exist in the response
        if (articles && articles.length > 0) {
            // Iterate over each article
            articles.forEach(article => {
                const div = document.createElement("div");
                div.classList.add("articlecard");
                // Create HTML content for the article
                div.innerHTML = `
                    <img src="${article.urlToImage}" alt="articleimage" style="height:150px;">
                    <h1>${article.title}</h1>
                    <p>${article.description}</p>
                    <button class="read-more-btn">Read More</button>`; // Add Read More button
                // Append the div to the container
                container.appendChild(div);

                // Add click event listener to the Read More button
                const readMoreBtn = div.querySelector(".read-more-btn");
                readMoreBtn.addEventListener("click", () => {
                    // Implement the action to be performed when the button is clicked
                    // For example, you can navigate to the full article page
                    console.log("Read More clicked for article:", article.title);
                    // Replace the console.log with your desired action
                });
            });
        } else {
            console.error("No articles found in the response");
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}
console.log("hello");
content();
