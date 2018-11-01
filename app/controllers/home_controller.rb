class HomeController < ShopifyApp::AuthenticatedController
  def index
    @custom_collections_temp = []
    @products = ShopifyAPI::Product.find(:all, params: { limit: 10 })
    @collections = ShopifyAPI::Collect.all
    @custom_collections = ShopifyAPI::CustomCollection.all
    @smart_collections = ShopifyAPI::SmartCollection.all
    @webhooks = ShopifyAPI::Webhook.find(:all)
    
    @collectionlisting = ShopifyAPI::CustomCollection.all
    @collectionlisting.each do |c|
      custom_collection = {
        id: c.id,
        img: c.image.src,
        title: c.title,
        products: c.products
      }
      @custom_collections_temp << custom_collection
    end
  end

  def get_custom_collections
    #GET /admin/custom_collections.json
  end
end
