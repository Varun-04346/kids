import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CategoryCards from './components/CategoryCards/CategoryCards';
import StoryCards from './components/StoryCards/StoryCards';
import AgeGroups from './components/AgeGroups/AgeGroups';
import ReadingBenefits from './components/ReadingBenefits/ReadingBenefits';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CategoryCards />
        <StoryCards />
        <AgeGroups />
        <ReadingBenefits />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
