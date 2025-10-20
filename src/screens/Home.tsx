import ArrivalSection from "../components/ArrivalSection";
import CompaniesLogo from "../components/ComponiesLogo";
import DressStyleComponent from "../components/DressStyleComponent";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import TopSelling from "../components/TopSelling";

const Home = () => {
  return (
    <div>
      {/* NavBar */}

      <NavBar />
      <Hero />
      <CompaniesLogo />
      <ArrivalSection />
      <TopSelling />
      <div className="lg:pl-50 lg:pr-50 md:pl-30 md:pr-30 sm:pr-30 sm:pl-30 max-[640px]:pr-12 max-[640px]:pl-12 ">
        <DressStyleComponent />
      </div>
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Home;
