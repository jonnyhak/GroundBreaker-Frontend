
import React, { useState } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import {BrowserRouter, Link, withRouter} from 'react-router-dom'
import mapStyles from './mapStyles'



export default function Map(props) {

    

    function Map() {
        // function onHover(e) {
        //     console.log(e)
        // }
        // function setBounce(marker) {
        //     marker.setAnimation(google.maps.Animation.BOUNCE)
        // }

        const [selectedProject, setSelectedProject] = useState(null)
        return (
            <GoogleMap defaultZoom={12} defaultCenter={{lat: 40.737422, lng: -73.933703}} defaultOptions={{styles: mapStyles}}>
                {props.projects.map((project) => (
                    <Marker 
                        key={project.id} 
                        position={{lat: parseFloat(project.lat), lng: parseFloat(project.lng)}}
                        animation={window.google.maps.Animation.DROP}
                        onClick={() => {
                            setSelectedProject(project)
                        }}
                        // onMouseOver={onHover}
                        icon={{
                            url: '/thickBorder.jpeg',
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}
                        
                    />
                ))}
                {selectedProject && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelectedProject(null)
                        }}
                        position={{lat: parseFloat(selectedProject.lat), lng: parseFloat(selectedProject.lng)}}
                    >
                        <div>

                        <BrowserRouter>
                            <Link to={`/projects/${selectedProject.id}`} id={selectedProject.id} currentUser={props.currentUser}>
                                <div>
                                    <img style={{width: "25vh", height: "20vh", borderRadius: "5px", boxShadow: "box-shadow: 10px 10px 5px grey;"}} src={selectedProject.img1}/>
                                    <h2>{selectedProject.developer_name}</h2>
                                    {/* <h4>Minimum ${selectedProject.minimum_investment}</h4> */}
                                    <h4>📍 {selectedProject.location}</h4>
                                </div>
                            </Link>
                        </BrowserRouter>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap> 

        )
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(Map))

    return (
        <div style={{width: '38vw', height: '95vh'}}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY
                }`}
                loadingElement={<div style={{height: "100%"}} />}
                containerElement={<div style={{height: "100%"}} />}
                mapElement={<div style={{height: "100%"}} />}
            />

        </div>
    )
    
}


