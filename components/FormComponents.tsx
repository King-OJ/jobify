import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { JobMode, JobStatus } from "@/utils/types";

type CustomFormInputFieldProps = {
  name: string;
  control: Control<
    any,
    {
      mode: JobMode;
      position: string;
      company: string;
      location: string;
      status: JobStatus;
    }
  >;
};

export function CustomFormInputField({
  name,
  control,
}: CustomFormInputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormSelectFieldProps = {
  name: string;
  control: Control<any>;
  items: string[];
  labelText?: string;
};

export function CustomFormSelectField({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectFieldProps) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => {
                return (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
