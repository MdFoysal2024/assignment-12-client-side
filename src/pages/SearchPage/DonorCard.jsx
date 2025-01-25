import React from 'react';

const DonorCard = ({  donor }) => {

    const { bloodGroup, photo, district, name, upazila, role } = donor || {}


    return (

        <div>
            <div>
            <div className=" flex items-center gap-8 p-12 bg-red-100  shadow-xl">
                            <figure className="  ">
                                <img
                                    src={photo}
                                    alt="Image Loading..."
                                    className="rounded-xl w-32" />
                            </figure>
                            <div className="  ">
                                <h2 className="text-xl font-bold">{name}</h2>
                                <p className='font-semibold'>Address: <span className='font-normal'>{upazila}, {district}</span></p>
                                <p className='font-semibold'>Blood Group: <span className=' text-red-600 text-lg font-bold'>{bloodGroup}</span></p>
                                

                            </div>
                        </div>
            </div>
        </div>
    );
};

export default DonorCard;