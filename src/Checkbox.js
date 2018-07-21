import React from 'react';
import sys from 'native-system-components'
import Button from './Button'

export const Checkbox = ({
  value=false,
  disabled=false,
  checkmark='✓️',
  onChange
}) => <Button disabled={disabled} onPress={() => onChange(!value)} width={46}>
    {value ? checkmark : ' '}
</Button>
