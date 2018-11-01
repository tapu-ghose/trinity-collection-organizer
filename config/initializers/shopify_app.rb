ShopifyApp.configure do |config|
  config.application_name = "My Shopify App"
  config.api_key = "d9a45b8bfd50909c34bfa90021eab6d5"
  config.secret = "29c76ce1efec5609e27da86321903c2a"
  config.scope = "write_products" # Consult this page for more scope options:
                                 # https://help.shopify.com/en/api/getting-started/authentication/oauth/scopes
  config.embedded_app = true
  config.after_authenticate_job = false
  config.session_repository = Shop
end
