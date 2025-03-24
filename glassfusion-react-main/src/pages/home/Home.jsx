import Project from './Project'
import Hero from '../../components/Hero'
import CompanyVideo from '../../components/CompanyVideo'
import FAQ from '../../components/FAQ'
import CTASection from '../../components/CTA'
import Divider from '../../components/Divider'
// import ProjectGallery from '../../components/projectGallery'





const Home = () => {
  return (
   <>
    <Hero />
    <Project/>
    <Divider/>
    {/* <ProjectGallery/> */}
    <CompanyVideo/>
    <Divider/>
    <CTASection/>
    <FAQ/>
    
    
   
   
   
   
   </>
  )
}

export default Home