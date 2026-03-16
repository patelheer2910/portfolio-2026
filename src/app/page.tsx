import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Experience from "@/components/Experience";
import Projects   from "@/components/Projects";
import Skills     from "@/components/Skills";
import Education  from "@/components/Education";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed ambient orbs — purely decorative */}
      <div className="orb" style={{ width: 500, height: 500, top: "-80px", left: "-100px", background: "rgba(99,102,241,0.1)" }} />
      <div className="orb" style={{ width: 400, height: 400, top: "40%", right: "-80px", background: "rgba(168,85,247,0.07)" }} />
      <div className="orb" style={{ width: 350, height: 350, bottom: "10%", left: "20%", background: "rgba(99,102,241,0.06)" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
