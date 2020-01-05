var freq = .01;
var phase = 0;
var len = 400;
for (var i = 0; i < len; ++i)
{
  var red = Math.sin(freq*i + phase) * 127 + 128;
  var grn = Math.sin(freq*i + (phase+2)) * 127 + 128;
  var blu = Math.sin(freq*i + (phase+4)) * 127 + 128;
}
