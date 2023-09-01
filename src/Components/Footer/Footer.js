import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Fixedfooter">
      <div className="downloadicons">
        <a
          href="https://www.apple.com/in/app-store/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/APPstore.png" alt="" />
        </a>
        <a
          href="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=Cj0KCQjwl8anBhCFARIsAKbbpyQXBR9wYfG4KuFAfv6AclZrMtLXmPI0v7FsLlrSwgB3A7T-zgHAPzkaAvFyEALw_wcB&gclsrc=aw.ds"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/googleplay.png" alt="" />
        </a>
      </div>
      <img src="images/vector.png" alt="vector" className="vector" />
      <div className="policytext">
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
        our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
        trading offered by Cash App. Cash App Investing does not trade bitcoin
        and Cash App is not a member of FINRA or SIPC. Cash App facilitates
        banking services through Sutton Bank and Lincoln Savings Bank, Members
        FDIC.
      </div>

      <div className="Buttons">
        <img src="images/icon1.png" alt="" />
        <img src="images/icon2.png" alt="" />
        <img src="images/icon3.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
