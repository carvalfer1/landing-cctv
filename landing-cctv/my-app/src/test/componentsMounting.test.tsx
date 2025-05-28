import * as React from 'react';
import {doTestMount} from './ini';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

doTestMount('Header Comp', <Header/>);
doTestMount('Footer Comp', <Footer/>);
