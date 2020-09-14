import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import nasaSpace from "../images/nasa-space.jpg";
import spaceMan from "../images/spacesuit.gif";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const INSTAGRAM_LINK = "https://instagram.com";
const FACEBOOK_LINK = "";
const TWITTER_LINK = "";

export default function IndexPage ()
{
  let large_screen = typeof window !== 'undefined' && window.screen.width > 800;
  return (<Layout>
    <SEO title="Home" />
    <a className="anchor" id="top" />
    <div>
      <div className="flex m-auto flex-col lg:flex-row lg:max-w-screen-lg xl:max-w-screen-xl px-12 lg:p-0">
        <div className="pt-24 lg:pt-32">
          <h1 className="leading-normal">Next generation space <span className="text-blue-600">foldables</span>.</h1>
          <br /> 
          <div className="max-w-2xl">
            <h5>We're Team Per Origami Ad Astra, and we're building the next generation of stuff to make big stuff happen.</h5>
            {/*<div className="flex">
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
              </div>*/}
            <div className="flex mt-12">
              <a className="mr-4 text-blue-600 cursor-pointer" href={"https://google.com"} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="inline text-2xl mt-1" icon={faFileAlt}/>
              </a>
              <a href={"https://google.com"}>
                <h5 className="inline font-bold text-black pointer cursor-pointer floating-underline">Read our proposal</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="m-auto pt-32 invisible lg:visible">
          <img src={spaceMan} width={600} height={600}/>
        </div>
      </div>
      {/*<div className="m-auto hidden lg:block lg:max-w-4xl" style={{minHeight: 1500, width: 1500 }}>
        <img width={1500} height={1500} src={camping}/>
  </div>*/}
    </div>
    {/*<div className="flex m-auto lg:max-w-screen-lg xl:max-w-screen-xl" style={{backgroundColor: "white"}}>
      <Column title={"Phase 1"} 
              description={"Well, for phase 1 we honestly are just submitting the proposal so there's not a whole lot you can do with us at this point..."} />
      <Column title={"Phase 2"} 
              description={"Well, for phase 2 we honestly are just submitting the proposal so there's not a whole lot you can do with us at this point..."} />
      <Column title={"Phase 3"} 
              description={"Well, for phase 3 we honestly are just submitting the proposal so there's not a whole lot you can do with us at this point..."} />
              </div>*/}
  </Layout>)
}

const Column = ({ title, description }) => (
  <div class="text-gray-800 w-1/3 pl-6 pr-6">
    <img src={nasaSpace}/>
    <h2 className="pt-4">{title}</h2>
    <p className="pt-4 text-sm">{description}</p>
  </div>
);
