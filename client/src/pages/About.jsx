import React from 'react';
import { NavLink } from "react-router-dom"
import { Analytics } from '../components/Analytics';
import { useAuth } from '../store/auth';

export function About() {
    const { user } = useAuth();
    console.log(user)
    return (
        <>
            <main>
                <section className='section-hero'>
                    <div className='container grid grid-two-cols'>
                        <div className='hero-content'>
                            <p>welcome {user.username} </p>
                            <h1>Why choose us?</h1>
                            <p>
                                Expertise: Our team consists of experienced IT professionals who
                                are passionate about staying up-to-date with the latest industry
                                trends.
                            </p>
                            <p>
                                Customization: We understand that every business is unique.
                                Thats why we create solutions that are tailored to your specific
                                needs and goals.
                            </p>
                            <p>
                                Customer-Centric Approach: We prioritize your satisfaction and
                                provide top-notch support to address your IT concerns.
                            </p>
                            <p>
                                Affordability: We offer competitive pricing without compromising
                                on the quality of our services.
                            </p>
                            <p>
                                Reliability: Count on us to be there when you need us. We're
                                committed to ensuring your IT environment is reliable and
                                available 24/7.
                            </p>

                            <div className="btn btn-group">
                                <NavLink to='/contact'>
                                    <button className='btn'>connect now</button>
                                </NavLink>
                                <NavLink to='/service'>
                                    <button className='btn secondary-btn'>learn more</button>
                                </NavLink>
                            </div>
                        </div>

                        {/* about image */}
                        <div className='about-image'>
                            <img
                                src='/images/about.png'
                                alt='about'
                                width="600"
                                height="700"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Analytics />
        </>
    )
}
