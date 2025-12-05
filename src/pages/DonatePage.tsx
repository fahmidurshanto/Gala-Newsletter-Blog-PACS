import React, { useState, useCallback, useMemo } from 'react';

// Define the available payment methods for the tabs
type PaymentTab = 'EFT' | 'CARD';

/**
 * Main Donation component using React, TypeScript, and Tailwind CSS.
 * This component manages the state for the selected payment tab and the donation amount.
 */
const Donate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PaymentTab>('EFT');
  const [donationAmount, setDonationAmount] = useState<string>('100.00'); // Default to 100 as per example
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Helper function to format input as currency (basic approach)
  const formatAmountInput = (value: string): string => {
    // Remove non-numeric characters except for one decimal point
    let cleaned = value.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');

    if (parts.length > 2) {
      // Keep only the first decimal point
      cleaned = parts[0] + '.' + parts.slice(1).join('');
    }

    if (parts[1] && parts[1].length > 2) {
      // Limit to two decimal places
      return cleaned.slice(0, cleaned.indexOf('.') + 3);
    }
    return cleaned;
  };

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatAmountInput(e.target.value);
    setDonationAmount(formattedValue);
  }, []);

  const handleAddDonation = useCallback(() => {
    // Basic validation and simulation of an async action
    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) {
      console.error("Please enter a valid donation amount.");
      // In a real app, you would show a user-facing error message here.
      return;
    }

    setIsProcessing(true);
    console.log(`Processing donation of $${amount.toFixed(2)} using ${activeTab} method.`);

    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      // In a real application, you would navigate to a confirmation page or show a success modal.
      console.log('Donation simulated successfully!');
    }, 1500);

  }, [donationAmount, activeTab]);

  const buttonText = useMemo(() => isProcessing ? 'Processing...' : 'Add Donation', [isProcessing]);

  // Tab Item Component
  const TabItem: React.FC<{ tab: PaymentTab; label: string }> = ({ tab, label }) => {
    const isActive = activeTab === tab;
    return (
      <button
        type="button"
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out rounded-t-lg
          ${isActive
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:bg-gray-50 border-b border-gray-200'
          }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Donate</h1>
          <p className="text-gray-600 italic">It truly takes a village.</p>
          <p className="text-lg text-gray-700 mt-1">Our society values donations of all sizes.</p>
        </div>

        {/* Donation Form Card */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <TabItem tab="EFT" label="PayPal, Cheque, E-Transfer" />
            <TabItem tab="CARD" label="Credit Card" />
          </div>

          {/* Form Content */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Donation</h2>

            <div className="space-y-6">
              {/* Donation Amount Input */}
              <label htmlFor="donation-amount" className="block text-sm font-medium text-gray-700 sr-only">
                Enter Donation Amount
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg font-bold">
                  $
                </span>
                <input
                  type="text"
                  id="donation-amount"
                  name="donation-amount"
                  className="flex-1 block w-full rounded-none rounded-r-lg border border-gray-300 p-3 text-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: 100.00"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  inputMode="decimal"
                  disabled={isProcessing}
                />
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleAddDonation}
                disabled={isProcessing}
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-md transition-all duration-300 ease-in-out
                  ${isProcessing
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-lg'
                  }`}
              >
                {buttonText}
              </button>

              {/* Specific Content based on tab (placeholder for complexity) */}
              <div className="pt-4 border-t border-gray-100">
                {activeTab === 'EFT' ? (
                  <p className="text-sm text-gray-500">
                    Instructions for PayPal, Cheque, and E-Transfer will appear here. For example: Direct deposit to BSB 000-111, Account 987654321.
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    Credit card processing form (with fields for Card Number, Expiry, CVV) would be integrated here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Registration Info */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center sm:text-left">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Charity Registration <span className="text-gray-900">79421 9725 RR0001</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            For donations <span className="font-bold text-green-600">$20</span> and above, we provide a charitable tax receipt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;