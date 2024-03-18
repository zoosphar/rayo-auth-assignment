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

const loginFormSchema = z
  .object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters",
      })
      .max(50),
    password: z.string().min(4).max(50),
    confirmPassword: z.string().min(4).max(50),
  })
  .refine(({ password, confirmPassword }) => password !== confirmPassword, {
    message: "Confirm password should match password",
  });

export default function Login() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
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
                className="text-lg"
                tabIndex={1}
                aria-label={
                  "Card Title - Sign up below to create new rayo account"
                }
              >
                Sign Up To Rayo
              </CardTitle>
              <CardDescription
                tabIndex={2}
                aria-label="Card Description - Enter your details below to create your Rayo account"
              >
                Enter your details below to create your Rayo account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl aria-required>
                      <Input
                        tabIndex={3}
                        aria-label="Form Field"
                        placeholder="Enter your first name"
                        aria-errormessage={
                          form.getFieldState("firstName").error?.message
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl aria-required>
                      <Input
                        tabIndex={4}
                        aria-label="Form Field"
                        placeholder="Enter your last name"
                        aria-errormessage={
                          form.getFieldState("lastName").error?.message
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        tabIndex={5}
                        aria-label="Form Field"
                        placeholder="Enter your username"
                        aria-errormessage={
                          form.getFieldState("username").error?.message
                        }
                        autoComplete="off"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        aria-label="Form Field"
                        placeholder="Enter your password"
                        aria-errormessage={
                          form.getFieldState("password").error?.message
                        }
                        tabIndex={6}
                        autoComplete="off"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        aria-label="Form Field"
                        placeholder="Enter your password again to confirm"
                        aria-errormessage={
                          form.getFieldState("confirmPassword").error?.message
                        }
                        {...field}
                        tabIndex={7}
                        autoComplete="off"
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
                tabIndex={8}
                aria-label="Submit Button - Press enter to submit the form"
                className="w-full"
                type="submit"
              >
                Submit
              </Button>
              <h5 className="w-full mt-2">
                Already have an account?
                <a
                  href="/login"
                  tabIndex={9}
                  aria-label="Press enter to open login page"
                  className="underline-offset-1 underline"
                >
                  Login Here
                </a>
              </h5>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
