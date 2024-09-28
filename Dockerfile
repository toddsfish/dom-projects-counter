FROM nginx:latest
## Copy html
COPY src /usr/share/nginx/html/
## Copy lib containing compiled JS
COPY lib /usr/share/nginx/html/lib