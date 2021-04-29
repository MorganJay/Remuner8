import React, { useState, useRef, useEffect } from 'react';
import {
  Select,
  SpanContainer,
  SpanSingleSelect,
  SpanSelectRendered,
  SpanSelectArrow,
  B,
  DropdownContainer,
  SelectDropdown,
  DropdownSearch,
  SelectResults,
  SelectOptions,
  SelectOption,
  FocusLabel
} from './SelectBox.styles';

const SelectBox = ({
  options,
  label,
  defaultValue,
  ...props
}) => {
  const [dropdownOpen, setDropdown] = useState(false);
  const toggle = () => setDropdown(!dropdownOpen);
  const [state, setState] = useState({
    value: 0,
    innerText: options[0],
    outerText: options[0]
  });

  useEffect(() => {
    setState(state => ({ ...state, outerText: options[0] }));
  }, [dropdownOpen, options]);

  const spanContainer = useRef(null);

  const handleChange = event => {
    const { value, innerText } = event.target;
    setState({ value, innerText });
  };

  const handleHover = event => {
    const { outerText } = event.target;
    setState(state => ({ ...state, outerText }));
  };

  const getWidth = () => {
    return spanContainer.current ? spanContainer.current.clientWidth : null;
  };

  const { value, innerText, outerText } = state;
  return (
    <>
      <Select tabIndex="-1" aria-hidden="true" {...props}>
        {options
          ? options.map((option, index) => (
              <option key={index}>{option}</option>
            ))
          : null}
      </Select>
      <SpanContainer
        dir="ltr"
        onClick={toggle}
        tabIndex={0}
        ref={spanContainer}
        {...props}
      >
        <span className="selection">
          <SpanSingleSelect
            role="combobox"
            aria-controls="select"
            aria-haspopup="true"
            aria-expanded="false"
            tabIndex="0"
            aria-labelledby="select2-kokx-container"
          >
            <SpanSelectRendered
              id="select2-kokx-container"
              role="textbox"
              aria-readonly="true"
              value="ds"
              {...props}
            >
              {defaultValue ? defaultValue : value ? options[value] : label}
            </SpanSelectRendered>
            <SpanSelectArrow role="presentation">
              <B open={dropdownOpen} role="presentation" />
            </SpanSelectArrow>
          </SpanSingleSelect>
        </span>
        <DropdownContainer open={dropdownOpen}>
          <SelectDropdown
            open={dropdownOpen}
            style={{ width: `${getWidth()}px` }}
            tabIndex={dropdownOpen ? 0 : undefined}
          >
            <DropdownSearch />
            <SelectResults>
              <SelectOptions>
                {options
                  ? options.map((option, index) => (
                      <SelectOption
                        key={index}
                        ariaSelected={outerText === option}
                        tabIndex={dropdownOpen ? 0 : undefined}
                        onClick={event => handleChange(event)}
                        value={index}
                        selected={innerText === option}
                        onMouseOver={event => handleHover(event)}
                      >
                        {option}
                      </SelectOption>
                    ))
                  : null}
              </SelectOptions>
            </SelectResults>
          </SelectDropdown>
        </DropdownContainer>
      </SpanContainer>
      <FocusLabel htmlFor="select-box">
        {props.focusLabel}
      </FocusLabel>
    </>
  );
};

export default SelectBox;
