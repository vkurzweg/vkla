import React from "react";
import Steps from 'antd/lib/steps';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Timeline from 'antd/lib/timeline';
import { Image } from 'cloudinary-react';


const Step = Steps.Step;

const steps = [{
  title: 'Development',
  content:
    <div className="container">
      <div className="row" style={{ display: 'inline-flex' }}>
        <div className="col-sm-6">
          <p style={{ textAlign: 'center', marginTop: '1%', marginBottom: '2%'}}><b>Responsive websites and applications</b> built with:</p>
          <Image cloudName="kurzweg" publicId="logos" quality="auto" responsive style={{ display: 'block', margin: '0 auto', marginRight: '5%', height: '150px' }} />
        </div>
        <div className="col-sm-6" style={{ marginLeft: '3%', width: '250px' }}>
          <p style={{ marginTop: '1%' }}><b>Featuring:</b></p>
          <ul style={{ listStyleType: 'circle', textAlign: 'left', marginLeft: '10%', marginTop: '5%', lineHeight: '200%' }}>
            <li>Stripe.js <b>payment</b> integration</li>
            <li>Facebook and Google <b>authentication</b></li>
            <li>Google Maps <b>geocoding</b></li>
            <li>CSS3 transitions & <b>animations</b></li>
          </ul>
        </div>
      </div>
    </div>
}, {
  title: 'Design',
  content:
    <div>
      <p style={{ fontSize: '14px' }}>Wireframes, Prototypes & User Interfaces</p>
      <div className="container" style={{ lineHeight: '200%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%', width: '100%'}}>
        <div className="row" style={{ display: 'inline-flex', width: '80%' }}>
          <div className="col-md-4">
            <img src="/media/search_blue.png" style={{ marginBottom: '7%'}} />
            <p><b>Professional design research</b> including user interviews and competitive analysis</p>
          </div>
          <div className="col-md-4">
            <img src="/media/mobile_blue.png" style={{ marginBottom: '8%'}} />
            <p><b>Mobile-first wireframing and prototyping</b> using Sketch and InVision</p>
          </div>
          <div className="col-md-4">
            <img src="/media/responsive_blue.png" style={{ marginBottom: '5%'}} />
            <p><b>Responsive framework and library integration</b> including Bootstrap and Material-UI</p>
          </div>
        </div>
      </div>
    </div>
}, {
  title: 'Content',
  content:
    <div>
      <div style={{ marginTop: '5%', width: '80%', margin: '0 auto', textAlign: 'left'}}>
        <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Optimized, on-brand digital content writing and marketing since 2008.</h5>
        <div>
          <ul style={{ width: '50%', display: 'block', margin: '0 auto', listStyleType: 'circle', textAlign: 'left', marginTop: '2%', lineHeight: '200%' }}>
            <li>Taught <b>SEO copywriting</b> for e-commerce in Austin and Bulgaria</li>
            <li>Wide range of writing experience (public affairs, PR, journalism, commercial) in <b>digital and print media</b></li>
            <li><b>Clear, consistent, concise copywriting</b> based on research and brand guidelines</li>
            <li>Increased conversion rates for <b>startup and enterprise clients</b></li>
          </ul>
        </div>
      </div>
    </div>
}]

export class Dev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  // render
  render() {
    const { current } = this.state;
    return (
      <div style={{ display: 'block', margin: '0 auto', width: '100%', backgroundColor: '#FFFFFF' }}>
        <Steps current={current} style={{ paddingTop: '3%', width: '85%', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
          <Step title="Development" icon={<Icon type="code-o" />} />
          <Step title="Design" icon={<Icon type="desktop" />} />
          <Step title="Content" icon={<Icon type="edit" />} />
        </Steps>
        <div style={{ height: '210px' }} className="steps-content">{steps[this.state.current].content}</div>
          <div className="steps-action">
            {
              this.state.current < steps.length
              &&
              <Button style={{ display: 'inline-block', margin: '0 auto' }} onClick={() => this.prev()}>
                <Icon type="arrow-left" />
              </Button>
            }
            {
              this.state.current < steps.length
              &&
              <Button style={{ display: 'inline-block', margin: '0 auto', marginLeft: '5%'}} type="primary" onClick={() => this.next()}><Icon type="arrow-right" /></Button>
            }
          </div>
      </div>
    );

  }
}

export default Dev;

// <div style={{ display: 'inline-flex', marginTop: '3%', fontSize: '14px' }}>
//   <ul style={{ listStyleType: 'circle', textAlign: 'left', lineHeight: '200%' }}>
//     <li>HTML5, CSS3, Javascript ES6</li>
//     <li>React + Redux and Angular</li>
//     <li>Node.js</li>
//     <li>MongoDB</li>
//   </ul>
//   <ul style={{ listStyleType: 'circle', textAlign: 'left', paddingLeft: '10%', lineHeight: '200%' }}>
//     <li>Stripe.js payment integration</li>
//     <li>Facebook and Google oAuth</li>
//     <li>Google Maps Geocoding</li>
//   </ul>
// </div>
