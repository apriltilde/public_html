$(document).ready(function() {
    var path = '~/terminal';
    var editorContent = '';
    var editorOpen = false;
    var term = $('body').terminal({


      echo: function(text) {
        this.echo(text);
      },    

      ls: function() {
        return color('blue', 'text.txt');
      },

      cat: function(file) {
        // Use jQuery to fetch the contents of a text file
        $.get({
          url: file,
          dataType: 'text',
          success: function(data) {
            this.echo(data);
          }.bind(this),
          error: function() {
            this.error(`Failed to open file "${file}"`);
          }.bind(this)
        });
      },

      tree: function() {
        $.get({
            url: "tree.txt",
            dataType: 'text',
            success: function(data) {
              this.echo(data);
            }.bind(this),
            error: function() {
                this.error(`Failed"`);
            }.bind(this)
          });
    },

      help: function() {
        const commands = [
          { name: 'ls', desc: 'displays files in directory' },
          { name: 'cat file', desc: 'reads file' },
          { name: 'cls', desc: 'clears screen' },
          { name: 'tree', desc: 'displays the websites directory tree' },
        ];

        // Format the commands for display
        const formattedCommands = commands.map(command => `${command.name}: ${command.desc}`).join('\n');

        this.echo(formattedCommands);
      },
      cls: function() {
        this.clear();
        return ('Welcome to my terminal. Type "help" to see available commands.');
      },

    }, {
      completion: true,
      greetings: 'Welcome to my terminal. Type "help" to see available commands.',

      prompt() {
        return `(${color('black', 'april@tilde.club')})-[${color('red', path)}]\$ `;
      },
    });

    function color(name, string) {
      var colors = {
        red:   'C7495C',
        green:  '#828D00',
        blue:   '#7f9990',
        red:    '#A00',
        yellow: '#FF5',
        pink: '#E0908D',
        white:  '#fff'
      };
      if (colors[name]) {
        return '[[;' + colors[name] + ';]' + string + ']';
      } else {
        return string;
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Use AJAX to call the PHP script
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Display the response from the PHP script (optional)
            console.log(xhr.responseText);
        }
    };
    xhr.open('GET', 'run_tree.php', true);
    xhr.send();
});
