import React from "react";
import './me.css';

const MyName = ({ title = "Undefined" }) => {
    return <h1>Hello, my name is {title}</h1>;
};

const hobbiesInterests = [
    { title: 'Video Games', isHobby: true, isInterest: true, id:1},
    { title: 'Anime', isHobby: true, isInterest: true, id:2},
    { title: 'Manga', isHobby: true, isInterest: true, id:3},
    { title: 'Cooking', isHobby: true, isInterest: true, id:4},
    { title: 'Baking', isHobby: true, isInterest: true, id:5},
    { title: 'Computers', isHobby: false, isInterest: true, id:6},
    { title: 'Programming', isHobby: false, isInterest: true, id:7},
];

const MyHobbiesInterests = () => {
    const arrayItems = hobbiesInterests.map(item =>
        <li> 
            {item.title}
        </li>
    );

    return (
        <div>
            <h2>My hobbies and interests:</h2>
            <ul>{arrayItems}</ul>
        </div>
    );
};

const Form = () => {
    return(
        <div class="contact-form">
            <h2>Contact Me:</h2>
            <form action="" method="get" class="form-example">

                <div class="form-example">
                    <label for="email">Your Email: </label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div>
                    <label for="text">Your Message: </label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div>
                    <input type="submit" value="Send!" />
                </div>
            </form>
        </div>
    )
};

const Me = () => {
    return(
        <div class="me-flex">
            <MyName title="Henri"/>
            <MyHobbiesInterests />
            <Form />
        </div>
    )
};

export default Me;