import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
