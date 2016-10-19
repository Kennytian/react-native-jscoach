import { Dimensions, PixelRatio, Platform } from 'react-native'

global.IS_ANDROID = Platform.OS === 'android';
global.IS_IOS = Platform.OS === 'ios';

global.DEVICE_WIDTH = Dimensions.get('window').width;
global.DEVICE_HEIGHT = Dimensions.get('window').height;

global.PIXEL_RATIO = PixelRatio.get();