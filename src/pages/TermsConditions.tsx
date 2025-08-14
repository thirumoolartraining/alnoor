import { PolicyLayout, PolicySection, PolicyText } from '@/components/PolicyLayout';

export default function TermsConditions() {
  return (
    <PolicyLayout 
      title="Terms & Conditions"
      lastUpdated="August 14, 2025"
    >
      <PolicySection title="Welcome to Al Noor Chicken & Mutton Center">
        <PolicyText>
          By accessing and using our website or engaging with our products and services, you agree to comply with and be bound by the following Terms & Conditions. These terms govern your interaction with our brand, purchases made via phone or online channels, and other related services. Please read them carefully before proceeding.
        </PolicyText>
        <PolicyText>
          If you disagree with any part of these terms, kindly refrain from using our services.
        </PolicyText>
      </PolicySection>

      <PolicySection title="1. General Use">
        <PolicyText>
          By using our platform or engaging in a transaction with Al Noor Chicken & Mutton Center, you confirm that you are:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>At least 18 years of age, or</li>
          <li>Operating under the supervision of a parent/guardian if underage</li>
          <li>Acting in accordance with applicable laws and community standards</li>
        </ul>
        <PolicyText className="mt-4">
          We reserve the right to deny service, restrict access, or terminate engagements at our sole discretion—especially in cases of misuse, fraudulent behavior, or policy violation.
        </PolicyText>
      </PolicySection>

      <PolicySection title="2. Product Information & Availability">
        <PolicyText>All products listed are subject to availability and seasonal supply variations.</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Halal Compliance:</strong> Every product is 100% certified halal, processed in line with Islamic guidelines and food safety regulations.</li>
          <li><strong>Visuals & Descriptions:</strong> While we strive for accuracy, images shown on our site or catalog may differ slightly from actual products.</li>
          <li><strong>Product Weights:</strong> As meat products are natural and manually cut, minor weight variations may occur.</li>
          <li><strong>Stock & Substitutions:</strong> If a particular item is out of stock, we may offer suitable alternatives or process refunds where applicable.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Pricing & Payments">
        <PolicyText>All prices are listed in Indian Rupees (INR ₹), unless otherwise specified for international orders.</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Price Adjustments:</strong> We reserve the right to modify prices due to market dynamics, fuel costs, or raw material changes.</li>
          <li><strong>Payment Methods:</strong> We accept cash, UPI, net banking, and digital wallets. For export/bulk orders, bank transfer or LC options may apply.</li>
          <li><strong>Taxes:</strong> Applicable GST and other statutory charges will be shown at checkout or on the invoice.</li>
          <li><strong>Receipts:</strong> A detailed receipt will be provided for every transaction—either printed, emailed, or via WhatsApp.</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Order Fulfillment & Delivery">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Local Delivery:</strong> Orders within Chennai are typically delivered within a few hours (subject to location and stock).</li>
          <li><strong>Export Orders:</strong> Export timelines, documentation, and freight details are shared directly with overseas clients.</li>
          <li><strong>Cold Chain Assurance:</strong> We adhere to strict cold chain protocols during storage and delivery to preserve meat quality.</li>
          <li><strong>Delays:</strong> While we strive to fulfill all deliveries promptly, we are not liable for delays caused by unforeseen circumstances (e.g., transport disruptions, weather events, or customs procedures).</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Cancellations & Refunds">
        <PolicyText>
          Please refer to our Cancellation & Refund Policy for detailed terms regarding:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Cancellation windows</li>
          <li>Damaged or spoiled goods</li>
          <li>Refund eligibility and timelines</li>
          <li>Wholesale vs. retail order policies</li>
        </ul>
        <PolicyText className="mt-4">
          All refund or return requests must be made within the time frame outlined in the above policy.
        </PolicyText>
      </PolicySection>

      <PolicySection title="6. User Conduct">
        <PolicyText>By interacting with our platform or staff, you agree not to:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Share false information or impersonate others</li>
          <li>Harass or abuse our staff (verbally or physically)</li>
          <li>Misuse our platform, website, or contact details</li>
          <li>Attempt to tamper with packaging, pricing, or delivery mechanisms</li>
          <li>Resell our products without written permission or distribution agreement</li>
        </ul>
        <PolicyText className="mt-4">
          We reserve the right to take legal action or block users found in violation.
        </PolicyText>
      </PolicySection>

      <PolicySection title="7. Intellectual Property">
        <PolicyText>
          All content on our website, packaging, labels, and marketing materials—including the Al Noor Chicken & Mutton Center name and logo—is our intellectual property.
        </PolicyText>
        <PolicyText className="mt-4">
          Unauthorized use, reproduction, or modification is prohibited without our written consent.
        </PolicyText>
      </PolicySection>

      <PolicySection title="8. Limitations of Liability">
        <PolicyText>Al Noor Chicken & Mutton Center will not be held liable for:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Any allergic reactions or health issues due to undisclosed consumer health conditions</li>
          <li>Delays or non-performance caused by force majeure</li>
          <li>Minor variations in product appearance or weight</li>
          <li>Indirect or incidental damages resulting from use or misuse of our services</li>
        </ul>
        <PolicyText className="mt-4">
          Use of our products and services is entirely at your own risk.
        </PolicyText>
      </PolicySection>

      <PolicySection title="9. Governing Law">
        <PolicyText>
          These terms are governed by the laws of Tamil Nadu, India. Any disputes arising from or related to our services shall be subject to the jurisdiction of courts in Chennai.
        </PolicyText>
      </PolicySection>

      <PolicySection title="10. Contact Information">
        <PolicyText>For questions, complaints, or feedback, please reach out to us at:</PolicyText>
        <div className="mt-4 space-y-2">
          <p>Al Noor Chicken & Mutton Center<br />
          No: 36, Pandiyan Street,<br />
          Medavakkam Main Road, Ullagaram,<br />
          Chennai - 600091, Tamil Nadu, India</p>
          <p>📞 Phone: +91 98846 60216<br />
          📧 Email: shop@alnoormeatcenter.com</p>
        </div>
      </PolicySection>
    </PolicyLayout>
  );
}
