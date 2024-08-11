import React from 'react';

export interface BackgroundProps
{
    
    children?: React.ReactNode;
}

const GradientBackground = (props: BackgroundProps) =>
{
    const { children } = props;
    return (
        <>
            <div className='background-gradient'>
                {children}
            </div>
        </>
    );
};

export default GradientBackground;
