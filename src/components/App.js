import React from 'react'
import ChannelsField from './ChannelsField'
import Button from '../containers/Button'
import TopNews from '../containers/TopNews'
import june1 from './images/june1.jpg'

let App = () => (
  <div  style={{  backgroundImage: "url(" + "https://images.pexels.com/photos/356054/pexels-photo-356054.jpeg?cs=srgb&dl=addiction-aid-bottle-356054.jpg&fm=jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} >
    <h1>The Health Policy Chapter</h1>  
    <h2>Extemporaneous Healthcare Observations </h2> 
    <h3> Blog by June Lynn Glover</h3>
    <p>Healthcare Policy Analyst</p>
    <img src={require('./images/june1.jpg')} />
    <Button />
    <ChannelsField />
    <TopNews />
  </div>

)

export default App;





