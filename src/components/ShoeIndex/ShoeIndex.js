import React from 'react';
import styled from 'styled-components/macro';

import {BREAKPOINTS, WEIGHTS} from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({sortId, setSortId}) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32}/>
        <ShoeGrid/>
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ShoeSidebarWrapper>
          <Spacer size={42}/>
          <ShoeSidebar/>
        </ShoeSidebarWrapper>
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    flex-direction: column-reverse;
  }
`;

const SelectWrapper = styled.div`
  @media (max-width: ${BREAKPOINTS.phone}px) {
    display: none;
  }
`;

const ShoeSidebarWrapper = styled.div`
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    flex-basis: initial;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
