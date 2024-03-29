/**
 * Stores all the static content of the application.
 */

export const content: Record<string, Record<string, string>> = {
  errors: {
    spotNotionalRangeErrorForQuantity:
      'Adjust quantity to keep notional price in between min. and max. notional value.',
    spotNotionalRangeErrorForMaxNotionalValue:
      'Adjust value to keep product of quantity and price between min & max. notional values.',
    optionNotionalRangeErrorForMaxNotionalValue:
      'Adjust value to keep product of quantity and strike price below max. notional value.',
    optionNotionalRangeErrorForQuantity:
      'Adjust quantity to keep notional price (strike price X quantity) in between min. and max. notional value.',
    optionNotionalRangeErrorForStrikePrice:
      'Adjust value to keep product of quantity and strike price below max. notional value.',
    callTypeStrikePriceError:
      'Value cannot be less than price for call option.',
    putTypeStrikePriceError: 'Value cannot be more than price for put option.',
    negativeNotAllowedError: 'Number should be positive.',
    greaterThanMinNotionalError: 'Must be greater than Min. Notional',
    typeRequiredError: 'Type is required.',
    priceRequiredError: 'Price value is required.',
    strikePriceRequired: 'Strike Price is required.',
    quantityRequired: 'Quantity is required.',
    tokenNameRequired: 'Token name is required.',
    expirationDateError: 'Expiration date can be till 30 days from now.',
  },
  labels: {
    appLogo: 'OTC Trading',
    intrumentLabel: 'Instrument',
    minNotionalLabel: 'Min. Notional ($)',
    maxNotionalLabel: 'Max. Notional ($)',
    quantityLabel: 'Quantity',
    tokenNameLabel: 'Token Name',
    expirationDateLabel: 'Expiration Date',
    typeLabel: 'Type',
    strikePriceLabel: 'Strike Price ($)',
    priceLabel: 'Price ($)',
    intrumentSpotLabel: 'Spot',
    instrumentOptionsLabel: 'Option',
    submitLabel: 'Submit',
    callOption: 'Call',
    putOption: 'Put',
  },
};
