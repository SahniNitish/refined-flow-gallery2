import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { useState } from "react";

const GitHubContributions = () => {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);
  
  // Generate mock contribution data for the past year
  const generateContributions = () => {
    const contributions: { date: string; count: number; level: number }[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const random = Math.random();
      let count = 0;
      let level = 0;
      
      // More realistic distribution - more days with 0-2 contributions
      if (random < 0.3) {
        count = 0;
        level = 0;
      } else if (random < 0.6) {
        count = Math.floor(Math.random() * 3) + 1;
        level = 1;
      } else if (random < 0.8) {
        count = Math.floor(Math.random() * 5) + 3;
        level = 2;
      } else if (random < 0.95) {
        count = Math.floor(Math.random() * 8) + 6;
        level = 3;
      } else {
        count = Math.floor(Math.random() * 10) + 10;
        level = 4;
      }
      
      contributions.push({
        date: d.toISOString().split('T')[0],
        count,
        level
      });
    }
    
    return contributions;
  };

  const contributions = generateContributions();
  
  // Group contributions by weeks
  const groupByWeeks = () => {
    const weeks: (typeof contributions[0])[][] = [];
    let currentWeek: (typeof contributions[0])[] = [];
    
    contributions.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      if (index === contributions.length - 1) {
        weeks.push([...currentWeek]);
      }
    });
    
    return weeks;
  };

  const weeks = groupByWeeks();
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return "bg-muted/30";
      case 1: return "bg-green-200 dark:bg-green-900";
      case 2: return "bg-green-400 dark:bg-green-700";
      case 3: return "bg-green-600 dark:bg-green-500";
      case 4: return "bg-green-800 dark:bg-green-300";
      default: return "bg-muted/30";
    }
  };

  const monthLabels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="glass-card p-6 animate-fade-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center animate-glow">
          <Github className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">GitHub Activity</h3>
          <p className="text-sm text-muted-foreground">
            {totalContributions} contributions in the last year
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Month labels */}
        <div className="flex justify-between text-xs text-muted-foreground mb-2 ml-8">
          {monthLabels.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-1 text-xs text-muted-foreground pr-2">
            {dayLabels.map((day, index) => (
              <div key={day} className="h-3 flex items-center">
                {index % 2 === 1 && <span>{day}</span>}
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="flex gap-1 overflow-x-auto">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const day = week.find(d => new Date(d.date).getDay() === dayIndex);
                  return (
                    <div
                      key={dayIndex}
                      className={`w-3 h-3 rounded-sm border border-border/50 cursor-pointer transition-all duration-200 hover:scale-110 ${
                        day ? getLevelColor(day.level) : "bg-muted/20"
                      }`}
                      onMouseEnter={() => day && setHoveredDay({ date: day.date, count: day.count })}
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div className="absolute top-0 left-0 bg-popover border border-border rounded-lg p-2 text-sm shadow-lg z-10 pointer-events-none">
            <div className="font-medium">{hoveredDay.count} contributions</div>
            <div className="text-muted-foreground">
              {new Date(hoveredDay.date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm border border-border/50 ${getLevelColor(level)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
          {contributions.filter(d => d.count > 0).length} active days
        </Badge>
        <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
          Longest streak: 12 days
        </Badge>
        <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
          Current streak: 3 days
        </Badge>
      </div>
    </Card>
  );
};

export default GitHubContributions;