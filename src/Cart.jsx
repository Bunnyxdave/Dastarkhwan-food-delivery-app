import { useEffect, useState } from "react";
import { getRestaurants, ProductsData } from "./assets/restaurantData.js";

const formatPrice = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);

const Cart = ({ cart, setCart }) => {
    const [restaurants, setRestaurants] = useState([]);
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

    const restaurantItems = restaurants.map((restaurant) => {
        const info = restaurant.info || restaurant;
        const costText = info.costForTwoMessage || info.costForTwo || "";
        const costMatch = String(costText).match(/[\d,]+/);
        const costForTwo = costMatch
            ? Number(costMatch[0].replace(/,/g, ""))
            : 0;
        const imageId = info.cloudinaryImageId || info.imageId;

        return {
            id: info.id || restaurant.id || info.name,
            name: info.name || "Restaurant",
            description: (info.cuisines || []).join(", ") || info.areaName || "Restaurant near you",
            price: costForTwo ? Math.round(costForTwo / 2) : null,
            image: imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`
                : "",
        };
    });

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const changeQuantity = (itemId, amount) => {
        setCart(
            cart
                .map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + amount }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const deliveryFee = cart.length > 0 ? 49 : 0;

    const placeOrder = () => {
        if (cart.length > 0) {
            window.alert("Your demo order has been placed. Thank you!");
            setCart([]);
        }
    };

    return (
        <main className="CartPage">
            <section className="CartHero">
                <p className="CartHero__eyebrow">A little something delicious</p>
                <h1>Your Dastarkhwan</h1>
                <p>Choose a restaurant to add to your order.</p>
            </section>

            <div className="CartLayout">
                <section className="CartMenu" aria-labelledby="sample-menu-title">
                    <div className="CartSectionHeading">
                        <div>
                            <p className="CartHero__eyebrow">Made for sharing</p>
                            <h2 id="sample-menu-title">Restaurants to explore</h2>
                        </div>
                        {!loading && !error && <span>{restaurantItems.length} places</span>}
                    </div>

                    {loading && <p className="CartEmpty">Loading restaurants...</p>}
                    {!loading && error && (
                        <p className="CartEmpty CartEmpty--error">
                            Couldn’t load restaurants. {error}
                        </p>
                    )}
                    {!loading && !error && restaurantItems.length === 0 && (
                        <p className="CartEmpty">No restaurants were included in the response.</p>
                    )}
                    {!loading && !error && (
                        <div className="CartMenu__items">
                        {restaurantItems.map((item) => (
                            <article className="CartMenuItem" key={item.id}>
                                {item.image && <img src={item.image} alt="" />}
                                <div className="CartMenuItem__details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    {item.price
                                        ? <strong>Est. {formatPrice(item.price)} per person</strong>
                                        : <strong>Price unavailable</strong>}
                                </div>
                                <button
                                    className="CartAddButton"
                                    type="button"
                                    disabled={!item.price}
                                    onClick={() => addToCart(item)}
                                >
                                    Add 
                                </button>
                            </article>
                        ))}
                        </div>
                    )}
                </section>

                <aside className="CartSummary" aria-labelledby="cart-summary-title">
                    <div className="CartSectionHeading">
                        <h2 id="cart-summary-title">Your order</h2>
                        {cart.length > 0 && (
                            <button
                                className="CartClearButton"
                                type="button"
                                onClick={() => setCart([])}
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {cart.length === 0 ? (
                        <p className="CartEmpty">
                            Your cart is empty. Add a favourite from the sample menu.
                        </p>
                    ) : (
                        <>
                            <ul className="CartItems">
                                {cart.map((item) => (
                                    <li className="CartItem" key={item.id}>
                                        <div className="CartItem__info">
                                            <h3>{item.name}</h3>
                                            <span>{formatPrice(item.price)} each</span>
                                            <button
                                                className="CartItem__remove"
                                                type="button"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div className="CartQuantity">
                                            <button
                                                type="button"
                                                aria-label={`Remove one ${item.name}`}
                                                onClick={() => changeQuantity(item.id, -1)}
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                type="button"
                                                aria-label={`Add one ${item.name}`}
                                                onClick={() => changeQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="CartTotals">
                                <p><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></p>
                                <p><span>Demo delivery fee</span><strong>{formatPrice(deliveryFee)}</strong></p>
                                <p className="CartTotals__total">
                                    <span>Total</span>
                                    <strong>{formatPrice(subtotal + deliveryFee)}</strong>
                                </p>
                            </div>
                            <button
                                className="CartCheckoutButton"
                                type="button"
                                onClick={placeOrder}
                            >
                                Place demo order
                            </button>
                            <p className="CartDemoNote">
                                Demo estimate only; prices are derived from restaurant cost for two. No payment will be taken.
                            </p>
                        </>
                    )}
                </aside>
            </div>
        </main>
    );
};

export default Cart;