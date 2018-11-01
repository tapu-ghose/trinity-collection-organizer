import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail, AppProvider} from '@shopify/polaris';
const Hello = props => (
  <AppProvider>
   <Page title="Products">
    {props.products.map((product, index) => (
    <Card key={index}
      title={product.title}
      primaryFooterAction={{
        content: 'View',
        url: 'https://${shop_session.url}/admin/products/${product.id}',
      }}
      sectioned
    >
        <Thumbnail
          source={product.images[0].src}
          alt={product.title}
          size="large"
        />
      
    </Card>   
    ))}
  </Page>
  </AppProvider>
)
// Render component with data
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello-react')
  const data = JSON.parse(node.getAttribute('data'))
ReactDOM.render(<Hello {...data} />, node)
})