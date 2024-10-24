import restaurants from "./restaurants-array";
import Card from "./App";

export default function ListRestaurant() {
    const listRestaurant = restaurants.map((restaurant, index) => 
        <li key={`restaurant-${index}`} id={`restaurant-${index}`}>
            <Card key={`restaurant-${index}`} image={restaurant.image} header={restaurant.header} phone={restaurant.phone}/>
        </li>
    );

    return <ul className="restaurants">{listRestaurant}</ul>;
}