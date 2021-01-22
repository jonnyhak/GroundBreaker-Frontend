
import React, { useState } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import {Route, Link} from 'react-router-dom'
import mapStyles from './mapStyles'


export default function Map(props) {

    function Map() {
        const [selectedProject, setSelectedProject] = useState(null)
        return (
            <GoogleMap defaultZoom={13} defaultCenter={{lat: 40.747342, lng: -73.974512}} defaultOptions={{styles: mapStyles}}>
                {props.projects.map((project) => (
                    <Marker 
                        key={project.id} 
                        position={{lat: parseFloat(project.lat), lng: parseFloat(project.lng)}}
                        onClick={() => {
                            setSelectedProject(project)
                        }}
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
                            <h2>{selectedProject.developer_name}</h2>
                            <h4>{selectedProject.location}</h4>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap> 

        )
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(Map))

    return (
        <div style={{width: '100vw', height: '100vh'}}>
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


