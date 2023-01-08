import {
  batch,
  createComputed,
  createEffect,
  createRenderEffect,
  createResource,
  createSignal,
  For,
  Show,
} from "solid-js";
import { createStore } from "solid-js/store";
import { useRouteData } from "solid-start";
import { createQuery, useQueryClient } from "@adeora/solid-query";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsIndex() {
  const queryClient = useQueryClient();
  const [t, setT] = createSignal(0);

  const query = createQuery(() => ({
    queryKey: ["bloop", t()],
    queryFn: async () => {
      const postID = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postID
      );
      const json = await response.json();
      return [json] as PostData[];
    },
    refetchOnMount: false,
    refetchInterval: 1500,
  }));

  return (
    <div>
      <p>Posts Index</p>
      <div>Bloooop</div>
      <button
        onClick={() => {
          setT((t) => t + 1);
        }}
      >
        Click
      </button>
      <For each={query.data}>
        {(post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </For>
    </div>
  );
}
