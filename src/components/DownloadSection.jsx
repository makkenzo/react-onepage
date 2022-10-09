import React from 'react';

const DownloadSection = () => {
    return (
        <div className="text-center download">
            <p>Download</p>
            <h1>It's available right now!</h1>
            <p>
                Duis tristique sed lorem a vestibulum. Cras commodo consequat
                <br /> orci, in convallis risus egestas non.
            </p>
            <a href="#">
                <img src={require('../img/download.png')} alt="" />
            </a>
        </div>
    );
};

export default DownloadSection;
