class HomeController < ShopifyApp::AuthenticatedController
  def index
    @products = ShopifyAPI::Product.find(:all, params: { limit: 10 })
    @collections = ShopifyAPI::Collect.all
    @custom_collections = ShopifyAPI::CustomCollection.all
    @smart_collections = ShopifyAPI::SmartCollection.all
    @webhooks = ShopifyAPI::Webhook.find(:all)
  end
end
