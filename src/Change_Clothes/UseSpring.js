import React, { useEffect, useState } from 'react'
import { useTransition, config, animated } from 'react-spring'
export default function UseSpring() {
    let [arrItem, setArrayItem] = useState([
        { id: 1, title: 'Front-End', content: 'cyberLearn' },
        { id: 2, title: 'Back-End', content: 'cyberLearn' },
        { id: 3, title: 'Full-Stack', content: 'cyberLearn' },

    ])

    const propsUserTransition = useTransition(arrItem, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: { duration: 2000 }
    })

    return (
        propsUserTransition((props, item, key, index) => {
            return <animated.div style={props} key={key}>
                {console.log('render')}
                <div>
                    <h1>{item.title} </h1>
                    <button className='btn btn-danger' onClick={() => {

                        setArrayItem(prevstate => {
                            return [ ...arrItem.filter(n => n.id !== item.id)]
                        })

                    }}>x</button>
                </div>
            </animated.div >
        })
    )
}
