import BackendBanner from "../components/home/BackendBanner";
import Banner from "../components/home/Banner";
import FrontEndExplain from "../components/home/FrontEndExplain";
import ReduxExplain from "../components/home/ReduxExplain";
import StepOfBackend from "../components/home/StepOfBackend";
import Testimonials from "../components/home/Testimonials";
import WhyTemGen from "../components/home/WhyTemGen";

export default function Home() {
  return (
    <main>
      <Banner />
      <FrontEndExplain />
      <ReduxExplain />
      <BackendBanner />
      <StepOfBackend />
      <WhyTemGen />
      <Testimonials />
    </main>
  );
}
