import Wrapper from "../wrapper/Wrapper";
import { StyledFaq } from "./styledComponents";

function Faq() {
  return (
    <Wrapper>
      <StyledFaq>
        <h1>FAQ</h1>
        <ul>
          <li>
            <h3>How long does shipping take? (Track and Trace)</h3>
            <p>
              Once you have placed your order, you will receive a confirmation
              by email within two hours. Next, we will start to process your
              order as soon as possible. When the order is ready to ship, you
              will receive an email with the tracking information. You can use
              this information to track the shipment of your order until it is
              delivered.
            </p>
          </li>
          <li>
            <h3>WHICH PAYMENT METHODS you accept?</h3>
            <p>
              We accept: ‍ <br /> – Paypal <br />– Debit / Credit Card <br />–
              Apple Pay{" "}
            </p>
          </li>
          <li>
            <h3>My order has not been delivered. What should I do? </h3>
            <p>
              Please check the track and trace link you received in your
              dispatch email. If your items has left our warehouse and it is
              severely overdue, please contact{" "}
              <a href="mailto: sales@deplacemaison.com">
                sales@deplacemaison.com
              </a>
            </p>
          </li>
          <li>
            <h3>Do you ship worldwide?</h3>
            <p>
              Yes, we shipping internationally. Please see the list below to
              discover your country fee: <br />
              ITALY <br />
              Free delivery <br />
              UPS - 2/3 business day ‍ <br />
              EUROPE <br />
              Free delivery <br />
              UPS - 4/6 business day <br />
              WORLDWIDE <br />
              Free delivery <br />
              UPS - 4/6 business day
            </p>
          </li>
          <li>
            <h3>Can I return/exchange an item?</h3>
            <p>
              Yes items can be returned within 21 days prior to date of order.
              Items must be in their original packaging and state for
              acceptance. Items received after 21 days can not be accepted and
              refunded. We will notify you of the approval or rejection of your
              refund. If you are approved, then your refund will be processed,
              and a credit will automatically be applied to your credit card or
              original method of payment, within a certain amount of days. We
              only replace items if they are defective or damaged. You can see
              the full guide here.{" "}
            </p>
          </li>
        </ul>
      </StyledFaq>
    </Wrapper>
  );
}

export default Faq;
