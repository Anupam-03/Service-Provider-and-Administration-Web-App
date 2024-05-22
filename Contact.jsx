import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactForm = {
    username: "",
    email: "",
    message: "",
}


export const Contact = () => {

    const [contact, setContact] = useState(defaultContactForm);

    //? Flag to determine if user data has been updated
    const [userData, setUserData] = useState(true);

    //? Accessing user data from context
    const { user } = useAuth();

    //? Check if userData is true and there's a user available, then populate form data
    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false); //? Set userData to false to prevent further updates
    }

    const handleInput = (e) => {
        const { name, value } = e.target;

        setContact((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(contact);

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact (defaultContactForm);
                const data = await response.json();
                console.log(data);
                
                toast.success("Message sent successfully");
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <main>
                <section className="section-contact">
                    <div className="contact-content container">
                        <h1 className="main-heading">contact us</h1>
                    </div>

                    {/* contact page main  */}
                    <div className="container grid grid-two-cols">
                        <div className="contact-image">
                            <img
                                src="/images/support.png"
                                alt="we are always ready to help"
                                width="500"
                                height="500"
                            />
                        </div>

                        {/* contact form content actual  */}
                        <section className="section-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="off"
                                        value={contact.username}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="off"
                                        value={contact.email}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">message</label>
                                    <textarea
                                        name='message'
                                        id='message'
                                        autoComplete='off'
                                        value={contact.message}
                                        onChange={handleInput}
                                        required
                                        cols="30"
                                        rows="6" />
                                </div>

                                <div>
                                    <button type="submit">submit</button>
                                </div>
                            </form>
                        </section>
                    </div>

                    <section className="mb-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69651.86932035!2d87.32731336153282!3d23.533269008234672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology%20Durgapur!5e0!3m2!1sen!2sin!4v1707236034555!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </section>
                </section>
            </main>
        </>
    );
}
