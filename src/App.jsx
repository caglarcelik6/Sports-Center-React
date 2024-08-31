import { useState } from 'react'
import './App.css'
import HeroSection from './comps/Hero'
import WorkoutSection from './comps/Workout'
import OurClassesSection from './comps/OurClasses'
import BMICalculator from './comps/Bmi'
import PurchaseSection from './comps/Purchase'
import ClientSection from './comps/ClientSection'
import ContactUs from './comps/ContactUs'
import Footer from './Footer'

function App() {

  return (
    <>
    <HeroSection/>
    <WorkoutSection/>
    <OurClassesSection/>
    <BMICalculator/>
    <PurchaseSection/>
    <ClientSection/>
    <ContactUs/>
    <Footer/>
    
   
    </>
  )
}

export default App
