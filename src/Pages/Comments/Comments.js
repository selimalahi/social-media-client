import React from 'react';

const Comments = ({comment}) => {
    const { customer, customer_image, message } = comment;
    return (
        <div>
            <div className='card mt-10 mb-10'>
                <div className='flex flex-2'>
                    <div>
                        <img src={customer_image} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} alt=""></img>
                    </div>
                    <div className='ml-5'>
                        <h3 style={{ textTransform: 'capitalize', fontSize: '20px' }}>{customer}</h3>
                        <p style={{ fontFamily: 'italic', fontStyle: 'italic' }}>"{message}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;