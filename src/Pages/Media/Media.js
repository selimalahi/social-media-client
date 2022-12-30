import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {
    const [media,setMedias] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-media')
        .then(res => res.json())
        .then(data => setMedias(data))
    }, [])
    return (
        <div className='flex justify-center flex-wrap gap-7'>
            {
                media.map(medias => <MediaCard
                key={medias._id}
                medias={medias}
                ></MediaCard>)
            }
        </div>
    );
};

export default Media;