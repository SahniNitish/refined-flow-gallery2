import { useQuery } from "@tanstack/react-query";
import { fetchDsaProblems, fetchDsaSolution } from "@/lib/dsa";

const STALE_MS = 60_000;

export function useDsaProblems() {
  return useQuery({
    queryKey: ["dsa-problems"],
    queryFn: fetchDsaProblems,
    staleTime: STALE_MS,
    retry: 1,
  });
}

export function useDsaSolution(slug: string | undefined) {
  return useQuery({
    queryKey: ["dsa-solution", slug],
    queryFn: () => fetchDsaSolution(slug!),
    enabled: Boolean(slug),
    staleTime: STALE_MS,
    retry: 1,
  });
}
