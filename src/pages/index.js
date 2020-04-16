import React from "react";
import Helmet from "react-helmet";

import Section from '../components/section';
import JobListing from '../components/jobListing';

import '../sass/style.scss';

const AVAILABLE_FOR_WORK = true;
const CONTACT_EMAIL = "jamesjburke91@gmail.com";

const ARTICLES = [
    {
        text: 'NTS Aphex Twin Live Video Stream',
        href: 'https://medium.com/nts-radio-tech-blog/nts-aphex-twin-live-video-stream-1f94430ceaf5',
    },
    {
        text: "Designing the 'Aphex Twin' Virus (Video)",
        href: 'https://www.youtube.com/watch?v=ds9pahlBjGg',
    },
];

const PROJECTS = [
    {
        text: "Jeff Mills - The Outer Limits",
        href: "https://www.nts.live/projects/jeff-mills-the-outer-limits/",
    },
];

const IndexPage = () => (
    <div className="main">
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>

        <div class="page-head">
            <h1 className="text text--xl">James Burke</h1>

            <h2 className="text-normal text text--s" style={{margin: 0}}>Freelance Web Developer with experience in audio streaming and creative projects.</h2>
            <div style={{margin: 0}}>Specialising in Frontend Web Development (Javascript, CSS, React and NodeJS).</div>

            {AVAILABLE_FOR_WORK && (
                <div className="text text--s" style={{marginTop: '29px'}}>
                    Available for work, <a href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">get in touch for complete CV.</a>
                </div>
            )}
        </div>

        <Section title={"Professional Experience"}>
            <JobListing
                company={"NTS Radio"}
                title={"Senior Web Developer / Lead Frontend Developer"}
                dateStart={'2016-06'}
                dateEnd={'2020-02'}
            />
            <JobListing
                company={"Audiosplitter"}
                title={"Frontend Developer"}
                dateStart={'2015-09'}
                dateEnd={'2016-06'}
            />
            <JobListing
                company={"Informa"}
                title={"Web Developer"}
                dateStart={'2014-03'}
                dateEnd={'2015-09'}
            />
        </Section>

        <Section title="Articles & Links">
            {ARTICLES.map((article, i) => (
                <div key={i}>
                    <a href={article.href} target="_blank" rel="noopener noreferrer">{article.text}</a>
                </div>
            ))}
        </Section>

        <Section title="Projects">
            {PROJECTS.map((project, i) => (
                <div key={i}>
                    <a href={project.href} target="_blank" rel="noopener noreferrer">{project.text}</a>
                </div>
            ))}
        </Section>

        <div class="portrait-container" style={{margin: "28px 0 46px"}}>
            <img src="portrait.jpg" style={{width: "100%", opacity: 0.8}} />
        </div>

        <div><a href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">Get in touch</a></div>
    </div>
);

export default IndexPage;
