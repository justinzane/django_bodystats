from django.conf.urls import patterns, include, url
from django.contrib import admin
from tastypie.api import Api
from BodyStats.api import *
from BodyStats.views import index, current_user, login_user, logout_user
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
admin.autodiscover()

#Tastypie
v1_api = Api(api_name="v1")
v1_api.register(UserResource())
v1_api.register(UserProfileResource())
v1_api.register(WeightResource())
v1_api.register(BloodPressureResource())

urlpatterns = patterns('',
    # Tastypie
    url(r'^api/', include(v1_api.urls)),
    # Admin
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    # Allauth
    # (r'^accounts/', include('allauth.urls')),
    # Main App Page
    (r'^index[html.].*$', 'BodyStats.views.index'),
    (r'^current_user\.json$', 'BodyStats.views.current_user'),
    (r'^login.*$', 'BodyStats.views.login_user'),
    (r'^logout.*$', 'BodyStats.views.logout_user'),
)
urlpatterns += staticfiles_urlpatterns()
