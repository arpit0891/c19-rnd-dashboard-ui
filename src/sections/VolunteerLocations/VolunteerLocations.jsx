import React from 'react'
import './VolunteerLocations.css'
import Tile from '../../components/Tile/Tile'

const VolunteerLocations = () => {
  const volunteerData = [
    {
      country: 'Brasil',
      state: 'Rio',
      city: 'Janeiro',
    },
    {
      country: 'Country',
      state: 'State',
      city: 'City',
    },
    {
      country: 'nestor',
      state: 'State',
      city: 'City',
    },
    {
      country: 'Country',
      state: 'State',
      city: 'City',
    },
  ]
  return (
    <Tile header='Vaccine Volunteer Locations'>
      <div className='volunteersWrapper'>
        {volunteerData.map((volunteer, i) => {
          return (
            <div className='volunteersContainer' key={i}>
              <div>{volunteer.country}</div>
              <div className='volunteersDivider'>-</div>
              <div>{volunteer.state}</div>
              <div className='volunteersDivider'>-</div>
              <div>{volunteer.city}</div>
            </div>
          )
        })}
        {/* replace with global button component */}
        <button className='learnMoreButton'>LEARN MORE</button>
      </div>
    </Tile>
  )
}

export default VolunteerLocations
