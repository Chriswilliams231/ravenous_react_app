import React from 'react';
import './Business.css'



export default class Business extends React.Component {


    render() {
        return (
            <div className="Business card">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt='' />
                </div>
                <h2 className='business-name'>{this.props.business.name}</h2>
                <div className='card-content'>
                    <div className="Business-information content">
                        <div className="Business-address">
                            <p>{this.props.business.address}</p>
                            <p>{this.props.business.city}</p>
                            <p>{this.props.business.state} {this.props.business.zipCode}</p>
                        </div>
                        <div className="Business-reviews">
                            <h5>{this.props.business.category}</h5>
                            <h3 className="rating">{this.props.business.rating}</h3>
                            <p>{this.props.business.reviewCount} reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}