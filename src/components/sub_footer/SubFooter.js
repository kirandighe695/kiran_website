import React from 'react';
import '../../styles/SubFooter.scss';
import { useNavigate } from 'react-router-dom';

function SubFooter() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="become-vendor row py-5">
            <div className='col-md-6 col-sm-12'>
                <h1 className="become-vendor-heading">Become A Vendor</h1>
            </div>
            <div className='col-md-6 col-sm-12'>
                <p className="become-vendor-text">
                    Apply to be part of our next event! This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
                </p>
                <button className="apply-now-button" onClick={() => handleNavigate('/applications')}>Apply Now</button>
            </div>
        </div>
    )
}

export default SubFooter
