import React, { Component } from "react";

const OnlineLibrary = () => {
  return (
    <React.Fragment>
        <>
        <div style={{ display: "grid", backgroundColor: "black", color: "white", placeItems: "center" }}>
          <font color="white" size="7" align="center">
            <h1> Digital Resources</h1>
          </font>

          <table
            border="4"
            bordercolor="white"
            height="35% "
            width="70%"
            align="center"
          >
            <tr style={{height : "100px"}}>
              <th>
                <a href="https://ndl.iitkgp.ac.in/">
                  National Digital Library of India
                </a>
              </th>
              <th>
                <a href="https://cbseacademic.nic.in/manual.html">
                  Teacher Manuals
                </a>
              </th>
              <th>
                <a href="http://cbseacademic.nic.in/web_material/Manuals/Art_Integration.pdf">
                  Art Integration
                </a>
              </th>
              <th>
                <a href="https://indianculture.gov.in/">Indian culture</a>
              </th>
            </tr>
            <tr style={{height : "100px"}}>
              <th>
                <a href="http://www.olabs.edu.in/"> olabs</a>
              </th>
              <th>
                <a href="https://itpd.ncert.gov.in/"> Nishtha</a>
              </th>
              <th cellpadding="15">
                <a href="https://swayam.gov.in/"> Swayam</a>{" "}
              </th>
              <th>
                <a href="http://epathshala.nic.in/process.php?id=teachers&type=eTextbooks&ln=en">
                  E-Pathshala
                </a>
              </th>
            </tr>
            <tr style={{height : "100px"}}>
              <th>
                <a href="https://drive.google.com/file/d/1d9gi9xLaswA1sMjeDeKNxvhtzX1yTe8E/view?usp=sharing">
                  {" "}
                  Cyber Safety
                </a>
              </th>
              <th>
                <a href="http://cbseacademic.nic.in/web_material/Manuals/TeachersResource_LODoc.pdf">
                  {" "}
                  Learning Outcome class 1-10
                </a>
              </th>
              <th>
                <a href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf">
                  NEP
                </a>
              </th>
              <th>
                <a href="https://ai-for-all.in/#/home?ref=CBSE">AI for all</a>
              </th>
            </tr>
          </table>
          <br />
          <br />
          </div>
          <img src="11.png" align="right" height="30%" width="35%" alt="bg image"/>
        </>
    </React.Fragment>
  );
};

export default OnlineLibrary;
