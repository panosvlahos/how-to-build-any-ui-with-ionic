$env:NODE_OPTIONS="--openssl-legacy-provider"
ionic serve





ionic build
ionic cap sync android
ionic cap open android