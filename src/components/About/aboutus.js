import React, { Component } from "react";
import "./about.scss";
import Tilt from  'react-tilt';

class About extends Component {
  render() {
    return (
      <section className="about pa3">
        <div className="about-title pa3">
          <h1 className="f1 white">About Company</h1>
        </div>
        <div>
          <Tilt
            className="Tiltt"
            options={{ max: 80 }}
          >
            <div className="Tilt-inner ">
              <div className="about-logo ">
                <img
                  className="img"
                  src="https://www.impactbnd.com/hubfs/examples-of-company-profile-pages.jpg"
                  height="250px"
                  width=" 400px"
                  alt="pic"
                />
              </div>
            </div>
          </Tilt>
        </div>

        <div className=" pa2 about-content">
          <h1>What is Company?</h1>
          <p className="br1 shadow-1 pa3">
            We provide complete business solutions, which enables businesses to
            leverage leading edge technology to gain sustainable competitive
            advantages in today’s marketplace. We are known for our talent,
            passion, work ethic and building ongoing long term relationships and
            commitment through support and maintenance. Currently, the
            Development Centre of COMPANY is located close to FB Area, Karachi,
            Pakistan. A good team is significant to the success of any business.
            COMPANY takes pride in having a trustworthy and sturdy team of more
            than 6 members. Since our founding, we have worked with the best in
            the industry. We pride ourselves on the skills and professionalism
            of our team members and invest time and effort in training them to
            further enhance their skills. During recruitment, we take utmost
            care to select the most deserving candidates having high cultural
            values along with a calm mind-set. Our Team Managers are available
            round the clock for any kind of communication and information
            transmission so that work is not hampered in any way. Team Managers
            can be contacted through email, phone and any Instant Messenger
            convenient to the client such as MSN, Yahoo, AIM, Google Talk, Skype
            and ICQ. At COMPANY, we value your time as much as our own. Our
            turn-around time is the most minimal and we assure reply within 1
            business day.
          </p>
          <h1>What we do</h1>
          <p className="br1 shadow-1 pa3">
            The company stands ahead for its brilliant work in the field of
            Website, Mobile apps, Software, Graphics, and Online marketing. We
            specialize in advertising and marketing of business entities. We
            help clients to plan and create strategies that will enhance their
            competitiveness and produce measurable results. Our process has been
            designed and proven to produce the greatest results in the shortest
            amount of time. Our tools are our minds and we a committed to
            delivering the highest quality work, support and maintenance at the
            most competitive pricing.
          </p>
          <h1>Our Mission</h1>
          <p className="br1 shadow-1 pa3">
            Our primary mandate is to ensure customer satisfaction. We serve our
            clients as a trusted ally, providing them with the loyalty of a true
            business partner. We believe in treat our employees as family, as
            they are our strength. We are committed towards mutually shared
            values and believe in achieving the highest levels of customer
            satisfaction, with extraordinary emphasis on the creation of value.
            Since our founding, we have worked with the best in the industry. We
            pride ourselves on the skills and professionalism of our team
            members and invest time and effort in training them to further
            enhance their skills.
          </p>
        </div>
      </section>
    );
  }
}
export default About;
