// Create the dropdown base
$("<select />").appendTo("nav");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("nav select");
});

$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});





//image carousel
 $(function() {
  $('carousel').carouFredSel({
    width: '100%';
    items: {
      visible: 3,
      start: -1
    },
    scroll: {
      items: 1,
      duration: 1000,
      timeoutDuration: 3000
    },
    prev: '#prev',
    next: '#next',
    pagination: {
      container: '#pager',
      deviation: 1
    }
  });
});
