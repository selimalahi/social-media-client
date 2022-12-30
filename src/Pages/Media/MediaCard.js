import React from 'react';
import { Link } from 'react-router-dom';

const MediaCard = ({medias}) => {
    const {_id, title, picture} = medias;
    return (
        <div className=" card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Selfie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`${_id}`}><button className="btn btn-primary">More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;