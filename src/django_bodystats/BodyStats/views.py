from django.http import HttpResponse
from django.template import RequestContext, loader
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user 
import json

@login_required
def index(request):
    tmpl = loader.get_template('index.html')
    cntx = RequestContext(request , {'title': 'test'})
    return HttpResponse(tmpl.render(cntx))

def current_user(request):
    cu = get_user(request)
    cus = json.dumps({'id': cu.pk,
                      'username': cu.username})
    return(HttpResponse(cus, content_type='application/json'))
