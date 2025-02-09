import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<T>;
  control: Control<T>;
}

export const TextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: InputFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTextField
          {...field}
          {...rest}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
