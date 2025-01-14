export {
  isRefElement,
  isLinkElement as isLinkPrimitiveElement,
  isMemberElement,
  isObjectElement,
  isArrayElement,
  isBooleanElement,
  isNullElement,
  isElement,
  isNumberElement,
  isStringElement,
} from '@swagger-api/apidom-core';

export { default as mediaTypes, WorkflowsMediaTypes } from './media-types';

// eslint-disable-next-line no-restricted-exports
export { default } from './namespace';

export { default as refractorPluginReplaceEmptyElement } from './refractor/plugins/replace-empty-element';

export { default as refract, createRefractor } from './refractor';
export { default as specificationObj } from './refractor/specification';

export {
  isWorkflowsSpecElement,
  isWorkflowsSpecification1Element,
  isInfoElement,
  isSourceDescriptionElement,
  isSourceDescriptionsElement,
  isWorkflowElement,
  isWorkflowStepsElement,
  isWorkflowOutputsElement,
  isStepElement,
  isStepParametersElement,
  isStepDependsOnElement,
  isStepSuccessCriteriaElement,
  isStepOnSuccessElement,
  isStepOnFailureElement,
  isStepOutputsElement,
  isParameterElement,
  isSuccessActionElement,
  isSuccessActionCriteriaElement,
  isFailureActionElement,
  isFailureActionCriteriaElement,
  isComponentsElement,
  isCriterionElement,
  isReferenceElement,
  isJSONSchemaElement,
} from './predicates';

export { isWorkflowsSpecificationExtension } from './refractor/predicates';

export { default as FixedFieldsVisitor } from './refractor/visitors/generics/FixedFieldsVisitor';
export { default as MapVisitor } from './refractor/visitors/generics/MapVisitor';
export { default as MixedFieldsVisitor } from './refractor/visitors/generics/MixedFieldsVisitor';
export { default as FallbackVisitor } from './refractor/visitors/FallbackVisitor';
export { default as SpecificationVisitor } from './refractor/visitors/SpecificationVisitor';
export { default as Visitor } from './refractor/visitors/Visitor';

export { keyMap, getNodeType } from './traversal/visitor';

// Workflows 1.0.0 elements
export {
  WorkflowsSpecification1Element,
  WorkflowsSpecElement,
  InfoElement,
  SourceDescriptionElement,
  WorkflowElement,
  StepElement,
  ParameterElement,
  SuccessActionElement,
  FailureActionElement,
  ComponentsElement,
  CriterionElement,
  ReferenceElement,
  JSONSchemaElement,
} from './refractor/registration';
// NCE types
export { default as SourceDescriptionsElement } from './elements/nces/SourceDescriptions';
export { default as WorkflowsElement } from './elements/nces/Workflows';
export { default as WorkflowStepsElement } from './elements/nces/WorkflowSteps';
export { default as WorkflowOutputsElement } from './elements/nces/WorkflowOutputs';
export { default as StepParametersElement } from './elements/nces/StepParameters';
export { default as StepDependsOnElement } from './elements/nces/StepDependsOn';
export { default as StepSuccessCriteriaElement } from './elements/nces/StepSuccessCriteria';
export { default as StepOnSuccessElement } from './elements/nces/StepOnSuccess';
export { default as StepOnFailureElement } from './elements/nces/StepOnFailure';
export { default as StepOutputsElement } from './elements/nces/StepOutputs';
export { default as SuccessActionCriteriaElement } from './elements/nces/SuccessActionCriteria';
export { default as FailureActionCriteriaElement } from './elements/nces/FailureActionCriteria';
export { default as ComponentsSchemas } from './elements/nces/ComponentsInputs';
export { default as ComponentsParameters } from './elements/nces/ComponentsParameters';
