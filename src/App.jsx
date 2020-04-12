import React, { useState } from 'react'
import './App.css'
import Tile from './Tile/Tile'
import Graph from './Graph/Graph'
import Details from './Details/Details'
import Filter from './Filter/Filter'
import FilterList from '@material-ui/icons/FilterList'
import SortDropdown from './SortDropdown/SortDropdown'
import VolunteerLocations from './VolunteerLocations/VolunteerLocations'
import Legend from './Legend/Legend'
import { sadBlue, magenta, yellow, tourquese, green } from './constants.js'

const stages = [
  { label: 'Stage 1', color: sadBlue },
  { label: 'Stage 2', color: magenta },
  { label: 'Stage 3', color: yellow },
  { label: 'Stage 4', color: tourquese },
  { label: 'Stage 5', color: green },
]

function App() {
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
  const [showFilters, setShowFilters] = useState(false)
  const [filterItems, setFilterItems] = useState(
    [...stages].map(stage => ({ ...stage, selected: false }))
  )

  const toggleFilter = label => {
    const modifiedFilters = filterItems.map(item => ({
      ...item,
      selected: item.label === label ? !item.selected : item.selected,
    }))
    setFilterItems(modifiedFilters)
  }

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
    <div className='App'>
      <div className='headerBanner'>
        Coronavirus (COVID-19) Research and Development Dashboard
      </div>
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
            <div className='filtersContainer'>
              <div
                className='filterTitle'
                onClick={event => setShowFilters(!showFilters, event)}
              >
                <FilterList /> Filters
              </div>
              {showFilters && (
                <Filter
                  items={filterItems}
                  heading='Stages'
                  onFilterClick={toggleFilter}
                />
              )}
            </div>
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
          <Legend items={stages} />
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
    </div>
  )
}

export default App
