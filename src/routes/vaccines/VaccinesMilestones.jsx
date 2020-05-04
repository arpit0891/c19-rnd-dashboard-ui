import React, { useState } from 'react'
import Tile from 'components/Tile/Tile'
import Graph from 'components/Graph/Graph'
import Details from 'sections/Details/Details'
import SortDropdown from 'components/SortDropdown/SortDropdown'
import VolunteerLocations from 'sections/VolunteerLocations/VolunteerLocations'

function VaccinesMilestones() {
  const getTrialData = () => [
    {
      country: 'Italy',
      number: Math.random(),
    },
    {
      country: 'France',
      number: Math.random(),
    },
    {
      country: 'Romania',
      number: Math.random(),
    },
  ]
  const [trialData, setTrialData] = useState(getTrialData())
  const updatedDate = () => {
    const date = new Date()
    return (
      'Last updated at (' +
      date.getMonth() +
      '/' +
      1 +
      date.getDay() +
      '/' +
      date.getFullYear() +
      ')'
    )
  }

  return (
    <div className='content'>
      <div style={{ flex: '1' }}>
        <Tile header='Total Vaccine Products'>23</Tile>
        <Tile header='Vaccine Trials by Country'>
          {trialData.map((trial, i) => {
            return (
              <div className='trialContainer' key={i}>
                <div>{trial.number}</div>
                <div className='trialCountry'>{trial.country}</div>
              </div>
            )
          })}
        </Tile>
        <Tile header={updatedDate()} />
      </div>
      <Tile header='Vaccine Progress'>
        <div className='actionItems'>
          <span className='sortTitle'>Sort: </span>
          <SortDropdown
            onChange={selection => {
              // TODO: hook this up to real data when we have it
              // For now, this just regenerates the data whenever the sort is changed
              console.log('Selected to sort by: ' + selection.label)
              setTrialData(getTrialData())
            }}
          />
        </div>
        <Graph />
      </Tile>
      <div className='rightColumn'>
        <Tile header='Vaccine Details'>
          <Details />
        </Tile>
        <Tile header='Vaccine Volunteer Locations'>
          <VolunteerLocations />
        </Tile>
      </div>
    </div>
  )
}

export default VaccinesMilestones
