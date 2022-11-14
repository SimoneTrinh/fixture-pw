import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  use: {
    // All requests we send go to this API endpoint.
   baseURL: 'https://monitor.onshopbase.com/api/catalog/next/product/ombre-jumbo-braids-hair-24inch-100g-synthetic-braiding-hair-crochet-braid-hair-extension-for-women-blond-brown-pink-purple.json',
    // extraHTTPHeaders: {
    //   // We set this header per GitHub guidelines. 
    //   'Accept': 'application/vnd.github.v3+json',
    //   // Add authorization token to all requests.
    //   // Assuming personal access token available in the environment.
    //   'Authorization': `token ${process.env.API_TOKEN}`,
    // },
  }
};
export default config;