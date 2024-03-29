import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TradeForm from './TradeForm';
import { INSTRUMENT } from '../../types';
import { content } from '../../utils/content';
import { ContentProvider } from '../ContentProvider';

describe('TradingForm', () => {
  test('TradeForm displays the correct fields based on the selected instrument', () => {
    const { getByText, getByLabelText } = render(
      <ContentProvider>
        <TradeForm />
      </ContentProvider>
    );

    // Check that the OTCFormFields are displayed by default
    expect(getByText(content.labels.intrumentLabel)).toBeInTheDocument();
    expect(getByText(content.labels.minNotionalLabel)).toBeInTheDocument();
    expect(getByText(content.labels.tokenNameLabel)).toBeInTheDocument();
    expect(getByText(content.labels.quantityLabel)).toBeInTheDocument();

    // Check that the SpotFormFields are displayed by default
    expect(getByText(content.labels.priceLabel)).toBeInTheDocument();

    // Change the selected instrument to OPTION
    fireEvent.change(getByLabelText(content.labels.intrumentLabel), {
      target: { value: INSTRUMENT.OPTION },
    });

    // Check that the OptionsFormFields are now displayed
    expect(getByText(content.labels.expirationDateLabel)).toBeInTheDocument();
    expect(getByText(content.labels.typeLabel)).toBeInTheDocument();
    expect(getByText(content.labels.strikePriceLabel)).toBeInTheDocument();
    expect(getByText(content.labels.priceLabel)).toBeInTheDocument();
  });
});
