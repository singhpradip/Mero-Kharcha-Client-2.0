import { Box, Paper, Stack, Typography } from "@mui/material";
import { LogoPng } from "assets/logos";

export const Test = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "background.default",
        p: 4,
      }}
    >
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
          <img src={LogoPng} alt="logo" width={120} height={120} />
          <Stack spacing={1}>
            <Typography variant="h3" color="primary.main">
              Mero Kharcha
            </Typography>
            <Typography
              variant="subtitle1"
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
