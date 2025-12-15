import { data } from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className='container'>
            <div className='heading_section'>
                <h1 className='heading'>POPULAR DISHES</h1>
                <p>Our menu features a wide variety of carefully prepared dishes made with fresh ingredients and authentic flavors. From starters to main courses and desserts, each item is crafted to suit different tastes, offering both classic favorites and modern culinary choices.</p>
            </div>
            <div className='dishes_container'>
                {
                    data[0].dishes.map(element=>{
                        return(
                            <div className='card' key={element.id}>
                                <img src={element.image} alt={element.title}></img>
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu