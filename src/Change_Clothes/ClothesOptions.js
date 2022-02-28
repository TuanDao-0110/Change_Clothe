import React from 'react'
import Clothes from './Clothes'
export default function ClothesOptions({ navPills, tabPanes, dispatch }) {
    const renderNavPills = () => {
        return navPills.map((item, index) => {
            return <li key={index} className="nav-item">
                <a className={index === 0 ? "nav-link active btn-default" : "nav-link  btn-default"} data-toggle="pill" href={`#${item.tabName}`}>{item.showName}</a>
            </li>
        })
    }
    let renderItem = (Tabtype) => {

        return tabPanes.map((item, index) => {

            if (item.type === Tabtype) {
                return <Clothes dispatch={dispatch} key={item.id} tabPanesItem={item}></Clothes>
            }
        })
    }
    let renderTabPanes = () => {
        return navPills.map((itemTab, indexTab) => {

            return <div key={indexTab} className={indexTab === 0 ? "tab-pane container active" : "tab-pane container fade"} id={itemTab.tabName}>
                <div className='container'>
                    <div className='row'>
                        {/* {itemTab.showName} */}
                        {renderItem(itemTab.type)}
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="col-md-8">
            <ul className="nav nav-pills">
                {renderNavPills()}
            </ul>
            <div className="well">
                <div className="tab-content">
                    {renderTabPanes()}
                </div>
            </div>
        </div>
    )
}
