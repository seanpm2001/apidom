import { MemberElement, isStringElement, isObjectElement, Element } from '@swagger-api/apidom-core';
import { startsWith } from 'ramda';

export const isAsyncApi2LikeElement = <T extends Element>(element: T): boolean => {
  return (
    isObjectElement(element) &&
    // @ts-ignore
    element.hasKey('asyncapi') &&
    // @ts-ignore
    element.hasKey('info') &&
    // @ts-ignore
    element.hasKey('channels')
  );
};

export const isParameterLikeElement = <T extends Element>(element: T): boolean => {
  // @ts-ignore
  return isObjectElement(element);
};

export const isReferenceLikeElement = <T extends Element>(element: T): boolean => {
  // @ts-ignore
  return isObjectElement(element) && element.hasKey('$ref');
};

export const isSchemaLikeElement = <T extends Element>(element: T): boolean => {
  // @ts-ignore
  return isObjectElement(element);
};

export const isSecurityRequirementLikeElement = <T extends Element>(element: T): boolean => {
  return isObjectElement(element);
};

export const isServerLikeElement = <T extends Element>(element: T): boolean => {
  // @ts-ignore
  return isObjectElement(element) && element.hasKey('url') && element.hasKey('protocol');
};

export const isAsyncApiExtension = (element: MemberElement): boolean => {
  // @ts-ignore
  return isStringElement(element.key) && startsWith('x-', element.key.toValue());
};