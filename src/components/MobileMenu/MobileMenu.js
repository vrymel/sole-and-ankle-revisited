/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {COLORS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const DialogContentWrapper = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 32px;

  nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    a {
      font-weight: 600;
      color: ${COLORS.gray['900']};
      text-decoration: none;
    }
  }
  
  footer {
    display: flex;
    flex-direction: column;
    gap: 14px;
    
    a {
      color: ${COLORS.gray['700']};
      text-decoration: none;
    }
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: -10px;
`;


const MobileMenu = ({isOpen, onDismiss}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay>
      <DialogContentWrapper aria-label="Menu">
        <CloseButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close"/>
          </UnstyledButton>
        </CloseButtonWrapper>
        <nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </DialogContentWrapper>
    </DialogOverlay>
  );
};

export default MobileMenu;
