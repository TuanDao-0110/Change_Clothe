import React, { useReducer } from 'react'
export const storeContext = React.createContext()

const initialState = {
    hairstyle: { imgSrc_png: '../assets/images/hairstyle/hairstyle3.png', type: 'hairstyle' },
    necklace: { imgSrc_png: "../assets/images/necklaces/necklace3.png", type: 'necklaces' },
    bikinitop: { imgSrc_png: '../assets/images/clothes/topcloth5.png', type: 'topclothes' },
    bikinibottom: { imgSrc_png: "../assets/images/clothes/botcloth4.png", type: 'botclothes' },
    handbag: { imgSrc_png: '../assets/images/handbags/handbag2.png', type: 'handbags' },
    feet: { imgSrc_png: '../assets/images/shoes/shoes2.png', type: 'shoes' },
    background: { imgSrc_png: '../assets/images/background/background1.jpg', type: 'background' }


}

let Reducer = (state, action) => {
    switch (action.type) {
        case "Change": {
            for (let stateItem in state) {
              
                if (state[stateItem].type === action.item.type) {
                    state[stateItem].imgSrc_png = action.item.imgSrc_png
                    return { ...state }
                }
            }
            return { ...state }
        }
        default:
            return state
    }
}




export default function Provider(props) {
    const [storeState, dispatch] = useReducer(Reducer, initialState)

    return (
        <storeContext.Provider value={[storeState, dispatch]} >
            {props.children}
        </storeContext.Provider >
    )
}
