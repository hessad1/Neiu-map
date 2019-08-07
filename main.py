#main.py
# the import section
import webapp2
import jinja2
import os

the_jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


# the handler section
class MainPage(webapp2.RequestHandler):
    def get(self): #for a get request
        welcome_template = the_jinja_env.get_template('Documents/Map.html')
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(welcome_template.render()) #the response

class AboutUsPage(webapp2.RequestHandler):
    def get(self):
        welcome_template = the_jinja_env.get_template('Documents/About_Us.html')
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(welcome_template.render()) #the response

# the app configuration section
app = webapp2.WSGIApplication([
    ('/',MainPage),
    ('/about',AboutUsPage),
    ], debug=True)