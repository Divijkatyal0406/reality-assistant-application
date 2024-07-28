import React, { useEffect, useState } from "react";
import { SubHeading, MenuItem } from "../../components";
// import { data } from "../../constants";
import "./SpecialMenu.css";
import { db, collection, query, onSnapshot } from "../../firebase";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getQuantity } from "../../util/helpers";

const SpecialMenu = ({ cartItems, setCartItems }) => {
  const [showBeverages, setShowBeverages] = useState(false);
  const [showSnacks, setShowSnacks] = useState(false);

  const [wines, setWines] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    // data.wines.forEach(async (wine) => {
    //   await addDoc(collection(db, "wines"), {
    //     title: wine.title,
    //     description: wine.tags,
    //     tags: wine.tags,
    //     price: "$10",
    //     status: Math.random() > 0.5 ? true : false,
    //     type: "wines",
    //   });
    // });
    const winesCollection = query(collection(db, "wines"));
    const unsubscribeWines = onSnapshot(winesCollection, (querySnapshot) => {
      const winesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setWines(winesData);
    });
    // console.log(wines);

    // data.cocktails.forEach(async (cocktail) => {
    //   await addDoc(collection(db, "cocktails"), {
    //     title: cocktail.title,
    //     description: cocktail.tags,
    //     tags: cocktail.tags,
    //     price: "$20",
    //     status: Math.random() > 0.5 ? true : false,
    //     type: "cocktails",
    //   });
    // });
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
    // console.log(cocktails);

    return () => {
      unsubscribeWines();
      unsubscribeCocktails();
    };
  }, []);

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
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
