import { QueryClientProvider as Provider, QueryClient } from "react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function QueryClientProvider({ children }: Props) {
  return <Provider client={queryClient}>{children}</Provider>;
}
