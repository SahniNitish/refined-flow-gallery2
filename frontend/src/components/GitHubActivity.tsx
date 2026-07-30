import { useEffect, useState } from "react";

const GITHUB_USERNAME = "SahniNitish";

interface GitHubStats {
  public_repos: number;
  followers: number;
}

const GitHubActivity = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (!cancelled) setStats({ public_repos: data.public_repos, followers: data.followers });
      })
      .catch(() => {
        // Stats are a nice-to-have — the chart still renders fine without them.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      href={`https://github.com/${GITHUB_USERNAME}`}
      target="_blank"
      rel="noreferrer"
      className="surface surface-hover block p-6 md:p-8"
    >
      <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
        <span className="mono-tag text-xs tracking-wide text-muted-foreground">
          GITHUB ACTIVITY
        </span>
        {stats && (
          <span className="mono-tag text-xs text-muted-foreground">
            {stats.public_repos} repos · {stats.followers} followers
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <img
          src={`https://ghchart.rshah.org/39d353/${GITHUB_USERNAME}`}
          alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
          loading="lazy"
          className="min-w-[640px] w-full h-auto block"
        />
      </div>
    </a>
  );
};

export default GitHubActivity;
