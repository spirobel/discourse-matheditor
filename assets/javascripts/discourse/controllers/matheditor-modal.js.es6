import Controller from "@ember/controller";
import discourseComputed, { observes } from "discourse-common/utils/decorators";
import EmberObject from "@ember/object";


export default Controller.extend({

  init() {
    this._super(...arguments);





    //loadScript("/plugins/discourse-matheditor/mathlive/mathlive.js");

  },



  actions: {
    insertPoll() {
      const mathfield = MathLive.makeMathField(
      document.getElementById('mathfield')
  );
      //this.toolbarEvent.addText(this.pollOutput);
      //this.send("closeModal");
      //this._setupPoll();
    }
  }
});
