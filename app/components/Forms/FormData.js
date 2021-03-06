export const FormData = {
  title: '',
  description: '',
  required: [1, 3],
  properties: [
    {
      id: 1,
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter First Name',
      inputValue: '',
      width: 12,
    },
    {
      id: 2,
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter Last Name',
      inputValue: 'Last Name Check',
      width: 4,
    },
    {
      id: 3,
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
      inputValue: '',
      width: 4,
    },
    {
      id: 4,
      type: 'textarea',
      label: 'Address',
      inputValue: '',
      width: 6,
    },
    {
      id: 5,
      type: 'checkbox',
      label: 'Gender',
      items: ['yes', 'no'],
      inputValue: '',
      width: 6,
    },
    {
      id: 6,
      type: 'dropdown',
      label: 'city',
      items: ['mumbai', 'bangalore'],
      placeholder: 'select city',
      inputValue: 'bangalore',
      width: 4,
    },
  ],
};
