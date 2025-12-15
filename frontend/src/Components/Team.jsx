import { data } from '../restApi.json'

const Team = () => {
  return (
    <section className='team' id='team'>
        <div className='container'>
            <div className='heading_section'>
                <h1 className='heading'>OUR TEAM</h1>
                <p>Our restaurant team is made up of passionate chefs, friendly servers, and dedicated staff who work together to create a welcoming experience.</p>
            </div>
            <div className='team_container'>
                {
                    data[0].team.map(element=>{
                        return(
                            <div className='card' key={element.id}>
                                <img src={element.image}></img>
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Team