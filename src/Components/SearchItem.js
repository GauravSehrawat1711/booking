import React from 'react'
import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img
        src='https://static.toiimg.com/photo/51290195.cms'
        alt=''
        className='siImg'
        />
        <div className='siDesc'>
         <h1 className='siTitle'>Royal Candid Homes</h1>
         <span className='siDistance'>800m from North</span>
         <span className='siTaxi'>Free taxi</span>
         <span className='siSubtitle'>
            Studio Apartment with AC,Led and Room Services
         </span>
         <span className='siFeatures'>
            Entire studio 1 Bathroom double Bed
         </span>
         <span className='siCancellation'>Free cacellation</span>
         <span className='siCancel'>Lock now,Can cacel Later</span>
         

        </div>
        <div className='isDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>9.0</button>
            </div>
            <div className='siText'>
                <span className='siPrice'>
                    $120
                    </span>
                    <span className='textOp'>
                 Includes taxes and fees
                </span>
               <button className='siCheckAval'>See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem