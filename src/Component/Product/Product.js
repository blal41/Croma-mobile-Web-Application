import React, { useState, useEffect, Fragment } from "react";
import { get, ref } from "firebase/database";
import { database } from "./FirebaseConfig";
import classes from "./Product.module.css";
import ProductItem from "./ProductItem";
import AuthContext from "../../Store/authcontext";
import { useContext } from "react";

const Product = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(AuthContext);

  useEffect(() => {
    const dataRef = ref(database, "mobile");

    setLoading(true);

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          const dataArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );

          const filteredData = dataArray.filter((product) =>
            product.names.toLowerCase().includes(searchTerm.toLowerCase())
          );

          setData(filteredData);
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
          setError("No data available");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("Error fetching data");
        console.error(error);
      });
  }, [searchTerm]);

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

      {loading && <div className={classes.spinner}></div>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className={classes.card_container}>
          {data.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              names={product.names}
              images_links={product.images_links}
              stars={product.stars}
              reviews={product.reviews}
              price={product.price_details.slice(1, 7)}
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
      )}
    </Fragment>
  );
};

export default Product;
