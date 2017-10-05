# Chimera

*CHIMERA IS IN ALPHA*
*Absolutely everything about it is can change, use at your own risk*

An opinionated editor built on atom, emphasizing the following:

- using the keyboard for all interaction
- eventual efficiency over easy of use.

WARNING: Chimera will install packages on your behalf as it needs them. As it's designed to be a highly opinionated text editor, it will override many default keybindings.

## What's Chimera About?

Chimera is a complete text editing solution. It is built on top of the atom editor, and packages in the package repository.

From those pieces, it composes them together, and emphasizes the following philosophies:

### Using the Keyboard for all Interaction

The mouse is a great tool for arbitrary navigation in unfamiliar environments, but if you're involved enough with text that you're looking for an editor, chances are it's an integral part of your day. For a core competency, you can take some overhead to memorize to ensure productivity gains in the future.

## The Functionality

### The Keybinding Layers

There are four layers of keybindings in Chimera:

* vim modal editing: this is vim-plus-mode
* (alt|cmd)-<char>: frequently used commands
* (alt|cmd)-x <char>...: less frequently used commands
* (alt|cmd)-c <char>...: user keybindings

The full keymap can be seen by looking at your keybindings, and searching for Chimera.

### The Packages

The packages installed by Chimera are (with corresponding leader keys)

* (git-plus)[https://atom.io/packages/git-plus] (<leader> g)
* (sync-settings)[https://atom.io/packages/sync-settings] (<leader> b)
* (project-manager)[https://atom.io/packages/project-manager] (<leader> p)
* (multi-cursor)[https://atom.io/packages/multi-cursor] (alt-n to create a cursor and move down)
* (advanced-open-file)[https://atom.io/packages/advanced-open-file] (alt-o to trigger)
* (goto-definition)[https://atom.io/packages/goto-definition] (<leader> i g)

## What Editors Inspired Chimera?

Chimera is inspired by the following text editors:

### Atom

Atom is the core that Chimera is built on. Coming out of the box with a slew of great features, it's a solid base for any editor.

* a strong philosophy of extensibility
* easy sharing of functionality through packages
* easy, built-in system for package development

### Vim

Even vanilla vim stands the test of time for editing text. It brings powerful philosophies for simplifying complex text operations to the table

* modal editing: providing a rich set of keybindings avilable with a single keystroke
* composable keybindings: applying the unix philosophy of small, composable units to text editing commands was a stroke of genius

### Emacs

Emacs was the original extensible editor. Effectively a lisp virtual machine with a text editor built in, it provided an amazing amount of flexibility.

* powerful key chords: enabled multiple keys to be used in sequence to select a command.
* ergonomic: emacs was designed to be interacted with a (lisp keyboard)[https://en.wikipedia.org/wiki/Space-cadet_keyboard], which put control very close to the thumb. Chimera adopts this practice, but modernizes it with the use of the alt or command key instead.

The choice of alt/cmd depend on the operating system. It is designated as whichever one is the key closets to the spacebar (key close to the thumb is more ergonomic that ctrl or other keys that have to be hit with the pinky).
