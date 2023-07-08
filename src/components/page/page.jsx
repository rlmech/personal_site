import React from 'react';
import './page.css';
import { Navbar } from '../../components';

const Page = (pageContent) => {
    pageContent = pageContent.pageContent;
    const pagePath = pageContent.path;

    if ( pagePath === "/" ){
        return pageContent.element;
    } else {
        return (
            <div className="page-wrap">
                <div className="page-foreground">
                    {("title" in pageContent) && (
                        <div className="page-title">
                            {pageContent.title}
                        </div>
                    )}
                    {pageContent.element}
                </div>
                <Navbar />
            </div>
        )
    }
}

export default Page;