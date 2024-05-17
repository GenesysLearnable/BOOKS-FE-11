import React from 'react'
import './Library.css'
import lib from '../../Images/lib.png'
import lib2 from '../../Images/lib2.png'
import lib3 from '../../Images/lib3.png'
import lib4 from '../../Images/lib4.png'
import filterbutton from '../../Images/Icons/filter-button.svg'

function Library() {
  return (
    <div>
      <h3>
  Library
  <button className="category-filter">
    <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
  </button>
</h3>
      <div className="library-row">
        <div className='library'>
        <img
    style={{
      width: '270px',
      height: '280px',
      boarderRaduis: '6px',
      boxShadow: '1px solid rgba(229, 230, 233, 1) ',
    }}
    src={lib}
    alt="b00k1-pic"
  />
   </div>

      
        <div className='library'>
        <img
    style={{
      width: '270px',
      height: '280px',
      boarderRaduis: '6px',
      boxShadow: '1px solid rgba(229, 230, 233, 1) ',
    }}
    src={lib2}
    alt="b00k1-pic"
  />
        </div>

        <div className='library'>
          <img
    style={{
      width: '270px',
      height: '280px',
      boarderRaduis: '6px',
      boxShadow: '1px solid rgba(229, 230, 233, 1) ',
    }}
    src={lib3}
    alt="b00k1-pic"
  /></div>

        <div className='library'>
        <img
    style={{
      width: '270px',
      height: '280px',
      boarderRaduis: '6px',
      boxShadow: '1px solid rgba(229, 230, 233, 1) ',
    }}
    src={lib4}
    alt="b00k1-pic"
  />
        </div>

 
  
  
  
</div>
    </div>
  )
}

export default Library
