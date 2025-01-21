import React from "react";

function Login() {
  return (
    <>
      <html class="bg-zinc-950">
        <head>
          <link
            rel="stylesheet"
            href="https://horizon-ui.com/shadcn-nextjs-boilerplate/_next/static/css/32144b924e2aa5af.css"
          />
        </head>

        <body class="bg-zinc-950">
          <div class="flex flex-col justify-center items-center bg-zinc-950 h-max min-h-[100vh] pb-5">
            <div class="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
              <div class="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                <p class="text-[32px] font-bold text-white">Sign In</p>
                <p class="mb-2.5 mt-2.5 font-normal text-zinc-400">
                  Enter your email and password to sign in!
                </p>
                
                <div class="relative my-4">
                  <div class="relative flex items-center py-1">
                    <div class="grow border-t border-zinc-800"></div>
                    <div class="grow border-t border-zinc-800"></div>
                  </div>
                </div>
                <div>
                  <form novalidate="" class="mb-4">
                    <div class="grid gap-2">
                      <div class="grid gap-1">
                        <label class="text-white" for="email">
                          Email
                        </label>
                        <input
                          class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                          id="email"
                          placeholder="name@example.com"
                          type="email"
                          autocapitalize="none"
                          autocomplete="email"
                          autocorrect="off"
                          name="email"
                        />
                        <label
                          class="text-zinc-950 mt-2 dark:text-white"
                          for="password"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          placeholder="Password"
                          type="password"
                          autocomplete="current-password"
                          class="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                          name="password"
                        />
                      </div>
                      <button
                        class="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <p>
                    <a
                      href="/dashboard/signin/forgot_password"
                      class="font-medium text-white text-sm"
                    >
                      Forgot your password?
                    </a>
                  </p>
                  <p>
                    <a
                      href="/Register"
                      class="font-medium text-white text-sm"
                    >
                      Don't have an account? Register Here
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p class="font-normal text-white mt-20 mx-auto w-max">
             
             
            </p>
          </div>
        </body>
      </html>
    </>
  );
}

export default Login;
