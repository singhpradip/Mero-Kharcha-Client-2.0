import { useState, FormEvent } from "react";
import { Box, Paper, Stack } from "@mui/material";
import {
  Button,
  CircularProgress,
  DatePicker,
  Typography,
  Radio,
  RadioGroup,
} from "components";
import { LogoPng } from "assets/logos";
import SearchIcon from "@mui/icons-material/Search";

export const Test = () => {
  const [formData, setFormData] = useState({
    singleRadio: true,
    radioGroup: "option1",
  });

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{
        height: "100vh",
        bgcolor: "background.default",
        p: 4,
      }}
    >
      <DatePicker sx={{ mr: 2 }} />
      <Button
        variant="contained"
        startIcon={<CircularProgress size={20} color="warning" />}
      >
        Hello World
      </Button>
      <Button variant="text" color="success">
        Hello World
      </Button>
      <Button variant="outlined" color="secondary" startIcon={<SearchIcon />}>
        Hello World
      </Button>
      <Radio
        label="Hello Radio"
        value={formData.singleRadio}
        onChange={(_, checked) =>
          setFormData((prev) => ({
            ...prev,
            singleRadio: checked ? true : false,
          }))
        }
        radioProps={{ color: "warning" }}
        radioLabelProps={{
          sx: {
            fontWeight: "bold",
          },
        }}
      />
      <RadioGroup
        label="Hello Radio Group"
        labelProps={{
          sx: {
            fontSize: "2rem",
            fontWeight: "bold",
          },
        }}
        radioLabelProps={{
          sx: {
            fontWeight: "bold",
          },
        }}
        radioProps={{ color: "warning" }}
        options={options}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, radioGroup: value }))
        }
        value={formData.radioGroup}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Form
      </Button>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <img src={LogoPng} alt="logo" width={100} height={100} />
          <Stack spacing={1}>
            <Typography variant="h3" color="primary.main">
              Mero Kharcha
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              maxWidth={800}
            >
              Mero Kharcha is an expense management system designed for students
              living in shared accommodations. It tracks both personal and
              shared expenses with one-click entry, offering a mobile app and
              browser version for convenience.
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
