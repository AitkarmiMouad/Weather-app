
const getImages = (weather_state_abbr) => {

  switch (weather_state_abbr) {
    case 'sn':
      return require('../assets/images/Snow.png')
    case 'sl':
      return require('../assets/images/Sleet.png')
    case 'h':
      return require('../assets/images/Hail.png')
    case 't':
      return require('../assets/images/Thunderstorm.png')
    case 'hr':
      return require('../assets/images/HeavyRain.png')
    case 'lr':
      return require('../assets/images/LightRain.png')
    case 's':
      return require('../assets/images/Shower.png')
    case 'hc':
      return require('../assets/images/HeavyCloud.png')
    case 'lc':
      return require('../assets/images/LightCloud.png')
    case 'c':
      return require('../assets/images/Clear.png')
    default:
      return 'null'
  }

}

export default getImages