import Link from "next/link";
import { StyledPrivacy } from "./styledComponents";
import Wrapper from "../../components/wrapper/Wrapper";

function Privacy() {
  return (
    <Wrapper>
      <StyledPrivacy>
        <h1>Privacy</h1>
        <ul>
          <li>
            <p>
              This Privacy Policy describes how we collect, use and share your
              personal information when you visit or make a purchase from
              <Link href="/"> deplacemaison.com</Link>
              (the "Site").
            </p>
          </li>
          <li>
            <h3>PERSONAL INFORMATION THAT WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, your IP address, time zone and some of the cookies
              installed on your device. In addition, when you browse the Site,
              we collect information about individual web pages or products you
              view, which web sites or search terms refer to the Site, and
              information about how you interact with the Site. This
              information, which is automatically collected, is called "Device
              Information". <br />
              <br />
              We collect information about your device using the following
              technologies:- Cookies" are data files that are stored on your
              device or computer and often include an anonymous unique
              identifier. For more information about cookies and how to disable
              them, please visit http://www.deplacemaison.com/cookie-policy -
              Log files" track actions that occur on the Site and collect data
              such as IP address, browser type, Internet service provider,
              referring/exit pages and date/time stamps.- Web beacons", "tags"
              and "pixels" are electronic files used to record information about
              how you navigate the Site. <br />
              <br />
              In addition, when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information,
              including your name, billing address, shipping address, payment
              information (including credit card numbers), e-mail address and
              telephone number. This information is called "Order Information".
              When we talk about "Personal Information" in this Privacy Policy,
              we are talking about both device information and order
              information.
            </p>
          </li>
          <li>
            <h3>HOW WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use information about orders that we collect in general to
              process orders placed through the Site (including processing
              payment data, organizing shipping and providing invoices and/or
              order confirmations). We also use this order information to:-
              Communicate with you;- Review our orders for potential risk or
              fraud; and if in line with your preferences shared with us,
              provide information or advertising about our products or services.{" "}
              <br />
              <br />
              We use the device information we collect to help us identify
              potential risks and fraud (particularly your IP address) and, more
              generally, to improve and optimize our site (for example, by
              generating analysis on how our customers navigate and interact
              with the site and to evaluate the success of our advertising and
              marketing campaigns).
            </p>
          </li>
          <li>
            <h3>SHARE YOUR PERSONAL INFORMATION</h3>
            <p>
              We share your personal information with third parties to help us
              use your personal information as described above. For example, we
              use Webflow to power our online store - you can learn more about
              how Webflow uses your personal information
              here:https://webflow.com/legal/privacy. We also use Google
              Analytics to help us understand how our customers use the Site -
              you can learn more about how Google uses your personal information
              here:
              <br />
              <br />
              Finally, we may also share your personal information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant or other legal request for information we receive,
              or to otherwise protect our rights.
            </p>
          </li>
          <li>
            <h3>BEHAVIOURAL ADVERTISING</h3>
            <p>
              As described above, we use your personal information to provide
              you with targeted advertising or marketing communications that we
              think may be of interest to you. For more information on how
              targeted advertising works, you can visit the Network Advertising
              Initiative ("NAI") education page at
              http://www.networkadvertising.org/
              understanding-online-advertising/how-does-it-work. <br />
              <br />
              You can choose not to receive targeted advertising by using the
              links below:-
              <br />
              <br />
            </p>
          </li>
          <li>
            <h3>DO NOT TRADE</h3>
            <p>
              Please note that we do not change the data collection of our site
              and usage practices when we see a Do Not Track signal from your
              browser.Please note that we do not change the data collection of
              our site and usage practices when we see a Do Not Track signal
              from your browser.
            </p>
          </li>
          <li>
            <h3>YOUR RIGHTS</h3>
            <p>
              If you are a resident of Europe, you have the right to access the
              personal data we hold about you and to request that your personal
              data be corrected, updated or deleted. If you wish to exercise
              this right, please contact us through the contact information
              below. <br />
              <br />
              In addition, if you are a resident of Europe, we note that we are
              processing your information in order to fulfil any contracts we
              may have with you (for example, if you place an order through the
              Site), or otherwise to pursue our legitimate business interests
              listed above. In addition, please note that your information will
              be transferred outside of Europe, including to Canada and the
              United States.
            </p>
          </li>
          <li>
            <h3>DATA COLLECTION</h3>
            <p>
              When you place an order through the Site, we will retain your
              order information for our records, unless and until you ask us to
              delete this information.
            </p>
          </li>
          <li>
            <h3>VARIATIONS</h3>
            <p>
              We may periodically update this privacy policy to reflect, for
              example, changes in our practices or for other operational, legal
              or regulatory reasons.
            </p>
          </li>
          <li>
            <h3>CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have any
              questions or if you would like to lodge a complaint, please
              contact us by e-mail at info@deplacemaison.com or by post using
              the details provided below: <br />
              <br />
              Progetto 4.0 s.r.l. unipersonale Via Morimondo, 24 - 20143, Milan
              (MI) VAT No. IT09729880964
              <br />
              <a href="mailto:info@deplacemaison.com">info@deplacemaison.com</a>
              <br />
              <br />
              <a href="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14f2392c2ac75dcb8c076d_privacy-policy.pdf">
                Download here
              </a>{" "}
              the complete document (IT) for the information on privacy and on
              the holder of the data treatment: legal-privacy-policy.pdf
            </p>
          </li>
        </ul>
      </StyledPrivacy>
    </Wrapper>
  );
}

export default Privacy;
