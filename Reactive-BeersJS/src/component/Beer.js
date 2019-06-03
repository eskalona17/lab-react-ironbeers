import React from 'react'
import { Link } from 'react-router-dom'

const Beer = ({beer,index}) => {
  return(
      <Link className="row align-items-center ml-auto mt-4" style={{ textDecoration: 'none' }} key={index} to={`/beers/${beer._id}`}>
        <img className="col-sm" style={{'width':68, 'height': 100}} src={beer['image_url']} alt=""/>
        <div className="col d-flex flex-column align-items-start">
          <h3 className="text-dark">{beer.name}</h3>
          <p className='text-secondary'>{beer.tagline}</p>
          <p className='text-dark small'><b>Created by</b> {beer['contributed_by'].split('<')[0]}</p>
        </div>
      </Link>

  )
}

export default Beer