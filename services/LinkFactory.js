slackerNews.factory("LinkFactory", function LinkFactory() {
  var factory = {};
  factory.links = [{title: "HI", link: "www.google.com", id: 1,
    upvotes: 0, rankVal: 0}];
  factory.addLink = function() {
    factory.links.push({ title: factory.title,
      link: factory.link,
      id: factory.links.length + 1,
      upvotes: 0,
      rankVal: 0
    });
  };

  factory.upvote = function(link) {
    link.upvotes++;
  };

  factory.rank = function() {
    var totalUpvotes;
    var highId = 0
    factory.links.forEach(link) {
      totalUpvotes += link.upvote;
      if link.id > highId { highId = link.id;}
    }
    var idMultiplier = 100 / highId;
    var upvoteMultiplier = 100 / totalUpvotes;
    factory.links.forEach(link) {
      link.rankVal = link.id * idMultiplier * 60
        + link.upvotes * upvotesMultiplier * 40;
    }
  };

  return factory;
});
