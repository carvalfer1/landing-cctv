import * as React from 'react';
import { Button, Col, Card, Spin, Icon } from 'antd';
import { connect } from 'react-redux';
import './index.scss';
import  { saveVote }  from '../../store/actions/historyActions';
import { incCounter } from '../../store/actions/counterActions';
import { setVote } from  '../../store/actions/iniActions';
import { any } from 'prop-types';

interface HomeProps {
    ctrJest: any,
    ctrRedux: any,
    ctrSass: any,
    incrementVote: any,
    saveVote: any, 
    ini: any,
    setVote:any
}


class Home extends React.Component<HomeProps,{}>
{

    vote = (optionSelected:any) => {
      //  this.props.incrementVote(optionSelected);
      //  this.props.saveVote(optionSelected);
        this.props.setVote(Number(optionSelected.target.value));
    }

    render = () => {
      const output = this.props.ini.length > 0 && this.props.ini.map((i:any) => { 
            return <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Card title={ <div> { i.name } <Button value={i.id} onClick={this.vote} type="primary" shape="circle" icon="like" size={'small'} /> { i.votesCount } </div> } >
                        <span>
                          {i.description}
                        </span>
                      </Card>
                </Col>
      });


      if (output.length > 0){
          return <div className="home">
            <h2>This App Contains: </h2> 
            { output }
          </div>
      }
      else{
        return <div className="spin-container"><Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} size="large"/></div>;
      }
     
        /*return <div className="home">
            <h2>This App Contains: </h2> 
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Redux" >
              <span>
                For consume api rest
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title={ <div> Jest <Button value="jestCounter" onClick={() => this.vote('jestCounter')} type="primary" shape="circle" icon="like" size={'small'} /> {this.props.ctrJest } </div> }>
              <span>
                Using Enzyme for components mount and Enzyme-to-json/serializer to snapshots. 
                And should mocked the backend with jest tools. 
              </span>            
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Sass Css" >
              <span>
                For personalize our app
              </span>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="React Router" >
              <span>
                For one page navigation
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Stubby mocks" >
              <span>
                for run App without back end
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="React Hooks" >
              <span>
                Functionals components with states and life cycle methods
              </span>              
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="React Html Sanitization" >
              <span>
                For prevent XSS Cross-side Scripting
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="React Redux Saga" >
              <span>
                For improve redux performance
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="SSR Next.js" >
              <span>
                Server Side Rendering for render the react components on server side. 
              </span>              
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="React DevTools Extension" >
              <span>
                From zalmoxisus repository
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Redux Thunk" >
              <span>
                For asynchronous actions creators 
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Axios" >
              <span>
                Asynchronous calls, and Axios all. You can decide what to do if calls fails.
              </span>              
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Authentications" >
              <span>
                This project has Authentications methods.
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Parse Server" >
              <span>
                 For develop our selft REST API to test the frontend
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="JavaScript" >
              <span>
                All you need to know about JavaScript.
              </span>              
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="ES Ecma Script" >
              <span>
                ES5, ES6, ES7 applications into this project.
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Waiting" >
              <span>
                 Waiting...
              </span>
            </Card>
          </Col>
          <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="Waiting" >
              <span>
                Waiting...
              </span>              
            </Card>
          </Col>
        </Row>
      </div>;*/
    }
}

const mapStateToProps = (state:any) => {
  return {
    ctrJest: state.counter.jestCounter,
    ctrRedux: state.counter.reduxCounter,
    ctrSass: state.counter.sassCounter,
    ini: state.ini.optionsMapped    
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return{
      incrementVote: (selected:string) => dispatch(incCounter(selected)),
      saveVote: (selected:string) => dispatch(saveVote(selected)),
      setVote: (optionId:number) => dispatch(setVote(optionId))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);