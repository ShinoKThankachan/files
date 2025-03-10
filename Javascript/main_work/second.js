fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const productsContainer = document.getElementById('products');
                data.products.forEach(product => {
                    // console.log(product.category);
                    const productElement = document.createElement('div');
                    productElement.className = 'product col-lg-2';

                    productElement.innerHTML = `
                         <img src="${product.thumbnail}" alt="${product.title}">
                        <h2>${product.title}</h2>
                        <p>Price: $${product.price}</p>
                        <button class='btn btn-dark'>
                            <a href="../JavaScript/API_javascript_page2.html?id=${product.id}">View Product</a>
                            </button>
                    `;

                    document.body.appendChild(productElement);

                    
                });
            })
            .catch(error => console.error('Error fetching products:', error));