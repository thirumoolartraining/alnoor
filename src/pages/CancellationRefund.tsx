import { PolicyLayout, PolicySection, PolicyText } from '@/components/PolicyLayout';

export default function CancellationRefund() {
  return (
    <PolicyLayout 
      title="Cancellation & Refund Policy"
      subtitle="Fair and Transparent Policies for Your Peace of Mind"
      lastUpdated="August 14, 2025"
    >
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Due to the perishable nature of our products, we have a limited cancellation and return policy.
              Please read this policy carefully before placing your order.
            </p>
          </div>
        </div>
      </div>
            
      <PolicySection title="1. Order Cancellation">
        <PolicyText>
          We understand that sometimes plans change. Here's what you need to know about cancelling your order:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Before Processing:</strong> You may cancel your order without any charges if we haven't started 
            processing it. Please contact us immediately at +91 98846 60216 or shop@alnoormeatcenter.com to request cancellation.
          </li>
          <li>
            <strong>After Processing:</strong> Once your order is being processed, we cannot cancel it as we begin 
            preparing your items immediately to ensure maximum freshness.
          </li>
          <li>
            <strong>Custom/Pre-order Items:</strong> These cannot be cancelled once the order is placed as they are 
            specially prepared for you.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="2. Refund Policy">
        <PolicyText>
          Our refund policy is designed to be fair while considering the perishable nature of our products:
        </PolicyText>
        
        <h3 className="font-semibold mt-4 mb-2 text-foreground">Eligible for Refund/Replacement:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Incorrect items delivered (wrong product, wrong quantity)</li>
          <li>Damaged or spoiled products upon delivery</li>
          <li>Quality issues with the products received</li>
          <li>Failed delivery after multiple attempts through no fault of yours</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2 text-foreground">Not Eligible for Refund:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Change of mind or ordering errors</li>
          <li>Failure to be available at the time of delivery</li>
          <li>Failure to provide accurate delivery information</li>
          <li>Custom or special orders</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Refund Process">
        <PolicyText>
          To request a refund or replacement, please follow these steps:
        </PolicyText>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>Contact our customer service within 2 hours of delivery at +91 98846 60216</li>
          <li>Provide your order number and details of the issue</li>
          <li>Our team may request photos of the damaged/incorrect items</li>
          <li>We'll review your request and respond within 24 hours</li>
          <li>If approved, your refund will be processed within 3-5 business days</li>
        </ol>
        <PolicyText className="mt-4">
          <strong>Note:</strong> Refunds will be issued to the original payment method. The time it takes for the 
          refund to reflect in your account depends on your bank's processing time.
        </PolicyText>
      </PolicySection>

      <PolicySection title="4. Product Returns">
        <PolicyText>
          Due to the perishable nature of our products, we generally do not accept returns. However, in cases where 
          we've sent incorrect or damaged items:
        </PolicyText>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Our delivery team will collect the items during a scheduled pickup</li>
          <li>You may be asked to return the items in their original packaging</li>
          <li>We reserve the right to refuse returns that don't meet our return policy criteria</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Contact Us">
        <PolicyText>
          For any questions or concerns about our cancellation and refund policy, please contact our customer support team:
        </PolicyText>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Al Noor Chicken & Mutton Center</p>
          <p className="text-muted-foreground">
            📞 Phone/WhatsApp: +91 98846 60216<br />
            📧 Email: shop@alnoormeatcenter.com<br />
            🕒 Support Hours: 9:00 AM - 8:00 PM, 7 days a week
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We're committed to resolving any issues you may have with your order.
          </p>
        </div>
      </PolicySection>
    </PolicyLayout>
  );
}
