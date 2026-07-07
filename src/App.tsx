import Hero from "./components/Hero";
import "./App.css";
import Featured from "./components/homepage_components/featured_project";
import ExpGraph from "./components/homepage_components/experience_graph";
import MySkills from "./components/homepage_components/my_skills";
import WhatIDo from "./components/homepage_components/What_I_do";
import WorkHighlight from "./components/homepage_components/Work_Experience";
import Education from "./components/homepage_components/Education";
import QuickStats from "./components/homepage_components/Quick_Stats";
import FunFacts from "./components/homepage_components/Fun_Facts";

function App() {
  return (
    <section className="mx-auto max-w-350 px-2 pb-4  ">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2 mt-2 px-0.5 md:px-4 md:h-60">
        <Featured />
        <ExpGraph />
        <MySkills />
        <WhatIDo />
        <WorkHighlight />
        <Education />
        <QuickStats />
        <FunFacts />
      </div>
    </section>
  );
}

export default App;
