import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./News.css";


function News() {
 
    let arr = [
        {
            id: 1,
            text: 'World Children"s Day',
            time: '01.06.2023',
            img: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTYPkD3oh5BQGFs4-AU9m2_QGQ6IiFsJE-lWkx456cpe-fvGWOkqjNaUEayr3pR0Z4m'
        },
        {
            id: 2,
            text: 'Get this for 20 000dr',
            time: '01.06.2023',
            img: 'https://www.jlobeauty.com/dw/image/v2/BHCW_PRD/on/demandware.static/-/Sites-JL-master/default/dwf4943ebb/images/pdp/dailly_glow_essentials/pdp_dailyglow_hero.jpg?sw=1000&sh=1160&sm=fit'
        },
        {
            id: 3,
            text: '90s 00s Vintage Clothing',
            time: '01.06.2023',
            img: 'https://i.pinimg.com/736x/5e/31/8e/5e318e1a603192650b6f3ebb9548f1a9.jpg'
        },
        {
            id: 4,
            text: 'Latest News',
            time: '01.06.2023',
            img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16928090/2022/2/4/3974fdfe-e3ca-4b31-9963-905f54ebd3a21643969263404GilletteMach3ShavingRazorwithDuracomfortBladesShavingBrushRa1.jpg'
        }
    ]
    return (
        <div>

            <h1 className="new-title"> News</h1>
            <div className="news">
                {
                    arr.map((item) => (


                        <div key={item._id} className="card">

                                <img src={item.img} className='news-img' alt="" />
                                <p>{item.time} </p>
                                <h2 className='news-title'>{item.text}</h2>
                        


                            {/* <button className='show-moreBtn'>Show More<Icon.ArrowRight className='arrowRight-icon' /></button> */}


                        </div>
                    ))
                }



            </div>
        </div>
    )
}

export default News;