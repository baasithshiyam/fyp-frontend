import React from 'react';
import AboutView from '../view/AboutView';
import AppBarView from '../view/AppBarView';
import ProductHeroView from '../view/ProductHeroView';
import HowToUse from '../view/HowToUse';
import ContactUs from '../view/ContactUs';
import FooterView from '../view/FooterView';

function home(props) {
    return (
        <div>
             < AppBarView />
                < ProductHeroView />
                < AboutView />
                < HowToUse />
                < ContactUs />
                < FooterView />
        </div>
    );
}

export default home;