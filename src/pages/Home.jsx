import  { Theme } from '../Components/Theme';
import {StarBackground} from '../Components/StarBackground';
import { Navbar } from '../Components/Navbar';
import { HeroSection } from '../Components/HeroSection';
import { AboutMe } from '../Components/AboutMe'
import { Skills } from '../Components/Skills'
import { Projects } from '../Components/Projects'
import { Contact } from  '../Components/Contact';
import { Footer } from '../Components/Footer';

export const Home = () => {
     return (
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
               {
                    // Theme Toggle
                    <Theme />
               }
               {
                    // Background Effect
                    <StarBackground />
               }
               {
                    // Navbar
                   < Navbar/>
               }
               {
                    // Main Content
                    <main>
                        <HeroSection />  
                        <AboutMe/>
                        <Skills/>
                        <Projects/>
                          <Contact/>
                    </main>
               }
               {
                    // Footer
                    <Footer/>
               }
          </div>
     )
}