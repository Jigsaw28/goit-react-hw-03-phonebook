import { Input } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></Input>
    </label>
  );
};
