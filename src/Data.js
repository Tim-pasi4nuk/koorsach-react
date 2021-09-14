// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "YI 4pc Home Camera",
    category: "Відеоспостереження",
    price: 300,
    description:
      "24/7 Full HD Recording - F/2.0 aperture, 112 wide-angle lens, 1080p/15fps to capture moments with clear picture. Features two-way audio to allow you to receive and transmit audio from any location with a WiFi connection. Enhanced Night Vision - 8 individual 940nm infrared LED's, which automatically turns on infrared (IR) in low light conditions, allowing you to see clearly in the dark. (power source required)",
    popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/51PinGfn0rL._AC_SL1000_.jpg"
    ]
  },
  {
    id: 2,
    name: "YI Outdoor Security Camera",
    category: "Відеоспостереження",
    price: 200,
    description:
      "Optional 24/7 Emergency Response Service - YI’s motion alerts and live video feeds are now equipped with the option to instantly involve Noon light's Certified Emergency Dispatchers, who coordinate with police, fire, and EMS agencies on customers’ behalf to ensure the situation is promptly handled.",

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/41GKS3Peq-L._AC_.jpg"
     
    ]
  },
  {
    id: 3,
    name: "YI Indoor/Outdoor Security Camera Bundle Set",
    category: "Відеоспостереження",
    price: 350,

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/51RLkFCJWzL._AC_SL1000_.jpg"
      ]
  },
  {
    id: 4,
    name: "HeimVision HM241 Wireless Security Camera System",
    category: "Системи відеоспостереження",
    price: 400,
    description:
    "【Plug & Play and Easy Setup】The wireless cameras and NVR are auto-paired during the factory setting. Just need to connect the wireless cameras and NVR with Power Supply provided for 24/ 7 surveillance purposes. Please also refer to the manual for further instructions. Perfect for villa, home, office, shop, hotel, warehouse, school, business or elsewhere. (Wireless means wireless Internet connection, but also need to plug in power supply) "+
    "【IP66 Weatherproof Security Camera】 Records in 960P HD to capture sharp and crisp images, provide crystal-clear HD live video, ensures crisp smooth footage day and night with 1. 3 Megapixel bullet cameras. 1080P NVR is an HD video recorder for recording, transmission, and storage, etc. (Hard drive MAX 6TB support. Not included HDD). Up to 15m Night Vision. The IP cameras are rated as dust tight and waterproof and cover with durable housing. Best choice for your outdoor home security."+
    "【Motion Detection and Email Alert】HeimVision wireless surveillance camera system provide to minimize false alarms. Smart notifications with email/ snapshot alerts will be pushed to your smartphone via iPhone/ Android App when motion is detected. Customize your own detection plan and zone for each camera, you will get extra peace of mind by receiving instant alerts and get notified of what's happening."+
    "【Mobile Remote Viewing】 Connect the NVR to the home router via Ethernet cable provided, then download free app ''IP Pro'' into your mobile device. This video recorder system supports video preview, recording, sync-playback, backup, motion detection, and email alarm. You can remote access simultaneously on smart devices(IOS Android) at any time, anywhere with Wi-Fi/ 2G/ 3G/ 4G on smart Phone, Pad, and PC. You’ll never miss out on a moment with remote and local playback, no matter where you are."+
    "【Robust Quality and Service】Security camera system boasts a durable and long lasting design. With well-experienced engineers and dedicated support team, we always standing by our side and ready to help you If you have any questions, please feel free to contact us. The expandable system can support up to 8 cameras. Comes with 1x 8-channel 1080P NVR and 4 x 960P wireless IP66 Weatherproof Cameras. Additional cameras can be purchased on our front store: CA01 Extra camera.",
    popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71HfQ7Hs01L._AC_SL1500_.jpg"
    ]
  },
  

 
  
  {
    id: 9,
    name: "Vive Comb Rechargeable",
    category: "Відеоспостережження",
    price: 500,
    description: "🏠FHD 1080P & Night Vision: High resolution images in 1080p resolution, and combined a 3.6mm wide lens to cover more spaces clearly even in the pitch dark with a night vision distance up to 32ft."+
    "🏠Two-Way Audio: AMICCOM outside wireless cameras security allows you to communicate with welcomed guests, and deterrent alarm can get rid of unwanted guests. Store all of your 24/7 recorded security surveillance footage from our outdoor camera use a Micro SD card (Max 128GB)."+
    "🏠SMART MOTION DETECT & ALERT: AMICCOM outdoor surveillance camera wireless schedulable motion detection, motion recording and real-time motion alert via APP, upload snapshots and videos, motion sensibility adjustment, accurate and smart motion detection less false alarm."+
    "🏠COMPATIABLE WITH WIFI: AMICCOM wireless outdoor security camera works perfectly when connected 2.4GHz WIFI (2.4GHz Wi-Fi network only, not for 5.0GHz)."+
    "🏠IP66 WATERPROOF: AMICCOM IP66 professional home security camera, temperature ranges from -4°F to 122°F (-20°C to 50°C). Which means the motion security camera is strong enough to withstand rough weather and Vandal Resistant, even in the storm and snowy weather.",
    popular: false,
    imageUrls: [
      "data:image/webp;base64,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"
    ]
  }
  
];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "Відеоспостереження",
    icon: "group"
  },
  {
    name: "Системи відеоспостереження",
    icon: "watch"
  },
  {
    name: "Охоронна сигналізація",
    icon: "menu_book"
  }
  
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };
