import React from 'react'
import classes from './Common.module.css';

function Security() {
  return (
    <div className={classes.footer}> <header>
    <h1>Safe and Secure Shopping - PixelPulse</h1>
</header>
<main>
    <h2>Is making online payment secure on PixelPulse?</h2>
    <p>Yes, making the online payment is secure on PixelPulse.</p>

    <h2>Does PixelPulse store my credit/debit card information?</h2>
    <p>No. PixelPulse only stores the last 4 digits of your card number for the purpose of card identification.</p>

    <h2>What credit/debit cards are accepted on PixelPulse?</h2>
    <p>We accept VISA, MasterCard, Maestro, Rupay, American Express, Diner's Club, and Discover credit/debit cards.</p>

    <h2>Do you accept payment made by credit/debit cards issued in other countries?</h2>
    <p>Yes! We accept VISA, MasterCard, Maestro, American Express credit/debit cards issued by banks in India and in the following countries: Australia, Austria, Belgium, Canada, Cyprus, Denmark, Finland, France, Germany, Ireland, Italy, Luxembourg, the Netherlands, New Zealand, Norway, Portugal, Singapore, Spain, Sweden, the UK, and the US. Please note that we do not accept internationally issued credit/debit cards for eGV payments/top-ups.</p>

    <h2>What other payment options are available on PixelPulse?</h2>
    <p>Apart from Credit and Debit Cards, we accept payments via Internet Banking (covering 44 banks), Cash on Delivery, Equated Monthly Installments (EMI), E-Gift Vouchers, PixelPulse Pay Later, UPI, Wallet, and Paytm Postpaid.</p>

    <h2>Privacy Policy</h2>
    <p>PixelPulse.com respects your privacy and is committed to protecting it. For more details, please see our <a href="link-to-privacy-policy">Privacy Policy</a>.</p>

    <h2>Contact Us</h2>
    <p>Couldn't find the information you need? Please <a href="link-to-contact-us">Contact Us</a>.</p>
</main>
<footer>
    <p>&copy; 2024 PixelPulse. All rights reserved.</p>
</footer></div>

  )
}

export default Security