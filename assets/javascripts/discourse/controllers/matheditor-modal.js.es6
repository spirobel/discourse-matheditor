import Controller from "@ember/controller";
import discourseComputed, { observes } from "discourse-common/utils/decorators";
import EmberObject from "@ember/object";

export default Controller.extend({

  actions: {
    insertEq() {

      this.toolbarEvent.addText('$$\n'+this.toolbarEvent.mathfield.$text("latex-expanded")+'\n$$')
      this.send("closeModal");
    }
  }
});
