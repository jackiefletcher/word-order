describe("wordOrder", function() {
  it("will return unique words in order by number of appearances", function() {
    expect(wordOrder("hello world world")).to.eql(["world", "hello"]);
  });

  it("will return unique words in order by number of appearances", function() {
    expect(wordOrder("hello doggy doggy world world world")).to.eql(["world", "doggy", "hello"]);
  });

  it("will return unique words in order by number of appearances", function() {
    expect(wordOrder("world bind world hello world bye")).to.eql(["world", "bind", "hello", "bye"]);
  });

  it("will return unique words in order by number of appearances", function() {
    expect(wordOrder("world dog world dog")).to.eql(["world", "dog"]);
  });

});
