$(function () {
  $(".toggle-menu").click(function () {
    $(".exo-menu").toggleClass("display");
  });
});

//
fetch("https://fakestoreapi.com/products")
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += ` 
        <div class="card">
                <img class="image" src="${values.image}" alt="image">
                <h1 class="title"> ${values.title} </h1>
            <div class=footer>
                <p class="description">${values.description}</p>
            <div class="ratings">
                <div class="empty-stars"></div>
                <div class="full-stars" style="width:100%">${values.rating}</div>
            </div>

                <div class="lastLine">
                <p class="price">$ ${values.price}</p>
                <button onclick="purchase()" type="button">Satın Al</button>
            </div>
        </div>
    </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
    console.log(completedata);
  })
  .catch((err) => {
    console.log(err);
  });
