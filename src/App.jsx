import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Blueprint from "./components/Blueprint.jsx";
import Platforms from "./components/Platforms.jsx";
import ShoppableFeed from "./components/ShoppableFeed.jsx";
import RFQFlow from "./components/RFQFlow.jsx";
import AffiliateSelection from "./components/AffiliateSelection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ShoppableFeed />
      <Blueprint />
      <Platforms />
      <RFQFlow />
      <AffiliateSelection />
      <Footer />
    </div>
  );
}

export default App;
