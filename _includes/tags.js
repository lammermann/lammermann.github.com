// Only for the tags.html page
$(document).ready(function() {
  var tt = $('#tag_title')
  if (tt.length == 0) return;
  var tag = location.hash.replace("#","");
  $('.tagged_article').filter(function() {
    return $(this).find('.meta .tag:contains('+tag+')').length != 0;
  }).show();
  document.title = "Lammermann - " + tag
  tt.html("Articles tagged with \""+tag+"\"");
  $('#tag_loader').hide();
})

// The tag cloud
$(document).ready(function() {
  // Number of tags to display.
  var num = 30;
  var bins = 5;
  var tc = $('#tag_cloud')
  if (tc.length == 0) return;
  var tags = binnedTags(tc, num, bins);
  var h = ""
  for (var i=0; i < tags.length; i++) {
    var t = tags[i];
    h += "<a class=\"bin-"+t[2]+"\" title=\""+t[0]+" ("+t[1]+")\" href=\"/tags.html#"+t[0]+"\">"+t[0]+"</a> "
  };
  tc.find(".static-body").html(h)
  tc.show();
})

function tagFrequencies(tc) {
  var tags_by_frequency = {}
  tc.find(".tag").each(function() {
    var tn = $(this).text()
    if (tags_by_frequency[tn]) {
      tags_by_frequency[tn] += 1
    }
    else {
      tags_by_frequency[tn] = 1
    }
  })
  return tags_by_frequency;
}

function binnedTags(tc, num, bins) {
  var tags_by_frequency = tagFrequencies(tc);
  var tf = []
  var max = 0;
  for (t in tags_by_frequency) {
    var freq = tags_by_frequency[t];
    tf.push([t, freq]);
    if (freq > max) max = freq;
  }
  var bin_width = max/bins;
  tf.sort(function(x,y) {
    return (x[1] < y[1]) ? 1 : ((x[1] > y[1]) ? -1 : 0);
  })
  tf = tf.splice(0, num);
  tf.sort(function(x,y) {
    return (x[0] < y[0]) ? -1 : ((x[0] > y[0]) ? 1 : 0);
  })
  for (var i=0; i < tf.length; i++) {
    var t = tf[i];
    var bin = 1;
    while (t[1] > bin*bin_width) { bin+= 1; }
    t.push(bin);
  };
  return tf;
}
