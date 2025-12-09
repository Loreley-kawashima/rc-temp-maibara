import React from "react"
import InnerMedia from "/src/components/InnerMedia"

const Component = ({ aboutUs, businessContents }) => {
  return (

    <section className="aboutSec">

      {/* 会社について */}
      <div className="inner clearfix">
        <div className="textBox">
          <div className="infoBox">
            <h2 className="headLine04 fadeInUp"><span className="en">About Us</span><span className="jp">{aboutUs.title}</span></h2>
            <div className="subBox fadeInUp">
              <p dangerouslySetInnerHTML={{ __html: aboutUs.content }} />
            </div>
          </div>
        </div>
        <div className="photoBox fadeInUp">
          <div className="infoImg">
            <img src={aboutUs.media.url} alt={aboutUs.title} />
          </div>
        </div>
      </div>

      {/* 事業紹介 */}
      <div className="inner inner01 clearfix">
        <div className="textBox">
          <div className="infoBox">
            <h2 className="headLine04 fadeInUp"><span className="en">Business</span><span className="jp">{businessContents.title}</span></h2>
            <div className="subBox fadeInUp">
              <p dangerouslySetInnerHTML={{ __html: businessContents.content }} />
            </div>
          </div>
        </div>
        <div className="photoBox fadeInUp">
          <div className="infoImg">
            <img src={businessContents.media.url} alt={businessContents.title} />
          </div>
        </div>
      </div>

    </section >

  )
}

export default Component
