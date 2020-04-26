import Controller from "@ember/controller";
import discourseComputed, { observes } from "discourse-common/utils/decorators";
import EmberObject from "@ember/object";

export default Controller.extend({

  actions: {
    insertPoll() {
    console.log(this.toolbarEvent.mathfield.$text())

      this.toolbarEvent.addText('$$\n'+this.toolbarEvent.mathfield.$text()+'\n$$')
      this.send("closeModal");
      //this._setupPoll();
    }
  }
});
