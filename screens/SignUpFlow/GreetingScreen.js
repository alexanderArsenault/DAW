import React from 'react';
import { SignUpCard, SignUpHeader, SignUpBody, SignUpText } from '../../components/SignUpFlow'

export default class FormScreen extends React.Component {
  render() {
    return (
        <SignUpCard 
        nextPage='Form'>
            <SignUpText>
                <SignUpHeader>Welcome to Dial a Waiter!</SignUpHeader>
                <SignUpBody>We'll just need a bit of information from you before we can connect you with an employer!</SignUpBody>
            </SignUpText>
        </SignUpCard>
    );
  }
}