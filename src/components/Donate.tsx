import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Users,
  Globe,
  Zap,
  Smartphone,
  CreditCard,
  Building2,
  Copy,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState("mobile");
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const paymentMethods = [
    {
      id: "mobile",
      name: "Mobile Money",
      icon: <Smartphone className='w-5 h-5' />,
      description: "Pay via M-Pesa, Tigo Pesa, Airtel Money",
      details: [
        {
          provider: "Vodacom M-Pesa",
          number: "+255 769 044 455",
          shortCode: "769044455",
        },
        {
          provider: "Tigo Pesa",
          number: "+255 769 044 455",
          shortCode: "769044455",
        },
        {
          provider: "Airtel Money",
          number: "+255 769 044 455",
          shortCode: "769044455",
        },
      ],
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: <Building2 className='w-5 h-5' />,
      description: "Direct bank transfer",
      details: [
        { label: "Account Name", value: "Community Development Organization" },
        { label: "Account Number", value: "0150394000123" },
        { label: "Bank", value: "CRDB Bank Tanzania" },
        { label: "Swift Code", value: "CORUTZTZ" },
      ],
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className='w-5 h-5' />,
      description: "Pay with Visa, Mastercard",
      details: [],
    },
  ];

  const impactItems = [
    {
      icon: <Heart className='w-6 h-6' />,
      title: "Healthcare Access",
      description:
        "Support healthcare initiatives in local communities across Tanzania",
      color: "text-red-500",
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Education Support",
      description: "Fund educational programs and scholarships for students",
      color: "text-blue-500",
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Community Development",
      description: "Build sustainable community infrastructure projects",
      color: "text-green-500",
    },
    {
      icon: <Zap className='w-6 h-6' />,
      title: "Emergency Relief",
      description: "Provide rapid response to community emergencies",
      color: "text-yellow-500",
    },
  ];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Make a Difference Today
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/90'>
            Your donation directly impacts communities in need. Every
            contribution matters.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              variant='secondary'
              className='text-lg px-8 py-4'
              onClick={() => setDonationType("monthly")}>
              Donate Monthly
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-blue-600'
              onClick={() => setDonationType("one-time")}>
              One-Time Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Choose Your Impact
            </h2>
            <p className='text-lg text-gray-600'>
              Select your preferred payment method and amount
            </p>
          </div>

          <Card className='shadow-lg'>
            <CardHeader>
              <CardTitle className='text-center text-2xl'>
                Donation Form
              </CardTitle>
              <CardDescription className='text-center'>
                Enter your donation details below
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              {/* Donation Type Selection */}
              <div className='flex flex-col space-y-2'>
                <label className='text-sm font-medium text-gray-700'>
                  Donation Type
                </label>
                <div className='grid grid-cols-2 gap-3'>
                  <Button
                    variant={
                      donationType === "one-time" ? "default" : "outline"
                    }
                    size='lg'
                    className='flex-1'
                    onClick={() => setDonationType("one-time")}>
                    One-Time Donation
                  </Button>
                  <Button
                    variant={donationType === "monthly" ? "default" : "outline"}
                    size='lg'
                    className='flex-1'
                    onClick={() => setDonationType("monthly")}>
                    Monthly Donation
                  </Button>
                </div>
              </div>

              {/* Amount Input */}
              <div className='flex flex-col space-y-2'>
                <label
                  htmlFor='donation-amount'
                  className='text-sm font-medium text-gray-700'>
                  Donation Amount (TSh)
                </label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                    TSh
                  </span>
                  <input
                    id='donation-amount'
                    type='number'
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder='Enter amount'
                    className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                    min='1000'
                  />
                </div>
                <p className='text-sm text-gray-500'>
                  Minimum amount: TSh 1,000
                </p>
              </div>

              {/* Payment Method Selection */}
              <div className='space-y-3'>
                <label className='text-sm font-medium text-gray-700'>
                  Choose Payment Method
                </label>
                <div className='grid gap-3'>
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setSelectedMethod(method.id)}>
                      <div className='flex items-center space-x-3'>
                        <div
                          className={`${
                            selectedMethod === method.id
                              ? "text-blue-600"
                              : "text-gray-500"
                          }`}>
                          {method.icon}
                        </div>
                        <div className='flex-1'>
                          <div className='font-medium'>{method.name}</div>
                          <div className='text-sm text-gray-500'>
                            {method.description}
                          </div>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            selectedMethod === method.id
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}>
                          {selectedMethod === method.id && (
                            <CheckCircle className='w-4 h-4 text-white' />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Details */}
              {selectedMethod && (
                <Card className='bg-gray-50'>
                  <CardHeader className='pb-3'>
                    <CardTitle className='text-lg'>Payment Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedMethod === "mobile" && (
                      <div className='space-y-4'>
                        {paymentMethods[0].details.map((detail, index) => (
                          <div
                            key={index}
                            className='flex items-center justify-between p-3 bg-white rounded-lg border'>
                            <div>
                              <div className='font-medium'>
                                {detail.provider}
                              </div>
                              <div className='text-sm text-gray-500'>
                                Send money to this number
                              </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <span className='font-mono text-lg'>
                                {detail.number}
                              </span>
                              <Button
                                size='sm'
                                variant='outline'
                                onClick={() =>
                                  copyToClipboard(
                                    detail.number,
                                    detail.provider
                                  )
                                }>
                                <Copy className='w-4 h-4' />
                                {copied === detail.provider
                                  ? "Copied!"
                                  : "Copy"}
                              </Button>
                            </div>
                          </div>
                        ))}
                        <div className='mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200'>
                          <p className='text-sm text-blue-800'>
                            <strong>How to donate:</strong>
                            <br />
                            1. Open your mobile money app or dial the USSD code
                            <br />
                            2. Send money to the number above
                            <br />
                            3. Enter amount: TSh {customAmount || "___"}
                            <br />
                            4. Complete the transaction
                            <br />
                            5. Keep your confirmation message for records
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedMethod === "bank" && (
                      <div className='space-y-3'>
                        {paymentMethods[1].details.map((detail, index) => (
                          <div
                            key={index}
                            className='flex items-center justify-between p-3 bg-white rounded-lg border'>
                            <span className='font-medium'>{detail.label}:</span>
                            <div className='flex items-center space-x-2'>
                              <span className='font-mono'>{detail.value}</span>
                              <Button
                                size='sm'
                                variant='outline'
                                onClick={() =>
                                  copyToClipboard(detail.value, detail.label)
                                }>
                                <Copy className='w-4 h-4' />
                                {copied === detail.label ? "Copied!" : "Copy"}
                              </Button>
                            </div>
                          </div>
                        ))}
                        <div className='mt-4 p-4 bg-green-50 rounded-lg border border-green-200'>
                          <p className='text-sm text-green-800'>
                            <strong>Bank Transfer Instructions:</strong>
                            <br />
                            1. Use the account details above
                            <br />
                            2. Reference: Your name + "Donation"
                            <br />
                            3. Amount: TSh {customAmount || "___"}
                            <br />
                            4. Send us the transfer receipt via email
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedMethod === "card" && (
                      <div className='text-center p-8'>
                        <CreditCard className='w-16 h-16 mx-auto text-gray-400 mb-4' />
                        <p className='text-gray-500 mb-4'>
                          Card payments are coming soon. Please use mobile money
                          or bank transfer for now.
                        </p>
                        <Button variant='outline' disabled>
                          Card Payment (Coming Soon)
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Donate;
