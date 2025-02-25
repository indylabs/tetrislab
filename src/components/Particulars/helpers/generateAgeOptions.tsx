import { MenuItem } from "@mui/material";

export const generateAgeOptions = () => {
  const ageOptions = [];
  for (let age = 18; age <= 120; age++) {
    ageOptions.push(
      <MenuItem key={age} value={age}>
        {age}
      </MenuItem>
    );
  }
  return ageOptions;
};
