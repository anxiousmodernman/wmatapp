RTM API

To request the rtm.test.echo service, you would invoke the following:

https://api.rememberthemilk.com/services/rest/?method=rtm.test.echo&api_key=123456789&name=value



SUCCESSFUL RESPONSE
```xml
<rsp stat="ok">
  <api_key>9bb013121e8f3650f350b622a1735442</api_key>
  <foo>bar</foo>
  <method>rtm.test.echo</method>
</rsp>
```

FAILURE RESPONSE
```xml
<rsp stat="fail">
  <err code="112" msg="Method "rtm.test.ech" not found"/>
</rsp>
```


All request formats (listed on the API page) take a list of named parameters.


Suresh, Fred,

 As you can read from my main discussion post this week, my final project idea is an improved to-do list view with the Remember the Milk API.

I'm going to concentrate on front-end widgets as opposed to supported every aspect of RTM's data model, because this is a front-end class and JavaScript is where I am weak.

I have read that the new version (v2) of Twitter Bootstrap now plays nicely with jQuery UI, so I am hoping to combine the two unless this proves too complicated upon investigation. 



