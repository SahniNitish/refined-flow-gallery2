import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, ExternalLink, Calendar, Code } from "lucide-react";
import { useState, useEffect } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const GitHubActivity = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "sahniNitish"; // Your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepos(reposData);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-orange-500",
      HTML: "bg-red-500",
      CSS: "bg-purple-500",
      Vue: "bg-emerald-500",
      React: "bg-cyan-500",
      PHP: "bg-indigo-500",
      C: "bg-gray-500",
    };
    return colors[language] || "bg-gray-400";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // GitHub Contribution Graph Component
  const GitHubContributionGraph = () => {
    return (
      <div className="mb-8 p-6 bg-muted/10 rounded-xl border border-border/30">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-foreground">Contribution Activity</h4>
          <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
            Active Developer
          </Badge>
        </div>
        
        {/* Contribution Graph using GitHub's contribution graph */}
        <div className="w-full overflow-hidden rounded-lg">
          <img 
            src={`https://ghchart.rshah.org/39d353/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto rounded-lg bg-muted/20"
            style={{ 
              filter: 'brightness(1.1) contrast(1.1)',
              maxWidth: '100%'
            }}
          />
        </div>
        
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>Contributions in the last year</span>
          <button
            onClick={() => window.open(`https://github.com/${username}`, '_blank')}
            className="text-green-500 hover:text-green-400 transition-colors duration-300"
          >
            View on GitHub →
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <Card className="glass-card p-8 animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center animate-pulse">
            <Github className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">GitHub Activity</h3>
            <p className="text-muted-foreground">Loading real GitHub data...</p>
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted/20 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="glass-card p-8 animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
            <Github className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">GitHub Activity</h3>
            <p className="text-red-400">Failed to load GitHub data</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full border-primary/30 hover:bg-primary/10"
          onClick={() => window.open(`https://github.com/${username}`, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View on GitHub
        </Button>
      </Card>
    );
  }

  return (
    <Card className="glass-card p-8 animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center group-hover:animate-glow shadow-lg">
            <Github className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">GitHub Activity</h3>
            <p className="text-muted-foreground">Real-time repository data</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-green-500/30 hover:bg-green-500/10 rounded-xl"
          onClick={() => window.open(`https://github.com/${username}`, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Profile
        </Button>
      </div>

      {/* GitHub Contribution Graph - At the top */}
      <GitHubContributionGraph />

      {/* GitHub Stats */}
      {user && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-muted/20 rounded-xl">
            <div className="text-2xl font-bold text-green-500">{user.public_repos}</div>
            <div className="text-xs text-muted-foreground">Repositories</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-xl">
            <div className="text-2xl font-bold text-green-500">{user.followers}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-xl">
            <div className="text-2xl font-bold text-green-500">{user.following}</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
        </div>
      )}

      {/* Recent Repositories */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Code className="h-5 w-5 text-green-500" />
          Recent Repositories
        </h4>
        
        {repos.slice(0, 4).map((repo) => (
          <div
            key={repo.id}
            className="p-4 bg-muted/10 rounded-xl border border-border/30 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 cursor-pointer group"
            onClick={() => window.open(repo.html_url, '_blank')}
          >
            <div className="flex items-start justify-between mb-2">
              <h5 className="font-semibold text-foreground group-hover:text-green-500 transition-colors duration-300">
                {repo.name}
              </h5>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {repo.forks_count}
                </div>
              </div>
            </div>
            
            {repo.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {repo.description}
              </p>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {repo.language && (
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                    <span className="text-xs text-muted-foreground">{repo.language}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {formatDate(repo.updated_at)}
              </div>
            </div>
            
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {repo.topics.slice(0, 3).map((topic) => (
                  <Badge
                    key={topic}
                    variant="outline"
                    className="text-xs px-2 py-0 border-green-500/20 text-green-400"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Updated in real-time from GitHub API</span>
          <span>Member since {user && formatDate(user.created_at)}</span>
        </div>
      </div>
    </Card>
  );
};

export default GitHubActivity;