import React from "react";
import classes from './Common.module.css';

function PrivacyPolicy() {
  return (
    <div className={classes.footer}>
    {" "}
    <header>
        <h1>PixelPulse - Privacy Policy</h1>
    </header>
    <main>
        <p>
            This Privacy Policy describes how PixelPulse collects, uses,
            and protects the information you provide when using our website.
        </p>

        <h2>Information We Collect:</h2>
        <p>
            We may collect personal information, including but not limited to your
            name, email address, shipping address, and payment details when you
            interact with our website.
        </p>

        <h2>How We Use Your Information:</h2>
        <p>
            We use the collected information for order processing, shipping,
            customer support, and to improve our services. Your information may
            also be used to send promotional materials and updates, but you can
            opt out at any time.
        </p>

        <h2>Information Security:</h2>
        <p>
            We implement security measures to protect your personal information.
            However, please be aware that no method of transmission over the
            internet or electronic storage is 100% secure.
        </p>

        <h2>Cookies:</h2>
        <p>
            We use cookies to enhance your browsing experience. You can choose to
            disable cookies through your browser settings, but this may affect the
            functionality of our website.
        </p>

        <h2>Third-Party Links:</h2>
        <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            Please review the privacy policies of third parties before providing
            any personal information.
        </p>

        <h2>Changes to This Privacy Policy:</h2>
        <p>
            We reserve the right to update our Privacy Policy. Any changes will be
            posted on this page with an updated date.
        </p>

        <h2>Contact Us:</h2>
        <p>
            If you have any questions about our Privacy Policy, please contact us
            at{" "}
            <a href="mailto:privacy@pixelpulse.com">
                privacy@pixelpulse.com
            </a>
            .
        </p>
    </main>
    <footer>
        <p>&copy; 2024 PixelPulse. All rights reserved.</p>
    </footer>
</div>

  );
}

export default PrivacyPolicy;
