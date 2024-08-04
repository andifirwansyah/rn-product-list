/* eslint-disable prettier/prettier */
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {OrderItem} from 'types/order';

// Define navigation parameter list
// Add other screens and their params here if you have more screens
// If screen doesn't need any params, use `undefined`
export type AppStackParamList = {
    Order: undefined;
    NewOrder: undefined;
    OrderDetail: {product: OrderItem}
    EditOrder: {orderId: string}
};

export type AppStackNavigationProp = NativeStackNavigationProp<AppStackParamList>;
export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>;
