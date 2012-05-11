from django.http import HttpResponse
from django.template import RequestContext, loader
from django.contrib.auth import get_user, authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    tmpl = loader.get_template('index.html')
    cntx = RequestContext(request , {'title': 'test'})
    return HttpResponse(tmpl.render(cntx))

def current_user(request):
    cu = get_user(request)
    cus = json.dumps({'id': cu.pk,
                      'username': cu.username})
    return(HttpResponse(cus, content_type='application/json'))

def logout_user(request):
    logout(request)
    return(HttpResponse('', content_type='application/json'))

@csrf_exempt
def login_user(request):
    req_user = request.POST['username']
    req_pass = request.POST['password']
    user = authenticate(username=req_user, password=req_pass)
    if user is not None:
        if user.is_active:
            login(request, user)
            return(HttpResponse('', content_type='application/json'))
        else:
            return(HttpResponse('Inactive User', status=400, content_type='application/json'))
    else:
        return(HttpResponse('Invalid username or password.', status=400, content_type='application/json'))

def register_user(request):
    pass
