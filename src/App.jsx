import React, { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Banner from "./navbar/Banner";
import heroImage from "./assets/Home.png"; 
import Analytics from './assets/Analytics.png';
import Offline from './assets/Offline.png';
import Shared from './assets/Shared.png';
import Budget from './assets/Budget.png';
import Footer from './navbar/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link as ScrollLink } from 'react-scroll';
import { CreditCard, Users, BarChart2 } from "lucide-react";
import ReviewSection from './components/ReviewSection.jsx'
export default function App() {
  const [message, setMessage] = useState("Welcome to MoneygeIt!");

  useEffect(() => {
    const messages = [
      "Be a Beta Tester!",
      "Every Peso Finds Its Purpose.",
      "Early Access Awaits.",
      "Start Tracking Smarter.",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Top Banner */}
      <div className="fixed top-0 left-0 w-full z-40">
        <Banner message={message} />
      </div>

      {/* Navigation */}
      <div className="fixed top-14 left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="pt-10">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#D6DEE3] px-6 md:px-16"
        >
        {/* Left: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="MoneygeIt Dashboard Preview"
            className="w-full md:w-[110%] max-w-5xl rounded-[2rem] transform transition-all duration-500"
          />
        </div>


          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#145C84] leading-tight md:leading-[1.1]">
              Welcome to <span className="text-[#F7F2B3]">MoneygeIt</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-light max-w-md md:max-w-xl mx-auto md:mx-0">
              The smarter way to <span className="font-semibold text-[#145C84]">track your expenses</span>, 
              understand your spending, and achieve your financial goals effortlessly.
            </p>
            <div className="pt-4">
              <ScrollLink
                to="features"
                smooth={true}
                duration={800}
                className="inline-block bg-[#89C3E6] text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-[#145C84] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Explore Features
              </ScrollLink>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="min-h-screen bg-gradient-to-b from-white to-[#EDEDEE] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        >
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#145C84] leading-snug">
              Experience the Power of{" "}
              <span className="text-[#F7F2B3] bg-[#145C84] px-3 py-1 rounded-2xl">
                MoneygeIt
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-2 md:mt-4 font-light">
              Manage your money smarter — with clean visuals, real-time sync, and effortless tracking.
            </p>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="max-w-4xl w-full"
          >
            {/* Budget Overview */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center px-4 space-y-6">
                <img
                  src={Budget}
                  alt="Budget Overview"
                  className="w-full md:w-[90%] max-w-4xl rounded-3xl"
                />
                <h3 className="text-3xl md:text-4xl font-bold text-[#145C84]">Budget Overview</h3>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  Gain a clear view of all your accounts and track spending against your budgets. Make smarter financial decisions with instant insights at a glance.
                </p>
              </div>
            </SwiperSlide>

            {/* Shared Tracker */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center px-4 space-y-6">
                <img
                  src={Shared}
                  alt="Shared Tracker"
                  className="w-full md:w-[90%] max-w-4xl rounded-3xl"
                />
                <h3 className="text-3xl md:text-4xl font-bold text-[#145C84]">Shared Tracker</h3>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  Collaborate with friends, family, or teammates on shared expenses. Everyone stays updated in real time — no more confusion.
                </p>
              </div>
            </SwiperSlide>

            {/* Analytics */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center px-4 space-y-6">
                <img
                  src={Analytics}
                  alt="Analytics"
                  className="w-full md:w-[90%] max-w-4xl rounded-3xl"
                />
                <h3 className="text-3xl md:text-4xl font-bold text-[#145C84]">Insightful Analytics</h3>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  Understand your habits with beautiful charts, category breakdowns, and monthly comparisons that make money management visual.
                </p>
              </div>
            </SwiperSlide>

            {/* Offline */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center px-4 space-y-6">
                <img
                  src={Offline}
                  alt="Secure & Offline"
                  className="w-full md:w-[90%] max-w-4xl rounded-3xl"
                />
                <h3 className="text-3xl md:text-4xl font-bold text-[#145C84]">Secure & Offline-Ready</h3>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  Your data is safe and backed up with Firebase. Works perfectly even offline — syncing automatically when you're back online.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>


          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#145C84]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7F2B3]/20 rounded-full blur-3xl -z-10"></div>
        </section>

{/* About Section */}
<section
  id="about"
  className="min-h-screen bg-gradient-to-b from-white to-[#EDEDEE] flex flex-col items-center justify-center px-6 py-16"
>
  <div className="max-w-4xl w-full text-center space-y-12">
    
    {/* Section Header */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#145C84] leading-tight">
        About <span className="text-[#F7F2B3]">MoneygeIt</span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        MoneygeIt is designed for real people who want real control over their finances. 
        Track your spending, set smart budgets, and make better financial decisions effortlessly.
      </p>
    </div>

    {/* Features Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-3">
        <CreditCard className="w-12 h-12 text-[#145C84]" />
        <h3 className="text-lg font-semibold text-[#145C84]">Track Expenses</h3>
        <p className="text-gray-700 text-sm text-center">
          Keep a detailed record of all your spending and understand your habits.
        </p>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-3">
        <Users className="w-12 h-12 text-[#145C84]" />
        <h3 className="text-lg font-semibold text-[#145C84]">Shared Tracker</h3>
        <p className="text-gray-700 text-sm text-center">
          Collaborate with family or teammates to stay updated on shared expenses.
        </p>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-3">
        <BarChart2 className="w-12 h-12 text-[#145C84]" />
        <h3 className="text-lg font-semibold text-[#145C84]">Analytics & Insights</h3>
        <p className="text-gray-700 text-sm text-center">
          Visualize your spending with charts, categories, and monthly summaries.
        </p>
      </div>
    </div>

    {/* Mission / Why Choose Us */}
    <div className="mt-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-[#145C84] mb-3">Why Choose MoneygeIt?</h3>
      <p className="text-gray-600 text-base md:text-lg">
        Our mission is to make money management simple, clear, and actionable. MoneygeIt empowers you to take control of your finances, save smarter, and make decisions that matter — all in one easy-to-use platform.
      </p>
    </div>
  </div>
</section>

<ReviewSection/>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
