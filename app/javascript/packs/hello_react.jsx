import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail, AppProvider, PageActions} from '@shopify/polaris';

import Sections from "../components/Sections";
import "@shopify/polaris/styles.css";

import "./styles.css";

const Root = props => (
  <AppProvider>
    <Sections props={props} />
  </AppProvider>
)
// Render component with data
// document.addEventListener('DOMContentLoaded', () => {
//   const node = document.getElementById('hello-react')
//   const data = JSON.parse(node.getAttribute('data'))
// ReactDOM.render(<Root {...data} />, node)
// })