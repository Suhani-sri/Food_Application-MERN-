import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <section className='about' id='about'>
    <div className='container'>
        <div className='banner'>
            <div className='top'>
                <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we're serious about is food.'</p>
            </div>
            <p className='mid'>Our restaurant offers fresh, delicious meals made with quality ingredients and authentic flavors. We focus on great taste, warm service, and a comfortable dining experience. Whether you visit with family or friends, we aim to make every meal enjoyable and satisfying.
            </p>
            <Link to= {"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight/>
            </span></Link>
        </div>
        <div className='banner'>
            <img src='about.png'></img>
        </div>
    </div>
   </section>
  )
}

export default About