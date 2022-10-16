{/* 
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div> 

*/}


class Products {
    products = [
        {
            title: "Product 1",
            description: "Product description",
            image: "./bannerimage.png"
        },
        {
            title: "Product 1",
            description: "Product description",
            image: "./bannerimage.png"
        }
        ,
        {
            title: "Product 1",
            description: "Product description",
            image: "./bannerimage.png"
        }
        ,
        {
            title: "Product 1",
            description: "Product description",
            image: "./bannerimage.png"
        }
        ,
        {
            title: "Product 1",
            description: "Product description",
            image: "./bannerimage.png"
        }
    ];

    render() {
        let root = document.getElementById('root');

        for (const product of this.products) {

            let productEl = new Product(product);

            let parentDiv = productEl.render();

            // append to root element
            root.appendChild(parentDiv);
        }
    }
}

class Product {
    constructor(product) {
        this.image = product.image;
        this.title = product.title;
        this.description = product.description;
    }

    static render() {
        let parentDiv = document.createElement('div');
        parentDiv.className = "card";
        parentDiv.style.width = "18rem";

        let img = document.createElement('img');
        img.src = this.image;
        img.className = "card-img-top";
        img.alt = this.title;

        let innerDiv = document.createElement('div');
        innerDiv.className = "card-body";

        let h5 = document.createElement('h5');
        h5.className = "card-title";
        h5.innerHTML = this.title;

        let p = document.createElement('p');
        p.className = "card-text";
        p.innerHTML = this.description;

        // append to innerDiv
        innerDiv.appendChild(h5);
        innerDiv.appendChild(p);

        // append to parentDiv
        parentDiv.appendChild(img);
        parentDiv.appendChild(innerDiv);

        return parentDiv;
    }
}


let products = new Products();

products.render();



