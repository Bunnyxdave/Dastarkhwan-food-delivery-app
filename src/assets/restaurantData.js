export const ProductsData = async () => {
    const url = "https://corsproxy.io/?key=webdemo1&url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.38430%26lng%3D78.45830%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";
    const productJson = await fetch(url);

    if (!productJson.ok) {
        throw new Error(`Restaurant data request failed (${productJson.status}).`);
    }

    return productJson.json();
};

export const getRestaurants = (productData) => {
    const cards = productData?.data?.cards || [];
    const restaurants = [];
    const restaurantIds = new Set();

    cards.forEach((item) => {
        const card = item?.card?.card;
        const restaurantsInCard =
            card?.gridElements?.infoWithStyle?.restaurants ||
            card?.restaurants;

        if (Array.isArray(restaurantsInCard)) {
            restaurantsInCard.forEach((restaurant) => {
                const info = restaurant.info || restaurant;
                const id = info.id || restaurant.id;

                if (!id || !restaurantIds.has(id)) {
                    if (id) {
                        restaurantIds.add(id);
                    }
                    restaurants.push(restaurant);
                }
            });
        }
    });

    return restaurants;
};
