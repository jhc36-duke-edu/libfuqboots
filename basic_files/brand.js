
(function() {
var f = document.getElementById('cse-search-box');
if (!f) {
f = document.getElementById('searchbox_demo');
}
if (f && f['q']) {
var q = f['q'];
var n = navigator;
var l = location;
var du = function(n, v) {
var u = document.createElement('input');
u.name = n;
u.value = v;
u.type = 'hidden';
f.appendChild(u);
return u;
};
var su = function (n, t, v, l) {
if (!encodeURIComponent || !decodeURIComponent) {
return;
}
var regexp = new RegExp('(?:[?&]' + n + '=)([^&#]*)');
var existing = regexp.exec(t);
if (existing) {
v = decodeURIComponent(existing[1]);
}
var delimIndex = v.indexOf('://');
if (delimIndex >= 0) {
v = v.substring(delimIndex + '://'.length, v.length);
}
var v_sub = v.substring(0, l);
while (encodeURIComponent(v_sub).length > l) {
v_sub = v_sub.substring(0, v_sub.length - 1);
}
du(n, v_sub);
};
var pl = function(he) {
var ti = 0, tsi = 0, tk = 0, pt;
return function() {
var ct = (new Date).getTime();
if (pt) {
var i = ct - pt;
ti += i;
tsi += i*i;
}
tk++;
pt = ct;
he.value = [ti, tsi, tk].join('j');
};
};
var append = false;
if (n.appName == 'Microsoft Internet Explorer') {
var s = f.parentNode.childNodes;
for (var i = 0; i < s.length; i++) {
        if (s[i].nodeName == 'SCRIPT' &&
            s[i].attributes['src'] &&
            s[i].attributes['src'].nodeValue == unescape('\x2F\x2Fcse.google.com\x2Fcse\x2Fbrand?form=cse-search-box\x26lang=en')) {
          append = true;
          break;
        }
      }
    } else {
      append = true;
    }
    if (append) {
      
      var loc = document.location.toString(); var ref = document.referrer;
      su('siteurl', loc, loc, 250);
      su('ref', loc, ref, 750);

      
      
      if (q.addEventListener) {
        q.addEventListener('keyup', pl(du('ss', '')), false);
      } else if (q.attachEvent) {
        q.attachEvent('onkeyup', pl(du('ss', '')));
      }
    }

    
    if (n.platform == 'Win32') {
      q.style.cssText = 'border: 1px solid #7e9db9; padding: 2px;';
    }

    
    if (window.history.navigationMode) {
      window.history.navigationMode = 'compatible';
    }

    var b = function() {
      if (q.value == '') {
        q.style.background = '#FFFFFF url(https:\x2F\x2Fwww.google.com\x2Fcse\x2Fstatic\x2Fimages\x2F1x\x2Fgooglelogo_lightgrey_46x16dp.png) left no-repeat';
        q.style.textIndent = '48px';
        q.placeholder = 'Custom Search';
      }
    };

    var f = function() {
      q.style.background = '#ffffff';
      q.style.textIndent = '0';
      q.placeholder = '';
    };

    q.onfocus = f;
    q.onblur = b;

    
    if (!/[&?]q=[^&]/.test(l.search)) {
      b();
    }
  }
})();
