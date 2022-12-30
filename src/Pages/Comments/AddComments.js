import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddComments = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title } = service;
    const handleAddcomments = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const serviceName = title;
        const message = form.review.value;
        const review = {
            serviceId: _id,
            serviceName: serviceName,
            customer: name,
            customer_image: user?.photoURL,
            email,
            message,
            date: new Date(),
        };
        fetch(`http://localhost:5000/comments`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert("Comments added");
                    event.target.reset();
                }
            });
    };
    return (
        <div className="flex justify-center">
            <form onSubmit={handleAddcomments}>
                <div>
                <h2>Post a comment {user?.displayName}</h2>
                <textarea name="review"
                    className=" mt-4 textarea textarea-warning"
                    placeholder="Enter Your Comment Here" required
                ></textarea>
                </div>
                <button className="btn btn-outline btn-info" type="submit" value="Submit">Add</button>
            </form>
        </div>
    );
};

export default AddComments;