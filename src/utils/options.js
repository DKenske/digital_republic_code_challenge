export const AmbientTypes = [
  { id: 1, label: 'External Ambient' },
  { id: 2, label: 'Internal Ambient' },
  { id: 3, label: 'Both' },
];

export const InkTypes = [
  { id: 1, label: 'Metalness' },
  { id: 2, label: 'Opaque' },
];

export const CalculatorPagesTitles = [
  { id: 1, label: "First, Tell us what type of ambient you'll use this ink!" },
  { id: 2, label: 'Tell us what type of Ink you desire.' },
  { id: 3, label: 'How many walls that ink will be applied?' },
  { id: 4, label: 'And how many coats?' },
  {
    id: 5,
    label:
      'Now, in the form below, type the measures of the walls you selected (in Centimeters).',
  },
  {
    id: 6,
    label: 'Here is the result of your quotation!',
  },
];

export const PageSteps = [
  { page_id: 1, label: 'Ambient Type' },
  { page_id: 2, label: 'Ink Type' },
  { page_id: 3, label: 'Walls Quantity' },
  { page_id: 4, label: 'Coats Quantity' },
  { page_id: 5, label: 'Measures' },
  { page_id: 6, label: 'Result' },
];

export const InkOptions = [
  { label: '0.5L', value: 0.5 },
  { label: '2.5L', value: 2.5 },
  { label: '3.6L', value: 3.6 },
  { label: '18L', value: 18 },
];

export const InkPrices = [
  {
    ink_wheight: 0.5,
    price: {
      1: {
        1: 6.5,
        2: 6.0,
      },
      2: {
        1: 5.5,
        2: 5.0,
      },
    },
  },
  {
    ink_wheight: 2.5,
    price: {
      1: {
        1: 26.5,
        2: 26.0,
      },
      2: {
        1: 25.5,
        2: 25.0,
      },
    },
  },

  {
    ink_wheight: 3.6,
    price: {
      1: {
        1: 37.5,
        2: 37.0,
      },
      2: {
        1: 36.5,
        2: 36.0,
      },
    },
  },
  {
    ink_wheight: 18,
    price: {
      1: {
        1: 181.5,
        2: 181.0,
      },
      2: {
        1: 180.5,
        2: 180.0,
      },
    },
  },
];
