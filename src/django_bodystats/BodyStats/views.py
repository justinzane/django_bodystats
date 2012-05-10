from django.http import HttpResponse
from django.template import RequestContext, loader
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    tmpl = loader.get_template('index.html')
    cntx = RequestContext(request , {'title': 'test'})
    return HttpResponse(tmpl.render(cntx))
