// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route("index", { path: "/" });
  this.resource("teacherapp", function() {
    this.resource("submissions", function() {                   // API call for all worksheets
      this.resource("worksheet", {path: '/:id'}, function() {   // API call for all responses
        this. resource("response", {path: '/:id'})
      })
    });

    this.resource("worksheets", function(){
      this.resource("worksheet", {path: '/:worksheetId'}, function(){
        this.route("edit")
      }),
      this.route("new")
    });

    this.resource("teacher", {path: "/account"});
  });
  this.resource("studentapp", function() {
    this.resource("todo", function() {
      this.resource("create.response", {path: "/:id"})
    })

    this.resource("completed", function() {
      this.resource("completed.response", {path: "/:id"})
    })
  });
});

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
})
