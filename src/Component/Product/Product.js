import React, { useState, useEffect, Fragment } from "react";
import { get, ref } from "firebase/database";
import { database } from "./FirebaseConfig";
import classes from "./Product.module.css";
import ProductItem from "./ProductItem";

const Product = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, "mobile"); // Replace 'your_collection' with the actual collection path

    // Subscribe to changes in data
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          // Convert the fetched data to an array and update the state
          const dataArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
              
            })
          );
          setData(dataArray);
        } else {
          console.log("no data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Fragment>
      <div className={classes.head}>
        <p>
          <span>Phones and Wearables </span> {"  >  "}
          <span>
            <b>Mobile phones</b>
          </span>
          <h1>Mobile Phones</h1>
        </p>
      </div>
      <div className={classes.card_container}>
        {data.map((product) => (
          <ProductItem
          key = {product.id}
          id = {product.id}
          names={product.names}
          images_links={product.images_links}
          stars={product.stars}
          reviews={product.reviews}
          price = {product.price_details.slice(1,7)}
          price_details={product.price_details.slice(7)}
          memory={product.memory}
          camara_info={product.camara_info}
          display={product.display}
          battery={product.battery}
          processor={product.processor}
          warranty={product.warranty}
        />
       ))}
      </div>
    </Fragment>
  );
};

export default Product;
