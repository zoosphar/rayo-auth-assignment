"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(50),
  password: z.string().min(4).max(50),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[30rem]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle
                tabIndex={1}
                className="text-lg"
                aria-label="Card Title - Login to your rayo account below"
              >
                Login To Rayo
              </CardTitle>
              <CardDescription
                tabIndex={2}
                aria-label="Card Description - Enter your login details below to get access to your Rayo
                account"
              >
                Enter your login details below to get access to your Rayo
                account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <Input
                        aria-label={"Form Field"}
                        tabIndex={3}
                        id="username"
                        placeholder="Enter your username"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input
                        tabIndex={4}
                        aria-label={"Form Field"}
                        id="password"
                        placeholder="Enter your password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="w-full flex flex-col justify-start">
              <Button
                className="w-full"
                type="submit"
                aria-label="Submit Button - Press Enter to Login"
                tabIndex={5}
              >
                Submit
              </Button>
              <h5 className="w-full mt-2">
                Don&apos;t have an account?
                <a
                  href="/signup"
                  tabIndex={6}
                  className="underline-offset-1 underline"
                  aria-label="Don't have a Rayo Account? Press enter to open Sign up Page"
                >
                  Create New Account
                </a>
              </h5>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
