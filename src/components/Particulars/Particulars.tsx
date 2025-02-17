import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";

import {
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
  PARTICULARS_DATA,
} from "@/data/particulars";
import { Typography } from "@mui/material";

type ParticularsProps = { onComplete: () => void };

export const Particulars = ({ onComplete }: ParticularsProps) => {
  const { dispatch } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [requirements, setRequirements] = useState<boolean[]>(
    new Array(PARTICULARS_DATA.length).fill(false)
  );

  const handleChange = (id: number) => {
    setRequirements((prev) => {
      const newArr = [...prev];
      newArr[id] = !prev[id];
      return newArr;
    });
  };

  useEffect(() => {
    const isValid =
      age !== "" &&
      gender !== "" &&
      requirements.every((requirement) => requirement);

    setIsValid(isValid);
  }, [age, gender, requirements]);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_PARTICULARS", gender, age, requirements });
    onComplete();
  };

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />
      <Typography component="h2" variant="h5" color="primary" sx={{ mb: 2 }}>
        Demographics
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <List>
            <ListItem
              sx={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <FormControl
                sx={{
                  width: "350px",
                }}
              >
                <FormControlLabel
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  control={
                    <Select
                      required
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      autoWidth
                      sx={{ width: "200px" }}
                      color="secondary"
                      displayEmpty
                    >
                      <MenuItem value="">Select Gender</MenuItem>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Non-Binary">Non-Binary</MenuItem>
                      <MenuItem value="Prefer not to say">
                        Prefer not to say
                      </MenuItem>
                    </Select>
                  }
                  label="Gender"
                  labelPlacement="start"
                />
              </FormControl>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{
                  width: "350px",
                }}
              >
                <FormControlLabel
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  control={
                    <Select
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      autoWidth
                      sx={{ width: "200px" }}
                      color="secondary"
                      displayEmpty
                    >
                      <MenuItem value="">Select Age</MenuItem>
                      <MenuItem value="18">18</MenuItem>
                      <MenuItem value="19">19</MenuItem>
                      <MenuItem value="20">20</MenuItem>
                      <MenuItem value="21">21</MenuItem>
                      <MenuItem value="22">22</MenuItem>
                      <MenuItem value="23">23</MenuItem>
                      <MenuItem value="24">24</MenuItem>
                      <MenuItem value="25">25</MenuItem>
                    </Select>
                  }
                  label="Age"
                  labelPlacement="start"
                />
              </FormControl>
              <Tooltip title="You must be between 18 and 25 to participat in this study.">
                <InfoIcon />
              </Tooltip>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Typography component="h2" variant="h5" color="primary" sx={{ mb: 2 }}>
        Requirements
      </Typography>

      <Card>
        <CardContent>
          <List>
            {PARTICULARS_DATA.map(({ id, text }, index) => (
              <ListItem key={id}>
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => handleChange(index)}
                        color="secondary"
                      />
                    }
                    label={text}
                    labelPlacement="start"
                  />
                </FormControl>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />
    </>
  );
};
