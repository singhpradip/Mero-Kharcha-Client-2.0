import { Box, Paper, Stack } from "@mui/material";
import { Button, DatePicker, Typography, Radio, RadioGroup } from "components";
import { useForm, Controller } from "react-hook-form";
import { LogoPng } from "assets/logos";
import dayjs, { Dayjs } from "dayjs";
import { formatDate } from "utils";

interface FormData {
  date: Dayjs;
  acceptTerms: boolean;
  preferredOption: string;
}

export const Test = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      date: dayjs(),
      acceptTerms: false,
      preferredOption: "option1",
    },
  });
  console.log("errors", errors);
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const onSubmit = (data: FormData) => {
    console.log({
      ...data,
      date: formatDate(data.date),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mt: 3,
          borderRadius: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <img src={LogoPng} alt="logo" width={80} height={80} />
          <Typography variant="h5" color="primary.main">
            Mero Kharcha
          </Typography>
        </Stack>
      </Paper>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Stack spacing={3}>
          <Typography variant="h4" color="primary.main" align="center">
            Sample Form
          </Typography>

          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Select Date"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            name="acceptTerms"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Radio
                label="I accept the terms and conditions"
                value={value}
                onChange={(_, checked) => onChange(checked)}
                radioProps={{ color: "primary" }}
                radioLabelProps={{
                  sx: { fontWeight: "medium" },
                }}
              />
            )}
          />

          <Controller
            name="preferredOption"
            control={control}
            render={({ field: { value, onChange } }) => (
              <RadioGroup
                label="Select your preference"
                options={options}
                value={value}
                onChange={onChange}
                labelProps={{
                  sx: { fontWeight: "bold" },
                }}
                radioProps={{ color: "primary" }}
              />
            )}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Form
          </Button>
        </Stack>
      </Paper>

      {/* Logo Section */}
    </Box>
  );
};
