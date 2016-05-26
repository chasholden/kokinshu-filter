//---------------------filter selections--------------------

$(document).ready(function() {
  $("select").on("change", runFilters)

  function runFilters() {
    var filterVal = $("select#filter1").val();
    var filterVal2 = $("select#filter2").val();
    var filterVal3 = $("select#filter3").val();
    var filterVal4 = $("select#filter4").val();
    var filterSelector = "";
    var filter2Selector = "";
    var filter3Selector = "";
    var filter4Selector = "";

    if (filterVal == "all" && filterVal2 == "all" && filterVal3 === null && filterVal4 == "all") {
      //show all items 
      $("li").fadeIn("fast");
    } else {
      if (filterVal != "all") {
        filterSelector = "." + filterVal;
      }

      if (filterVal2 != "all") {
        filter2Selector = "." + filterVal2;
      }

      if (filterVal3 != null) {
        filter3Selector = "." + filterVal3;
      }

      if (filterVal4 != "all") {
        filter4Selector = "." + filterVal4;
      }

      $("li").hide();
      $(filterSelector + filter2Selector + filter3Selector + filter4Selector).fadeIn("fast");
    }
  }

//-------------------search functions------------------------
  
  
  $("#main-search").keyup(function() {
    $("#expanded-search").val('');
    $("li").show();
    
    var searchInput = $(this).val(),
      count = 0;
    
    $("#poem-list li div .main-content p").each(function() {

      if ($(this).text().search(new RegExp(searchInput, "i")) < 0) {
        $(this).closest("li").fadeOut();
      } else {
        $(this).closest("li").fadeIn();
        count++;
      }
    });

    var numberItems = count;
    $("#search-count").text("Number of poems = " + count);
  });

  $("#main-search").keyup(function() {
    var searchInput = $("#main-search").val();
    if (searchInput == "" || searchInput == undefined || searchInput == null) {
      $("#search-count").hide();
    } else {
      $("#search-count").show();
    }
  });

  
  
  //------------------click events-------------------------------------
  $("#slide-toggle").click(function() {
    $("#slide-toggle").toggleClass("open");
    $("#poem-list").toggleClass("controls-open");
    $("#controls").slideToggle(50);
  });

  $("#search-toggle").click(function() {
    $("select option:selected").removeAttr("selected");
    $('input').val('');
    $("#search-group").slideToggle();
    $("#filter-group").slideToggle();
    runFilters();
  });

  $("#filter-toggle").click(function() {
    $("select option:selected").removeAttr("selected");
    $('input').val('');
    $("#search-group").slideToggle();
    $("#filter-group").slideToggle();
    $("#search-count").hide();
    runFilters();
  });
 

  $(".expand").click(function() {
    $expand = $(this);
    $content = $expand.prev();
    
    $content.slideToggle(500, function() {
      $expand.text(function() {
        return $content.is(":visible") ? "Less" : "More";
      });
    });

  });

});