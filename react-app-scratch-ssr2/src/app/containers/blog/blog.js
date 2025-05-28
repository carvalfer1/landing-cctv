import React, { Component } from "react";
import { Button, Col, Card, Steps, Icon } from "antd";
import wanda from "../../../assets/wanda.png";
import carlos from "../../../assets/carlos.png";
import cameras from "../../../assets/camaras.png";
import check from "../../../assets/check-square-solid.svg";


class Blog extends Component {
  render() {
    return (
      <div className="blog">
       <iframe src="https://sanity-gatsby-blog-web-npxpp3sx.netlify.app/" width="100%" height="600px" title="blog Bit Seguridad"></iframe>
      </div>
    );
  }
}

export default Blog;
