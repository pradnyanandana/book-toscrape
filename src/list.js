const runJob = () => {
    let data = [];

    document.querySelectorAll(".product_pod").forEach((product) => {
        const title = product.querySelector("h3 a");
        data.push({
            image: product.querySelector("img")?.getAttribute("src"),
            price: product.querySelector(".price_color")?.innerText,
            title: title?.getAttribute("title"),
            url: title?.getAttribute("href"),
        });
    });

    console.log(data);

    GM_xmlhttpRequest({
        method: "POST",
        url: "http://localhost:3000/api/list",
        data: JSON.stringify({
            list: data,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        onload: (response) => {
            const resp = JSON.parse(response.response);
            const respData = resp.data;

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
