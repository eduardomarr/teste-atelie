import React from 'react';
import {useField} from '@unform/core';

import { Container } from './styles';

function Input({ children, name, ...rest }) {
  const inputRef = React.useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErroed={!!error}
    >
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  );

}

export default Input