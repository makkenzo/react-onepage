import React from 'react';

const AnalysisSection = () => {
    return (
        <div className="my-analysis d-flex justify-content-around">
            <div className="pictures text-center">
                <p>400+</p>
                <p>Pictures analyzed</p>
            </div>

            <div className="operations text-center">
                <p>25+</p>
                <p>Operations per minute</p>
            </div>

            <div className="accuracy text-center">
                <p>95%</p>
                <p>Accuracy</p>
            </div>
        </div>
    );
};

export default AnalysisSection;
