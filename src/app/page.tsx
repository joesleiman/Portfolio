import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Roles from "./components/Roles/Roles";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Roles />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
