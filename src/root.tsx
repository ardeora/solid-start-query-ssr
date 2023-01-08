// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

import { QueryClient, QueryClientProvider } from "@adeora/solid-query";

export default function Root() {
  const queryClient = new QueryClient();

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/posts">Posts</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </QueryClientProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
