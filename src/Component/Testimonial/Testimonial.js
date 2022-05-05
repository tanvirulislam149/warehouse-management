import React from 'react';
import "./Testimonial.css";

const Testimonial = () => {
    return (
        <div className='testimonial my-5'>
            <div className='container'>
                <p className='text-white nav-brand pt-5' style={{ fontSize: "50px" }}>Testimonials</p>
                <hr className='text-white w-50' style={{ height: "3px" }} />
            </div>
            <div className='d-flex container pb-5'>
                <div className='row'>
                    <div className=' col-12 col-md-6'>
                        <div className='d-flex mx-3'>
                            <div className='fs-3 text-white fw-bold me-3'>"</div>
                            <div className='text-white me-3'>
                                <p className='fs-4 nav-brand'>
                                    We were looking for some additional storage to help protect the product and give us some additional capacity… making sure we had that protection in the environment to satisfy our requirements. Great team to work with and everybody has been a pleasure to deal with.
                                </p>
                                <p className='fs-4 nav-brand m-0 ps-5'>Sem Andersen</p>
                                <p className='fs-4 nav-brand ps-5'>Chief Financial, Jamaica International</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex mx-3'>
                            <div className='fs-3 text-white fw-bold me-3'>"</div>
                            <div className='text-white me-3'>
                                <p className='fs-4 nav-brand'>
                                    We came to them with a complicated project, but they handled it with ease. The experienced dock workers were able to sort and reload trucks with efficiency. The drivers were professional and prompt. We couldn't be more pleased with the customer service and would highly recommend DEPOT.
                                </p>
                                <p className='fs-4 nav-brand m-0 ps-5'>Roy Stuart</p>
                                <p className='fs-4 nav-brand ps-5'>Partner & Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;