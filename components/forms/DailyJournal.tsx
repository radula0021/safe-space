"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { dailyJournal } from "@/lib/db/schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

type Props = {
  date: Date;
};

const DailyJournal = ({ date }: Props) => {
  const form = useForm({
    defaultValues: {
      title: "",
      story: "",
      feelings: "",
      dids: "",
      dos: "",
    },
  });
  const onSubmit = () => {};
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {date.toDateString()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Awesome day"
                        {...field}
                        defaultValue={date.toDateString()}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="story"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Happenings and stuff</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Dear diary, ..."
                        type="string"
                        {...field}
                        onChange={(e) => {
                          form.setValue("story", e.target.value);
                        }}
                        min={5}
                        max={1000}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="feelings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Describe some feelings or emotions that followed you
                      through day
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="blue"
                        type="string"
                        {...field}
                        onChange={(e) => {
                          form.setValue("feelings", e.target.value);
                        }}
                        min={5}
                        max={1000}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dids"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What did you do?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="string"
                        {...field}
                        onChange={(e) => {
                          form.setValue("dids", e.target.value);
                        }}
                        min={5}
                        max={1000}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your plans for this day?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="string"
                        {...field}
                        onChange={(e) => {
                          form.setValue("dos", e.target.value);
                        }}
                        min={5}
                        max={1000}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyJournal;
