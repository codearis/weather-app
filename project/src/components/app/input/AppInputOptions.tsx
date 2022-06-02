import styled from "styled-components";
import { useAppTheme } from "../../../context/context";
import { AppTypes } from "../../../types/AppTypes";
import { CityListTypes } from "../../../types/CityTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppInputOptions = ({
  children,
  list,
  showOptions,
  onClick,
  ...otherProps
}: AppTypes) => {
  const { colors } = useAppTheme();

  return (
    <InputOptions {...otherProps}>
      {list
        ? list.map((option: CityListTypes, index: number) => (
            <Option
              key={index}
              onClick={() => onClick(index)}
              hoverColor={`${colors.secondary}11`}
            >
              {option.name}, {option.state}, {option.country}
            </Option>
          ))
        : null}
    </InputOptions>
  );
};

const InputOptions = styled.div<StyledTypes>`
  display: flex;
  width: 100%;
  flex: 1 1;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid gray;
  border-radius: 6px;
`;

const Option = styled.p<StyledTypes>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  font-size: 12px;
  margin: 0;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 6px;

  :hover {
    background: ${(props) => props.hoverColor};
  }
`;
