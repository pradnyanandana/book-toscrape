(()=>{var e;e=[],document.querySelectorAll(".product_pod").forEach((function(t){var o,l,r=t.querySelector("h3 a");e.push({image:null===(o=t.querySelector("img"))||void 0===o?void 0:o.getAttribute("src"),price:null===(l=t.querySelector(".price_color"))||void 0===l?void 0:l.innerText,title:null==r?void 0:r.getAttribute("title"),url:null==r?void 0:r.getAttribute("href")})})),console.log(e),GM_xmlhttpRequest({method:"POST",url:"http://localhost:3000/api/list",data:JSON.stringify({list:e}),headers:{"Content-Type":"application/json"},onload:function(e){var t=JSON.parse(e.response).data;console.log("Response:"),console.log(t),setTimeout((function(){console.log(document.querySelector(".pager .next a")),document.querySelector(".pager .next a").click()}),1e4)}})})();