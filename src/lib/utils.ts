// Utility functions for formatting data from Sanity

export const formatBreakingNews = (news: any[]) => {
  if (!news || news.length === 0) {
    // Fallback breaking news if Sanity is empty
    return [
      {
        title: "Gaza: Communication blackout reported in multiple areas.",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "West Bank: Night raids intensify, arrests continue.",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Urgent: Crossing closures worsen humanitarian crisis.",
        publishedAt: new Date().toISOString(),
      },
    ];
  }

  return news.map(item => ({
    title: item.title,
    location: item.location,
    publishedAt: item.publishedAt,
    tickerText: item.location ? `${item.location}: ${item.title}` : item.title
  }));
};

export const formatSearchResults = (results: any[]) => {
  return results.map(result => ({
    ...result,
    formattedDate: new Date(result.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    postTypeColor: getPostTypeColor(result.postType),
    excerptPreview: result.excerpt ? 
      (result.excerpt.length > 150 ? result.excerpt.substring(0, 150) + "..." : result.excerpt) :
      "No preview available"
  }));
};

export const getPostTypeColor = (type: string) => {
  switch (type) {
    case "breaking":
      return "bg-red-600";
    case "news":
      return "bg-blue-600";
    case "story":
      return "bg-green-600";
    case "testimony":
      return "bg-purple-600";
    case "analysis":
      return "bg-yellow-600";
    case "opinion":
      return "bg-orange-600";
    case "memorial":
      return "bg-gray-600";
    default:
      return "bg-zinc-600";
  }
};

export const getPostTypeIcon = (type: string) => {
  switch (type) {
    case "breaking":
      return "🚨";
    case "news":
      return "📰";
    case "story":
      return "📖";
    case "testimony":
      return "🗣️";
    case "analysis":
      return "📊";
    case "opinion":
      return "💭";
    case "memorial":
      return "🕯️";
    default:
      return "📄";
  }
};
