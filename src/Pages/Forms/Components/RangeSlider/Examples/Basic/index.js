import React, { Fragment } from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip prefixCls="rc-slider-tooltip" overlay={value} visible={dragging}
      placement="top" key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class FormRangeSliderBasic extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Tooltips</CardTitle>
                  <Slider className="mb-2" min={0} max={20} defaultValue={3} handle={handle}/>
                  <Range className="mb-2" min={0} max={20} defaultValue={[3, 10]} tipFormatter={(value) => `${value}%`}/>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Disabled</CardTitle>
                  <Slider className="mb-2" disabled min={0} max={20} defaultValue={3} handle={handle}/>
                  <Range className="mb-2" disabled min={0} max={20} defaultValue={[3, 10]}
                    tipFormatter={(value) => `${value}%`}/>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Dots with Steps</CardTitle>
                  <Slider className="mb-2" dots min={0} step={20} max={340} defaultValue={20} handle={handle}/>
                  <Range className="mb-2" dots step={20} min={0} max={340}
                    defaultValue={[20, 60]} tipFormatter={(value) => `${value}%`}/>
                  <div className="divider" />

                  <Slider className="rc-slider-warning rc-slider-square rc-slider-lg mb-2" dots
                    min={0} step={20} max={480} defaultValue={80} handle={handle}/>
                  <Range className="rc-slider-success rc-slider-square mb-2" dots
                    step={80} min={0} max={480} defaultValue={[30, 60]} tipFormatter={(value) => `${value}%`}/>
                    
                  <Slider className="rc-slider-info mb-2" dots
                    min={0} step={30} max={300} defaultValue={66} handle={handle}/>
                  <Range className="rc-slider-danger rc-slider-sm mb-2" dots
                    step={40} min={0} max={360} defaultValue={[6, 22]} tipFormatter={(value) => `${value}%`}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FormRangeSliderBasic;
