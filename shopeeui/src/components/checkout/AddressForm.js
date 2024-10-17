import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { updatePersonalDetails } from '../../stores/paymentStore'; // Import the action creator

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm(props) {
  // const dispatch = useDispatch();

  // Handle input change and dispatch update to Redux store
  const handleChange = (e) => {
    const { name, value } = e.target;
const {store}=props;
 const currState= store.getState();
  currState.payment[name]=value;
  store.dispatch(updatePersonalDetails(currState.payment))
console.log(store.getState())
  }

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Snow"
          autoComplete="last name"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Address
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="line1" // Nested structure (line1)
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        {/* <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="line2" // Nested structure (line2)
          type="address2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          size="small"
          onChange={handleChange}
        /> */}
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city" // Nested structure (city)
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state" // Nested structure (state)
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zipCode" // Nested structure (zipCode)
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country" // Nested structure (country)
          type="country"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
