import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class City extends Component {
    
    render() {
        return (
            <>
                <div className="city1">
                    <Link to={`/cities/${(this.props.city._id)}`}>
                        <div style={{backgroundImage:`url("${this.props.city.cityPic}")`}}> 
                            {<h5>{this.props.city.cityName}</h5>}
                        </div>
                    </Link>
                </div>
            </>
        )
    }
}
