#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb 
import urllib2
import os, sys
import time
import datetime

import simplejson
import twitter


# Create instance of FieldStorage 
form = cgi.FieldStorage() 

#download data 
print "Content-type:text/xml\r\n\r\n"
query = form.getvalue("q")
callback = form.getvalue("callback")
api = twitter.Api(consumer_key='scMsCnNpGCcYrCk13zhxGA',
             consumer_secret='F8xSPMjsYL8wRGBK1CfZvSECiKZLPbVGC5D4WxuwB4',
             access_token_key='8437862-ssS7g0tXQOFcj4T1z9GH6iO2dIrCypIDWC8ZTJsilU',
             access_token_secret='09w1xvOECOdqYUplpkuDCoAWTqIE5WQcjwQi6Wibzs',
             debugHTTP=False)


data = api.GetSearch(term=query)
result = "{\"results\": ["
for item in data:
   result += str(item) + ", "
result += "]}"

print callback + "(" + result+ ")"


