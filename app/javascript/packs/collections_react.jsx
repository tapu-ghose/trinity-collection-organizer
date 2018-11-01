import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail, AppProvider} from '@shopify/polaris';
import Sections from "../components/Sections";
import "@shopify/polaris/styles.css";
import "./styles.css";


const Root = props => (
  <AppProvider>
    <Sections props={props} />
  </AppProvider>
)

// const Hello = props => (
//   <AppProvider>
//    <Page title="Collections">
//     {props.collections.map((collection, index) => (
//     <Card key={index}
//       title={collection.title}
//       primaryFooterAction={{
//         content: 'View',
//         url: 'https://${shop_session.url}/admin/collections/${collection.id}',
//       }}
//       sectioned
//     >
//         <Thumbnail
//           source="{collection.image.src}"
//           alt={collection.title}
//           size="large"
//         />
      
//     </Card>   
//     ))}
//   </Page>
//   </AppProvider>
// )
// Render component with data
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('collections-react')
  const data = JSON.parse(node.getAttribute('data'))
ReactDOM.render(<Root {...data} />, node)
})