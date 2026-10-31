import { useEffect, useState } from "react";
import { getRestaurants, ProductsData } from "./assets/restaurantData.js";
import logo from "./assets/logo.png";

const ProductCards = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadRestaurants = async () => {
            try {
                const productData = await ProductsData();
                setRestaurants(getRestaurants(productData));
            } catch (requestError) {
                setError(requestError.message);
            } finally {
                setLoading(false);
            }
        };

        loadRestaurants();
    }, []);

    const filteredRestaurants = restaurants.filter((restaurant) => {
        const info = restaurant.info || restaurant;
        const searchValue = searchText.toLowerCase();
        const name = (info.name || "").toLowerCase();
        const cuisines = (info.cuisines || []).join(" ").toLowerCase();

        return name.includes(searchValue) || cuisines.includes(searchValue);
    });

    return (
        <main className="RestaurantPage">
            <section className="RestaurantHero">
                <div className="RestaurantHero__layout">
                    <div className="RestaurantHero__content">
                        <p className="RestaurantHero__eyebrow">Good food, nearby</p>
                        <h1>Find your next favourite</h1>
                        <p className="RestaurantHero__text">
                            Explore restaurants and discover something delicious today.
                        </p>
                        <label className="RestaurantSearch">
                            <span className="RestaurantSearch__icon" aria-hidden="true">⌕</span>
                            <input
                                type="search"
                                placeholder="Search restaurants or cuisines"
                                value={searchText}
                                onChange={(event) => setSearchText(event.target.value)}
                            />
                        </label>
                    </div>
                    <img
                        className="RestaurantHero__logo"
                        src={logo}
                        alt="Dastarkhwan"
                    />
                </div>
            </section>

            <section className="RestaurantSection">
                <div className="RestaurantSection__heading">
                    <div>
                        <p className="RestaurantSection__eyebrow">Picked around Hyderabad</p>
                        <h2>Restaurants to explore</h2>
                    </div>
                    {!loading && !error && (
                        <span className="RestaurantSection__count">
                            {filteredRestaurants.length} places
                        </span>
                    )}
                </div>

                {loading && <p className="RestaurantMessage">Finding restaurants...</p>}
                {!loading && error && (
                    <p className="RestaurantMessage RestaurantMessage--error">
                        We couldn’t load restaurants. {error}
                    </p>
                )}
                {!loading && !error && filteredRestaurants.length === 0 && (
                    <p className="RestaurantMessage">
                        No restaurants found. Try another restaurant name or cuisine.
                    </p>
                )}

                {!loading && !error && filteredRestaurants.length > 0 && (
                    <div className="RestaurantGrid">
                        {filteredRestaurants.map((restaurant, index) => {
                            const info = restaurant.info || restaurant;
                            const imageId = info.cloudinaryImageId || info.imageId;
                            const imageUrl = imageId
                                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`
                                : "";

                            return (
                                <article
                                    className="RestaurantCard"
                                    key={info.id || restaurant.id || `${info.name}-${index}`}
                                >
                                    <div className="RestaurantCard__image">
                                        {imageUrl ? (
                                            <img src={imageUrl} alt={info.name || "Restaurant"} />
                                        ) : (
                                            <div className="RestaurantCard__imagePlaceholder">
                                                {info.name || "Restaurant"}
                                            </div>
                                        )}
                                        {info.aggregatedDiscountInfoV3?.header && (
                                            <span className="RestaurantCard__offer">
                                                {info.aggregatedDiscountInfoV3.header}
                                            </span>
                                        )}
                                    </div>
                                    <div className="RestaurantCard__content">
                                        <div className="RestaurantCard__titleRow">
                                            <h3>{info.name || "Restaurant"}</h3>
                                            {info.avgRating && (
                                                <span className="RestaurantCard__rating">
                                                    ★ {info.avgRating}
                                                </span>
                                            )}
                                        </div>
                                        <p className="RestaurantCard__cuisines">
                                            {(info.cuisines || []).join(", ") || "A local favourite"}
                                        </p>
                                        <div className="RestaurantCard__details">
                                            <span>{info.sla?.deliveryTime || "--"} min</span>
                                            <span>{info.costForTwo || "Details unavailable"}</span>
                                        </div>
                                        {info.areaName && (
                                            <p className="RestaurantCard__area">{info.areaName}</p>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}

export default ProductCards;