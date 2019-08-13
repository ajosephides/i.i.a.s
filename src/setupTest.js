import React from "react";
import { shallow, render, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const puppeteer = require('puppeteer');

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = fetch;
global.puppeteer = puppeteer;
