import React from 'react';

const Home = () => {
    let x = Math.random() * 100;
    let y = Math.round(x);
    let z = y.toString();
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;

        const picture = form.picture.value;

        const place = {
            place_id: x,
            title: title,
            picture: picture
        }
        fetch(`http://localhost:5000/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(place)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('New media has been added Successfully');
                    event.target.reset();
                }
            })
    }
    return (
        <div className="card bg-base-100 shadow-xl place-items-center">

            <div className="card-body">
                <h2 className="card-title ">What's on your mind !!</h2>
                <form onSubmit={handleAddService}>
                    <input type="text" placeholder="Your Title" name="title" className="input input-bordered input-lg w-full max-w-xl" />
                    <div className="card-actions">
                        <input type="text" placeholder="Your Image URL" name="picture" className="input input-bordered w-full max-w-xs mt-4" />
                        {/* <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Selfie</span>
                            <span className="label-text-alt">Alt label</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Alt label</span>
                            <span className="label-text-alt">Alt label</span>
                        </label>
                    </div> */}
                        <button type="submit" value="Submit" className="btn btn-primary">POST</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;