import React from "react";
import classes from './Common.module.css';
function TermsandConditions() {
  return (
    <div className={classes.footer}>
    <header>
      <h1>PixelPulse - Terms and Conditions</h1>
    </header>
    <main>
      <p>
        Welcome to PixelPulse. By accessing and using our website,
        you agree to comply with and be bound by the following terms and
        conditions. If you do not agree with any part of these terms, please
        do not use our website.
      </p>

      <h2>1. Intellectual Property:</h2>
      <p>
        All content on this website, including but not limited to text,
        graphics, logos, images, and software, is the property of PixelPulse
        and is protected by intellectual property laws. You may
        not reproduce, distribute, or use any content without our explicit
        permission.
      </p>

      <h2>2. User Responsibilities:</h2>
      <p>
        Users are responsible for maintaining the confidentiality of their
        account information and for all activities that occur under their
        account. You must not engage in any unauthorized use of the website,
        including but not limited to hacking, data mining, or any activity
        that could damage or disrupt the website's functionality.
      </p>

      <h2>3. Disclaimer:</h2>
      <p>
        This website is provided "as is" without any representations or
        warranties, expressed or implied. PixelPulse makes no
        representations or warranties regarding the accuracy or completeness
        of the information on this website. We reserve the right to modify or
        update the content at any time without notice.
      </p>

      <h2>4. Limitation of Liability:</h2>
      <p>
        PixelPulse shall not be liable for any direct, indirect,
        incidental, consequential, or punitive damages arising out of the use
        or inability to use this website. This includes, but is not limited
        to, damages for loss of profits, data, or other intangible losses.
        Your use of the website is at your own risk.
      </p>

      <h2>5. External Links:</h2>
      <p>
        This website may contain links to external websites that are not owned
        or controlled by PixelPulse. We do not endorse or assume
        responsibility for the content, privacy policies, or practices of any
        third-party websites. You acknowledge and agree that PixelPulse
        shall not be responsible or liable for any damage or loss caused
        by or in connection with the use of such external links.
      </p>

      <h2>6. Governing Law:</h2>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of [Your Country/State], and any disputes relating to
        these terms and conditions will be subject to the exclusive
        jurisdiction of the courts of [Your Jurisdiction].
      </p>

      <h2>7. Changes to Terms:</h2>
      <p>
        PixelPulse reserves the right to modify or replace these
        terms and conditions at any time. Changes will be effective
        immediately upon posting on the website. Users are responsible for
        regularly reviewing these terms. Continued use of the website after
        any such changes constitutes your acceptance of the new terms and
        conditions.
      </p>

      <h2>Contact Us:</h2>
      <p>
        If you have any questions about our Terms and Conditions, please
        contact us at{" "}
        <a href="mailto:terms@pixelpulse.com">
          terms@pixelpulse.com
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

export default TermsandConditions;
