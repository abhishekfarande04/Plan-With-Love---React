


function Card({id,image,info, price, name}) {

    const description=`${info.substring(0,200)}....`


    return (
        <div className="Card">
            <img src={image} className="image" alt="Error"></img>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {description}
            </div>
        </div>
    )
}



export default Card; 