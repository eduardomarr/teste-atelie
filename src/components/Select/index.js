import React from 'react';
import {useField} from '@unform/core'

import {Container} from './styles';

function Select({ name, ...rest }) {
  const selectRef = React.useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });

  }, [fieldName, registerField]);

  return (
    <Container>
      <select
        className="select"
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  );
}

export default Select