import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { 
    updateFirstName, 
    updateLastName, 
    updateLine1, 
    updateCity, 
    updateState, 
    updateZipCode, 
    updateCountry 
} from '../../stores/paymentStore'; // Adjust the import path

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  const dispatch = useDispatch();
  
  // Use useSelector to get values from the Redux store
  const firstName = useSelector((state) =>  state.payment.firstName);
  const lastName = useSelector((state) => state.payment.lastName);
  const line1 = useSelector((state) => state.payment.line1);
  const city = useSelector((state) => state.payment.city);
  const stateValue = useSelector((state) => state.payment.state);
  const zipCode = useSelector((state) => state.payment.zipCode);
  const country = useSelector((state) => state.payment.country);

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target

    switch (name) {
      case 'first-name':
        dispatch(updateFirstName(value));
        break;
      case 'last-name':
        dispatch(updateLastName(value));
        break;
      case 'line1':
        dispatch(updateLine1(value));
        break;
      case 'city':
        dispatch(updateCity(value));
        break;
      case 'state':
        dispatch(updateState(value));
        break;
      case 'zipCode':
        dispatch(updateZipCode(value));
        break;
      case 'country':
        dispatch(updateCountry(value));
        break;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="text"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
          value={firstName}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="text"
          placeholder="Snow"
          autoComplete="last name"
          required
          size="small"
          value={lastName}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Address
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="line1" // Nested structure (line1)
          type="text"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
          value={line1}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city" // Nested structure (city)
          type="text"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
          value={city}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state" // Nested structure (state)
          type="text"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
          value={stateValue} // Using a different variable to avoid naming conflicts
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zipCode" // Nested structure (zipCode)
          type="text"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
          value={zipCode}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country" // Nested structure (country)
          type="text"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
          value={country}
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
