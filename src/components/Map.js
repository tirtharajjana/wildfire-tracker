import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDm5hqaKAyGAkQ3kruDw142MbMq66MRznM' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps={
    center:{
        lat:22.5726,
        lng:88.3639
    },
    zoom:6
}

export default Map
