console.log('main.js loaded!');
$(document).ready(function() {
<<<<<<< HEAD
=======

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  var headerName   = _.template($('#headerName-template').html()),
      circlePrompt   = _.template($('#circlePrompt-template').html()),
      circle   = _.template($('#circle-template').html()),
      $headerDestination  = $('#welcome'),
      $promptDestination  = $('#circlePrompt'),
<<<<<<< HEAD
      $circleDestination  = $('#circleList'),
=======
      $circleDestination  = $('#circlesList'),
>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
      friendsToAdd = [],
      filteredUsers = [],
      searchName    = '',
      userId,
      friendId;
  // =============Templating=============
  // ====================================
<<<<<<< HEAD
=======

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  $headerDestination.append(headerName);
  $promptDestination.append(circlePrompt);
  $circleDestination.append(circle);
  function circleView(){
  }
  // ================Main================
  // ====================================
  function buildUri(nameInput) {
      var baseUri = 'https://api.spotify.com/v1/users/';
      var searchParam = nameInput
                        .split(",")
                        .map(function(str){
                          return encodeURIComponent(str.trim());
                        });
      return baseUri + searchParam
    }
  function doSearch(currentSearch){
    $.ajax({
      type: 'GET',
      url: buildUri(currentSearch),
      error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.status);
      console.log(textStatus);
      console.log(errorThrown);
      $('#friend').empty();
      $('#friend').append('<p>No users match that ID</p>');
    },
      success: function(data){
        console.log(data);
        foundUser = data;
        if (foundUser.images.length > 0) {
          profileImage = foundUser.images[0].url;
        } else {
          profileImage = null;
        }
        if (profileImage) {
          $('#friend').append('<div id="proImg">');
          $('#proImg').css('background-image', 'url(' + profileImage + ')');
        } else {
          $('#friend').append('<div id="proImg">');
          $('#proImg').css('background-image', 'url(https://i.imgur.com/NRhYDQD.png)');
        }
        if(foundUser.display_name) {
          $('#friend').append('<div id="friendName">'+foundUser.display_name+'</div>');
        } else {
          $('#friend').append(foundUser.id);
        }
        // $('#friend').append('<input type="submit" id="addToCircle" value="Add Friend">');
      }
    });
  }
