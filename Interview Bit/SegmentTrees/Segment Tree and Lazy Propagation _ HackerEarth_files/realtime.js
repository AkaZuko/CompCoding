function subscribeComment(a){var b=get_pusher_instance();if(b){var c=b.channel(a);if(c)return;c=b.subscribe(a),c.bind("pusher:subscription_succeeded",function(a){$("#comment-realtime-error").html(""),$("#comment-realtime-error").hide()}),c.bind("pusher:subscription_error",function(a){a==403&&!$("#ama-ended").length&&$("#ama-ended").is(":visible")&&($("#comment-realtime-error").html('<a href="#" class="show-modal" target="login-modal">Login/Signup</a> to see live comments without refreshing page.'),$("#comment-realtime-error").show())}),c.bind("comment_edited",function(a){var b=a.comment_id,c=a.username,d=a.html,e=a.ctype_id,f=a.object_pk;$("#comment-container-"+b).replaceWith(d);var g=$("#username").text(),h=$("#is-superuser").length,i=$("#is-event-admin").length;if(c!=g){var j=$("#c"+b+" .edit-link");j.remove()}if(c!=g&&!h&&!i)try{var k=$("#c"+b+" .delete-link");k.remove()}catch(l){console.log(l)}else if(c==g)try{var m=$("#c"+b+" .private-message-link");m.remove()}catch(l){console.log(l)}}),c.bind("comment_added",function(a){var b=a.comment_id,c=a.parent_id,d=a.is_first_child,e=a.username,f=a.html,g=a.ctype_id,h=a.object_pk;addComment(b,c,f,g,h,d);var i=$("#username").text(),j=$("#is-superuser").length,k=$("#is-event-admin").length;if(e!=i){var l=$("#c"+b+" .edit-link");l.remove()}if(e!=i&&!j&&!k)try{var m=$("#c"+b+" .delete-link");m.remove()}catch(n){console.log(n)}else if(e==i)try{var o=$("#c"+b+" .private-message-link");o.remove()}catch(n){console.log(n)}}),c.bind("comment_removed",function(a){var b=a.comment_id,c=a.root_comment_id,d=a.root_child_exists,e=a.ctype_id,f=a.object_pk;removeComment(b,c,d,e,f)})}};