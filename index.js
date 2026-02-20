import placeholderPropertyObj from "./properties/placeholderProperty.js"
import propertyForSaleArr from "./properties/propertyForSaleArr.js"

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const {propertyLocation, priceGBP, roomsM2, comment, image } = property
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current) 
        return `
        <section class="card">
            <img src="/images/${image}">
            <div class="card-right">
                <h2 id="location-el">${propertyLocation}</h2>
                <h3 id="price-el">£${priceGBP}</h3>
                <p id="comment-el">${comment}</p>
                <h3 id="size-el">${totalRoomSizeM2} m&sup2;</h3>
            </div>
        </section>`
    })
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)