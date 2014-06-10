require 'sinatra/assetpack'
require 'sinatra/base'

class Ahround < Sinatra::Base
  register Sinatra::AssetPack

  assets do
    js(:assets, [ '/js/jquery.js', '/js/underscore.js', '/js/index.js', '/js/backbone.js' ])
  end

  get '/' do
    erb :index
  end
end
