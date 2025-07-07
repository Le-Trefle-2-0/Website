import React from 'react';

const LogoCarousel = () => {
    const logos = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'];

    return (
        <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-scroll">
                {Array.from({ length: 3 }).map((_, iteration) => (
                    <React.Fragment key={iteration}>
                        {logos.map((logo, index) => (
                            <div key={`${iteration}-${index}`} className="inline-block px-8">
                                <div className="w-32 h-16 bg-gray-200 flex items-center justify-center">
                                    {logo}
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
