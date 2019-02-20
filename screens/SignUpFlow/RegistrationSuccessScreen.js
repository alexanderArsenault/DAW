import React from 'react';

import { SignUpCard, SignUpBody, SignUpHeader, SignUpText} from '../../components/SignUpFlow/'

export default class AccountValidation extends React.Component {
  render() {
    return (
      <SignUpCard
      nextPage="Home">
        <SignUpText>
          <SignUpHeader>Welcome to Dial a Waiter!</SignUpHeader>
          <SignUpBody>Please follow the link sent in our email to provide the required information. You can expect a wait of 3-5 business days for account approval. </SignUpBody>
          <SignUpBody>If you have any questions about your account, you can reach us at account@dialawaiter.com</SignUpBody>
        </SignUpText>
      </SignUpCard>
    );
  }
}
