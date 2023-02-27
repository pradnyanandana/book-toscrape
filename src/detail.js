const runJob = () => {
    let data = {};

    const title  = document.querySelector('.product_main h1')
    const image = document.querySelector('#product_gallery img')
    const price  = document.querySelector('.product_main .price_color')
    const description  = document.querySelector('.product_page > p')

    if (title) {
        data['title'] = title.innerText
    }

    if (image) {
        data['image'] = image.getAttribute('src')
    }

    if (price) {
        data['price'] = price.innerText
    }

    if (description) {
        data['description'] = description.innerText
    }

    GM_xmlhttpRequest({
        method: "POST",
        url: "http://localhost:3000/api/detail",
        data: JSON.stringify({
            data,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        onload: async (response) => {
            const resp = JSON.parse(response.response);
            const respData = resp.data;

            console.log("Response:");
            console.log(respData);
        },
    });
};

runJob();
