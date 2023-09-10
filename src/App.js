import Home from "./pages/home/home";
import Layout from "./layout";
import Services from "./pages/services/services";
import Reviews from "./pages/reviews/reviews";
import Features from "./pages/features/features";
import Pricing from "./pages/pricing/pricing";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Layout>
      <Home />
      <Services />
      <Reviews />
      <Features />
      <Pricing />
      <Contact />
    </Layout>
  );
}

export default App;
