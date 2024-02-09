import classes from './Common.module.css';
import React from 'react'

function Desclaimer() {
  return (
    <div className={classes.footer}>
    <header>
        <h1>PixelPulse - Disclaimer</h1>
    </header>
    <main>
        <p>This disclaimer governs your use of PixelPulse. By using this website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use PixelPulse or any affiliated websites, properties, or companies. We reserve the right to modify these terms at any time. You should, therefore, check back periodically for changes. By using this website after we post any changes, you agree to accept those changes, whether or not you have reviewed them.</p>

        <h2>No Warranties:</h2>
        <p>This website is provided "as is" without any representations or warranties, express or implied. PixelPulse makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>

        <h2>Limitation of Liability:</h2>
        <p>PixelPulse will not be liable to you (whether under the law of contact, the law of torts, or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>
        <ul>
            <li>to the extent that the website is provided free-of-charge, for any direct loss;</li>
            <li>for any indirect, special, or consequential loss; or</li>
            <li>for any business losses, loss of revenue, income, profits, or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
        </ul>

        <h2>Reasonableness:</h2>
        <p>By using this website, you agree that the exclusions and limitations of liability set out in this disclaimer are reasonable.</p>

        <h2>Unenforceable Provisions:</h2>
        <p>If any provision of this disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this disclaimer.</p>
    </main>
    <footer>
        <p>&copy; 2024 PixelPulse. All rights reserved.</p>
    </footer>
</div>

  )
}

export default Desclaimer