class HomeController < ShopifyApp::AuthenticatedController
  include HTTParty
  def index
    @custom_collections_with_products = []
    @collects = ShopifyAPI::Collect.all
    @custom_collections = ShopifyAPI::CustomCollection.all
    
    @custom_collections.each do |c|
      custom_collection = {
        id: c.id,
        img: c.image.src,
        title: c.title,
        products: c.products
      }
      @custom_collections_with_products << custom_collection
    end

    # call sort_collection_products from REACT to reset position.
    #sort_collection_products(custom_collection_id: 88357404785, product_id: 1819150090353, new_position: 12)
  end

  def sort_collection_products(custom_collection_id:, product_id:, new_position:)
    shop = Shop.find_by(shopify_domain: @shop_session.url)
    collect_id = @collects.where(collection_id: custom_collection_id).where(product_id: product_id)[0].id
    request = {
      "custom_collection": {
        "id": collect_id,
        "collects": [
          {
            "id": collect_id,
            "position": new_position
          }
        ]
      }
    }
    
    response = HTTParty.put("https://#{ @shop_session.url }/admin/custom_collections/#{custom_collection_id}.json",
      headers: { 'Content-Type' => 'application/json', 'X-Shopify-Access-Token' => shop.shopify_token },
      body: request.to_json)
  end
end
