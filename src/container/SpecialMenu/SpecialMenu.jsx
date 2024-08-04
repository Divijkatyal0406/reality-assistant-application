import React, { useEffect, useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
import { db, collection, query, onSnapshot } from "../../firebase";
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from "react-icons/fa";
import { getQuantity } from "../../util/helpers";

const SpecialMenu = ({ cartItems, setCartItems }) => {
  const [showBeverages, setShowBeverages] = useState(false);
  const [showSnacks, setShowSnacks] = useState(false);
  const [wines, setWines] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [waterQuantity, setWaterQuantity] = useState(0);

  useEffect(() => {
    const winesCollection = query(collection(db, "wines"));
    const unsubscribeWines = onSnapshot(winesCollection, (querySnapshot) => {
      const winesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setWines(winesData);
    });

    const cocktailsCollection = query(collection(db, "cocktails"));
    const unsubscribeCocktails = onSnapshot(
      cocktailsCollection,
      (querySnapshot) => {
        const cocktailsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCocktails(cocktailsData);
      }
    );

    return () => {
      unsubscribeWines();
      unsubscribeCocktails();
    };
  }, []);

  const handleIncrement = () => {
    const value = waterQuantity + 1;
    setWaterQuantity(value);
    updateCart(value);
  };

  const handleDecrement = () => {
    const value = waterQuantity > 0 ? waterQuantity - 1 : 0;
    setWaterQuantity(value);
    updateCart(value);
  };

  const updateCart = (quantity) => {
    // const updatedCartItems = cartItems.filter((item) => item.title !== "Water");
    // if (quantity > 0) {
    //   updatedCartItems.push({
    //     title: "Water",
    //     quantity,
    //   });
    // }
    setCartItems(cartItems);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_water flex__center">
          <div className="app__specialMenu-menu_heading">
            <p>Water</p>
          </div>
          <div className="app__specialMenu_menu_items">
            <div className="menu-item">
                <MenuItem
                  key="101"
                  title="Add Cups"
                  tags=""
                  status=""
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  quantity={getQuantity("Water", cartItems)}
                />
            </div>
          </div>
        </div>

        <div className="app__specialMenu-menu_wine flex__center">
          <div
            className="app__specialMenu-menu_heading"
            onClick={() => setShowBeverages(!showBeverages)}
          >
            <p>Beverages</p>
            {showBeverages ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </div>
          {showBeverages && (
            <div className="app__specialMenu_menu_items">
              {wines.map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                  status={wine.status}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  quantity={getQuantity(wine.title, cartItems)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <div
            className="app__specialMenu-menu_heading"
            onClick={() => setShowSnacks(!showSnacks)}
          >
            <p>Snacks</p>
            {showSnacks ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </div>
          {showSnacks && (
            <div className="app__specialMenu_menu_items">
              {cocktails.map((cocktail, index) => (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                  status={cocktail.status}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  quantity={getQuantity(cocktail.title, cartItems)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
