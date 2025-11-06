import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Roles from "./components/Roles/Roles";
import MyRecentWork from "./components/MyRecentWork/MyRecentWork";
import Companies from "./components/Companies/Companies";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <Roles />
        <MyRecentWork />
        <Companies />
        <Testimonials />
      </main>
    </>
  );
}
