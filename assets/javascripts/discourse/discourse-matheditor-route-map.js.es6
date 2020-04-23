export default function() {
  this.route("discourse-matheditor", function() {
    this.route("actions", function() {
      this.route("show", { path: "/:id" });
    });
  });
};
