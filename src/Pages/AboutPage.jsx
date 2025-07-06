import React from "react";
import {
  HeartPulse,
  Users,
  ShieldCheck,
  TrendingUp,
  ThumbsUp,
  Target
} from "lucide-react";

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-br mt-20 bg-red-600  text-white min-h-screen p-6 md:p-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center  backdrop-blur-lg rounded-full w-20 h-20 mx-auto animate-pulse">
          <HeartPulse size={40} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">About LifeDrop</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          Connecting lives through blood. Every drop counts, every donor matters.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className=" bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-105 transition">
          <Users size={36} className="mx-auto mb-3 text-white" />
          <h3 className="text-xl font-semibold">10,000+ Donors</h3>
          <p className="text-white/80">Connected through LifeDrop</p>
        </div>
        <div className=" bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-105 transition">
          <TrendingUp size={36} className="mx-auto mb-3 text-white" />
          <h3 className="text-xl font-semibold">3 Seconds = 3 Lives</h3>
          <p className="text-white/80">Your donation can change the world</p>
        </div>
        <div className=" bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-105 transition">
          <ShieldCheck size={36} className="mx-auto mb-3 text-white" />
          <h3 className="text-xl font-semibold">Trusted & Certified</h3>
          <p className="text-white/80">Certified by national health orgs</p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto  bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-white/90">
          At LifeDrop, we aim to bridge the gap between donors and recipients by
          making blood donation easy, accessible, and trustworthy. We believe
          that every drop is a chance to save a life and build a healthier future.
        </p>
      </div>

      {/* Commitment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className=" bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl text-center hover:bg-opacity-20 transition">
          <ThumbsUp size={36} className="mx-auto mb-3 text-white" />
          <h3 className="text-xl font-semibold">Transparency</h3>
          <p className="text-white/80">We ensure data privacy and donation integrity.</p>
        </div>
        <div className=" bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl text-center hover:bg-opacity-20 transition">
          <Target size={36} className="mx-auto mb-3 text-white" />
          <h3 className="text-xl font-semibold">Impact Driven</h3>
          <p className="text-white/80">Our platform focuses on results and real change.</p>
        </div>
        <div className="bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl text-center hover:bg-opacity-20 transition">
          <ShieldCheck size={36} className="mx-auto mb-3 text-white" />
          <h3 className="text-xl font-semibold">Safety First</h3>
          <p className="text-white/80">We follow health standards and certified practices.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Join Our Life-Saving Mission</h2>
        <p className="text-white/90 mb-6">
          Be the reason someone lives today. One donation can save up to three lives.
        </p>
        <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-full hover:bg-red-100 transition">
          Become a Donor
        </button>
      </div>
    </section>
  );
};

export default AboutPage;
