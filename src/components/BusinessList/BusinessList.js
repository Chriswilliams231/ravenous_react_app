import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

export default class BusinessList extends React.Component {

    render() {
        const { business } = this.props;
        return (
            <div className="BusinessList">
                {
                    business.map((business) => {
                        return <Business key={business.id} business={business} />;
                    })
                }
            </div>
        )

    }
}