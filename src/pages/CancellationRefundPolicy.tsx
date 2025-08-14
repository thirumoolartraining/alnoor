import { PolicyLayout, PolicySection, PolicyText } from '@/components/PolicyLayout';

export default function CancellationRefundPolicy() {
  return (
    <PolicyLayout 
      title="Cancellation & Refund Policy"
      lastUpdated="August 14, 2025"
    >
      <PolicySection title="Order Cancellation">
        <PolicyText>
          You may cancel your order before it has been processed for delivery. Once the order is out for delivery, cancellation may not be possible.
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>To cancel an order, please call us at +91 9884660216 as soon as possible.</li>
          <li>If the order has already been processed, you may need to refuse delivery when it arrives.</li>
        </ul>
      </PolicySection>

      <PolicySection title="Refund Policy">
        <PolicyText>
          We offer refunds in the following cases:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>If you received a damaged or incorrect product</li>
          <li>If the product quality is not as described</li>
          <li>If the order was cancelled before processing</li>
        </ul>
      </PolicySection>

      <PolicySection title="Refund Process">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Contact our customer support within 2 hours of delivery at +91 9884660216</li>
          <li>Provide your order number and details of the issue</li>
          <li>Our team may request photos or other evidence</li>
          <li>Once approved, refund will be processed within 3-5 business days</li>
          <li>The refund will be credited to your original payment method</li>
        </ol>
      </PolicySection>

      <PolicySection title="Non-Refundable Items">
        <PolicyText>The following items are not eligible for refunds unless they arrive damaged or spoiled:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Perishable goods (if they meet quality standards)</li>
          <li>Special orders or customized products</li>
          <li>Products that have been used or opened</li>
        </ul>
      </PolicySection>

      <PolicySection title="Return Shipping">
        <PolicyText>
          For eligible returns, we will arrange for product pickup from your delivery address. Please ensure the product is properly packed and ready for return.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Contact Us">
        <PolicyText>
          For any questions about our cancellation and refund policy, please contact us:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Phone: +91 9884660216</li>
          <li>Email: shop@alnoormeatcenter.com</li>
          <li>Business Hours: 9:00 AM - 9:00 PM, all days</li>
        </ul>
      </PolicySection>
    </PolicyLayout>
  );
}
