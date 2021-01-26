
import React, { Component } from 'react'
import SimpleImageSlider from "react-simple-image-slider"

class ProjectImageSlider extends Component {
    
    // map = `https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=15&size=640x640&key=${process.env.REACT_APP_GOOGLE_KEY}`
    
    map = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.project.lat},${this.props.project.lng}&zoom=15&size=750x500&maptype=roadmap&markers=color:orange%7Clabel:G%7C${this.props.project.lat},${this.props.project.lng}&key=${process.env.REACT_APP_GOOGLE_KEY}`

    images = [
            { url: this.props.project.img1},
            { url: this.props.project.img2},
            // { url: "https://9to5google.com/wp-content/uploads/sites/4/2018/11/google-nyc-st-johns-terminal-1.jpg?quality=82&strip=all" },
            // { url: "https://wallsheaven.com/photos/B60844793/400/modern-educational-office-building-on-campus.jpg" },
            // { url: `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_KEY}&q=${this.props.project.location}&zoom=12` }
            // { url: <iframe className="map"  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_KEY}&q=${this.props.project.location}&zoom=8`}> </iframe>}
            { url: this.map }
            // { url: "images/7.jpg" },
        ];
    
    render() {
        return (
            <div>
                <SimpleImageSlider
                    width={812}
                    height={500}
                    images={this.images}
                    showNavs={true}
                    showBullets={true}
                    useGPURender={true}
                    slideDuration={1.5}
                />
            </div>
        )
    }
}

export default ProjectImageSlider
