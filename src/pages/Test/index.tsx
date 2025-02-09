import { Box, Paper, Stack } from "@mui/material";
import {
  Button,
  CircularProgress,
  LinearProgress,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
  DatePicker,
} from "components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useState } from "react";
import { formatDate, parseDate } from "utils";

const registrationSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  birthDate: z.string().min(1, "Birth date is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  gender: z.string().min(1, "Please select your gender"),
  subscriptionType: z.string().min(1, "Please select a subscription type"),
  receiveUpdates: z.boolean(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to terms and conditions",
  }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

export const Test = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      birthDate: formatDate(dayjs()),
      password: "",
      gender: "",
      subscriptionType: "",
      receiveUpdates: false,
      agreeToTerms: false,
    },
  });

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const subscriptionOptions = [
    { label: "Basic Plan - Free", value: "basic" },
    { label: "Pro Plan - $9.99/month", value: "pro" },
    { label: "Enterprise Plan - $29.99/month", value: "enterprise" },
  ];

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    for (let i = 0; i <= 100; i += 1) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    console.log(data);
    setIsSubmitting(false);
    setProgress(0);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
        <Stack spacing={3}>
          <Typography variant="h4" color="primary" align="center">
            Registration Form
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            {parseDate("2024-02-09T12:34:56.789Z")}
          </Typography>

          {isSubmitting && (
            <LinearProgress variant="determinate" value={progress} />
          )}

          <TextField
            name="fullName"
            control={control}
            label="Full Name"
            disabled={isSubmitting}
          />

          <TextField
            name="email"
            control={control}
            label="Email"
            type="email"
            disabled={isSubmitting}
          />

          <DatePicker
            name="birthDate"
            control={control}
            label="Birth Date"
            disabled={isSubmitting}
          />

          <TextField
            name="password"
            control={control}
            label="Password"
            type="password"
            disabled={isSubmitting}
          />

          <RadioGroup
            name="gender"
            control={control}
            label="Gender"
            options={genderOptions}
            labelProps={{ sx: { fontWeight: "bold" } }}
          />

          <RadioGroup
            name="subscriptionType"
            control={control}
            label="Select Subscription Plan"
            options={subscriptionOptions}
            labelProps={{ sx: { fontWeight: "bold" } }}
          />

          <Switch
            name="receiveUpdates"
            control={control}
            label="Receive email updates"
          />

          <Radio
            name="agreeToTerms"
            control={control}
            label="I agree to terms and conditions"
            radioProps={{ color: "primary" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isValid || isSubmitting}
            startIcon={
              isSubmitting && <CircularProgress size={20} color="inherit" />
            }
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>

          {Object.keys(errors).length > 0 && (
            <Typography color="error" variant="body2">
              Please fix the errors above to continue
            </Typography>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};
