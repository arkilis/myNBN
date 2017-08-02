import React from "react";
import { Link } from "react-router";
import AppStoreButton from "./components/AppStoreButton";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";

const brandName = "MyNBN";
const brand = <span>{brandName}</span>;

const businessAddress = (
  <address>
    <p>A static website powered by React.</p>
    <strong>{brandName}</strong><br/>
    Brisbane, QLD 4069<br/>
  </address>
);


export default (props) => {
  return (
    <Page>

      <Navbar brand={brand} className="">
        <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
      </Navbar>

      <Hero backgroundImage="img/bkground.png"
        className="text-xs-center">
        <h1 className="display-4"> Check Your NBN Status </h1>
        <p className="lead">Availabile commence date, NBN type with one tape away, and it is FREE.</p>
        <AppStoreButton 
          url="https://itunes.apple.com/us/app/my-nbn/id1247260936?mt=8"
        ></AppStoreButton>
        <p>
          
        </p>
      </Hero>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead"><strong>MyNBN Results</strong></p>
            <p>External integrations like &nbsp;
              <a href="http://www.nbnco.com.au">© 2017 nbn Co LTD</a>,&nbsp;
              <a href="https://www.telstra.com.au">Teltra</a>,&nbsp;
              <a href="https://www.tpg.com.au">TPG</a> and&nbsp;
              <a href="https://www.optus.com.au">Optus</a> are included. Use the results at your own risk.
              </p>
          </div>
          
          <div>
            <p className="lead"><strong>Simple Search</strong></p>
            <p>Search by typing in your address and your answer is one tap away. If you are checking 
            the NBN availability of your current address, tap the “select current address” tab located 
            on top of the screen and select one of the provided options. Please note that, your 
            location function (GPS) should be enabled when you are using the “select current address” 
            function.</p>
          </div>

          <div>
            <p className="lead"><strong>Map Integration</strong></p>
            <p>Show results and address on the map with a pin.</p>
          </div>
        </HorizontalSplit>
      </Section>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com/arkilis"
        twitterUrl="http://www.twitter.com/arkilis"
        githubUrl="https://github.com/arkilis"
        email="arkilis@gmail.com"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
