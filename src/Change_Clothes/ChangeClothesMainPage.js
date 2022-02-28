import React, { useContext } from 'react'
import Clothes from './Clothes'
import ClothesOptions from './ClothesOptions'
import Data from './Data.json'
import Header from './Header'
import Model from './Model'
import { storeContext } from './Provider'
export default function ChangeClothesMainPage() {
    const [store, dispatch] = useContext(storeContext)

    let { navPills, tabPanes } = { ...Data }


    return (
        <div className='container-fluid'>
            <Header></Header>
            <div className="row">
                <ClothesOptions navPills={navPills} tabPanes={tabPanes} dispatch={dispatch}></ClothesOptions>

                <Model store={store} ></Model>
            </div>

        </div>

    )
}
