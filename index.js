import propertyForSaleArr from "./properties/propertyForSaleArr.js"

function getPropertyHtml(propertyArr) {
    return propertyArr.map(property => {
        const {propertyLocation, priceGBP, roomM2, comment, image } = property
        return `
        <section class="card">
            <img src="/images/${image}">
            <div class="card-right">
                <h2 id="location-el">${propertyLocation}</h2>
                <h3 id="price-el">${priceGBP}</h3>
                <p id="comment-el">${comment}</p>
                <h3 id="size-el">TOTAL SIZE IN SQUARE METERS m&sup2;</h3>
            </div>
        </section>`
    })
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)