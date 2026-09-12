import Header from "./components/Header";
import Banner from "./sections/Banner";
import TechnologySection from "./sections/TechnologySection";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <TechnologySection />
      </main>

      <Footer />
    </>
  );
}

export default App;