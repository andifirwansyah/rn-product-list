import {httpClient, RestConstant, StatusCode} from '@constants';
import {ApiResponse} from 'types/api';
import {
  OrderListResponse,
  OrderDetailResponse,
  ProductListResponse,
  CreateOrderPayload,
  CreateOrderResponse,
} from 'types/order';
import {AxiosResponse} from 'axios';

const initialState: ApiResponse<OrderListResponse> = {
  data: undefined,
  error: undefined,
};

export const orderList = async (
  page: number,
  limit: number,
): Promise<ApiResponse<OrderListResponse>> => {
  const newState = {...initialState};
  try {
    const response: AxiosResponse<OrderListResponse> = await httpClient.get(
      RestConstant.orders,
      {
        params: {page, limit},
      },
    );
    if (response.status !== StatusCode.OK) {
      newState.error = response.data;
      return newState;
    }
    newState.data = response.data;
    return newState;
  } catch (error) {
    console.log('error fetching order list => ', error);
    newState.error = error;
    return newState;
  }
};

export const getDetailOrder = async (
  orderId: string,
): Promise<{data?: OrderDetailResponse; error?: any}> => {
  try {
    const response: AxiosResponse<OrderDetailResponse> = await httpClient.get(
      `${RestConstant.order}/${orderId}`,
    );
    return {data: response.data};
  } catch (error) {
    return {error};
  }
};

export const deleteOrder = async (
  orderId: string,
): Promise<{data?: OrderDetailResponse; error?: any}> => {
  try {
    const response: AxiosResponse<OrderDetailResponse> = await httpClient.del(
      `${RestConstant.order}/${orderId}`,
    );
    return {data: response.data};
  } catch (error) {
    return {error};
  }
};

export const getProducts = async (): Promise<{
  data?: ProductListResponse;
  error?: any;
}> => {
  try {
    const response: AxiosResponse<ProductListResponse> = await httpClient.get(
      RestConstant.products,
    );
    return {data: response.data};
  } catch (error) {
    return {error};
  }
};

export const createOrder = async (
  payload: CreateOrderPayload,
): Promise<ApiResponse<CreateOrderResponse>> => {
  const newState: ApiResponse<CreateOrderResponse> = {
    data: undefined,
    error: undefined,
  };
  try {
    const formData = new FormData();
    formData.append('customer_name', payload.customer_name);
    payload.products.forEach((product, index) => {
      formData.append(
        `products[${index}][product_id]`,
        product.product_id.toString(),
      );
      formData.append(
        `products[${index}][quantity]`,
        product.quantity.toString(),
      );
    });

    const response: AxiosResponse<CreateOrderResponse> = await httpClient.post(
      RestConstant.order,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.status !== StatusCode.OK) {
      newState.error = response.data;
      return newState;
    }
    newState.data = response.data;
    return newState;
  } catch (error) {
    console.log('error creating order => ', error);
    newState.error = error;
    return newState;
  }
};

export const updateOrder = async (
  orderId: string,
  payload: CreateOrderPayload,
): Promise<ApiResponse<CreateOrderResponse>> => {
  const newState: ApiResponse<CreateOrderResponse> = {
    data: undefined,
    error: undefined,
  };
  try {
    const formData = new FormData();
    formData.append('customer_name', payload.customer_name);
    payload.products.forEach((product, index) => {
      formData.append(
        `products[${index}][product_id]`,
        product.product_id.toString(),
      );
      formData.append(
        `products[${index}][quantity]`,
        product.quantity.toString(),
      );
    });

    const response: AxiosResponse<CreateOrderResponse> = await httpClient.put(
      `${RestConstant.order}/${orderId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.status !== StatusCode.OK) {
      newState.error = response.data;
      return newState;
    }
    newState.data = response.data;
    return newState;
  } catch (error) {
    console.log('error creating order => ', error);
    newState.error = error;
    return newState;
  }
};
