import { Suspense } from "solid-js";
import { Outlet } from "solid-start";

export default function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
