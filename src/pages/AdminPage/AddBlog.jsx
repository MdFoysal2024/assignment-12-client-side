import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

import Swal from "sweetalert2";
import { imageUpload } from "../../api/utils";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {

    const editor = useRef(null);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleAddBlog = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const image = event.target.image.files[0]
        const photoURL = await imageUpload(image);
        console.log(title, photoURL)

        const blogInfo = {
            title: title,
            photo: photoURL,
            status: 'Draft',
            content
        }
        console.log(blogInfo)

        axiosPublic.post('/blogs', blogInfo)

            .then(res => {
                if (res.data.insertedId) {
                    console.log('User data added to Database');

                    Swal.fire({
                        title: 'Add New Blog',
                        text: 'Create New Blog Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    });

                    navigate("/dashboard/content-management");
                }
            })

    }


    return (
        <div className='p-24'>
            <h2 className="pb-12 text-center font-bold text-3xl md:text-5xl">Create Donation Blog </h2>

            <div className="card bg-red-200 w-full rounded-none mx-auto shrink-0 ">
                <form onSubmit={handleAddBlog}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Blog Title</span>
                        </label>
                        <input type="text" placeholder="Title Here" name='title' className="input input-bordered" required />
                    </div>

                    <div className='w-full pt-2'>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Thumbnail  Image*
                        </label>
                        <input
                            className='p-2 bg-white input input-bordered w-full '
                            required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>


                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                    />




                    <div className="form-control mt-6">
                        <button className="btn text-white border-none text-lg hover:bg-red-800 bg-red-500">Create Blog</button>
                    </div>
                </form>
            </div>



        </div>
    );
};

export default AddBlog;