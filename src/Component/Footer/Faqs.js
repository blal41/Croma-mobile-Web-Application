import React from "react";
import classes from "./Common.module.css";

function Faqs() {
  return (
    <div className={classes.footer}>
    <div className={classes.empty}></div>
    <header>
        <h1>PixelPulse - FAQs</h1>
    </header>
    <main>
        <section>
            <h3>General Questions:</h3>
            <ul>
                <li>
                    <h3>Q: What does PixelPulse offer?</h3>
                    <p>
                        A: PixelPulse is an ecommerce platform that offers a
                        wide range of mobile phones from various brands. We provide a
                        convenient and secure way to explore, compare, and purchase the
                        latest mobile devices.
                    </p>
                </li>
                <li>
                    <h3>Q: How can I contact customer support?</h3>
                    <p>
                        A: Our customer support team is here to assist you. Reach us via{" "}
                        <a href="mailto:support@pixelpulse.com">email</a> or by
                        calling [your customer support phone number]. Visit our{" "}
                        <a href="/contact">Contact Us</a> page for more details.
                    </p>
                </li>
                <li>
                    <h3>
                        Q: What sets PixelPulse apart from other ecommerce
                        platforms?
                    </h3>
                    <p>
                        A: We take pride in offering a diverse selection of mobile
                        phones, competitive prices, and a user-friendly shopping
                        experience. Our commitment to customer satisfaction and reliable
                        service sets us apart.
                    </p>
                </li>
            </ul>
        </section>

        <section>
            <h3>Product Selection:</h3>
            <ul>
                <li>
                    <h3>Q: What brands and models do you carry?</h3>
                    <p>
                        A: We showcase a broad selection of mobile phones, including
                        popular brands such as [list some brands] and the latest models
                        in the market.
                    </p>
                </li>
                <li>
                    <h3>
                        Q: Can I compare different mobile phones on your platform?
                    </h3>
                    <p>
                        A: Yes, you can easily compare specifications, features, and
                        prices of different mobile phones on our website to make
                        informed purchasing decisions.
                    </p>
                </li>
                <li>
                    <h3>Q: Are all products on PixelPulse brand new?</h3>
                    <p>
                        A: Absolutely! All mobile phones listed on our platform are
                        brand new and come with their original packaging.
                    </p>
                </li>
            </ul>
        </section>
        <section>
            <h3>Ordering and Shipping:</h3>
            <ul>
                <li>
                    <h3>Q: How can I place an order?</h3>
                    <p>
                        A: Placing an order is simple. Just add the desired products to
                        your cart, proceed to checkout, and follow the prompts to
                        complete your purchase.
                    </p>
                </li>
                <li>
                    <h3>Q: What are the shipping options available?</h3>
                    <p>
                        A: We offer various shipping options, including standard and
                        expedited shipping. Shipping details and costs are provided
                        during the checkout process.
                    </p>
                </li>
            </ul>
        </section>
        <section>
            <h3>Warranty and Returns:</h3>
            <ul>
                <li>
                    <h3>Q: Do mobile phones come with a warranty?</h3>
                    <p>
                        A: Yes, all our mobile phones come with a standard
                        manufacturer's warranty. Check the product details for specific
                        warranty information.
                    </p>
                </li>
                <li>
                    <h3>Q: What is your return policy?</h3>
                    <p>
                        A: We have a [insert number]-day return policy. For details on
                        returns and exchanges, please refer to our Return Policy page.
                    </p>
                </li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 PixelPulse. All rights reserved.</p>
    </footer>
</div>

  );
}

export default Faqs;
