import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

// import {Cropper} from 'react-image-cropper'

import PageTitle from "../../../Layout/AppMain/PageTitle";

import DemoImg from "../../../assets/utils/images/originals/fence-small.jpg";

// const cropper = React.createRef(null);

class ImageCropExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: DemoImg,
      image: "",
      cropResult: null,
    };
    this.cropImage = this.cropImage.bind(this);
  }

  cropImage() {
    if (typeof this.cropper.getCroppedCanvas() === "undefined") {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  _crop() {
    // image in dataUrl
    //  console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    return (
      <Fragment>
        <PageTitle heading="Image Crop"
          subheading="You can easily crop and edit images with this React plugin."
          icon="pe-7s-signal icon-gradient bg-malibu-beach"/>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <Cropper
                    ref={(cropper) => {
                      this.cropper = cropper;
                    }}
                    src={this.state.imgSrc} style={{ height: 400, width: "100%" }}
                    guides={false} crop={this._crop.bind(this)}/>
                  <div className="divider" />
                  <div className="text-center">
                    <div className="text-center">
                      <Button color="primary" onClick={this.cropImage}>
                        Crop Selection
                      </Button>
                    </div>
                    {this.state.cropResult ? (
                      <div>
                        <div className="divider" />
                        <div>
                          <h6>Cropped Result</h6>
                        </div>
                        <img className="after-img rounded" src={this.state.cropResult} alt=""/>
                      </div>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Predefined Aspect Ratio</CardTitle>
                  <Cropper
                    ref={(cropper) => {
                      this.cropper = cropper;
                    }}
                    src={this.state.imgSrc} style={{ height: 400, width: "100%" }}
                    aspectRatio={16 / 9} guides={false} crop={this._crop.bind(this)}/>
                  <div className="divider" />
                  <div className="text-center">
                    <div className="text-center">
                      <Button color="primary" onClick={this.cropImage}>
                        Crop Selection
                      </Button>
                    </div>
                    {this.state.cropResult ? (
                      <div>
                        <div className="divider" />
                        <div>
                          <h6>Cropped Result</h6>
                        </div>
                        <img className="after-img rounded" src={this.state.cropResult} alt=""/>
                      </div>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ImageCropExample;
