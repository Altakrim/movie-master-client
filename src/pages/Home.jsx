import React from 'react';
import HeroSection from './homePages/HeroSection';
import StatsSection from './homePages/StatsSection';
import TopRatedSection from './homePages/TopRatedSection';
import RecentMoviesSection from './homePages/RecentMoviesSection';
import GenreSection from './homePages/GenreSEction';
import AboutSection from './homePages/AboutSection';
import Loader from '../components/Loader';

const Home = () => {
    return (
       <>
         <HeroSection />
       <StatsSection />
       <TopRatedSection />
       <RecentMoviesSection />
       <GenreSection />
       <AboutSection />
       </>
    );
};

export default Home;