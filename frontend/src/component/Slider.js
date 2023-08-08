import React from "react";
import "../componentcss/Slider.css";
export default function () {
  return (
    <div>
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="sliderimg"
                src="https://image.shutterstock.com/image-photo/can-you-help-260nw-150296600.jpg"
                alt="First slide"
              />
            </div>

            <div className="carousel-item ">
              <img
                className="sliderimg"
                src="https://media.istockphoto.com/photos/help-is-needed-picture-id639641476?k=20&m=639641476&s=612x612&w=0&h=fZDaB08HNDrg9-h69ru2f1KNR4RyDaYUP2S7KUsTBl8="
                alt="First slide"
              />
            </div>

            <div className="carousel-item ">
              <img
                className="sliderimg"
                src="https://media.istockphoto.com/photos/your-support-needed-street-sign-picture-id471878782?k=20&m=471878782&s=612x612&w=0&h=RZ00n8BnVwz7JkqTHujThBMs0Rr6KrgafDVUC8ZSlJc="
                alt="First slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* categories */}
        <div className="outerheading">
          <div className="heading">
            <h1>Crowdfunding Categories</h1>
          </div>
          <div className="Categories">
            <div className="Item" id="Item1">
              medical
            </div>
            <div className="Item" id="Item2">
              Education
            </div>
            <div className="Item" id="Item3">
              NGO
            </div>
            <div className="Item" id="Item4">
              cancer
            </div>
            <div className="Item" id="Item5">
              flood
            </div>
          </div>
        </div>

        {/* helpus */}
        <div className="helpus">
          <h4>How Can Crowdfunding Help You</h4>
          <p>
            When the cost of medical treatments takes a toll on you financially,
            harness the power of social<br></br>
            networks through crowdfunding on CrowGo. Get tips, crowdfunding
            assistance & receive donations in times of medical emergencies.
          </p>
        </div>

        <div className="worksouter">
          <h1>How Crowdfunding Works?</h1>
          <div className="outerWorks">
            <div className="Works">
              <div className="steps">
                <h3>Start a free fundraiser</h3>
                Start a free fundraiser by filling in all the relevant details
                and information.
                <div id="start"></div>
              </div>

              <div className="steps">
                <h3>Share Your Fundraiser</h3>
                Share your fundraiser with friends, family and strangers to
                raise funds quickly
                <div id="share"></div>
              </div>

              <div className="steps">
                <h3>Withdraw All Donations</h3>
                Withdraw all the money you receive at any point in your
                fundraising journey
                <div id="withdraw"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AboutUs */}

        <div className="Details-outer">
          <div className="Details">
            <div className="footer">
              <div className="medialogo"></div>

              <div className="footer-inner">
                <h5>
                  For any queries<br></br>
                  Email: help@CrowdGo.org<br></br>
                  Contact No: +91 9672801044
                </h5>
              </div>
            </div>

            <div className="footer">
              <h3>Causes</h3>
              Medical crowdfunding<br></br>
              Cancer Crowdfunding<br></br>
              Education Crowdfunding<br></br>
              Creative Fundraising<br></br>
              Child Welfare<br></br>
              Animal Fundraisers<br></br>
              COVID-19 Relief Fund<br></br>
            </div>

            <div className="footer">
              <h3>How it works?</h3>
              Fundraising for NGOs<br></br>
              Sponsor A Child<br></br>
              Fundraising Tips<br></br>
              What is Crowdfunding?<br></br>
              Corporates<br></br>
              Withdraw Funds<br></br>
              Browse Fundraiser<br></br>
            </div>

            <div className="footer">
              <h3>About us</h3>
              Team CrowdGo<br></br>
              In The News<br></br>
              Our Partners<br></br>
              Careers<br></br>
              CrowdGo Blog<br></br>
              Success Stories<br></br>
            </div>
            <div className="footer">
              <h3>support</h3>
              Medical Finance<br></br>
              FAQs & Help Center<br></br>
              Are CrowdGo Campaigns Genuine?<br></br>
              Fundraiser Video<br></br>
              Trust & Safety<br></br>
              Plans & Pricing<br></br>
              Contact Us<br></br>
            </div>
          </div>
          <div className="last">
            Copyright © 2023 CrowdGo Online Ventures Pvt Ltd. All Rights
            Reserved. Terms of Use | Privacy Policy | AML Policy | Use of
            cookies
          </div>
        </div>
      </>
    </div>
  );
}
