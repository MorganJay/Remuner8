import React from 'react';
import styled, { css } from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';

const MenuTab = ({ activeTab, toggle }) => {
  return (
    <NavTabs>
      <NavTabItem>
        <NavTabItemLink
          data-toggle="tab"
          id="tab_additions"
          onClick={() => toggle('1')}
          active={activeTab === '1'}
        >
          Additions
        </NavTabItemLink>
      </NavTabItem>

      <NavTabItem>
        <NavTabItemLink
          data-toggle="tab"
          id="tab_overtime"
          onClick={() => toggle('2')}
          active={activeTab === '2'}
        >
          Overtime
        </NavTabItemLink>
      </NavTabItem>

      <NavTabItem>
        <NavTabItemLink
          data-toggle="tab"
          id="tab_deductions"
          active={activeTab === '3'}
          onClick={() => toggle('3')}
        >
          Deductions
        </NavTabItemLink>
      </NavTabItem>
    </NavTabs>
  );
};

export default MenuTab;

const NavTabs = styled(Nav)`
  border-bottom: 1px solid #dee2e6;
  @media only screen and (max-width: 768px) {
    border-bottom: 0;
    position: relative;
    background-color: #fff;
    padding: 5px 0;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
`;

const NavTabItem = styled(NavItem)`
  margin-bottom: -1px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const activeStyles = css`
  color: #0e1114;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    background-color: #f5f5f5;
    color: #0e1114;
    border-color: transparent transparent transparent #5e72e4;
    border-left-width: 2px;
  }
`;

const NavTabItemLink = styled(NavLink)`
  margin-right: 0;
  margin-bottom: 0;
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-radius: 0;
  font-size: 18px;
  color: white;
  transition: none;

  &:hover {
    color: #0e1114;
  }
  @media only screen and (max-width: 768px) {
    border-width: 2px;
    border-left-color: transparent;
    font-size: 1rem;
    color: grey;
  }
  ${props => props.active && activeStyles}
`;
