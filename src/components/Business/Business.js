import React from 'react';
import './Business.css'



export default class Business extends React.Component {


    render() {
        const {
            imageSrc,
            name,
            address,
            city,
            state,
            zipCode,
            category,
            rating,
            reviewCount
        } = this.props.business
        return (
            <div className="Business card is-mobile">
                <div className="image-container">
                    <img src={imageSrc} alt='' />
                </div>
                <h2 className='business-name'>{name}</h2>
                <div className='card-content'>
                    <div className="Business-information content">
                        <div className="Business-address">
                            <p>{address}</p>
                            <p>{city}</p>
                            <p>{state} {zipCode}</p>
                        </div>
                        <div className="Business-reviews">
                            <h5>{category}</h5>
                            <h3 className="rating">{rating}</h3>
                            <p>{reviewCount} reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}