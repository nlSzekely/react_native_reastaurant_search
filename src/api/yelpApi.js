import axios from "axios";
// Client ID
// CdWUQH88yz7NeAM6ngK-7Q

// API Key
// AtnxDw1ohXLU_iAU5B3RFYA5FhAXGUgY5Kf9YqHSJGeJrWkeZKM-LRKX-3vHhHSuc4Ww13EuhOtqQSmmhCnP6grnviCx4c7s04qiB35EVW94XxgI9ghhjMaVly2HX3Yx

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer AtnxDw1ohXLU_iAU5B3RFYA5FhAXGUgY5Kf9YqHSJGeJrWkeZKM-LRKX-3vHhHSuc4Ww13EuhOtqQSmmhCnP6grnviCx4c7s04qiB35EVW94XxgI9ghhjMaVly2HX3Yx"
    }
})


// import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://api.yelp.com/v3/businesses',
//   headers: {
//     Authorization:
//       'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
//   }
// });