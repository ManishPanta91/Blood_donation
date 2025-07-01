import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt, // ✅ now imported correctly
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white text-gray-800 py-10 px-6 md:px-20" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions about blood donation or want to partner with LifeDrop? Reach out—we’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-5 bg-red-50 p-6 rounded-xl shadow">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea placeholder="Your message..." rows="4" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
            <p className="text-sm text-gray-600 mt-2">
              Your details are secure with us. <a href="/privacy-policy" className="text-red-600 underline">Read our Privacy Policy</a>.
            </p>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-red-600 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>info@lifedrop.org</p>
                <p className="text-sm text-gray-500">For inquiries, partnerships & emergencies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-red-600 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>24/7 Blood Helpline: +1-800-123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>LifeDrop HQ, 123 Donation Ave, Kathmandu, Nepal</p>
                <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 underline">View on Map</a>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Operating Hours</p>
              <p>Monday – Friday: 9 AM – 5 PM</p>
              <p className="text-sm text-red-500">Emergency support available 24/7</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Follow Us</p>
              <div className="flex gap-4 text-2xl text-red-600">
                <a href="https://x.com/LifeDropOfficial" target="_blank"><FaTwitter /></a>
                <a href="https://facebook.com/LifeDrop" target="_blank"><FaFacebook /></a>
                <a href="https://instagram.com/LifeDrop" target="_blank"><FaInstagram /></a>
              </div>
            </div>
            <div>
              <a href="/faq" className="text-red-600 underline text-sm">Visit our FAQ</a> to get answers to common questions.
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-red-100 text-center py-6 mt-10 rounded-xl shadow">
          <p className="text-xl font-semibold text-red-700">Join the LifeDrop community—donate blood today!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
