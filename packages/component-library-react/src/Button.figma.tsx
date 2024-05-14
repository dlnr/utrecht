import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/vArbpcS6tuJq7uje1gbdBF/NLDS---Code-Connect-Test?node-id=153-1140&m=dev',
  {
    props: {
      label: figma.string('Label'),
      iconendvalue: figma.instance('↳ Icon end value'),
      iconstartvalue: figma.instance('↳ Icon start value'),
      appearance: figma.enum('Appearance', {
        'Primary Action': 'primary-action-button',
        'Secondary Action': 'secondary-action-button',
        Subtle: 'utrecht-button--subtle',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ label, iconendvalue, iconstartvalue, appearance, disabled }) => (
      <Button appearance={appearance} disabled={disabled} iconEnd={iconendvalue} iconStart={iconstartvalue}>
        {label}
      </Button>
    ),
  },
);
