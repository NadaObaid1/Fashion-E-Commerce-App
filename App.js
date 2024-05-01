import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './E-Commerce/Screens/LogsScreens/Splash.js'
import HomeScreen from './E-Commerce/Screens/HomeScreens/HomeScreen.js'
import ProductsScreens from './E-Commerce/Screens/ProductsScreens/ProductsScreens.js'
import LogScreens from './E-Commerce/Screens/LogsScreens/LogScreens.js'
import Login from './E-Commerce/Screens/LogsScreens/Login.js';
import SignUp from './E-Commerce/Screens/LogsScreens/SignUp.js';
import ResetPassword from './E-Commerce/Screens/LogsScreens/ResetPassword.js';
import SendCode from './E-Commerce/Screens/LogsScreens/SendCode.js';
import Massege from './E-Commerce/Screens/MessageScreens/Massege.js'
import Category from './E-Commerce/Screens/HomeScreens/Category.js';
import OrderActive from './E-Commerce/Screens/OrderScreens/OrderActive.js';
import NavBar from './E-Commerce/Common/NavBar.js';
import Cart from './E-Commerce/Screens/CartScreen.js/Cart.js';
import ProductScreen from './E-Commerce/Screens/HomeScreens/HomeScreen.js';
import Search from './E-Commerce/Common/Search.js';
import Background from './E-Commerce/Screens/HomeScreens/Background.js';
import PricingRange from './E-Commerce/Screens/HomeScreens/PricingRange.js';
import ProfileScreen from './E-Commerce/Screens/ProfileScreens/ProfileScreen.js';
import Setting from './E-Commerce/Screens/ProfileScreens/Setting.js';
import PrivacyPolicy from './E-Commerce/Screens/ProfileScreens/PrivacyPolicy.js';
import PasswordManager from './E-Commerce/Screens/ProfileScreens/PasswordManger.js';
import PaymentMethods from './E-Commerce/Screens/ProfileScreens/PaymentMethods.js';
import OrderStatus from './E-Commerce/Screens/OrderScreens/OrderStatus.js';
import Header from './E-Commerce/Common/Header.js';
import LeaveReview from './E-Commerce/Screens/OrderScreens/LeaveReview.js';
import ProductsDetails from './E-Commerce/Screens/ProductsScreens/ProductsDetails.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <HomeStack />
    </NavigationContainer> 
  );
}

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="LogScreens" component={LogScreens} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
    <Stack.Screen name="SendCode" component={SendCode} options={{ headerShown: false }} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="LeaveReview" component={LeaveReview} options={{ headerShown: false }} />
    <Stack.Screen name="OrderActive" component={OrderActive} options={{ headerShown: false }} />
    <Stack.Screen name="OrderStatus" component={OrderStatus} options={{ headerShown: false }} />
    <Stack.Screen name="ProductsScreens" component={ProductsScreens} options={{ headerShown: false }} />
    <Stack.Screen name="ProductsDetails" component={ProductsDetails} options={{ headerShown: false }} />
    <Stack.Screen name="Massege" component={Massege} options={{ headerShown: false }} />
    <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    <Stack.Screen name="Background" component={Background} options={{ headerShown: false }} />
    <Stack.Screen name="PricingRange" component={PricingRange} options={{ headerShown: false }} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
    <Stack.Screen name="PasswordManager" component={PasswordManager} options={{ headerShown: false }} />
    <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }} />
    <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />

  </Stack.Navigator>
);
