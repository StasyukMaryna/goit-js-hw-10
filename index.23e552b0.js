!function(){var e="https://api.thecatapi.com/v1",n="api_key=live_KhbXzYnvRrenyDK017lnALRJzTdgDhK2UShY5a41CfeGFPTJ7zzSnqsmtvuONbR5";var t=document.querySelector("select.breed-select"),c=document.querySelector("div.cat-info"),a=document.querySelector("p.loader"),s=document.querySelector("p.error"),d="";function i(e){var n;c.innerHTML=(n=e[0],' \n <img class="cat-img" src="'.concat(n.url,'" alt="').concat(n.breeds[0].name,'" >\n <div class="cat-text">\n <h1 class="cat-header">').concat(n.breeds[0].name,"</h1>\n <p>").concat(n.breeds[0].description,"</p>\n <p><span><b>Temperament: </b></span>").concat(n.breeds[0].temperament,"</p>\n </div>")),a.classList.add("hidden"),s.classList.add("hidden"),c.classList.remove("hidden")}function r(e){var n=e.map((function(e){return d=e.id,"<option value=".concat(e.id,">").concat(e.name,"</option>")})).join("");t.insertAdjacentHTML("beforeend",n),a.classList.add("hidden")}function o(){c.classList.contains("hidden")||c.classList.add("hidden"),a.classList.remove("hidden")}t.addEventListener("change",(function(t){var c;o(),d=t.target.value,(c=d,fetch("".concat(e,"/images/search?breed_ids=").concat(c,"&").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then(i).catch((function(e){a.classList.add("hidden"),s.classList.remove("hidden")}))})),o(),fetch("".concat(e,"/breeds?").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then(r).catch((function(e){a.classList.add("hidden"),s.classList.remove("hidden")}))}();
//# sourceMappingURL=index.23e552b0.js.map