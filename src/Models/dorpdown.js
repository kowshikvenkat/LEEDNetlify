import React from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
  margin: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownListItem = styled.li`
  list-style: none;
  padding: 12px;
  cursor: pointer;
`;

const Dropdown = ({ options, selectedOption, onOptionSelected }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDropdownButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownListItemClick = (option) => {
    setIsOpen(false);
    onOptionSelected(option);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleDropdownButtonClick}>
        {selectedOption}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem key={option} onClick={() => handleDropdownListItemClick(option)}>
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
