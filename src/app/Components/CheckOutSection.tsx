/* src/app/Components/CheckOutSection.tsx */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface BillingFormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  townCity: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
}

const CheckOutSection: React.FC = () => {
  const [formData, setFormData] = useState<BillingFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    townCity: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between">
      {/* Billing Details Form */}
      <div className="max-w-[608px] mx-auto p-6 bg-white">
        <h1 className="text-4xl font-semibold text-black mb-8 font-poppins">
          Billing details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-black font-medium text-base mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
              />
            </div>
            <div className="flex-1">
              <label className="block text-black font-medium text-base mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Company Name (Optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Country / Region</label>
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full h-[75px] border border-gray-200 rounded-lg px-4 appearance-none bg-white"
              >
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
              <Image
                src="/Dropdown.png"
                alt="dropdown"
                width={20}
                height={20}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Street address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Town / City</label>
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Province</label>
            <div className="relative">
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full h-[75px] border border-gray-200 rounded-lg px-4 appearance-none bg-white"
              >
                <option value="Western Province">Western Province</option>
              </select>
              <Image
                src="/Dropdown.png"
                alt="dropdown"
                width={20}
                height={20}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">ZIP code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black font-medium text-base mb-2">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4"
            />
          </div>

          <div>
            <input
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Additional information"
              className="w-full h-[75px] border border-gray-200 rounded-lg px-4 text-gray-600"
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full max-w-[533px] p-6 font-poppins">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <div className="text-2xl font-medium">Product</div>
          <div className="text-2xl font-medium">Subtotal</div>
        </div>

        {/* Product Details */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-base text-[#9f9f9f]">Asgaard sofa <span className="text-xs font-medium ml-2">X 1</span></div>
          <div className="text-base font-light">Rs. 250000.00</div>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-base font-normal">Subtotal</div>
          <div className="text-base font-light">Rs. 250000.00</div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-base font-normal">Total</div>
          <div className="text-2xl font-bold text-[#b88e2f]">Rs. 250000.00</div>
        </div>

        <hr className="border-t border-gray-200 mb-6" />

        {/* Payment Options */}
        <div className="space-y-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Image src="/Ellipse-1.png" alt="Selected" width={40} height={14} />
              </div>
              <div>
                <div className="text-base font-normal">Direct Bank Transfer</div>
                <p className="text-base font-light text-[#9f9f9f] mt-2">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Image src="/Ellipse-2.png" alt="Option" width={14} height={14} />
            <div className="text-base text-[#9f9f9f]">Direct Bank Transfer</div>
          </div>

          <div className="flex items-center gap-4">
            <Image src="/Ellipse-2.png" alt="Option" width={14} height={14} />
            <div className="text-base text-[#9f9f9f]">Cash On Delivery</div>
          </div>
        </div>

        {/* Privacy Notice */}
        <p className="text-base font-light mb-6">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>

        {/* Place Order Button */}
        <button className="w-full max-w-[318px] h-16 mx-auto block bg-white border border-black rounded-[15px] text-xl hover:bg-gray-50 transition-colors">
          Place order
        </button>
      </div>
    </div>
  );
};

export default CheckOutSection;
