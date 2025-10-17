import ArrivalSection from "../components/ArrivalSection";
import CompaniesLogo from "../components/ComponiesLogo";
import DressStyleComponent from "../components/DressStyleComponent";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopSelling from "../components/TopSelling";

const Home = () => {
  return (
    <div>
      {/* NavBar */}

      <NavBar />
      <Footer />
      <CompaniesLogo />
      <ArrivalSection />
      <TopSelling />
      <div className="lg:pl-50 lg:pr-50 md:pl-30 md:pr-30 sm:pr-30 sm:pl-30 max-[640px]:pr-12 max-[640px]:pl-12 ">
        <DressStyleComponent />
      </div>
      <FeedbackSection />
    </div>
  );
};

export default Home;
