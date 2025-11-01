import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import MyRecentWork from "./components/MyRecentWork/MyRecentWork";
import Roles from "./components/Roles/Roles";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Roles />
        <MyRecentWork />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
