'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium text-black font-poppins">Get In Touch With Us</h1>
        <p className="text-sm text-gray-600 mt-2 font-poppins">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-12">
        {/* Contact Info */}
        <div className="w-full max-w-md mx-auto p-6 bg-white font-poppins">
          {/* Address Section */}
          <div className="flex items-start mb-8">
            <div className="w-6 h-6 mt-1 relative">
              <Image
                src="/Location.png"
                alt="Location icon"
                width={22}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-black mb-1">Address</h3>
              <p className="text-sm text-black max-w-xs">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-start mb-8">
            <div className="w-6 h-6 mt-1 relative">
              <Image
                src="/Phone.png"
                alt="Phone icon"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-black mb-1">Phone</h3>
              <p className="text-sm text-black">
                Mobile: +(84) 546-6789<br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time Section */}
          <div className="flex items-start">
            <div className="w-6 h-6 mt-1 relative">
              <Image
                src="/Clock.png"
                alt="Clock icon"
                width={23}
                height={23}
                className="object-contain"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-black mb-1">Working Time</h3>
              <p className="text-sm text-black">
                Monday-Friday: 9:00 - 22:00<br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-[531px] mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className="block text-black font-medium text-base font-['Poppins']"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
                className="w-full h-[75px] rounded-[10px] border border-gray-300 px-4 text-gray-600 placeholder-gray-500 font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-black font-medium text-base font-['Poppins']"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Abc@def.com"
                className="w-full h-[75px] rounded-[10px] border border-gray-300 px-4 text-gray-600 placeholder-gray-500 font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label 
                htmlFor="subject" 
                className="block text-black font-medium text-base font-['Poppins']"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is an optional"
                className="w-full h-[75px] rounded-[10px] border border-gray-300 px-4 text-gray-600 placeholder-gray-500 font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className="block text-black font-medium text-base font-['Poppins']"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! i'd like to ask about"
                className="w-full h-[120px] rounded-[10px] border border-gray-300 px-4 py-2 text-gray-600 placeholder-gray-500 font-['Poppins'] resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="w-[237px] h-[48px] rounded-[15px] bg-white border border-gray-300 text-black font-['Poppins'] hover:bg-gray-50 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
