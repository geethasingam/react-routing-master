import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
  {

      id: 1,
      name: 'oppo f1 ',
      year: '2015',
      model:'f1',
      make: 'china',
      media: 'http://technology.inquirer.net/files/2016/02/Oppo-F1.jpg',
      price: '22,000',
      colour:'gold',
      expert:'selfie',
      Height: 	'163.63 mm',
      Width :	'80.8 mm',
      Thickness: 	'7.35 mm',
      Weight 	: '185g'



  },
    {
      id: '2',
      name: 'oppo f2 ',
      year: '2017',
      model:'f2',
      make: 'china',
      media: 'http://st1.bgr.in/wp-content/uploads/2016/01/0e0edaee8af3ba9b1a3cfeb2ec7406e1_375x500_1.jpg',
      price: '34,000',
      colour:'silver',
      expert:'selfie',
      Height: 	'164.63 mm',
      Width :	'81.8 mm',
      Thickness: 	'7.35 mm',
      Weight 	: '188g'

    },
    {
      id: '3',
  		name: 'oppo f3 ',
  		year: '2018',
  		model:'f3',
  		make: 'china',
  		media: 'https://ae01.alicdn.com/kf/HTB1oM5JelcHL1JjSZJiq6AKcpXa9/JCDA-Brand-For-OPPO-F3-Mobile-phone-case-Silicone-scrub-cover-High-quality-Silm-Hard-Frosted.jpg_640x640.jpg',
  		price: '54,990',
  		colour:'silver',
      expert:'selfie',
      Height: 	'165.63 mm',
      Width :	'80.8 mm',
      Thickness: 	'7.35 mm',
      Weight 	: '186g'
    },
    {
      id: '4',
  		name: 'oppo f4 ',
  		year: '2017',
  		model:'f4',
  		make: 'china',
  		media: 'https://i.ytimg.com/vi/jQaS4rZkfIA/hqdefault.jpg',
  		price: '68,870',
  		colour:'gold',
      expert:'selfie',
      Height: 	'166.63 mm',
      Width :	'80.8 mm',
      Thickness: 	'7.45 mm',
      Weight 	: '186g'
    },
    {
      id: '5',
  		name: 'oppo f5 ',
  		year: '2017',
  		model:'f5',
  		make: 'china',
  		media: 'https://s.sdgcdn.com/7/2017/09/e104db6a8ee2c2d95e2c32142283f520a9e25a72_F3_FCB_Edition-5-600x600.jpg',
  		price: '83,990',
  		colour:'red',
      expert:'selfie',
      Height: 	'163.63 mm',
      Width :	'80.8 mm',
      Thickness: 	'7.35 mm',
      Weight 	: '185g'







    }
];



render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/phones" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/phones/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
