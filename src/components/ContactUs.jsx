import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data to backend or API for handling the email
    console.log("Form submitted!");
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded" required />
            <input type="text" placeholder="Last Name" className="p-2 border rounded" required />
          </div>

          {/* Phone and Email Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
            <select className="border p-2 rounded-l w-24" name="country_code">
                <option value=""></option>
                <option value="+1">🇺🇸 +1 (US)</option>
                <option value="+44">🇬🇧 +44 (UK)</option>
                <option value="+234">🇳🇬 +234 (Nigeria)</option>
                <option value="+91">🇮🇳 +91 (India)</option>
                <option value="+61">🇦🇺 +61 (Australia)</option>
                <option value="+81">🇯🇵 +81 (Japan)</option>
                <option value="+49">🇩🇪 +49 (Germany)</option>
                <option value="+33">🇫🇷 +33 (France)</option>
                <option value="+55">🇧🇷 +55 (Brazil)</option>
                <option value="+39">🇮🇹 +39 (Italy)</option>
                <option value="+86">🇨🇳 +86 (China)</option>
                <option value="+7">🇷🇺 +7 (Russia)</option>
                <option value="+27">🇿🇦 +27 (South Africa)</option>
                <option value="+971">🇦🇪 +971 (UAE)</option>
                <option value="+82">🇰🇷 +82 (South Korea)</option>
      </select>
              <input type="tel" placeholder="Phone Number" className="p-2 border rounded-r w-full" required />
            </div>
            <input type="email" placeholder="Email" className="p-2 border rounded w-full" required />
          </div>

          {/* Address Field */}
          <input type="text" placeholder="Address" className="p-2 border rounded mb-4 w-full" />

          {/* Checkboxes */}
          <fieldset className="mb-4">
            <legend className="font-semibold mb-2">What would you like to enquire about?</legend>
            <div className="flex flex-col space-y-2">
              <label>
                <input type="checkbox" className="mr-2" /> Product Information
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Service Information
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Technical Support
              </label>
            </div>
          </fieldset>

          {/* Contact Request Dropdown */}
          <label className="block mb-4">
            <span className="font-semibold">My contact request is for a</span>
            <select className="p-2 border rounded w-full">
                <option value="">Please Select</option>
              <option value="quote">Quote Request</option>
              <option value="general">General Enquiry</option>
              <option value="warranty">Warranty Enquiry</option>
            </select>
          </label>

          {/* Additional Information */}
          <textarea
            placeholder="Additional Information"
            className="p-2 border rounded w-full mb-4"
            rows="4"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-blue-600 text-white p-3 rounded w-full"
          >
            Submit
          </button>
        </form>
        
        {/* Right Column: Contact Information */}
        <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">General Enquiries</h3>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
              <p className="text-gray-700">Email: general@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Technical Enquiries</h3>
              <p className="text-gray-700">Phone: (234) 567-8901</p>
              <p className="text-gray-700">Email: technical@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Sales Enquiries</h3>
              <p className="text-gray-700">Phone: (345) 678-9012</p>
              <p className="text-gray-700">Email: sales@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
