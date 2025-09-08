import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Latest from "@/components/Latest";
import Partiners from "@/components/Partiners";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Team from "@/components/Team";
import Donate from "@/components/Donate";

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Mission />
        <Programs />
        <Impact />
        <Latest />
        <Partiners />
        <Donate />
        {/* <Team /> */}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
