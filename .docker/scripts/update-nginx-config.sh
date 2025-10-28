#!/bin/sh

# Exit on any error
set -e

NGINX_CONF="/etc/nginx/conf.d/default.conf"
BACKUP_CONF="${NGINX_CONF}.backup"

# Ensure script is run as root
if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root" >&2
    exit 1
fi

# Backup current config
cp "$NGINX_CONF" "$BACKUP_CONF"

# Update the configuration file
sed -i.tmp \
    -e 's|root .*|root /usr/share/nginx/html/personal-site_v2/browser;|' \
    -e 's|server_name .*|server_name tamasstephen.com;|' \
    "$NGINX_CONF"

# Test the new configuration
echo "Testing Nginx configuration..."
if ! nginx -t; then
    echo "Nginx configuration test failed. Rolling back..." >&2
    mv "$BACKUP_CONF" "$NGINX_CONF"
    exit 1
fi

# Reload Nginx
echo "Reloading Nginx..."
nginx -s reload

echo "Nginx configuration updated and reloaded successfully"

# Clean up backup if everything succeeded
rm -f "$BACKUP_CONF" "$NGINX_CONF.tmp"
