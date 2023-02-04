import { DurableObjectNamespace } from "@cloudflare/workers-types";

interface Env {
  HELLO_DURABLE: DurableObjectNamespace;
}

export const onRequestGet = async (context) => {
  const id = context.env.HELLO_DURABLE.newUniqueId();
  const stub = context.env.HELLO_DURABLE.get(id);

  return stub.fetch(context.request);
};
