cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "com.china.food.MyFood",
    "file": "plugins/com.china.food/www/MyFood.js",
    "pluginId": "com.china.food",
    "clobbers": [
      "cordova.plugins.MyFood"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "com.china.food": "1.0.0"
};
// BOTTOM OF METADATA
});