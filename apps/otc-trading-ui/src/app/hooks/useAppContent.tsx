import { useContext } from 'react';
import { ContentContext } from './ContentContext';
import get from 'lodash/get';

type ObjectType = {
  [key: string]: ObjectType;
};
export interface Content<T = ObjectType> {
  [key: string]: T;
}
/**
 * @description utility to retrieve content on the basis of key from content object.
 * @param key value of the contnet objecy
 * @returns value 
 */
export const useAppContent = <U = ObjectType,>(
  key: string
): Readonly<Content<U>> => {
  return get(useContext(ContentContext), key, {});
};
