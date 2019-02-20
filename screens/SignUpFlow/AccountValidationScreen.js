import React from 'react';

import { SignUpCard, SignUpBody, SignUpHeader, SignUpText} from '../../components/SignUpFlow/'

export default class AccountValidation extends React.Component {
  render() {
    return (
      <SignUpCard
      nextPage="RegistrationSuccess">
        <SignUpText>
          <SignUpHeader>One last step...</SignUpHeader>
          <SignUpBody>You will not be able to work until you have provided us with the neccessary documents and information we need to verify your right to work.</SignUpBody>
        </SignUpText>
        <SignUpText>
          <SignUpHeader>Required Information</SignUpHeader>
          <SignUpBody>Nationality</SignUpBody>
          <SignUpBody>ID Number</SignUpBody>
          <SignUpBody>Work Permit</SignUpBody>
        </SignUpText>
      </SignUpCard>
    );
  }
}
