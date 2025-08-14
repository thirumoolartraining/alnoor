import { PolicyLayout, PolicySection, PolicyText } from '@/components/PolicyLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Privacy Policy"
      lastUpdated="August 14, 2025"
    >
      <PolicySection title="Your Privacy. Our Commitment to Trust and Transparency.">
        <PolicyText>
          At Al Noor Chicken & Mutton Center, safeguarding your privacy is an extension of our commitment to quality, integrity, and halal compliance. As a trusted name in premium halal meat supply—serving local communities and global clients—we ensure that any personal information you share with us is treated with the utmost respect, security, and care.
        </PolicyText>
        <PolicyText>
          This Privacy Policy outlines how we collect, use, and protect your data when you interact with our website, place orders, or communicate with our team—aligned with the Indian IT Act and global privacy frameworks like the GDPR.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Information We Collect">
        <PolicyText>We may collect the following types of information through our website, customer support channels, and ordering systems:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Shipping & Billing Address</li>
          <li>Business Name (for wholesale buyers/distributors)</li>
          <li>Order History & Preferences</li>
          <li>Payment Details (via secure third-party gateways)</li>
          <li>Device & Browser Information (for performance tracking)</li>
          <li>Cookies and Usage Data (for analytics)</li>
        </ul>
        <PolicyText className="mt-4">
          We collect only what is necessary to fulfill your orders, enhance your experience, and support business communication—nothing more.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Why We Collect Your Information">
        <PolicyText>Your data is used solely for legitimate and specific purposes such as:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Processing orders and managing delivery logistics</li>
          <li>Issuing invoices and confirming payments</li>
          <li>Providing customer support or handling queries</li>
          <li>Updating you on shipping timelines or product availability</li>
          <li>Enabling account management or business coordination</li>
          <li>Sending promotional offers (only if you opt in)</li>
          <li>Improving our website functionality and services</li>
          <li>Ensuring regulatory compliance and traceability (especially for exports)</li>
        </ul>
      </PolicySection>
      <PolicySection title="How We Protect Your Information">
        <PolicyText>We apply strong data protection measures across all digital and physical touchpoints:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>SSL Encryption:</strong> All interactions on our website are secured using industry-standard SSL encryption.</li>
          <li><strong>Secure Payment Gateways:</strong> All financial transactions are processed via PCI-compliant providers. We do not store any card or bank details.</li>
          <li><strong>Server Security:</strong> Our backend systems are monitored and protected with firewalls, access controls, and threat detection protocols.</li>
          <li><strong>Internal Access Restrictions:</strong> Only trained personnel have access to sensitive data. Internal protocols prevent misuse or leakage.</li>
        </ul>
      </PolicySection>

      <PolicySection title="Your Rights & Choices">
        <PolicyText>As a valued user, you have complete control over your personal data. You may:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Request a copy of your data stored with us</li>
          <li>Update or correct inaccurate information</li>
          <li>Request deletion of your data (unless required by law)</li>
          <li>Opt out of promotional communication at any time</li>
          <li>Raise privacy-related complaints or suggestions</li>
        </ul>
        <PolicyText className="mt-4">
          To exercise these rights, contact us using the details below. We respond within 30 days of receiving verified requests.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Third-Party Sharing">
        <PolicyText>We do not sell or rent your data to anyone.</PolicyText>
        <PolicyText className="mt-4">Your data may be shared only with:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Verified courier/logistics partners (for order fulfillment)</li>
          <li>Payment processors (for transaction handling)</li>
          <li>Government authorities (only if legally required for compliance or audits)</li>
        </ul>
        <PolicyText className="mt-4">
          All third-party services used are compliant with relevant privacy and security regulations.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Contact Us">
        <PolicyText>If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out to us:</PolicyText>
        <div className="mt-4 space-y-2">
          <p>Al Noor Chicken & Mutton Center<br />
          No: 36, Pandiyan Street,<br />
          Medavakkam Main Road, Ullagaram,<br />
          Chennai - 600091, Tamil Nadu, India</p>
          <p>📞 Phone: +91 98846 60216<br />
          📧 Email: shop@alnoormeatcenter.com</p>
        </div>
      </PolicySection>

      <PolicySection title="Policy Updates">
        <PolicyText>
          This Privacy Policy may be updated from time to time to reflect improvements in our operations or updates to legal requirements. The latest version will always be available on this page with an updated "Last Revised" date.
        </PolicyText>
        <PolicyText className="mt-4">
          Thank you for choosing Al Noor Chicken & Mutton Center. We are honored to serve you and committed to protecting your privacy at every stage of our relationship.
        </PolicyText>
        <p className="text-sm text-muted-foreground mt-6">
          © 2025 Al Noor Chicken & Mutton Center. All rights reserved.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
