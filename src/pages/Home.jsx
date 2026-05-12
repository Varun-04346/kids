import React from 'react';
import Hero from '../components/Hero/Hero';
import CategoryCards from '../components/CategoryCards/CategoryCards';
import StoryCards from '../components/StoryCards/StoryCards';
import AnimatedVideos from '../components/AnimatedVideos/AnimatedVideos';
import AgeGroups from '../components/AgeGroups/AgeGroups';
import ReadingBenefits from '../components/ReadingBenefits/ReadingBenefits';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCards />
      <StoryCards />
      <AnimatedVideos />
      <AgeGroups />
      <ReadingBenefits />
      <Newsletter />
    </>
  );
};

export default Home;
