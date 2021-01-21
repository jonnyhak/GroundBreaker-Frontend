
import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"



export default function Map(props) {

    function map() {
        return (
            <GoogleMap defaultZoom={10} defaultCenter={{lat: 40.747342, lng: -73.974512}} >
                {props.projects.map((project) => (
                    <Marker 
                        key={project.id} 
                        position={{lat: parseFloat(project.lat), lng: parseFloat(project.lng)}}
                    />
                ))}
            </GoogleMap> 

        )
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(map))

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


