### Overview

We created a backend for two main reasons:

1. The images from dummyjson.com had the cache header max-age=0, which meant they had to be fetched on every load. This caused a poor user experience.
2. We needed to communicate with the Stripe API to create a checkout session.


#### Run the application locally

To clone and run the frontend:

```bash
git clone https://github.com/Elie-Soued/flexyshopBE.git
cd flexyshopBE
ng serve

```

Open your browser at http://localhost:4242/ to see the app.  


#### Topics covered in this project and main highlights


##### Serving pictures 

We wrote a script to download all the images locally and uploaded them to the remote server using `scp`.
The backend was then configured to serve these images with the correct cache headers: `max-age=2592000` (30 days), improving load performance.

##### Stripe

We implemented Stripe checkout sessions and configured both the success and cancel URLs to correctly redirect back to the frontend application.











