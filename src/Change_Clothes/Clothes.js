import React, { useState } from 'react'

export default function Clothes({ tabPanesItem, dispatch }) {
    const [state, setState] = useState(true)
    const shortenInfor = () => {
        return state ? tabPanesItem.desc.slice(0, 10) + "..." : tabPanesItem.desc.slice(0, 30)
    }


    return (

        <div className="col-md-3">
            <div className="card text-center">
                <img src={tabPanesItem.imgSrc_jpg} alt={tabPanesItem.imgSrc_jpg} />
                <h4><b>{tabPanesItem.name}</b></h4>
                <p onClick={() => {
                    setState(!state)
                }} >{shortenInfor()} </p>
                <button className='btn btn-success' onClick={() => {
                    let action = {
                        type: "Change",
                        item: tabPanesItem
                    }
                    dispatch(action)
                }}>Try {tabPanesItem.type}</button>
            </div>
        </div>

    )
}
