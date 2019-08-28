var url_string = window.location.href;
var url = new URL(url_string);

var subject = url.searchParams.get("text");
var name = url.searchParams.get("name");
var email = url.searchParams.get("email");
var comment = url.searchParams.get("comment");


var template_params = {
   "subject": subject,
   "name": name,
   "email": email,
   "content": comment
}

var service_id = "default_service";
var template_id = "ira";
emailjs.send(service_id, template_id, template_params);
