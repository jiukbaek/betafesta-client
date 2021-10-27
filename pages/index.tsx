import Layout from "components/layout/Layout";
import {
  SectionHeader,
  Section2,
  Section3,
  Section4,
  Section5,
  Navigation,
} from "components/pages/main";

const Home = () => {
  return (
    <Layout>
      <SectionHeader />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Navigation />
    </Layout>
  );
};

export default Home;
