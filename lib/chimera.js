'use babel';

import ChimeraView from './chimera-view';
import { CompositeDisposable } from 'atom';


export default {

  chimeraView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.chimeraView = new ChimeraView(state.chimeraViewState);
      this.modalPanel = atom.workspace.addModalPanel({
      item: this.chimeraView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'chimera:toggle': () => this.toggle()
    }));
    console.log("Initializing Chimera...");
    require("atom-package-deps").install("chimera", showPrompt=false);
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.chimeraView.destroy();
  },

  serialize() {
    return {
      chimeraViewState: this.chimeraView.serialize()
    };
  },

  toggle() {
    console.log('Chimera was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
