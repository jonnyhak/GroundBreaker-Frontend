
import React, { Component } from 'react'
import SimpleImageSlider from "react-simple-image-slider"

class ProjectImageSlider extends Component {
    
    images = [
            { url: "https://i.insider.com/59c3faae38d20d3c098b916c?width=1100&format=jpeg&auto=webp" },
            { url: "https://9to5google.com/wp-content/uploads/sites/4/2018/11/google-nyc-st-johns-terminal-2.jpg?quality=82&strip=all&w=1500" },
            { url: "https://9to5google.com/wp-content/uploads/sites/4/2018/11/google-nyc-st-johns-terminal-1.jpg?quality=82&strip=all" },
            { url: "https://wallsheaven.com/photos/B60844793/400/modern-educational-office-building-on-campus.jpg" },
            { url: "" }
            // { url: "images/6.jpg" },
            // { url: "images/7.jpg" },
        ];
    
    render() {
        return (
            <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
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
