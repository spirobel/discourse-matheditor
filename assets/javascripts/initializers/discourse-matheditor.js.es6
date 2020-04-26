import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import loadScript from "discourse/lib/load-script";
import { getOwner } from 'discourse-common/lib/get-owner';

function initializeDiscourseMatheditor(api) {
  loadScript("/plugins/DiscourseMatheditor/mathlive/mathlive.js");

 //make sure the keyboard is turned off
 api.onAppEvent('modal:body-dismissed', function(){
       const controller = getOwner(this).lookup('controller:composer');
       controller.toolbarEvent.mathfield.$perform("hideVirtualKeyboard")
      });


  api.modifyClass("controller:composer", {

    actions: {
      showMathEditor() {
        const modalcontroller = showModal("matheditor-modal").set("toolbarEvent", this.toolbarEvent);
            Ember.run.later(this, (function() {
              this.toolbarEvent.mathfield = MathLive.makeMathField('mathfield',{ virtualKeyboardMode: "manual"});
            }), 50);
      }
    }
  });



  api.addToolbarPopupMenuOptionsCallback(() => {
     return {
       action: "showMathEditor",
       icon: "chart-bar",
       label: "discourse_matheditor.openeditor",
     };
   });


}

export default {
  name: "discourse-matheditor",

  initialize() {
    withPluginApi("0.8.31", initializeDiscourseMatheditor);
  }
};
