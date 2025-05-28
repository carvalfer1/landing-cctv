import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { iniActions } from '../../../store/actions/iniActions';
 
import './index.scss';

interface LayoutProps {
    ini:any,
    load:any
}

class Layout extends React.Component<LayoutProps,{}>
{

    componentDidMount = () => {
        this.props.load();
    }

    render:any = () => {
        debugger;
        console.log("Props.ini -> ", this.props.ini);
        return <div className="layout">
                <Header/>
                    <div className="component-container">
                        {this.props.children}
                    </div>
                <Footer/>
            </div>
    }
}

const mapStateToProps = (state:any) => {
    return {
        ini: state.ini.optionsMapped
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        load: () => dispatch(iniActions())
    }
}
       
export default connect(mapStateToProps,mapDispatchToProps)(Layout);