import React from 'react';
import Hero from "../components/Hero";
import Content from "../components/Content"


function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>"I’m interested in client consultations and creating excellent experiences. My job experience has been built from working at small start-up companies to handling international client cases at a global media house company. This has developed my consultation and communication skills. I enjoy work where I am able to consult clients and develop my problem-solving attitude utilising data.",</p>
            </Content>
        </div>
    );

}

export default AboutPage;