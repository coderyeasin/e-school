import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Container from "../Container/Container";
import Layout from "../Layout/Layout";
import Section from "../Layout/Section";
import Features from "../Features/Features";
import Courses from "../Courses/Courses";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <Container className="bg-BannerBg h-auto">
        <Section className="max-w-330 h-full mx-auto flex flex-col gap-10">
          <Header />
          <HeroSection />
        </Section>
      </Container>
      <Container className="h-auto">
        <Section className="max-w-330 h-full mx-auto flex flex-col gap-10">
          <Features />
          <Courses />
          <Testimonial />
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
