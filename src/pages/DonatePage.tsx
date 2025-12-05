import React, { useState, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';

// Define the available payment methods for the tabs
type PaymentTab = 'EFT' | 'CARD';

/**
 * Main Donation component using React, TypeScript, and Tailwind CSS.
 * This component manages the state for the selected payment tab and the donation amount.
 */
const Donate: React.FC = () => {
  const [activeTabVisual, setActiveTabVisual] = useState<PaymentTab>('CARD'); 
  const [donationAmount, setDonationAmount] = useState<string>(''); // No default value
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

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

  const triggerConfetti = () => {
    const count = 600; // Increased to 600 for maximum density
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 10000,
    };

    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    // Initial full-screen burst
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      gravity: 0.1,
      decay: 0.9,
      scalar: 1.2,
    });
    
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      gravity: 0.1,
      decay: 0.9,
      scalar: 1.2,
    });

    // More intense confetti bursts
    fire(0.4, {
      spread: 50,
      startVelocity: 70,
      decay: 0.85,
      scalar: 1.3,
      gravity: 0.03,
    });

    fire(0.3, {
      spread: 90,
      startVelocity: 50,
      scalar: 0.9,
      gravity: 0.08,
    });

    fire(0.25, {
      spread: 130,
      startVelocity: 40,
      decay: 0.9,
      scalar: 1.1,
      gravity: 0.12,
    });

    fire(0.2, {
      spread: 170,
      startVelocity: 30,
      decay: 0.91,
      scalar: 1.4,
      gravity: 0.18,
    });

    fire(0.1, {
      spread: 210,
      startVelocity: 20,
      scalar: 1.6,
      gravity: 0.25,
    });
  };

  const handleAddDonation = useCallback(() => {
    // Basic validation and simulation of an async action
    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) {
      console.error("Please enter a valid donation amount.");
      // In a real app, you would show a user-facing error message here.
      return;
    }

    setIsProcessing(true);
    console.log(`Processing donation of $${amount.toFixed(2)} using ${activeTabVisual} method.`);

    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      triggerConfetti();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Reset form
      setDonationAmount('100');
      
      // In a real application, you would navigate to a confirmation page or show a success modal.
      console.log('Donation simulated successfully!');
    }, 1500);

  }, [donationAmount, activeTabVisual]);

  const buttonText = useMemo(() => isProcessing ? 'Processing...' : 'Add Donation', [isProcessing]);

  // Tab Item Component (Styling adjusted to match the image's boxy, unrounded look)
  const TabItem: React.FC<{ tab: PaymentTab; label: string }> = ({ tab, label }) => {
    const isActive = activeTabVisual === tab;
    return (
      <button
        type="button"
        onClick={() => setActiveTabVisual(tab)}
        className={`px-4 py-2 text-sm text-gray-900 border-t border-l border-r border-gray-300 transition-colors duration-150 ease-in-out
          ${isActive
            ? 'bg-white border-b-white z-10 -mb-px' // Active tab overlaps the bottom border
            : 'bg-gray-100 border-b border-gray-300 hover:bg-gray-200' // Inactive tab has a full border
          }
          ${tab === 'EFT' ? 'ml-0' : '-ml-px' }`} // Negative margin to visually merge borders
      >
        {label}
      </button>
    );
  };

  return (
    // Minimal background color to match the subtle off-white of the image
    <div className="min-h-screen bg-white flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-xl">
        
        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-bounce">
            Thank you for your donation! 🎉
          </div>
        )}
        
        {/* Header Section */}
        <div className="mb-8 pl-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Donate</h1>
          <p className="text-base text-gray-700">It truly takes a village.</p>
          <p className="text-base text-gray-700">Our society values donations of all sizes.</p>
        </div>

        {/* Donation Form Card - Minimalist styling to match the image's box */}
        <div className="bg-white border border-gray-300 overflow-hidden">

          {/* Tabs Container */}
          <div className="flex bg-gray-100 border-b border-gray-300">
            {/* The tabs are not full width, they are inline */}
            <div className="flex">
              <TabItem tab="EFT" label="PayPal, Cheque, E-Transfer" />
              <TabItem tab="CARD" label="Credit Card" />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-4">
            <h2 className="text-base font-bold text-gray-900 mb-3">Donation</h2>

            <div className="space-y-4">
              {/* Donation Amount Input - Adjusted to match the image's simple look */}
              <label htmlFor="donation-amount" className="block text-sm font-medium text-gray-700 sr-only">
                Enter Donation Amount
              </label>
              <div className="flex shadow-sm w-full sm:w-80 border border-gray-300">
                <span className="inline-flex items-center px-2 bg-gray-100 text-gray-900 text-sm font-medium">
                  $
                </span>
                <input
                  type="text"
                  id="donation-amount"
                  name="donation-amount"
                  className="flex-1 block w-full p-2 text-sm focus:ring-0 focus:border-gray-300"
                  placeholder="Ex: 100"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  inputMode="decimal"
                  disabled={isProcessing}
                />
              </div>

              {/* Action Button - Adjusted to match the image's simple blue rectangle */}
              <button
                type="button"
                onClick={handleAddDonation}
                disabled={isProcessing}
                className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm transition-all duration-300 ease-in-out mt-4
                  ${isProcessing
                    ? 'bg-blue-400 cursor-not-allowed text-gray-200'
                    : 'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-0'
                  }`}
              >
                {buttonText}
              </button>

              {/* Specific Content based on tab (placeholder for complexity) */}
              <div className="pt-2">
                {activeTabVisual === 'EFT' ? (
                  <p className="text-sm text-gray-500">
                    Instructions for PayPal, Cheque, and E-Transfer.
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    Credit card processing form would be here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Registration Info - Adjusted for minimalist look */}
        <div className="mt-8 pt-4">
          <p className="text-base text-gray-900">
            Charity Registration 79421 9725 RR0001
          </p>
          <p className="text-sm text-gray-700 mt-1">
            For donations <span className='text-green-600 font-bold'>$20</span> and above, we provide a charitable tax receipt!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Donate;