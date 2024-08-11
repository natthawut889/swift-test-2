import React from 'react';

export interface BoxWrapperPageContentProps
{
    
    children?: React.ReactNode;
}

const BoxWrapperPageContent = (props: BoxWrapperPageContentProps) =>
{
    const { children } = props;
    return (
        <>
            <div className='box-wrapper-page-content'>
                {children}
            </div>
        </>
    );
};

export default BoxWrapperPageContent;
