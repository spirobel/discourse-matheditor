import { acceptance } from "helpers/qunit-helpers";

acceptance("DiscourseMatheditor", { loggedIn: true });

test("DiscourseMatheditor works", async assert => {
  await visit("/admin/plugins/discourse-matheditor");

  assert.ok(false, "it shows the DiscourseMatheditor button");
});
