import React from 'react';
import { FormBuilderInput } from "part:@sanity/form-builder";

export default function CustomArray(props) {
  const { type = {}, value } = props;
  const { inputComponent, ...typeWithoutInputComponent } = type;
  const copyOfArrayValues = [...value];
  const reversedArrayValues = copyOfArrayValues.reverse();

  const updatedProps = {
    ...props,
    value: reversedArrayValues,
    type: typeWithoutInputComponent,
  };

  return <FormBuilderInput {...updatedProps} />;
}

CustomArray.focus = function() {
  this._inputElement.focus();
};
