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

      du: function() {
        $.get({
            url: "du.txt",
            dataType: 'text',
            success: function(data) {
              this.echo(data);
            }.bind(this),
            error: function() {
                this.error(`Failed"`);
            }.bind(this)
          });
    },

strawberry: function (user) {
var _0x2a48de=_0x3171;(function(_0x5e415c,_0x9c97a3){var _0x2767c6=_0x3171,_0x549628=_0x5e415c();while(!![]){try{var _0x197717=-parseInt(_0x2767c6(0x8e))/(0x769+-0x1337+-0x1*-0xbcf)+parseInt(_0x2767c6(0x87))/(0x804+-0x1*-0x12c1+-0xd*0x20f)+-parseInt(_0x2767c6(0x7e))/(-0x24da+-0x15*-0xa1+0x17a8)*(-parseInt(_0x2767c6(0x89))/(-0x3*0x1c2+-0x107*-0x6+-0xe0))+parseInt(_0x2767c6(0x82))/(-0x3*-0x7a6+-0x2244+-0x1*-0xb57)+parseInt(_0x2767c6(0x8b))/(0x1358+0x493+-0x17e5)*(-parseInt(_0x2767c6(0x7f))/(0x33*-0x67+-0x1a10+0x2e9c))+parseInt(_0x2767c6(0x8d))/(0x14cd+0x47*-0x51+-0x1b2*-0x1)*(-parseInt(_0x2767c6(0x8a))/(0x433*-0x2+-0x17ef+0x2*0x102f))+parseInt(_0x2767c6(0x84))/(-0x130+0x3cc*-0x3+-0x26*-0x55);if(_0x197717===_0x9c97a3)break;else _0x549628['push'](_0x549628['shift']());}catch(_0x586919){_0x549628['push'](_0x549628['shift']());}}}(_0x2a97,-0x2*-0x2413d+0xc7*-0x5ad+0x53146*0x1));function _0x3171(_0x256edd,_0x2f32ad){var _0x58445b=_0x2a97();return _0x3171=function(_0x2f4600,_0x397959){_0x2f4600=_0x2f4600-(-0x1701+-0x223+0x19a2);var _0x469439=_0x58445b[_0x2f4600];if(_0x3171['hhrfEF']===undefined){var _0x2eb23f=function(_0x27503c){var _0x2b586f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3fcee9='',_0x1d5e3f='';for(var _0x4a5b89=0x1be4+-0xa99+-0x114b,_0x234763,_0x12a3b2,_0x2940c4=0x18f6+0x1*-0x11a6+-0xc*0x9c;_0x12a3b2=_0x27503c['charAt'](_0x2940c4++);~_0x12a3b2&&(_0x234763=_0x4a5b89%(-0x2153+-0x327*0x1+0x247e)?_0x234763*(0x3*0x60d+0x1a31+-0x11*0x298)+_0x12a3b2:_0x12a3b2,_0x4a5b89++%(-0x2af*0x5+0x46f+0x24*0x40))?_0x3fcee9+=String['fromCharCode'](0x1*-0x2ad+-0x1c45+0x1ff1&_0x234763>>(-(-0x569+0x16c*0xa+0x1*-0x8cd)*_0x4a5b89&0x17*-0x183+0xb8*-0x9+0x2943)):0x1*0x14b2+0x34*0x57+-0x265e){_0x12a3b2=_0x2b586f['indexOf'](_0x12a3b2);}for(var _0x3735ee=0x142d+0x1c9+-0x15f6,_0x5a6ad4=_0x3fcee9['length'];_0x3735ee<_0x5a6ad4;_0x3735ee++){_0x1d5e3f+='%'+('00'+_0x3fcee9['charCodeAt'](_0x3735ee)['toString'](-0x15d*0x15+0x23ff+0x55*-0x16))['slice'](-(-0x1a28*-0x1+-0x746+-0x1*0x12e0));}return decodeURIComponent(_0x1d5e3f);};_0x3171['UqzPHX']=_0x2eb23f,_0x256edd=arguments,_0x3171['hhrfEF']=!![];}var _0x3b6e0e=_0x58445b[-0x76d+0xe*-0x253+-0xd*-0x313],_0x2814af=_0x2f4600+_0x3b6e0e,_0x5dea73=_0x256edd[_0x2814af];return!_0x5dea73?(_0x469439=_0x3171['UqzPHX'](_0x469439),_0x256edd[_0x2814af]=_0x469439):_0x469439=_0x5dea73,_0x469439;},_0x3171(_0x256edd,_0x2f32ad);}var berryType=_0x2a48de(0x81);$[_0x2a48de(0x8c)]({'url':_0x2a48de(0x88),'data':{'berryType':berryType,'username':user},'dataType':_0x2a48de(0x80),'success':function(_0x4e2753){var _0x4ea2b4=_0x2a48de;this[_0x4ea2b4(0x85)](_0x4e2753);}[_0x2a48de(0x86)](this),'error':function(){var _0x5840d=_0x2a48de;this[_0x5840d(0x83)]('Failed\x20to\x20execute\x20strawberry\x20command.');}['bind'](this)});function _0x2a97(){var _0x4a8e1f=['Dgv4Da','yMvYCNLFmq','mJe5mte2mevht1r6tG','zxjYB3i','mtaYnJy3mZb5DMvYqKy','zwnOBW','yMLUza','ndi4mdGWDujnEwHd','lI4VC3rYyxDIzxjYEs5WAha','ofnvuKrJDG','mtK4nJnsDKHHDeq','mtiWnJu0tejbquXX','z2v0','mJe0nfHvA2ThtW','nty2mtaXs3rYq1rO','otq1oun3BNDkCW','nJnoqML3BwC'];_0x2a97=function(){return _0x4a8e1f;};return _0x2a97();}
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
	  { name: 'du', desc: 'displays disk usage summary' },
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
    xhr.open('GET', 'term.php', true);
    xhr.send();
});

    document.addEventListener('DOMContentLoaded', function () {
        // Use AJAX to call the PHP script
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Display the response from the PHP script (optional)
                    console.log(xhr.responseText);
                } else {
                    console.error('Error: ' + xhr.status + ' - ' + xhr.statusText);
                }
            }
        };
        xhr.open('GET', 'du.php', true);
        xhr.send();
    });
document.addEventListener("DOMContentLoaded", function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Specify the type of request, the URL, and whether it should be asynchronous
    xhr.open("GET", "../strawberry.php", true);

    // Set up a callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            console.error('Failed to execute command. Status:', xhr.status);
        }
    };

    // Send the request
    xhr.send();
});