<<<<<<< HEAD
=======

  $('#addFriend').on('click', function(){
    console.log('click');
    // var friend = $('#friend div').html();
    $('#friendsToAdd').append('<div class="addedFriend" id="'+foundUser.id+'">'+foundUser.display_name+'</div>');
    $('#friend').empty();
  });

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  $('#search').on('keyup blur', function(evt) {
    var currentSearch = $('#search').val();
      $('#friend').empty();
      doSearch(currentSearch);
  });
  $('#createCircle').on('click', function(){
    var title = $('#titleField').val();
    $.each($('.addedFriend'), function(i, friend){
      friendId = $(friend).attr('id');
      friendsToAdd.push(friendId);
    });
    $.ajax({
      url: '/circles',
      type: 'POST',
      data: {
        users: JSON.stringify(friendsToAdd),
        title: title,
      },
      success: function(data){
        // new CircleView(data);
        console.log(data);
        // $('titleField').val().empty();
        // $('#search').val().empty();
        // $('#friend').empty();
        // $('#friendsToAdd').empty();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  });
  $('#circlesList').delegate('.stationLink', 'click', function(evt){
    evt.preventDefault();
    console.log('click');
    var id = $(this).attr('data-indexNumber');
    console.log(id);
    $.ajax({
      type: 'GET',
      url: '/testLib',
      data: {
        disId: id
      },
      success: function(data) {
        console.log(data);
<<<<<<< HEAD
        $('main').append('<iframe src="https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:' + data + '" frameborder="0" allowtransparency="true"></iframe>');
=======
        // $('main').append('<iframe src="https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:' + data + '"height="80" frameborder="0" allowtransparency="true"></iframe>');
          $("iframe").remove()

          $('main').append('<iframe src="https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:' + data + '"height="80" frameborder="0" allowtransparency="true"></iframe>');
          // $spotifyPlayer.append($("main"));
          function respondify() {
          $('iframe[src*="embed.spotify.com"]').each( function() {
            $(this).css('width',$(this).parent(3).css('width'));
            $(this).attr('src',$(this).attr('src'));
          });

          respondify();
        }
>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
      },
      error: function() {
        console.log('herb')
      }
    });
  });
  $('#circlesList').delegate('.deleteCircle', 'click', function(evt){
<<<<<<< HEAD
    var id = $(this).attr('id');
=======
    var id = $(this).attr('data-indexNumber');
>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
    $('#' + id).remove();
    $.ajax({
      method: 'DELETE',
      url: '/circles/' + id
    }).done(function(data) {
      console.log(data);
    });
  });
<<<<<<< HEAD
=======

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  $('#circlesList').delegate('.editCircle', 'click', function(evt){
    evt.preventDefault();
    var id = $(this).attr('data-indexNumber');
    $.ajax({
      method: 'GET',
      url: '/updateCircle',
      dataType: 'json',
      data: {
        _id: id
      },
      success: function(data) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  });
<<<<<<< HEAD
=======

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  $("#logo").on("click", function(e) {
    e.preventDefault();
    $("#aboutPiRS").slideToggle();
  })
<<<<<<< HEAD
=======

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  $("#createCircleLink").on("click", function(e) {
    e.preventDefault();
    $("#createCircleArea").slideToggle();
  });
<<<<<<< HEAD
=======

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
  $(".circleHeader").on('click', function() {
    var parent = $(this).parent();
    var circleMembers = $(parent).children(".circleMembers");
    if (parent.children(".playButton").css("display") === "none"){
      $(this).children(".playButton").css("display", "inline")
      $(parent).css({"flex-direction": "column", "height": "100%"});
      circleMembers.css({"flex-direction": "column"});
      circleMembers.children(".circleMember").css({"width": "100%", "border": "1px solid black"})
<<<<<<< HEAD
      circleMembers.children(".currentUser").css({"display": "block"});
      circleMembers.children(".circleMember").children(".circleMemberName").css({"display": "inline"});
=======
      circleMembers.children(".currentUser").css({"display": "flex"});
      circleMembers.children(".circleMember").children(".circleMemberName").css({"display": "inline"});
      circleMembers.children(".circleMember").children(".circleMemberDelete").css("visibility", "visible");
      $(parent).children('.deleteCircle').css("display", "inline-block");
>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
      $(parent).children().css("display", "inline-block");
      circleMembers.hide();
      circleMembers.slideToggle(300);
    } else {
      circleMembers.slideToggle(300, function() {
        circleMembers.children(".circleMember").children(".circleMemberName").css({"display": "none"});
        circleMembers.children(".currentUser").css({"display": ""});
        circleMembers.children(".circleMember").css({"width": "", "border": ""});
        circleMembers.css({"flex-direction": ""});
        $(parent).css({"flex-direction": "", "height": ""})
        $(this).children(".playButton").css("display", "none");
<<<<<<< HEAD
=======
        $(parent).children('.deleteCircle').css("display", "none");
>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
        $(parent).children(".playButton").css("display", "none");
        circleMembers.css("display", "flex")
        circleMembers.show();
      });
    }
  });
<<<<<<< HEAD
=======

  // $(".playButton").on('click', function() {
  //   // console.log($("main"))

  //   $("iframe").remove()

  //   $('main').append('<iframe src="https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:' + data + '"height="80" frameborder="0" allowtransparency="true"></iframe>');
  //   // $spotifyPlayer.append($("main"));
  //   function respondify() {
  //   $('iframe[src*="embed.spotify.com"]').each( function() {
  //     $(this).css('width',$(this).parent(3).css('width'));
  //     $(this).attr('src',$(this).attr('src'));
  //   });

  //   respondify();
  // }
  // })

>>>>>>> a4ff6166590c929249b5a8d0e69e98ff0429533c
});
