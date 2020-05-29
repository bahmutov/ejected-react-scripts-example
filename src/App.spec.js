/// <reference types="cypress" />
import React from 'react';
import {mount} from 'cypress-react-unit-test'
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.contains(/learn react/i)
});
