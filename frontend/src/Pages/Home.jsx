import About from '../Components/About'
import HeroSection from '../Components/HeroSection'
import Menu from '../Components/Menu'
import Qualities from '../Components/Qualities'
import Reservation from '../Components/Reservation'
import Team from '../Components/Team'
import WhoAreWe from '../Components/WhoAreWe'

const Home = () => {
  return (
   <>
    <HeroSection />
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
   </>
  )
}

export default Home