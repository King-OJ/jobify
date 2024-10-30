"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomFormInputField, CustomFormSelectField } from "./FormComponents";
import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from "@/utils/types";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Declined,
      mode: JobMode.FullTime,
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormInputField name={"position"} control={form.control} />
          <CustomFormInputField name={"company"} control={form.control} />
          <CustomFormInputField name={"location"} control={form.control} />
          <CustomFormSelectField
            name={"status"}
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          <CustomFormSelectField
            name={"mode"}
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />
          <Button type="submit" className="capitalize self-end">
            create job
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default CreateJobForm;
