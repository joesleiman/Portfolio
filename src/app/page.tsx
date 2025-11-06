import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Roles from "./components/Roles/Roles";
import MyRecentWork from "./components/MyRecentWork/MyRecentWork";
import Companies from "./components/Companies/Companies";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Roles />
        <MyRecentWork />
        <Companies />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
