require 'carrierwave/storage/fog'
CarrierWave.configure do |config|
  if Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  end

  # Use AWS storage if in production
  if Rails.env.production? || Rails.env.development?
    CarrierWave.configure do |config|
      config.storage = :fog
    end
  end
    config.fog_credentials = {
      :provider               => 'AWS',                            # required
      :aws_access_key_id => ENV["AWS_ACCESS_KEY_ID"],
      :aws_secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"]    # required
    }
    config.fog_directory  = ENV['S3_BUCKET']                 # required
end
