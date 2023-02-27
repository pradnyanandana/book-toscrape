function runJob() {
    var data = [];

    document.querySelectorAll(".product_pod").forEach(function(product) {
        var title = product.querySelector("h3 a");
        var image = product.querySelector("img")
        var color = product.querySelector(".price_color");

        data.push({
            image: image && image.getAttribute("src"),
            price: color && color.innerText,
            title: title && title.getAttribute("title"),
            url: title && title.getAttribute("href"),
        });
    });

    GM_xmlhttpRequest({
        method: "POST",
        url: "http://localhost:3000/api/list",
        data: JSON.stringify({
            list: data,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        onload: function(response) {
            var resp = JSON.parse(response.response);
            var respData = resp.data;

            console.log("Response:");
            console.log(respData);

            setTimeout(() => {
                console.log(document.querySelector(".pager .next a"))
                document.querySelector(".pager .next a").click();
            }, 10000);
        },
    });
};

runJob();
