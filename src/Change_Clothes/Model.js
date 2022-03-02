import React, { useEffect } from 'react'
import { animated, useTransition } from 'react-spring'



export default function Model({ store }) {



    const arrayModel = [
        { id: "hairstyle", style: { width: 1000, height: 1000, background: `url(${store.hairstyle.imgSrc_png})`, position: 'absolute', top: '-75%', right: '-57%', transform: 'scale(0.15)', zIndex: 4, } },
        { id: 'necklace', style: { width: 500, height: 1000, background: `url(${store.necklace.imgSrc_png})`, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 } },
        { id: "bikinitop", style: { width: 500, height: 500, background: `url(${store.bikinitop.imgSrc_png})`, position: 'absolute', top: '-9%', left: '-5%', zIndex: 3, transform: 'scale(0.5)' } },
        { id: 'bikinibottom', style: { width: 500, height: 1000, background: `url(${store.bikinibottom.imgSrc_png})`, position: 'absolute', top: '-30%', left: '-5%', zIndex: 2, transform: 'scale(0.5)' } },
        { id: 'handbag', style: { width: 500, height: 1000, background: `url(${store.handbag.imgSrc_png})`, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 } },
        { id: 'feet', style: { width: 500, height: 1000, background: `url(${store.feet.imgSrc_png})`, position: 'absolute', bottom: '-37%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 1 } },
        { id: 'background', style: { backgroundImage: `url(${store.background.imgSrc_png})` } }
    ]


    // const checkUseEffect = useEffect(() => {

    //     apiModel.start({
    //         opacity: 1,
    //         from: { opacity: 0.5, },
    //         config: { duration: 1000, },
    //     })
    // }, [store])
    const propsTransition = useTransition(arrayModel, {
        from: {  display: 'hidden', },
        enter: {  display: 'show' },
        leave: {display: 'hidden' },
        delay: 200,
        config: { duration: 500 },

    })


    return (


        <div className="col-md-4">
            {console.log('render')}
            <div className="contain">
                <div className="body" />
                <div className="model" />
                {propsTransition((props, item, key, index) => {
                    return <animated.div key={key} className={item.id} style={{ ...item.style, ...props }}></animated.div>
                })}

            </div>
        </div>

    )
}
