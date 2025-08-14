import { PolicyLayout, PolicySection, PolicyText } from '@/components/PolicyLayout';

export default function ShippingPolicy() {
  return (
    <PolicyLayout 
      title="Shipping Policy"
      subtitle="Delivering Fresh Halal Meat — Locally and Globally, with Care"
      lastUpdated="August 14, 2025"
    >
      <PolicySection title="">
        <PolicyText>
          At Al Noor Chicken & Mutton Center, we are committed to delivering fresh, hygienically processed, and 100% halal meat products to your doorstep or distribution channel—whether you're located in Chennai or across international borders.
        </PolicyText>
        <PolicyText>
          Our shipping and delivery policy outlines how we handle orders, logistics, packaging, and cold chain management to ensure product quality and customer satisfaction at every stage.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Order Processing Time">
        <PolicyText>Once we receive a confirmed order, we begin processing as per the following timelines:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Local Retail Orders:</strong> Typically processed within 2–6 hours of order confirmation (subject to product availability and order volume).</li>
          <li><strong>Bulk / Export Orders:</strong> Processing takes 1–3 business days, including cold packing, export documentation, and freight coordination.</li>
        </ul>
        <PolicyText className="mt-4">
          Orders placed on Sundays or public holidays are processed the next business day.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Shipping Destinations & Delivery Timelines">
        <PolicyText>We currently serve:</PolicyText>
        
        <h3 className="text-lg font-semibold mt-4 mb-2">Local (Chennai & Surrounding Areas)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Standard Delivery: Same day or next day</li>
          <li>Delivery slots are coordinated via call/WhatsApp for your convenience</li>
          <li>Real-time support available for urgent requests</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">National (Wholesale/Distributors)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Delivery via insulated transport or cold logistics partners</li>
          <li>Timelines: 2–5 business days, depending on location</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">International (Export)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>We export to countries across the Middle East, Africa, and Gulf regions.</li>
          <li>Freight mode: Air or Sea Cargo</li>
          <li>Delivery timeline: 7–21 business days depending on the destination, mode, and customs clearance</li>
        </ul>
        <PolicyText className="mt-4">
          All international orders comply with halal certification, FSSAI, and destination country food import regulations.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Cold Chain & Packaging">
        <ul className="list-disc pl-5 space-y-2">
          <li>All meat products are vacuum-sealed, blast-chilled, or frozen as per the product category</li>
          <li>Export shipments are handled with temperature-controlled containers</li>
          <li>We use insulated boxes, ice packs, and tamper-proof seals to maintain hygiene and safety</li>
          <li>Batch codes and expiry dates are clearly labeled for tracking</li>
        </ul>
      </PolicySection>

      <PolicySection title="Shipping Charges">
        <PolicyText>Shipping costs are calculated based on:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Order type (retail / bulk / export)</li>
          <li>Delivery location</li>
          <li>Weight and packaging requirements</li>
          <li>Urgency or express delivery needs</li>
        </ul>
        <PolicyText className="mt-4">
          Final charges will be communicated during checkout (retail orders) or via quotation (bulk/export).
        </PolicyText>
        <PolicyText className="mt-2">
          We may offer free shipping or subsidized rates for:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Orders above a minimum quantity</li>
          <li>Long-term distributor contracts</li>
          <li>Seasonal or promotional campaigns</li>
        </ul>
      </PolicySection>

      <PolicySection title="Tracking & Updates">
        <ul className="list-disc pl-5 space-y-2">
          <li>Local deliveries are coordinated directly by our dispatch team via WhatsApp / Call</li>
          <li>Bulk and export shipments include tracking via freight partners or courier companies</li>
          <li>Tracking details (if available) will be shared via email or WhatsApp after dispatch</li>
          <li>Dedicated logistics support is available for wholesale and international clients</li>
        </ul>
      </PolicySection>

      <PolicySection title="Delays & Exceptions">
        <PolicyText>We strive for timely and safe delivery but delays may occur due to:</PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Weather disruptions, strikes, or public holidays</li>
          <li>Customs inspections or export documentation holds</li>
          <li>Transport issues or route unavailability</li>
          <li>Peak season (e.g., Ramadan, Eid, festive orders)</li>
        </ul>
        <PolicyText className="mt-4">
          In such cases, we will proactively notify you with revised timelines and support options.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Need Assistance?">
        <PolicyText>For delivery inquiries, updates, or shipment tracking, please contact:</PolicyText>
        <div className="mt-4 space-y-2 bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Al Noor Chicken & Mutton Center</p>
          <p>📍 No: 36, Pandiyan Street, Medavakkam Main Road, Ullagaram, Chennai - 600091</p>
          <p>📞 Phone / WhatsApp: +91 98846 60216</p>
          <p>📧 Email: shop@alnoormeatcenter.com</p>
          <p className="mt-2 text-sm text-gray-600">Our team is available Mon–Sat, 9 AM – 8 PM IST to ensure your experience is seamless and satisfactory.</p>
        </div>
      </PolicySection>
    </PolicyLayout>
  );
}
