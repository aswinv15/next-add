import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetDistancebydemands = () => {
  const query = useQuery({
    queryKey: ["distancebydemands"],
    queryFn: async () => {
      const response = await client.api.distancebydemands.$get();


      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
