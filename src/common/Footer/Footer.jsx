import React from "react";
import { AmericanIcon, ChatIcon, CirrusIcon, JCBIcon, MailIcon, MastercardIcon, PaypalIcon, PhoneIcon, TextIcon, VisaIcon } from "../../assets";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="max-footer">
      <footer className="footer">
        <div className="footer-desktop">
          <div className="top-footer">
            <h2 className="title">Artsy Collective</h2>
            <div className="footer-flex">
              <div className="left">
                <div className="footer-item">
                  <h3 className="footer-title">Explore Artsy Collective</h3>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Collections
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Coco Crush
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      High Jewelry
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Bridal
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Care & Services
                    </a>
                  </div>
                </div>
                <div className="footer-item">
                  <h3 className="footer-title">Our Store</h3>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Store Locator
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Book Appoinment
                    </a>
                  </div>
                </div>
                <div className="footer-item">
                  <h3 className="footer-title">Help</h3>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Help Center
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      FAQ
                    </a>
                  </div>
                </div>
                <div className="footer-item">
                  <h3 className="footer-title">About Us</h3>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Artsy Collective Story
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Sustainability
                    </a>
                  </div>
                  <div className="item-link">
                    <a className="link-footer" href="/">
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="no-flex">
                <div className="footer-member footer-desktop">
                  <h3 className="member">BECOME A MEMBER</h3>
                  <span className="member-sub">
                    Join now and get 10% off your next purchase!
                  </span>
                </div>
                <div className="footer-help desktop-help">
                  <div className="help-text">
                    <h3 className="help">NEED A HAND?</h3>
                    <p className="help-sub">
                      We’re available by phone (888.492.7297) and chat everyday
                      from 9 a.m.–10 p.m. GMT+7.
                    </p>
                  </div>
                  <div className="icon-block">
                    <div className="footer-icon">
                      <div className="icon">
                        <a href="/" className="footerIcon-link">
                          <img
                            className="footerIcon-img"
                            src={TextIcon}
                            alt="Text"
                          />
                          Text
                        </a>
                      </div>
                    </div>
                    <div className="footer-icon">
                      <div className="icon">
                        <a href="/" className="footerIcon-link">
                          <img
                            className="footerIcon-img"
                            src={ChatIcon}
                            alt="Chat"
                          />
                          Chat
                        </a>
                      </div>
                    </div>
                    <div className="footer-icon">
                      <div className="icon">
                        <a href="/" className="footerIcon-link">
                          <img
                            className="footerIcon-img"
                            src={MailIcon}
                            alt="Email"
                          />
                          Email
                        </a>
                      </div>
                    </div>
                    <div className="footer-icon">
                      <div className="icon">
                        <a href="/" className="footerIcon-link">
                          <img
                            className="footerIcon-img"
                            src={PhoneIcon}
                            alt="Call"
                          />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="currency">
              <h3 className="currency-item">
                Indonesia<span className="currency-sub"> - Rp (Rupiah)</span>
              </h3>
            </div>
            <div className="footer-info">
              <a className="info-link first-link" href="/">
                Legal Information
              </a>
              -
              <a className="info-link" href="/">
                Terms
              </a>
              -
              <a className="info-link" href="/">
                Privacy Policy & Cookies
              </a>
              -
              <a className="info-link" href="/">
                Affiliation
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="bottom-text">
            <h3 className="bottom-title">©2021 Artsy Collective</h3>
            <h3 className="bottom-title">
              Indonesia - France - United Kingdom - United States - Germany -
              Spain - Italy
            </h3>
          </div>
          <div className="pay-wrap">
            <div className="img-payment">
              <div className="img-item">
                <img src={VisaIcon} alt="visa" />
              </div>
              <div className="img-item">
                <img src={MastercardIcon} alt="mastercard" />
              </div>
              <div className="img-item">
                <img src={CirrusIcon} alt="cirrus" />
              </div>
              <div className="img-item">
                <img src={AmericanIcon} alt="american" />
              </div>
              <div className="img-item">
                <img src={JCBIcon} alt="jbc" />
              </div>
              <div className="img-item last-img">
                <img src={PaypalIcon} alt="paypal" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
