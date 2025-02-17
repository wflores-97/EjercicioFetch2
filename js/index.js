fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response=>response.json())
    .then(data=> {
        let card = ""
        data.forEach(category => {
            card += `
                <div class="card m-1 " style="width: 18rem;">
                    <img class="card-img-top border" src="${category.image}" alt="${category.creationAt}">
                        <div class="card-body">
                            <h3>${category.name}</h3>
                        </div>
                </div>
            `
        });
        document.getElementById("cardList").innerHTML=card;
    })
