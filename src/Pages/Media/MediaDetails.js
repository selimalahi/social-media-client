import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Comments from '../Comments/Comments';

const MediaDetails = () => {
    const medias = useLoaderData();
    const { _id, title, picture } = medias;

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/comments/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div className="h-96 carousel carousel-vertical rounded-box">
                <div className="flex justify-center carousel-item h-full">
                    <img src={picture}></img>
                </div>

            </div>
            <div>
                <h2 className="mt-4 mb-4 flex justify-center card-title">{title}</h2>
                
            </div>
            <h2 className='text-center'>Comments</h2>
            <div>
            {
                comments.map(comment => <Comments
                key={comment._id}
                comment={comment}
                ></Comments>)
            }
            </div>
            <Link to={`/addcomment/${_id}`}><button className="btn btn-warning flex justify-center">Add a Comment</button></Link>
        </div>
    );
};

export default MediaDetails;