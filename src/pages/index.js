import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import nasaSpace from "../images/nasa-space.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const INSTAGRAM_LINK = "https://instagram.com";
const FACEBOOK_LINK = "";
const TWITTER_LINK = "";

function IndexPage ()
{
  let large_screen = typeof window !== 'undefined' && window.screen.width > 800;
  return (<Layout>
    <SEO title="Home" />
    <a className="anchor" id="top" />
    <div className="space-background min-h-screen">
      <div className="flex m-auto lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="float-left">
          <br /> <br /> <br />
          <h1 className="text-gray-200 text-2xl lg:text-4xl">Per Origami Ad Astra</h1>
          <br /> 
          <div className="max-w-md">
            <h5>We're building the next generation of stuff to make big stuff happen</h5>
            <div className="flex">
              <div style={{fontSize: "1.5rem"}}>
                <a className="mr-4 text-gray-200" href={INSTAGRAM_LINK} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a className="mr-4 text-gray-200" href={FACEBOOK_LINK} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a className="mr-4 text-gray-200" href={TWITTER_LINK} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faTwitter}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="m-auto hidden lg:block lg:max-w-4xl" style={{minHeight: 1500, width: 1500 }}>
        <img width={1500} height={1500} src={camping}/>
  </div>*/}
    </div>
    <br />
    <div className="flex m-auto lg:max-w-screen-lg xl:max-w-screen-xl">
      <Column title={"Phase 1"} 
              description={"Well, for phase 1 we honestly are just submitting the proposal so there's not a whole lot you can do with us at this point..."} />
      <Column title={"Phase 2"} 
              description={"Well, for phase 2 we honestly are just submitting the proposal so there's not a whole lot you can do with us at this point..."} />
      <Column title={"Phase 3"} 
              description={"Well, for phase 3 we honestly are just submitting the proposal so there's not a whole lot you can do with us at this point..."} />
    </div>
    <br />
    <br />
    <br />
  </Layout>)
}

const Column = ({ title, description }) => (
  <div class="text-gray-800 w-1/3 pl-6 pr-6">
    <img src={nasaSpace}/>
    <h2 className="pt-4">{title}</h2>
    <p className="pt-4 text-sm">{description}</p>
  </div>
);


export default IndexPage
