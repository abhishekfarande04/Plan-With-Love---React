import { useState } from "react";



function Card({id,image,info, price, name,removeTour}) {
    const[readmore,setReadmore] = useState(false);
    const description=`${info.substring(0,200)}....`

    function readmoreHandler() {
        setReadmore(!readmore);
    }


    

    return (
        <div className="Card">
            <img src={image} className="image" alt="Error"></img>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {description} 
                <span onClick={readmoreHandler} className="read-more">
                    {readmore ? `show less`: `read more`};
                </span>
            </div>
            

            <button onClick={()=> removeTour(id)} className="btn-red">
                Not interested
            </button>
        </div>
    )
}



export default Card; 