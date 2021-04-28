import styled, { css } from 'styled-components';

const SpanSelectStyles = css`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const labelStyles = css`
  line-height: 50px;
`;

const getSpanSelectStyles = props => (props.open ? SpanSelectStyles : '');

const getLineHeight = props =>
  props.focusLabel
    ? labelStyles
    : css`
        line-height: 33px;
      `;

export const Select = styled.select`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  height: 43px;
  padding: 21px 12px 6px;
  ${getLineHeight}
`;

export const SpanContainer = styled.span`
  width: 100%;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;

  &:focus {
    outline: 1px auto rgba(94, 114, 228, 0.5);
  }
`;

export const SpanSingleSelect = styled.span`
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
  background-color: #fff;
  cursor: pointer;
  display: block;
  user-select: none;
  height: 45px;
  padding: 4px 0 6px;
  ${getSpanSelectStyles}
`;


export const SpanSelectRendered = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  padding-right: 30px;
  padding-left: 15px;
  color: #676767;
  font-size: 15px;
  font-weight: normal;
  user-select: none;
  cursor: pointer;
  ${getLineHeight}
`;

export const SpanSelectArrow = styled.span`
  height: 42px;
  right: 7px;
  position: absolute;
  top: 0;
  width: 20px;
`;

export const B = styled.b`
  border-color: #ccc transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  height: 0;
  left: 50%;
  margin-left: -10px;
  position: absolute;
  top: 50%;
  width: 0;
  ${props =>
    props.open &&
    css`
      border-color: transparent transparent #ccc;
      border-width: 0 6px 6px;
    `}
`;

export const DropdownContainer = styled.span`
  ${props =>
    props.open &&
    css`
      position: absolute;
    `}
`;

export const SelectDropdown = styled.span`
  border-top: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: block;
  position: absolute;
  left: -100000px;
  width: 100%;
  z-index: 1051;
  ${props =>
    props.open &&
    css`
      left: 0;
    `}
`;

export const DropdownSearch = styled.span`
  display: none;
  padding: 4px;
`;

export const SelectResults = styled.span`
  display: block;
  border-top: none;
`;

export const SelectOptions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
`;

const selectedStyles = css`
  background-color: #ddd;
`;

const highlightedStyles = css`
  background-color: #5e72e4;
  color: white;
`;

const getSelectedStyles = props => props.selected && selectedStyles;

export const SelectOption = styled.li`
  user-select: none;
  padding: 6px;
  cursor: pointer;
  background-color: white;
  padding-left: 15px;
  border-radius: 4px;
  transition: all 0.15s ease-in-out;
  ${getSelectedStyles}
  ${props => props.ariaSelected && highlightedStyles}
  &:focus {
    ${highlightedStyles}
  }
`;

export const FocusLabel = styled.label`
  color: #1f1f1f;
  transform: translate3d(0, 22px, 0) scale(1);
  transform-origin: left top;
  transition: 240ms;
  left: 17px;
  pointer-events: none;
  position: absolute;
  font-weight: 300;
  top: -21px;
  font-size: 12px;
  z-index: 1;
`;
