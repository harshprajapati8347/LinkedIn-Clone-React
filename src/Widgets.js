import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  const mostViewedCourses = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="widgetsCover">
        <div className="widgets">
          <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
          </div>
          {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
          {newsArticle("Tesla hits new heights", "Cars & Auto - 306 readers")}
          {newsArticle("Is Redux too good?", "Code - 125 readers")}
          {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
          {newsArticle("MERN stack is Easy?", "Code - 1225 readers")}
          {newsArticle(
            "Will India whitewash the T20 series against Eng?",
            "Code - 1500 readers"
          )}
        </div>

        
        <div id="widgetsMostViewedCources" className="widgets">
          <div className="widgets__header">
            <h2>Today’s most viewed courses</h2>
            <InfoIcon />
          </div>
          {mostViewedCourses(
            "The Six morning habits of High Per..",
            "Pete Mockaitis | How to be awsome at your .."
          )}
          {mostViewedCourses(
            "Speaking Confidently and Effectively",
            "Pete Mockaitis | How to be awsome at your .."
          )}
          {mostViewedCourses(
            "Communication Foundations",
            "Brenda Bialey | Hughes and Tetina kolovou"
          )}
        </div>
      </div>
    </>
  );
};

export default Widgets;
